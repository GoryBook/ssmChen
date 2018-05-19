(function (_0x5d7664) {

    _0x5d7664('.dataTable').DataTable(_0x5d7664['po']('dataTable', {
        'dom': '<"row"<"col-xs-6"<"hidden-xs"B>><"col-xs-6"f>><"row"<"col-xs-12"tr>><"row"<"col-sm-5"i><"col-sm-7"p>>',
        'processing': !![],
        'autoWidth': ![],
        'rowId': 'userId',
        'buttons': {
            'dom': {
                'container': {
                    'className': 'btn-group btn-group-sm'
                },
                'button': {
                    'className': 'btn\x20btn-default\x20btn-outline'
                }
            },
            'buttons': [{
                'extend': 'copy',
                'text': '拷贝'
            }, {
                'extend': 'excel',
                'text': '导出\x20Excel'
            }, {
                'extend': 'csv',
                'text': '导出 CSV'
            }, {
                'extend': 'print',
                'text': '打印'
            }]
        }
    }));
}(jQuery));