(function (_0x449e7c, _0x34a0d4, _0x2a2345) {

    _0x2a2345('#dataTableExample').dataTable(_0x2a2345['po']('dataTable', {
        'footerCallback': function () {
            var _0x21fdde = this.api(),
                _0xf81a3c = function (_0x5dbfad) {
                    return typeof _0x5dbfad === 'string' ? _0x5dbfad.replace(/[\¥,]/g, '') * 0x1 : typeof _0x5dbfad === 'number' ? _0x5dbfad : 0x0;
                };
            var _0x2e72b9 = _0x21fdde['column'](0x5).data()['reduce'](function (_0x1eb35e, _0x1a3d3c) {
                return _0xf81a3c(_0x1eb35e) + _0xf81a3c(_0x1a3d3c);
            }, 0x0);
            var _0x2a4a46 = _0x21fdde['column'](0x5, {
                'page': 'current'
            })['data']().reduce(function (_0x362d0e, _0x2793c5) {
                return _0xf81a3c(_0x362d0e) + _0xf81a3c(_0x2793c5);
            }, 0x0);
            _0x2a2345(_0x21fdde.column(0x5)['footer']()).html('￥' + _0x2a4a46 + '\x20(\x20共计：￥' + _0x2e72b9 + ')');
        }
    }));
}(window, document, jQuery));