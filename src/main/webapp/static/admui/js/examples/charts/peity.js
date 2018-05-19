(function (_0x48b306, _0x506ee3, _0x57fd4e) {

    _0x57fd4e('[data-toggle="tooltip"]').tooltip({
        'trigger': 'hover'
    });
    var _0x158acf = _0x57fd4e('#examplePeityDynamic')['peity']('line', {
        'width': 0x40,
        'fill': [_0x57fd4e['colors']('purple', 0xc8)],
        'stroke': _0x57fd4e['colors']('purple', 0x1f4),
        'height': 0x16
    });
    setInterval(function () {
        var _0x1b416f = Math.round(Math.random() * 0xa);
        var _0x59343d = _0x158acf.text().split(',');
        _0x59343d.shift();
        _0x59343d.push(_0x1b416f);
        _0x158acf.text(_0x59343d['join'](',')).change();
    }, 0x3e8);
    var _0x5f2c36 = _0x57fd4e('#examplePeityDynamicRed').peity('line', {
        'width': 0x40,
        'fill': [_0x57fd4e.colors('red', 0xc8)],
        'stroke': _0x57fd4e.colors('red', 0x1f4),
        'height': 0x16
    });
    setInterval(function () {
        var _0x309654 = Math.round(Math.random() * 0xa);
        var _0x4c08e5 = _0x5f2c36['text']().split(',');
        _0x4c08e5['shift']();
        _0x4c08e5.push(_0x309654);
        _0x5f2c36.text(_0x4c08e5.join(',')).change();
    }, 0x3e8);
    var _0x3b3f30 = _0x57fd4e('#examplePeityDynamicGreen').peity('line', {
        'width': 0x40,
        'fill': [_0x57fd4e.colors('green', 0xc8)],
        'stroke': _0x57fd4e.colors('green', 0x1f4),
        'height': 0x16
    });
    setInterval(function () {
        var _0x93c7bc = Math.round(Math.random() * 0xa);
        var _0x351ba7 = _0x3b3f30['text']()['split'](',');
        _0x351ba7['shift']();
        _0x351ba7.push(_0x93c7bc);
        _0x3b3f30['text'](_0x351ba7['join'](',')).change();
    }, 0x3e8);
    var _0x471a76 = _0x57fd4e('#examplePeityDynamicOrange').peity('line', {
        'width': 0x40,
        'fill': [_0x57fd4e.colors('orange', 0xc8)],
        'stroke': _0x57fd4e.colors('orange', 0x1f4),
        'height': 0x16
    });
    setInterval(function () {
        var _0x369dea = Math.round(Math.random() * 0xa);
        var _0x25c23e = _0x471a76['text']().split(',');
        _0x25c23e.shift();
        _0x25c23e.push(_0x369dea);
        _0x471a76['text'](_0x25c23e.join(','))['change']();
    }, 0x3e8);
}(document, window, jQuery));