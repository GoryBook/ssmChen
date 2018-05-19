(function (_0x18b173, _0x3ee88d, _0x371e42) {

    _0x371e42['fn'].dataTable.ext['type'].detect.unshift(function (_0x2d2ddf) {
        return _0x2d2ddf === '低' || _0x2d2ddf === '中' || _0x2d2ddf === '高' ? 'salary-grade' : null;
    });
    _0x371e42['fn'].dataTable.ext.type['order'].salary - grade - pre = function (_0xf20174) {
        switch (_0xf20174) {
            case '低':
                return 0x1;
            case '中':
                return 0x2;
            case '高':
                return 0x3;
        }
        return 0x0;
    };
    _0x371e42('#dataTableExample').DataTable(_0x371e42['po']('dataTable'));
}(window, document, jQuery));