(function (_0x383a67, _0x41179d, _0x244557) {


    function _0xe7b19e(_0x4969f0) {
        return '<table class="table table-bordered text-nowrap padding-left-50 margin-bottom-0" cellpadding="5">' + '<tr>' + '<td>姓名：</td>' + '<td>' + _0x4969f0['name'] + '</td>' + '</tr>' + '<tr>' + '<td>分机号码：</td>' + '<td>' + _0x4969f0['extn'] + '</td>' + '</tr>' + '<tr>' + '<td>备注：</td>' + '<td>添加详细信息（如图片等）</td>' + '</tr>' + '</table>';
    }
    var _0x5f9a6d = _0x244557('#dataTableExample').DataTable(_0x244557['po']('dataTable', {
        'ajax': _0x244557.ctx + '/public/data/examples/tables/dt-ajax-2.json',
        'columns': [{
            'class': 'details-control',
            'orderable': ![],
            'data': null,
            'defaultContent': ''
        }, {
            'data': 'name'
        }, {
            'data': 'position'
        }, {
            'data': 'office'
        }, {
            'data': 'salary'
        }],
        'order': [
            [0x1, 'asc']
        ]
    }));
    _0x244557(_0x41179d)['on']('click', '#dataTableExample tbody td.details-control', function () {
        var _0x26e2aa = _0x244557(this).closest('tr');
        var _0x2b8609 = _0x5f9a6d.row(_0x26e2aa);
        if (_0x2b8609.child.isShown()) {
            _0x2b8609.child.hide();
            _0x26e2aa.removeClass('shown');
        } else {
            _0x2b8609.child(_0xe7b19e(_0x2b8609['data']())).show();
            _0x26e2aa['addClass']('shown');
        }
    });
}(window, document, jQuery));