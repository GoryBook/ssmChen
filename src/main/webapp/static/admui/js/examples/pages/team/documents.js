(function (_0x38dcb2, _0x1d8e2a, _0x18a89a) {

    var _0x1d1407 = {
        'affixHandle': function () {
            _0x18a89a('#articleAffix').affix({
                'offset': {
                    'top': 0xd2
                }
            });
        }, 'scrollHandle': function () {
            _0x18a89a('body')['scrollspy']({
                'target': '#articleAffix'
            });
        }, 'run': function () {
            this['scrollHandle']();
            this.affixHandle();
        }
    };
    _0x1d1407.run();
}(document, window, jQuery));