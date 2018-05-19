(function (_0x200fdb, _0x44a923, _0x572936) {

    var _0x372f7e = _0x572936('#dataTableExample').DataTable(_0x572936['po']('dataTable'));
    _0x572936(_0x44a923)['on']('click', '#dataTableExample tbody tr', function () {
        if (_0x572936(this).hasClass('selected')) {
            _0x572936(this).removeClass('selected');
        } else {
            _0x372f7e['$']('tr.selected').removeClass('selected');
            _0x572936(this)['addClass']('selected');
        }
    });
    _0x572936(_0x44a923)['on']('click', '#DTDelRow', function () {
        _0x372f7e.row('.selected')['remove']()['draw'](![]);
    });
}(window, document, jQuery));