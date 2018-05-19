(function (_0x2927d5, _0x4ff444, _0x147a98) {

    var _0x246280 = _0x147a98('#dataTableExample').DataTable(_0x147a98['po']('dataTable'));
    App.run();
    _0x147a98(_0x4ff444)['on']('click', '#dataTableExample tbody tr', function () {
        var _0x15e2fc = _0x246280.row(this).data();
        toastr['info']('您单击了"' + _0x15e2fc[0x0] + '\x22的行');
    });
}(window, document, jQuery));