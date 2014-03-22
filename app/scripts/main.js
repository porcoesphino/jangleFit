/*global jangleFit, $*/


window.jangleFit = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        'use strict';
        new this.Views.LadderView({
            collection: new this.Collections.LadderCollection()
        });
    }
};

$(document).ready(function () {
    'use strict';
    jangleFit.init();
});
