(function (_0x49dfca, _0x2b98d3, _0x196440) {

    _0x196440.parentFrame = _0x196440(_0x49dfca.top.document);
    var _0xa9d253 = _0x49dfca.parentFrame = _0x49dfca.top;
    _0x196440.ctx = _0xa9d253['$'].ctx;
    _0x196440.colors = _0xa9d253['$'].colors;
    _0x196440['po'] = _0xa9d253['$']['po'];
    _0x196440.storage = _0xa9d253['$']['storage'];
    _0x196440.sessionStorage = _0xa9d253['$']['sessionStorage'];
    _0x196440['site'] = _0xa9d253['$']['site'];
    _0x196440['site']['contentTabs'].ifameTabs(_0x2b98d3);
    _0x196440.configs = _0xa9d253['$'].configs;
    _0xa9d253['$'].components.init(_0x2b98d3, _0x49dfca);
    _0x49dfca.Breakpoints = _0xa9d253['Breakpoints'];
    _0x49dfca.toastr = _0xa9d253['toastr'];
    _0x49dfca.notifyFn = _0xa9d253['$'].notifyFn;
    var _0x20dec2 = _0x20dec2 || {};
    _0x196440.extend(_0x20dec2, {
        '_queue': {
            'prepare': [],
            'run': [],
            'complete': []
        },
        'run': function () {
            var _0x50aa31 = this;
            this._dequeue('prepare', function () {
                _0x50aa31._trigger('before.run', _0x50aa31);
            });
            this._dequeue('run', function () {
                _0x50aa31._dequeue('complete', function () {
                    _0x50aa31._trigger('after.run', _0x50aa31);
                });
            });
        }, '_dequeue': function (_0x4f1a37, _0x20f296) {
            var _0x229b7c = this,
                _0x4f1461 = this._getQueue(_0x4f1a37),
                _0x1b2f8f = _0x4f1461.shift(),
                _0x2d02e8 = function () {
                    _0x229b7c._dequeue(_0x4f1a37, _0x20f296);
                };
            if (_0x1b2f8f) {
                _0x1b2f8f.call(this, _0x2d02e8);
            } else if (_0x196440.isFunction(_0x20f296)) {
                _0x20f296.call(this);
            }
        }, '_getQueue': function (_0x59d736) {
            if (!_0x196440['isArray'](this['_queue'][_0x59d736])) {
                this._queue[_0x59d736] = [];
            }
            return this._queue[_0x59d736];
        }, 'extend': function (_0x6c816) {
            _0x196440.each(this['_queue'], function (_0xdc09d3, _0x153937) {
                if (_0x196440.isFunction(_0x6c816[_0xdc09d3])) {
                    _0x153937.unshift(_0x6c816[_0xdc09d3]);
                    delete _0x6c816[_0xdc09d3];
                }
            });
            _0x196440.extend(this, _0x6c816);
            return this;
        }, '_trigger': function (_0x24ee62, _0x4da7d7, _0x3d618e) {
            if (typeof _0x24ee62 === 'undefined') {
                return;
            }
            if (typeof _0x3d618e === 'undefined') {
                _0x3d618e = _0x196440('#admui-pageContent');
            }
            _0x3d618e.trigger(_0x24ee62 + '.app', _0x4da7d7);
        }
    });
    var _0x2304dc = {
        'pageAside': function () {
            var _0x349803 = _0x196440('.page-aside'),
                _0x4f828a = _0x349803.hasClass('open');
            _0x349803.toggleClass('open', !_0x4f828a);
        }, 'run': function (_0x574054) {
            var _0x17216a = this;
            _0x196440(_0x2b98d3)['on']('click', '.page-aside-switch', function (_0x266299) {
                _0x17216a.pageAside();
                _0x266299['stopPropagation']();
            });
            _0x574054();
        }
    };
    _0x49dfca.App = _0x196440.extend({}, _0x20dec2);
    App.extend(_0x2304dc);
}(window, document, jQuery));