/*global jangleFit, $*/


window.jangleFit = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        'use strict';

        var temp = new jangleFit.Models.User();
        temp.fetch();
        if (temp.isInitialised()) {
            jangleFit.currentUser = temp;
        }
        jangleFit.router = new this.Routers.JanglefitRouter();
    }
};

$(document).ready(function () {
    'use strict';

    // TODO: This is a hack for disabled links
    $('li.disabled > a:link').on('click', function(e) {
        e.preventDefault();
    });

    // A horrible hack for the fact these are local clicks
    // TODO: handle refreshes
    $('nav a').on('click', function() {
        // TODO: this is probably not safe but we shouldn't be keeping it
        if (!$(this)[0].classList.contains('dropdown-toggle') &&
            !$(this).parent()[0].classList.contains('disabled')) {
            $('.navbar').find('.active').removeClass('active');
            $('nav.navbar').find('.navbar-collapse.in').removeClass('in').addClass('collapse');
            $(this).parent().addClass('active');
        }
    });

    jangleFit.init();
});
