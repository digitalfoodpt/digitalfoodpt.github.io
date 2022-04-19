
const $header = $('header');

onscroll = function(){

    $('header').toggleClass('shadow', scrollY > 0);

}
onscroll();

$('a[href^="#"]').click(function(e){

    e.preventDefault();

    if(this.hash == '') var scrollTop = 0;
    else var scrollTop = $(this.hash).offset().top - $('header').height() - 50;

    $('html,body').animate({scrollTop},500);

});

$('nav.mobile').click(()=>$('.mobile-menu').removeClass('off'));
$('.mobile-menu *').click(()=>$('.mobile-menu').addClass('off'));