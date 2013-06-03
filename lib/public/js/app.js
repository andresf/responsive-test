var App = {};

$(document).ready(function() {
    App.init();
});

/**
 * Initializes the App
 * @return {[type]} [description]
 */
App.init = function() {
    var data = App.buildDummyData();
    App.buildGrid(data);
};

App.buildDummyData = function() {
    return {};
};

App.buildGrid = function(data) {
    //Render something here
};
