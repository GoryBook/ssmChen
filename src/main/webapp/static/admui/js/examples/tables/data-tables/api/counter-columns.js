(function (_0x2b6657, _0x1c2419, _0x74e4f5) {

    var _0x3d1f8a = _0x74e4f5('#dataTableExample').DataTable(_0x74e4f5['po']('dataTable', {
        'columnDefs': [{
            'searchable': ![],
            'orderable': ![],
            'targets': 0x0
        }],
        'order': [
            [0x1, 'asc']
        ]
    }));
    _0x3d1f8a['on']('order.dt search.dt', function () {
        _0x3d1f8a.column(0x0, {
            'search': 'applied',
            'order': 'applied'
        })['nodes']().each(function (_0x5223f7, _0x88984) {
            _0x5223f7.innerHTML = _0x88984 + 0x1;
        });
    }).draw();
}(window, document, jQuery));