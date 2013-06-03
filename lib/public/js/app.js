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

App.renderRow = function() {
    var $canvas = $('#canvas');

    $canvas.append(_.template(Template.row, {}));
    return $canvas.find('.row').last();
};

App.validSize = function(size) {
    var valid = false;

    switch(size) {
        case '1x1':
        case '2x1':
        case '4x1':
        case '4x3':
        case '4x4':
            valid = true;
    }

    return valid;
};

App.getBlockDimensions = function(data) {
    data.width = parseInt(data.size.split('x')[0], 10) * App.block_size;
    data.height = parseInt(data.size.split('x')[1], 10);

    return data;
};

App.renderGrid = function(data) {
    var available_rows = App.rows,
        $row = App.renderRow();

    for (var i=0;i<data.length;i++) {
        if (App.validSize(data[i].size)) {
            data[i] = App.getBlockDimensions(data[i]);

            if (available_rows - data[i].width >= 0) {
                available_rows -= data[i].width;
            } else {
                available_rows = App.rows - data[i].width;
                $row = App.renderRow();
            }

            $row.append(_.template(Template[data[i].type], data[i]));
        }
    }
};

App.getDummyData = function() {
    var data = [];

    data.push({
        type: 'container',
        size: '4x3',
        text: 'This is a text element '
    });

    data.push({
        type: 'text',
        size: '1x1',
        text: 'This is a text element '
    });

    for (var i=2;i<10;i++) {
        data.push({
            type: 'image',
            size: '1x1',
            source: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnq0XsBBJm41Y9lNpe2LgLfNn_JMF_Lkpo1OSbQa1rD-xoj0eC'
        });
    }

    data.push({
        type: 'text',
        size: '1x1',
        text: 'This is a text element'
    });

    return data;
};
