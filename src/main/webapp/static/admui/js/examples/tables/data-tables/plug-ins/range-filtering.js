(function (_0x140fd6, _0x5ee2fa, _0x5189da) {

    _0x5189da['fn'].dataTable['ext'].search.push(function (_0x58dafc, _0x26fcc6) {
        var _0x12d602 = parseInt(_0x5189da('#DTMinAge').val(), 0xa);
        var _0x22a0c8 = parseInt(_0x5189da('#DTMaxAge').val(), 0xa);
        var _0x3641ae = parseFloat(_0x26fcc6[0x3]) || 0x0;
        return isNaN(_0x12d602) && isNaN(_0x22a0c8) || isNaN(_0x12d602) && _0x3641ae <= _0x22a0c8 || _0x12d602 <= _0x3641ae && isNaN(_0x22a0c8) || _0x12d602 <= _0x3641ae && _0x3641ae <= _0x22a0c8;
    });
    var _0x47349b = _0x5189da('#dataTableExample').DataTable(_0x5189da['po']('dataTable'));
    _0x5189da(_0x5ee2fa)['on']('keyup', '#DTMinAge, #DTMaxAge', function () {
        _0x47349b.draw();
    });
}(window, document, jQuery));