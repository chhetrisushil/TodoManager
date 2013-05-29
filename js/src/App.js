(function (window, document, Lib, App, undefined) {
    "use strict";
    
    // bind DOMContentLoaded Event
    document.addEventListener("DOMContentLoaded", function () {
        console.group("App");
        console.log("initiating application...");
        var store = new App.Store(),
            model = new App.Model(store),
            view = new App.View(),
            controller = new App.Controller(model, view);
        console.log("show all task.");
        controller.listAll();

        var form = document.querySelector('form');

        form.addEventListener('submit', function (e) {
            console.groupCollapsed("App");
            console.log(e);
            var input  = this.querySelector('input');
            console.log(input.value);
            controller.addItem({title: input.value});
            console.groupEnd("App");
            e.preventDefault();
        }, false);
        console.groupEnd("App");
    }, false)
    
})(this, this.document, JSgoodies, App);