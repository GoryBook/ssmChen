(function (_0x40c57e, _0x253bf0, _0x113b7b) {

    var _0x17a28c = {
        'gaugeLine': function () {
            var _0x572041 = _0x40c57e.getElementById('exampleDynamicGauge'),
                _0xcd3a80;
            var _0x311ccc = {
                'strokeColor': _0x113b7b.colors('purple', 0x1f4)
            };
            setInterval(function () {
                _0xcd3a80 = Math.round(Math.random() * 0x3e8);
                if (_0xcd3a80 > 0x2bc) {
                    _0x311ccc.strokeColor = _0x113b7b['colors']('pink', 0x1f4);
                } else if (_0xcd3a80 < 0x12c) {
                    _0x311ccc.strokeColor = _0x113b7b['colors']('green', 0x1f4);
                }
                var _0x32fc11 = new Gauge(_0x572041).setOptions(_0x113b7b['po']('gauge', _0x311ccc));
                _0x32fc11['maxValue'] = 0x3e8;
                _0x32fc11['set'](_0xcd3a80);
            }, 0x5dc);
        }, 'gagueDonut': function () {
            var _0x4fc5e0 = _0x40c57e['getElementById']('exampleDynamicDonut'),
                _0x44e318;
            var _0x34cf8 = {
                'strokeColor': _0x113b7b.colors('purple', 0x1f4)
            };
            setInterval(function () {
                _0x44e318 = Math['round'](Math['random']() * 0x3e8);
                if (_0x44e318 > 0x2bc) {
                    _0x34cf8.strokeColor = _0x113b7b.colors('pink', 0x1f4);
                } else if (_0x44e318 < 0x12c) {
                    _0x34cf8['strokeColor'] = _0x113b7b.colors('green', 0x1f4);
                }
                var _0x533d4c = new Donut(_0x4fc5e0)['setOptions'](_0x113b7b['po']('donut', _0x34cf8));
                _0x533d4c.animationSpeed = 0x32;
                _0x533d4c.maxValue = 0x7d0;
                _0x533d4c['set'](_0x44e318);
            }, 0x5dc);
        }, 'run': function () {
            this.gagueDonut();
            this.gaugeLine();
        }
    };
    _0x17a28c.run();
}(document, window, jQuery));