(function (window, document, Lib, App, undefined) {
    "use strict";
    
    App.Controller = Lib.Class({
        status: '',
        priority: '',
        name: '',
        
        init: function (model, view) {
            console.groupCollapsed("Controller");
            console.log("initializing Controller...");
            console.log("setting model...");
            this.model = model;
            console.log("this.model %o", this.model);
            console.log("setting model done.");
            console.log("setting view...");
            this.view = view;
            console.log("this.view %o", this.view);
            console.log("setting view done.");
            console.groupEnd("Controller");
        },
        
        listAll: function () {
            console.groupCollapsed("Controller");
            console.log("list all the task in the Collection");
            console.groupEnd("Controller");
        },

        addItem: function (data) {
            this.model.addItem(data, function (item) {
                this.view.renderItem(item);
            }.bind(this));
        }
    });
    
})(this, this.document, JSgoodies, App);