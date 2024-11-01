$(function() {

    console.log('test');
    
    $(window).on('scroll', function() {

        $('.osechi_slideOut').each(function() {
            let targetOffset = $(this).offset().top;
            let scrollPos = $(window).scrollTop() + $(window).height();
            let offset = 200;

            if (scrollPos > targetOffset + offset) {
                $(this).removeClass('osechi_slideOut').addClass('osechi_slideIn');
            }
        });

        $('.osechi_fadeOut').each(function() {
            let targetOffset = $(this).offset().top;
            let scrollPos = $(window).scrollTop() + $(window).height();
            let offset = 200;

            if (scrollPos > targetOffset + offset) {
                $(this).removeClass('osechi_fadeOut').addClass('osechi_fadeIn');
            }
        });
    });   
});
