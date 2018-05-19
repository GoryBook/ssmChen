(function (_0x5cdd0d, _0x3a6797, _0x3d6b7d) {

    _0x3d6b7d('#dataTableExample').DataTable(_0x3d6b7d['po']('dataTable', {
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