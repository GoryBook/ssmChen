(function (_0x1126dc) {

    var _0x3e1045 = 'stickyHeader',
        _0x16315d = {
            'headerSelector': '.header',
            'changeHeaderOn': 0x64,
            'activeClassName': 'active-sticky-header',
            'min': 0x32,
            'method': 'toggle'
        };
    var _0x16b319 = function (_0x3842c0, _0x8b11b9) {
        this['isActive'] = ![];
        this['init'](_0x8b11b9);
        this.bind();
    };
    _0x16b319.prototype = {
        'init': function (_0x1c37fc) {
            var _0x3d490b = this['$el'].css('transition', 'none'),
                _0x3ff80e = this.$header = _0x3d490b.find(_0x1c37fc.headerSelector)['css']({
                    'position': 'absolute',
                    'top': 0x0,
                    'left': 0x0
                });
            this['options'] = _0x1126dc.extend(!![], {}, _0x16315d, _0x1c37fc, _0x3ff80e.data());
            this.headerHeight = _0x3ff80e.outerHeight();
            this.$el.css('paddingTop', this.headerHeight);
        }, '_toggleActive': function () {
            if (this['isActive']) {
                this.$header['css']('height', this.options.min);
            } else {
                this['$header'].css('height', this['headerHeight']);
            }
        }, 'bind': function () {
            var _0x283bc1 = this;
            this.$el['on']('scroll', function () {
                if (_0x283bc1.options['method'] === 'toggle') {
                    if (_0x1126dc(this).scrollTop() > _0x283bc1.options.changeHeaderOn && !_0x283bc1.isActive) {
                        _0x283bc1.$el.addClass(_0x283bc1['options'].activeClassName);
                        _0x283bc1.isActive = !![];
                        _0x283bc1.$header.css('height', _0x283bc1.options['min']);
                        _0x283bc1.$el['trigger']('toggle:sticky', [_0x283bc1, _0x283bc1.isActive]);
                    } else if (_0x1126dc(this).scrollTop() <= _0x283bc1.options['changeHeaderOn'] && _0x283bc1['isActive']) {
                        _0x283bc1['$el'].removeClass(_0x283bc1.options.activeClassName);
                        _0x283bc1.isActive = ![];
                        _0x283bc1.$header['css']('height', _0x283bc1.headerHeight);
                        _0x283bc1.$el['trigger']('toggle:sticky', [_0x283bc1, _0x283bc1.isActive]);
                    }
                } else if (_0x283bc1.options.method === 'scroll') {
                    var _0x267b54 = Math['max'](_0x283bc1.headerHeight - _0x1126dc(this)['scrollTop'](), _0x283bc1.options.min);
                    if (_0x267b54 === _0x283bc1.headerHeight) {
                        _0x283bc1['$el']['removeClass'](_0x283bc1.options['activeClassName']);
                    } else {
                        _0x283bc1.$el.addClass(_0x283bc1.options.activeClassName);
                    }
                    _0x283bc1.$header.css('height', _0x267b54);
                    _0x283bc1.$el.trigger('toggle:sticky', [_0x283bc1]);
                }
            });
        }
    };
    _0x1126dc['fn'][_0x3e1045] = function (_0x5b0eb0) {
        if (typeof _0x5b0eb0 === 'string') {
            var _0x2ceca5 = _0x5b0eb0;
            var _0x3de2f0 = Array.prototype['slice'].call(arguments, 0x1);
            if (/^_/['test'](_0x2ceca5)) {
                return ![];
            } else {
                return this.each(function () {
                    var _0x4f8f41 = _0x1126dc['data'](this, _0x3e1045);
                    if (_0x4f8f41 && typeof _0x4f8f41[_0x2ceca5] === 'function') {
                        _0x4f8f41[_0x2ceca5].apply(_0x4f8f41, _0x3de2f0);
                    }
                });
            }
        } else {
            return this.each(function () {
                if (!_0x1126dc['data'](this, _0x3e1045)) {
                    _0x1126dc.data(this, _0x3e1045, new _0x16b319(this, _0x5b0eb0));
                } else {
                    _0x1126dc.data(this, _0x3e1045).init(_0x5b0eb0);
                }
            });
        }
    };
}(jQuery));