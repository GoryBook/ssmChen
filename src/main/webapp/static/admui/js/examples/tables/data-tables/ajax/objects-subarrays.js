(function (_0x402ef8, _0x5c574a, _0x4c7e8) {

    _0x4c7e8('#dataTableExample').DataTable(_0x4c7e8['po']('dataTable', {
        'processing': !![],
        'ajax': _0x4c7e8.ctx + '/public/data/examples/tables/dt-ajax-1.json',
        'columns': [{
            'data': 'name'
        }, {
            'data': 'hr.position'
        }, {
            'data': 'contact.0'
        }, {
            'data': 'contact.1'
        }, {
            'data': 'hr.start_date'
        }, {
            'data': 'hr.salary'
        }]
    }));
}(window, document, jQuery));