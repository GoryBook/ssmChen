(function (_0x49a0db, _0x4b212c, _0x1831dc) {

    _0x1831dc['fn'].dataTable.ext.type.order['salary-grade-pre'] = function (_0x7bf8df) {
        switch (_0x7bf8df) {
            case '低':
                return 0x1;
            case '中':
                return 0x2;
            case '高':
                return 0x3;
        }
        return 0x0;
    };
    _0x1831dc('#dataTableExample').DataTable(_0x1831dc['po']('dataTable', {
        'columnDefs': [{
            'type': 'salary-grade',
            'targets': -0x1
        }]
    }));
}(window, document, jQuery));