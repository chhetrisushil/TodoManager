(function (window, document, Lib, App, undefined) {
    "use strict";
    
    App.Model = Lib.Class({
        status: '',
        priority: '',
        name: '',
        
        init: function (collection) {
            console.groupCollapsed("Model");
            console.log("initializing Model...");
            console.log("setting collection...");
            this.collection = collection;
            console.log("this.collection %o", this.collection);
            console.log("setting collection done.");
            console.groupEnd("Model");
        },

        addItem: function (data, callback) {
            this.collection.add(data);
            callback.call(this, data);
        }
    });
    
})(this, this.document, JSgoodies, App);