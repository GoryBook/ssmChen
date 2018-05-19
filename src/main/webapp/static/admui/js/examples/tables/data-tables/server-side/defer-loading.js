(function (_0x1f8f72, _0x4a6531, _0x4a7fab) {

    _0x4a7fab('#dataTableExample').DataTable(_0x4a7fab['po']('dataTable', {
        'processing': !![],
        'serverSide': !![],
        'ajax': {
            'url': 'http://demo.admui.com/employee/all',
            'dataType': 'jsonp'
        },
        'deferLoading': 0x39
    }));
}(window, document, jQuery));