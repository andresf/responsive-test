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
    });
};

App.renderRow = function($parent) {
    $parent = $parent || $('#canvas');
    $parent.append(_.template(Template.row, {}));
    return $parent.find('.row').last();
};

App.getBlockDimensions = function(data) {
    data.rows = parseInt(data.size.split('x')[0], 10);
    data.cols = parseInt(data.size.split('x')[1], 10) * App.block_size;

    return data;
};

App.renderGrid = function(data, $parent) {
    var available_rows = App.rows,
        $row = App.renderRow($parent),
        component_type;

    for (var i=0;i<data.length;i++) {
        component_type = data[i].type.toLowerCase();

        if (component_type !== 'filler' && Template[component_type]) {
            data[i] = App.getBlockDimensions(data[i]);

            if (available_rows - data[i].cols >= 0) {
                available_rows -= data[i].cols;
            } else {
                available_rows = App.rows - data[i].cols;
                $row = App.renderRow($parent);
            }

            $row.append(_.template(Template[component_type], data[i]));

            if (data[i].elements && data[i].elements.length > 0) {
                App.renderGrid(data[i].elements, $row.find('.component-'+component_type));
            }
        }
    }
};
