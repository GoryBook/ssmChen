(function (_0x171772, _0x5b716e, _0x550ceb) {

    _0x550ceb('#dataTableExample').DataTable(_0x550ceb['po']('dataTable', {
        'processing': !![],
        'ajax': _0x550ceb.ctx + '/public/data/examples/tables/dt-ajax-1.json',
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