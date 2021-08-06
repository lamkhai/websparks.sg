$(document).ready(function() {

    $("#wsNavbar .navbar-nav .navbar-item > span.fas").on("click", function() {
        if ($(this).hasClass('fa-chevron-down')) {
            $(this).parent().find('.dropdown-menu').addClass('open');
            $(this).addClass('fa-chevron-up').removeClass('fa-chevron-down');
        } else if ($(this).hasClass('fa-chevron-up')) {
            $(this).parent().find('.dropdown-menu').removeClass('open');
            $(this).addClass('fa-chevron-down').removeClass('fa-chevron-up');
        };
        //$(window).resize(function(){location.reload();});
    });

    $("#wsNavbar .navbar-nav .navbar-item").hover(function() {
        $(this).find('.dropdown-menu').show();
    }, function() {
        $(this).find('.dropdown-menu').hide();
    });

    $(".navbar-toggler").on("click", function() {
        $(this).find(".fa-bars").toggleClass("fa-times");
    });

    // ACCORDION
    // overwrite collapse so that multilple accordion can be put in
    $('[data-toggle="collapse"]').on('click', function(e) {
        var anchorPanel = $(this).parent().parent().parent().children('div[role="tabpanel"]');
        $(anchorPanel).collapse('toggle');
        if ($(this).attr('aria-expanded') == "true") {
            $(this).attr('aria-expanded', "false");
        } else {
            $(this).attr('aria-expanded', "true");
        }
    });
    // overwrite accordion data-toggle non-anchor behaviour
    $('[data-toggle="collapse"]:not(.accordion-toggle)').on('click', function(e) {
        var anchor = $(this).attr('href');
        setTimeout(function() {
            $('html').animate({
                scrollTop: $(anchor).parent().offset()
            }, 800);
        }, 200);
        if ($(anchor).hasClass('show')) {
            return false;
        }
    });
    // open accordion from another page
    if ($(location).attr('hash') && $('div[role="tabpanel"][id="' + $(location).attr('hash').slice(1) + '"]').length) {
        var hashlink = $(location).attr('hash');
        $(hashlink).collapse('show');
        setTimeout(function() {
            $('html').animate({
                scrollTop: $(hashlink).parent().offset()
            }, 800);
        }, 200);
    }
    // opens first accordion item on load
    $('.accordion .panel:first-child [data-toggle="collapse"]').click();
    $('.accordion .panel:first-child [data-toggle="collapse"]').attr('aria-expanded', 'true');

    var list = $('.gallery-list').hide(),
        showList = $();

    var more = $('#viewMore').click(function() {
        var hidden = showList.filter(':hidden');
        hidden.slice(0, 6).show();
        more.toggle(hidden.length > 6);
    });

    var filterBtn = $(".filter-button");

    filterBtn.on('click', function() {
        filterBtn.removeClass("selected");
        $(this).addClass("selected");
        showList = list.filter('.' + this.id).hide();
        showList.slice(0, 6).show();
        list.not(showList).hide();
        more.toggle(showList.length > 3);

        var visibleList = $(".gallery-list:visible");

        if (visibleList.length != 6) {
            more.hide();
            //console.log("list than 6")
        } else {
            more.fadeIn();
            console.log("list more than 6")
        };

    }).filter('.selected').click();

    // Back to top
    $('#buttonUp').on('click', function() {
        $('html, body').animate({
            scrollTop: 0
        }, 'slow');
    });

    // Scroll to top
    $(window).on('scroll', function() {
        if ($(document).scrollTop() > 30) {
            $('#buttonUp').show();
        } else {
            $('#buttonUp').hide();
        }
    });

    $(".bg-ca").on('click', function() {
        window.open('https://www.caas.gov.sg/', '_blank');
    });

    $(".bg-nd").on('click', function() {
        window.open('https://www.mnd.gov.sg/', '_blank');
    });

    $(".bg-nea").on('click', function() {
        window.open('https://www.nea.gov.sg/', '_blank');
    });

    $(".bg-nus").on('click', function() {
        window.open('http://www.nus.edu.sg/', '_blank');
    });

    $(".bg-ptc").on('click', function() {
        window.open('https://www.ptc.gov.sg/', '_blank');
    });

    $("a.card .card-body .card-text").text(function(index, currentText) {
        var maxLength = $(this).parent().attr('data-maxlength');
        if (currentText.length >= maxLength) {
            return currentText.substr(0, maxLength) + " ....";
        } else {
            return currentText
        }
    });

    // $(window).on('resize', function() {
    //     var win = $(this);
    //     if (win.width() < 514) {

    //         $('.our-culture').addClass('mobile');

    //     } else {
    //         $('.our-culture').removeClass('mobile');
    //     }

    // });
    function checkWidth(init) {
        /*If browser resized, check width again */
        if ($(window).width() < 992) {
            $('.our-culture .card').removeClass('h-100');
        } else {
            if (!init) {
                $('.our-culture .card').addClass('h-100');
            }
        }
    }

    $(document).ready(function() {
        checkWidth(true);

        $(window).resize(function() {
            checkWidth(false);
        });
    });


});
;
//# sourceMappingURL=scripts.js.map