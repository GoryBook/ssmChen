(function (_0x2c80ef, _0x51985a, _0x2243e3) {

    var _0x98a82d = _0x2243e3('#dataTableExample')['DataTable'](_0x2243e3['po']('dataTable', {
        'ajax': _0x2243e3.ctx + '/public/data/examples/tables/dt-ajax.json',
        'columnDefs': [{
            'targets': -0x1,
            'data': null,
            'defaultContent': '<button class="btn btn-outline btn-default btn-sm">查看</button>'
        }]
    }));
    _0x2243e3(_0x51985a)['on']('click', '#dataTableExample tbody button', function () {
        var _0x12e97e = _0x98a82d.row(_0x2243e3(this).parents('tr')).data();
        toastr.info(_0x12e97e[0x0] + ' 的年薪是：' + _0x12e97e[0x5]);
    });
}(window, document, jQuery));