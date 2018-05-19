(function (_0x1187cd, _0xad9034, _0x3a70c9) {

    var _0x1c72d5 = _0x3a70c9('#exampleFixedHeader').DataTable(_0x3a70c9['po']('dataTable', {
        'pagingType': 'full_numbers',
        'fixedHeader': {
            'header': !![],
            'headerOffset': 0x0
        }
    }));
    if (Breakpoints['is']('xs')) {
        _0x1c72d5.fixedHeader.disable();
    }
    Breakpoints['on']('xs', 'leave', function () {
        _0x1c72d5.fixedHeader.enable();
    });
    Breakpoints['on']('sm', 'leave', function () {
        _0x1c72d5['fixedHeader'].disable();
    });
}(window, document, jQuery));