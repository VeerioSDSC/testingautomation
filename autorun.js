define([
    'jquery',
    'base/js/namespace',
    'base/js/events'
], function (
    $,
    IPython,
    events
) {
    var run_all_cells = function(){
        var cells = IPython.notebook.get_cells();
        for (var i=0; i < cells.length; i++) {
            var cell = cells[i];
            cell.execute();
        }
    };

    var load_ipython_extension = function() {
        events.on('kernel_ready.Kernel', run_all_cells);
    };

    return {
        load_ipython_extension : load_ipython_extension
    };
});

