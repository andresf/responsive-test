var App = {};

$(document).ready(function() {
    App.init();
});

//Number of rows available in the grid
App.rows = 12;

//Mapping block size from 4 column grid to 12 column grid
App.block_size = 3;

App.init = function() {
    App.renderGrid(App.getDummyData());
};

App.getDummyData = function() {
    var data = [];

    for (var i=0;i<5;i++) {
        data[i] = {
            type: 'text',
            size: '1x1',
            text: 'This is a text element ' + i
        };
    }

    for (var i=5;i<10;i++) {
        data[i] = {
            type: 'image',
            size: '1x1',
            source: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnq0XsBBJm41Y9lNpe2LgLfNn_JMF_Lkpo1OSbQa1rD-xoj0eC'
        };
    }

    return data;
};

App.renderRow = function() {
    var $canvas = $('#canvas');

    $canvas.append(_.template(Template.row, {}));
    return $canvas.find('.row').last();
};

App.getBlockDimensions = function(data) {
    data.width = parseInt(data.size.split('x')[0], 10) * App.block_size;
    data.height = parseInt(data.size.split('x')[1], 10) * App.block_size;

    return data;
};

App.renderGrid = function(data) {
    var available_rows = App.rows,
        $row = App.renderRow();

    for (var i=0;i<data.length;i++) {
        data[i] = App.getBlockDimensions(data[i]);

        if (available_rows - data[i].width >= 0) {
            available_rows -= data[i].width;
        } else {
            available_rows = App.rows - data[i].width;
            $row = App.renderRow();
        }

        $row.append(_.template(Template[data[i].type], data[i]));
    }
};
