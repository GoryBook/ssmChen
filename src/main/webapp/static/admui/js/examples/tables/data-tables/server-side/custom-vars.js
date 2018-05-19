(function (_0x5a48b9, _0x268e05, _0x23d635) {

    _0x23d635('#dataTableExample')['DataTable'](_0x23d635['po']('dataTable', {
        'processing': !![],
        'serverSide': !![],
        'ajax': {
            'url': 'http://demo.admui.com/employee/all',
            'dataType': 'jsonp',
            'data': function (_0x463350) {
                _0x463350.myKey = 'myValue';
            }
        }
    }));
}(window, document, jQuery));