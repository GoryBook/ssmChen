(function (_0x1bd9ef, _0x5d2f0d, _0x3a15ad) {

    var _0x8e9219 = 'asSelectable';
    var _0x2049fd = _0x3a15ad[_0x8e9219] = function (_0x41a753, _0x1dc535) {
        this.element = _0x41a753;
        this['$element'] = _0x3a15ad(_0x41a753);
        this.options = _0x3a15ad['extend']({}, _0x2049fd.defaults, _0x1dc535, this.$element.data());
        this.init();
    };
    _0x2049fd.defaults = {
        'allSelector': '.selectable-all',
        'itemSelector': '.selectable-item',
        'rowSelector': 'tr',
        'rowSelectable': ![],
        'rowActiveClass': 'active',
        'onChange': null
    };
    _0x2049fd.prototype = {
        'constructor': _0x2049fd,
        'init': function () {
            var _0x173517 = this;
            var _0x5c41ae = this.options;
            _0x173517.$element['on']('change', _0x5c41ae.allSelector, function () {
                var _0x5d0941 = _0x3a15ad(this)['prop']('checked');
                _0x173517['getItems']().each(function () {
                    var _0x2faa61 = _0x3a15ad(this);
                    _0x2faa61['prop']('checked', _0x5d0941)['trigger']('change', [!![]]);
                    _0x173517.selectRow(_0x2faa61, _0x5d0941);
                });
            });
            _0x173517.$element['on']('click', _0x5c41ae.itemSelector, function (_0x40a49b) {
                var _0x350d20 = _0x3a15ad(this),
                    _0x45fdf5 = _0x350d20.prop('checked');
                _0x173517.selectRow(_0x350d20, _0x45fdf5);
                _0x40a49b.stopPropagation();
            });
            _0x173517.$element['on']('change', _0x5c41ae.itemSelector, function () {
                var _0x47e90d = _0x173517.$element.find(_0x5c41ae.allSelector),
                    _0x46ecd8 = _0x173517.getItems(),
                    _0x2201c1 = _0x46ecd8.length,
                    _0x1fa99e = _0x173517['getSelected']().length;
                if (_0x2201c1 === _0x1fa99e) {
                    _0x47e90d['prop']('checked', !![]);
                } else {
                    _0x47e90d.prop('checked', ![]);
                }
                _0x173517._trigger('change', _0x1fa99e);
                if (typeof _0x5c41ae['callback'] === 'function') {
                    _0x5c41ae.callback['call'](this);
                }
            });
            if (_0x5c41ae.rowSelectable) {
                _0x173517['$element']['on']('click', _0x5c41ae.rowSelector, function (_0x7172c) {
                    if ('checkbox' !== _0x7172c.target.type && 'button' !== _0x7172c.target['type'] && 'a' !== _0x7172c.target.tagName.toLowerCase() && !_0x3a15ad(_0x7172c.target)['parent']('div.checkbox-custom').length) {
                        var _0x119b61 = _0x3a15ad(_0x5c41ae.itemSelector, this),
                            _0x1975e2 = _0x119b61.prop('checked');
                        _0x119b61['prop']('checked', !_0x1975e2);
                        _0x173517.selectRow(_0x119b61, !_0x1975e2);
                    }
                });
            }
        }, 'selectRow': function (_0x2ec470, _0x5e7555) {
            if (_0x5e7555) {
                _0x2ec470['parents'](this['options'].rowSelector).addClass(this.options.rowActiveClass);
            } else {
                _0x2ec470['parents'](this.options.rowSelector).removeClass(this.options.rowActiveClass);
            }
        }, 'getItems': function () {
            return this.$element.find(this.options.itemSelector);
        }, 'getSelected': function () {
            return this.getItems().filter(':checked');
        }, '_trigger': function (_0x16d5cd) {
            var _0x3f77e7 = Array['prototype'].slice['call'](arguments, 0x1),
                _0x33e5a8 = [this].concat(_0x3f77e7);
            this.$element.trigger(_0x8e9219 + '::' + _0x16d5cd, _0x33e5a8);
            _0x16d5cd = _0x16d5cd.replace(/\b\w+\b/g, function (_0x3c83d3) {
                return _0x3c83d3['substring'](0x0, 0x1).toUpperCase() + _0x3c83d3.substring(0x1);
            });
            var _0x723226 = 'on' + _0x16d5cd;
            if (typeof this.options[_0x723226] === 'function') {
                this.options[_0x723226].apply(this, _0x3f77e7);
            }
        }
    };
    _0x3a15ad['fn'][_0x8e9219] = function (_0x226292) {
        var _0x17a042 = _0x226292,
            _0x14dc83 = this['first']().data(_0x8e9219),
            _0x15fa92 = Array.prototype.slice['call'](arguments, 0x1);
        if (typeof _0x226292 === 'string') {
            if (/^_/.test(_0x17a042)) {
                return ![];
            } else if (/^(get)/.test(_0x17a042) && _0x14dc83 && typeof _0x14dc83[_0x17a042] === 'function') {
                return _0x14dc83[_0x17a042].apply(_0x14dc83, _0x15fa92);
            } else {
                return this.each(function () {
                    var _0x1f0732 = _0x3a15ad['data'](this, _0x8e9219);
                    if (_0x1f0732 && typeof _0x1f0732[_0x17a042] === 'function') {
                        _0x1f0732[_0x17a042]['apply'](_0x1f0732, _0x15fa92);
                    }
                });
            }
        } else {
            return this.each(function () {
                if (!_0x3a15ad.data(this, _0x8e9219)) {
                    _0x3a15ad.data(this, _0x8e9219, new _0x2049fd(this, _0x226292));
                }
            });
        }
    };
}(window, document, jQuery));