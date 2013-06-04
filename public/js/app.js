var App = {};

$(document).ready(function() {
    App.init();
});

//Number of rows available in the grid
App.rows = 12;

//Mapping block size from 4 column grid to 12 column grid
App.block_size = 3;

App.init = function() {
    $.ajax({
        url: 'http://localhost:4567/data',
        success: function(data) {
            App.renderGrid(data.elements.elements);
        }
    })
};

App.renderRow = function() {
    var $canvas = $('#canvas');

    $canvas.append(_.template(Template.row, {}));
    return $canvas.find('.row').last();
};

App.getBlockDimensions = function(data) {
    data.rows = parseInt(data.size.split('x')[0], 10);
    data.cols = parseInt(data.size.split('x')[1], 10) * App.block_size;

    return data;
};

App.renderGrid = function(data) {
    var available_rows = App.rows,
        $row = App.renderRow();

    for (var i=0;i<data.length;i++) {
        if (data[i].type.toLowerCase() === 'filler') continue;

        if (data[i].elements) {
            App.renderGrid(data[i].elements);
        }

        data[i] = App.getBlockDimensions(data[i]);

        if (available_rows - data[i].width >= 0) {
            available_rows -= data[i].width;
        } else {
            available_rows = App.rows - data[i].width;
            $row = App.renderRow();
        }

        if (Template[data[i].type.toLowerCase()]) {
            $row.append(_.template(Template[data[i].type.toLowerCase()],
                data[i]));
        }
    }
};
