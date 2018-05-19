(function (_0x3d4c47, _0x537d4e, _0x58e4c6) {

    var _0x64577a = _0x58e4c6('#dataTableExample').DataTable(_0x58e4c6['po']('dataTable')),
        _0x136664 = 0x1;
    _0x58e4c6(_0x537d4e)['on']('click', '#DTAddRow', function () {
        _0x64577a.row['add']([_0x136664 + '.1', _0x136664 + '.2', _0x136664 + '.3', _0x136664 + '.4', _0x136664 + '.5']).draw(![]);
        _0x136664++;
    });
    _0x58e4c6('#DTAddRow').click();
}(window, document, jQuery));