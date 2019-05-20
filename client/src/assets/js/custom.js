$(document).ready(function () {
    $('.EmbeddedTweet ').css({maxWidth: 'unset'});
    let menuToggled = false;
    let faded = false;

    $('.hamburger-logo').animate({
        maxWidth: '50%'
    });

    $(document).on('click', '#toggle-icon', function () {
        $(this).toggleClass('rotate', '');
        menuToggled = !menuToggled;
        if (!faded) {
            $('.toggle-content-text').fadeOut(10);
            $('.links-content').fadeIn(10);
            faded = !faded;
        } else {
            $('.toggle-content-text').fadeIn(10);
            $('.links-content').fadeOut(10);
            faded = !faded;
        }
        if ($(window).scrollTop() > 2) {
            $('.menu-animation').toggleClass('restore');
            $('.toggle-content-text').fadeOut(10);
            $('.links-content').fadeIn(10);
            $('.bottom-part').fadeToggle(20);

            if (menuToggled) {
                $('.side-bar-header').css({
                    background: '#F7F7F7'
                });
            } else {
                $('.side-bar-header').css({
                    background: 'unset'
                });
            }

            faded = !faded;
        } else if (faded) {
            // faded = false;
        }

    });
    $(document).on('click', '#menu-content .toggle-content a', function () {
        $('.toggle-content-text').fadeIn(10);
        $('.links-content').fadeOut(10);
        faded = !faded;
        $('#toggle-icon').toggleClass('rotate', '');
        $(window).scrollTop(0);
        faded = false;
    });
    $(document).on('click', '.menu-title', function () {
        $('.toggle-content-text').fadeIn(10);
        $('.links-content').fadeOut(10);
        faded = !faded;
        if (menuToggled) {
            $('#toggle-icon').toggleClass('rotate', '');
            menuToggled = !menuToggled;
        }
        $(window).scrollTop(0);
        faded = false;
    });

    $(function () {

        $(window).scroll(function (e) {
            if ($(window).width() > 768) {
                if ($(window).scrollTop() > 52) {
                    $('.menu-animation').removeClass('restore');
                    // $('.side-bar-logo').fadeOut(0);
                    $('.bottom-part').fadeOut(20);
                    $('.side-bar-header').addClass('menu-animation');

                    $('#toggle-icon').removeClass('rotate');
                    menuToggled = false;


                } else {

                    $('.side-bar-logo').fadeIn();
                    $('.bottom-part').fadeIn();
                    $('.side-bar-header').removeClass('menu-animation');

                    $('.toggle-content-text').fadeIn(10);
                    $('.links-content').fadeOut(10);
                    // faded = faded;
                }




                if ($(window).scrollTop() > $(window).height()) {

                    $('.menu-title').fadeOut(0);


                    $('.hamburger-logo').css({
                        maxWidth: '15%'
                    });

                    $('.side-bar-header').css({
                        background: 'unset'
                    })


                } else {
                    $('.menu-title').fadeIn(0);

                    $('.hamburger-logo').animate({
                        maxWidth: '50%'
                    }, 0);
                    $('.side-bar-header').css({
                        background: '#F7F7F7'
                    })
                }

            }
        });

    });

    $(document).on('click', '#mobile-toggle-icon', function () {
        $(this).toggleClass('rotate', '');
        $('.hidden-menu').fadeToggle(200);
    });
    $(document).on('click', '.hidden-menu-items', function () {
        $('#mobile-toggle-icon').removeClass('rotate');
        $('.hidden-menu').fadeOut(200);
    });
    $(document).on('click', '.mobile-menu-title', function () {
        $('#mobile-toggle-icon').removeClass('rotate');
        $('.hidden-menu').fadeOut(200);
    });

//    ======================== image blocks animations ==========================

    $(document).on('mouseenter', '.animation-rotate-content', function () {
        $('.rotate-block', this).addClass('show-rotate');
        setTimeout(() => {
            $('.rotate-header', this).css({display: 'block'});
            $('.img', this).css({display: 'none'});
        }, 250);
    });
    $(document).on('mouseleave', '.animation-rotate-content', function () {
        $('.rotate-block', this).removeClass('show-rotate');
        setTimeout(() => {
            $('.rotate-header', this).css({display: 'none'});
            $('.img', this).css({display: 'block'});
        }, 250);
    });


    $(document).on('mouseenter', '.animation-rotate-bg', function () {
        $('.bhbh', this).addClass('dRotate');
        $('.bhbh', this).removeClass('hide-Rotate');
        setTimeout(() => {
            $('.rotate-header', this).css({display: 'block'});
            $('.img', this).css({display: 'none'});
            $('.bhbh', this).addClass('bgBlack')
        }, 250);
    });
    $(document).on('mouseleave', '.animation-rotate-bg', function () {
        $('.bhbh', this).addClass('hide-Rotate');
        $('.bhbh', this).removeClass('dRotate');
        setTimeout(() => {
            $('.rotate-header', this).css({display: 'none'});
            $('.img', this).css({display: 'block'});
            $('.bhbh', this).removeClass('bgBlack')
        }, 250);
    });


    $(document).on('mouseenter', '.animation-hover', function () {
        $('.opacity', this).addClass('show-opacity');
        // $('.bhbh', this).removeClass('hide-Rotate');
    });
    $(document).on('mouseleave', '.animation-hover', function () {
        $('.opacity', this).removeClass('show-opacity');
        // $('.bhbh',this).removeClass('dRotate');
    })

});

