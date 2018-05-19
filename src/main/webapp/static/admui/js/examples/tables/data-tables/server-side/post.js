(function (_0x3504ce, _0x424e52, _0x5487e1) {

    _0x5487e1('#dataTableExample').DataTable(_0x5487e1['po']('dataTable', {
        'processing': !![],
        'serverSide': !![],
        'ajax': {
            'url': 'http://demo.admui.com/employee/all/post',
            'crossDomain': !![],
            'type': 'POST',
            'dataType': 'json'
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