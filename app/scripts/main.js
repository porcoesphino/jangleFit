/*global jangleFit, $*/


window.jangleFit = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        'use strict';
        new this.Routers.JanglefitRouter();
    }
};

$(document).ready(function () {
    'use strict';

    // A horrible hack for the fact these are local clicks
    // TODO: handle refreshes
    $('.nav li a').on('click', function() {
        // TODO: this is probably not safe but we shouldn't be keeping it
        if (!$(this)[0].classList.contains('dropdown-toggle')) {
            $('.navbar').find('.active').removeClass('active');
            $('nav.navbar').find('.navbar-collapse.in').removeClass('in').addClass('collapse');
            $(this).parent().addClass('active');
        }
    });
    // A continued hack for when we load from URL
    // TODO: somehow load view from route
    var hash = window.location.hash;
    var els = $('ul.nav a[href="'+ hash +'"]');
    if (els.length > 0) {
        els.parent().addClass('active');
    } else {
    // 404's??
        $('#home').addClass('active');
    }

    jangleFit.init();
});
