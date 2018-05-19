(function (_0x552bcf, _0x3e46f6, _0x4406f2) {

    App.extend({
        'run': function (_0x574edb) {
            var _0x118a03 = _0x4406f2('.site-action').actionBtn({
                'toggleSelector': '.list-group-item',
                'listSelector': '.site-action-buttons'
            }).data('actionBtn'),
                _0x1cfae3 = _0x4406f2('.list-group-item');
            _0x118a03.show();
            _0x4406f2(_0x3e46f6)['on']('click', '.site-action-toggle', function (_0x54b732) {
                if (!_0x1cfae3.hasClass('active')) {
                    _0x4406f2('#addNewNote').modal('show');
                    _0x54b732.stopPropagation();
                } else {
                    _0x4406f2('.list-group-item').removeClass('active');
                    _0x118a03.hide();
                }
            });
            _0x4406f2(_0x3e46f6)['on']('click', '.list-group-item', function () {
                _0x4406f2(this).addClass('active').siblings().removeClass('active');
                if (_0x4406f2(this).hasClass('active')) {
                    _0x118a03.show();
                }
            });
            _0x574edb();
        }
    });
    App.run();
}(window, document, jQuery));