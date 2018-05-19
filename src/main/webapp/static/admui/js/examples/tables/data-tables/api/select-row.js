(function (_0x57f0d4, _0x3f4c06, _0x490ae6) {

    var _0x106f3a = _0x490ae6('#dataTableExample').DataTable(_0x490ae6['po']('dataTable'));
    _0x490ae6(_0x3f4c06)['on']('click', '#dataTableExample tbody tr', function () {
        _0x490ae6(this)['toggleClass']('selected');
    });
    _0x490ae6(_0x3f4c06)['on']('click', '#DTSelectRow', function () {
        toastr.info('选中了 ' + _0x106f3a.rows('.selected').data().length + ' 行数据');
    });
}(window, document, jQuery));