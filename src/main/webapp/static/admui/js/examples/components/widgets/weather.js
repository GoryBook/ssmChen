(function (_0x30469c) {

    var _0x388859 = new Skycons({
        'color': 'white'
    });
    _0x388859.set(_0x30469c.getElementById('ex4-rain'), 'rain');
    _0x388859.play();
    var _0xce6b4f = new Skycons({
        'color': 'white'
    }),
        _0x2fe06e = ['ex5-partly-cloudy', 'ex5-sunny', 'ex5-cloudy', 'ex5-rain'],
        _0x1a24c7 = ['partly-cloudy-day', 'clear-day', 'cloudy', 'rain'],
        _0x569a40;
    for (_0x569a40 = _0x2fe06e.length; _0x569a40--;) {
        _0xce6b4f.set(_0x2fe06e[_0x569a40], _0x1a24c7[_0x569a40]);
    }
    _0xce6b4f.play();
    var _0x897942 = new Skycons({
        'color': 'white'
    });
    _0x897942.set(_0x30469c.getElementById('ex6-snow'), 'snow');
    _0x897942.play();
    var _0xa3c20e = new Skycons({
        'color': '#212121'
    });
    _0xa3c20e.set(_0x30469c.getElementById('ex7-sleet'), 'sleet');
    _0xa3c20e.play();
}(document));