$(document).ready(function () {
    let menuToggled = false;
    let faded = false;
    let footOpend = false;
    let menuText = $('#menu-content .toggle-content-text');
    let menuLinks = $('#menu-content .links-content');
    let footer = $('.hidden-footer');

    $('.hamburger-logo').animate({
        maxWidth: '50%'
    });

    $('#toggle-icon').on({
        click: function () {
            $(this).toggleClass('rotate', '');
            menuToggled = !menuToggled;
            if (!faded) {
                menuText.fadeOut(0);
                menuLinks.fadeIn(0);
                faded = !faded;
            } else {
                menuText.fadeIn(0);
                menuLinks.fadeOut(0);
                faded = !faded;
            }
            if ($(window).scrollTop() > 2) {
                $('.menu-animation').toggleClass('restore');
                menuText.fadeOut(0);
                menuLinks.fadeIn(0);
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
            setTimeout(() => {
                let footerTop = $('.side-bar-header').prop('scrollHeight');//menu-title
                footer.css({top: footerTop});
            }, 35)

        }
    });
    $('#menu-content .toggle-content a').on({
        click: function () {
            menuText.fadeIn(0);
            menuLinks.fadeOut(0);
            faded = !faded;


            $('#toggle-icon').toggleClass('rotate', '');

            $(window).scrollTop(0);
            faded = false;
        }
    });
    $('.menu-title').on({
        click: function () {
            menuText.fadeIn(0);
            menuLinks.fadeOut(0);

            faded = !faded;

            if (menuToggled) {
                $('#toggle-icon').toggleClass('rotate', '');
                menuToggled = !menuToggled;
            }

            $(window).scrollTop(0);
            faded = false;
        }
    });

    $(function () {

        $(window).scroll(function (e) {
            if ($(window).width() > 768) {
                let footerTop = $('.side-bar-header').prop('scrollHeight');
                // console.log($(window).scrollTop());
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

                    menuText.fadeIn(0);
                    menuLinks.fadeOut(0);
                    // faded = faded;
                }


                if (($('html').prop('scrollHeight')) - $(window).height() - 20 < $(window).scrollTop()) {

                    footer.fadeIn(500);
                    footer.css({top: footerTop});
                    footOpend = true;
                } else {
                    footer.fadeOut(500);
                    footOpend = false;
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

    $('#mobile-toggle-icon').on({
        click: function () {
            $(this).toggleClass('rotate', '');
            $('.hidden-menu').fadeToggle(200);
        }
    });
    $('.hidden-menu-items').on({
        click: function () {
            $('#mobile-toggle-icon').removeClass('rotate');
            $('.hidden-menu').fadeOut(200);
        }
    });
    $('.mobile-menu-title').on({
        click: function () {
            $('#mobile-toggle-icon').removeClass('rotate');
            $('.hidden-menu').fadeOut(200);
        }
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
        $('.bhbh',this).removeClass('dRotate');
        setTimeout(() => {
            $('.rotate-header', this).css({display: 'none'});
            $('.img', this).css({display: 'block'});
            $('.bhbh', this).removeClass('bgBlack')
        }, 250);
    })


    $(document).on('mouseenter', '.animation-hover', function () {
        $('.opacity', this).addClass('show-opacity');
        // $('.bhbh', this).removeClass('hide-Rotate');
    });
    $(document).on('mouseleave', '.animation-hover', function () {
        $('.opacity', this).removeClass('show-opacity');
        // $('.bhbh',this).removeClass('dRotate');
    })

});

