(function (_0x5cd964, _0xc8f135, _0xfd5ac0) {

    _0xfd5ac0('#dataTableExample tfoot th').each(function () {
        var _0x320b1e = _0xfd5ac0('#dataTableExample thead th')['eq'](_0xfd5ac0(this).index())['text']();
        _0xfd5ac0(this).html('<input class="form-control" type="text" placeholder="查找 ' + _0x320b1e + '">');
    });
    var _0x534e7d = _0xfd5ac0('#dataTableExample').DataTable(_0xfd5ac0['po']('dataTable'));
    _0x534e7d.columns()['eq'](0x0)['each'](function (_0x4ed6bc) {
        _0xfd5ac0('input', _0x534e7d.column(_0x4ed6bc).footer())['on']('keyup change', function () {
            _0x534e7d.column(_0x4ed6bc)['search'](this.value)['draw']();
        });
    });
}(window, document, jQuery));