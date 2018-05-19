(function (_0x40dbe7, _0x45cdce, _0x2c69f1) {

    _0x2c69f1('#dataTableExample').DataTable(_0x2c69f1['po']('dataTable', {
        'processing': !![],
        'ajax': _0x2c69f1.ctx + '/public/data/examples/tables/dt-ajax-4.json',
        'columns': [{
            'data': 'name'
        }, {
            'data': 'position'
        }, {
            'data': 'office'
        }, {
            'data': 'extn'
        }, {
            'data': {
                '_': 'start_date.display',
                'sort': 'start_date.timestamp'
            }
        }, {
            'data': 'salary'
        }]
    }));
}(window, document, jQuery));