$(document).ready(function () {
    let menuToggled = false;
    let faded = false;
    let footOpend = false;


    $('#toggle-icon').on({
        click: function () {
            $(this).toggleClass('rotate', '');
            menuToggled = !menuToggled;
            // if (footOpend) {
            //     let footerTop = $('.side-bar-header').prop('scrollHeight') + 50;
            //     $('.hidden-footer').css({top: footerTop});
            // }
            if (!faded) {
                $('#menu-content .toggle-content-text').fadeOut(0);
                $('#menu-content .links-content').fadeIn(0);
                faded = !faded;
            } else {
                $('#menu-content .toggle-content-text').fadeIn(0);
                $('#menu-content .links-content').fadeOut(0);
                faded = !faded;
            }
            if ($(window).scrollTop() > 2) {
                $('.menu-animation').toggleClass('restore');
                $('#menu-content .toggle-content-text').fadeOut(0);
                $('#menu-content .links-content').fadeIn(0);
                $('.bottom-part').fadeToggle(20);
                faded = !faded;
            } else if (faded) {
                // faded = false;
            }
            setTimeout(() => {
                let footerTop = $('.side-bar-header').prop('scrollHeight') + 50;//menu-title
                $('.hidden-footer').css({top: footerTop});
            }, 35)

        }
    });
    $('#menu-content .toggle-content a').on({
        click: function () {
            $('#menu-content .toggle-content-text').fadeIn(0);
            $('#menu-content .links-content').fadeOut(0);
            faded = !faded;


            $('#toggle-icon').toggleClass('rotate', '');

            $(window).scrollTop(0);
            faded = false;
        }
    });
    $('.menu-title').on({
        click: function () {
            $('#menu-content .toggle-content-text').fadeIn(0);
            $('#menu-content .links-content').fadeOut(0);
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
            let footerTop = $('.side-bar-header').prop('scrollHeight') + 50;
            // console.log($(window).scrollTop());
            if ($(window).scrollTop() > 2) {
                $('.menu-animation').removeClass('restore');
                $('.side-bar-logo').fadeOut(0);
                $('.bottom-part').fadeOut(20);
                $('.side-bar-header').addClass('menu-animation');

                $('#toggle-icon').removeClass('rotate');
                menuToggled = false;

            } else {

                $('.side-bar-logo').fadeIn();
                $('.bottom-part').fadeIn();
                $('.side-bar-header').removeClass('menu-animation');

                $('#menu-content .toggle-content-text').fadeIn(0);
                $('#menu-content .links-content').fadeOut(0);
                faded = faded;
            }


            if (($('html').prop('scrollHeight')) - $(window).height() - 20 < $(window).scrollTop()) {

                $('.hidden-footer').fadeIn(500);
                $('.hidden-footer').css({top: footerTop});
                footOpend = true;
            } else {
                $('.hidden-footer').fadeOut(500);
                footOpend = false;
            }


        });
    })
});
