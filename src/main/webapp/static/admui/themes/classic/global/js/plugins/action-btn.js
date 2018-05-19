(function (_0x47d0f0, _0x2fbffa, _0x3d5b48) {

    var _0x3d15e8 = 'actionBtn';
    var _0x4a8ccd = _0x3d5b48[_0x3d15e8] = function (_0x5b746f, _0xdc49e8) {
        this['element'] = _0x5b746f;
        this.$element = _0x3d5b48(_0x5b746f);
        this.options = _0x3d5b48.extend({}, _0x4a8ccd.defaults, _0xdc49e8, this['$element'].data());
        this.init();
    };
    _0x4a8ccd.defaults = {
        'trigger': 'click',
        'toggleSelector': '.site-action-toggle',
        'listSelector': '.site-action-buttons',
        'activeClass': 'active',
        'onShow': function () { }, 'onHide': function () { }
    };
    _0x4a8ccd.prototype = {
        'constructor': _0x4a8ccd,
        'init': function () {
            this.showed = ![];
            this.$toggle = this.$element.find(this['options'].toggleSelector);
            this.$list = this.$element.find(this.options.listSelector);
            var _0x133502 = this;
            if (this['options'].trigger === 'hover') {
                this['$element']['on']('mouseenter', this.options.toggleSelector, function () {
                    if (!_0x133502.showed) {
                        _0x133502.show();
                    }
                });
                this.$element['on']('mouseleave', this.options.toggleSelector, function () {
                    if (_0x133502.showed) {
                        _0x133502['hide']();
                    }
                });
            } else {
                this.$element['on']('click', this.options.toggleSelector, function () {
                    if (_0x133502.showed) {
                        _0x133502.hide();
                    } else {
                        _0x133502['show']();
                    }
                });
            }
        }, 'show': function () {
            if (!this.showed) {
                this.$element.addClass(this.options['activeClass']);
                this['showed'] = !![];
                this['options'].onShow.call(this);
            }
        }, 'hide': function () {
            if (this.showed) {
                this.$element['removeClass'](this.options['activeClass']);
                this.showed = ![];
                this.options.onHide.call(this);
            }
        }
    };
    _0x3d5b48['fn'][_0x3d15e8] = function (_0xaa3169) {
        var _0x30d1b5 = _0xaa3169,
            _0x5da611 = this['first']().data(_0x3d15e8),
            _0x23e6c3 = Array['prototype'].slice.call(arguments, 0x1);
        if (typeof _0xaa3169 === 'string') {
            if (/^_/.test(_0x30d1b5)) {
                return ![];
            } else if (/^(get)$/.test(_0x30d1b5) && _0x5da611 && typeof _0x5da611[_0x30d1b5] === 'function') {
                return _0x5da611[_0x30d1b5].apply(_0x5da611, _0x23e6c3);
            } else {
                return this['each'](function () {
                    var _0xf9f3d8 = _0x3d5b48.data(this, _0x3d15e8);
                    if (_0xf9f3d8 && typeof _0xf9f3d8[_0x30d1b5] === 'function') {
                        _0xf9f3d8[_0x30d1b5]['apply'](_0xf9f3d8, _0x23e6c3);
                    }
                });
            }
        } else {
            return this.each(function () {
                if (!_0x3d5b48.data(this, _0x3d15e8)) {
                    _0x3d5b48.data(this, _0x3d15e8, new _0x4a8ccd(this, _0xaa3169));
                }
            });
        }
    };
}(window, document, jQuery));