(function (window, document, Lib, App, undefined) {
    "use strict";
    
    App.View = Lib.Class({
        status: '',
        priority: '',
        name: '',

        init: function () {
            console.groupCollapsed("View");
            console.log("initializing View...");
            console.groupEnd("View");
        },

        renderItem: function (data) {
            console.log("rendering %o", data);
        }
    });
    
})(this, this.document, JSgoodies, App);