(function (_0x280f62, _0xabf2e5, _0x2d76cd) {

    _0x2d76cd('#dataTableExample').DataTable(_0x2d76cd['po']('dataTable', {
        'processing': !![],
        'serverSide': !![],
        'ajax': {
            'url': 'http://demo.admui.com/employee/all/get',
            'dataType': 'jsonp'
        },
        'columns': [{
            'data': 'name'
        }, {
            'data': 'title'
        }, {
            'data': 'base'
        }, {
            'data': 'age'
        }, {
            'data': 'hireDate'
        }, {
            'data': 'salary'
        }]
    }));
}(window, document, jQuery));