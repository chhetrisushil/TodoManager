(function (window, document, Lib, App, undefined) {
    "use strict";
    
    App.Store = Lib.Class({
        dataList: null,

        init: function () {
            console.groupCollapsed("Collection");
            console.log("initializing Collection...");
            this.dataList = [];
            console.groupEnd("Collection");
        },

        add: function (data) {
            this.dataList.push(data);
        }
    });
    
})(this, this.document, JSgoodies, App);