$('.mobile-btn').on('click',function (){
    $('.mobile-btn').toggleClass('show-mobile-btn');
    $('.navigation').toggleClass('show-menu')
});

$('.navigation li').on('click',function (){
    $('.mobile-btn').removeClass('show-mobile-btn');
    $('.navigation').removeClass('show-menu')
});