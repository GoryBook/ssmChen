(function (_0x1151e7, _0x495128, _0x33ea19) {

    _0x33ea19['fn']['dataTable'].pipeline = function (_0x39e2a3) {
        var _0x521f46 = _0x33ea19.extend({
            'pages': 0x5,
            'url': 'http://demo.admui.com/employee/query',
            'data': null,
            'method': 'GET',
            'dataType': 'jsonp'
        }, _0x39e2a3);
        var _0x4147c5 = -0x1;
        var _0xeb1677 = null;
        var _0x485fa0 = null;
        var _0x3d8f26 = null;
        return function (_0x391795, _0x5ac099, _0x23fbe9) {
            var _0x4ed5f3 = ![],
                _0x1e25e6;
            var _0x420946 = _0x391795['start'];
            var _0x4ae007 = _0x391795['start'];
            var _0x437ea9 = _0x391795['length'];
            var _0x2afb2f = _0x420946 + _0x437ea9;
            if (_0x23fbe9.clearCache) {
                _0x4ed5f3 = !![];
                _0x23fbe9['clearCache'] = ![];
            } else if (_0x4147c5 < 0x0 || _0x420946 < _0x4147c5 || _0x2afb2f > _0xeb1677) {
                _0x4ed5f3 = !![];
            } else if (JSON['stringify'](_0x391795['order']) !== JSON.stringify(_0x485fa0.order) || JSON.stringify(_0x391795.columns) !== JSON['stringify'](_0x485fa0.columns) || JSON.stringify(_0x391795.search) !== JSON.stringify(_0x485fa0.search)) {
                _0x4ed5f3 = !![];
            }
            _0x485fa0 = _0x33ea19.extend(!![], {}, _0x391795);
            if (_0x4ed5f3) {
                if (_0x420946 < _0x4147c5) {
                    _0x420946 = _0x420946 - _0x437ea9 * (_0x521f46.pages - 0x1);
                    _0x420946 = _0x420946 < 0x0 ? 0x0 : _0x420946;
                }
                _0x4147c5 = _0x420946;
                _0xeb1677 = _0x420946 + _0x437ea9 * _0x521f46.pages;
                _0x391795.start = _0x420946;
                _0x391795.length = _0x437ea9 * _0x521f46.pages;
                if (_0x33ea19.isFunction(_0x521f46.data)) {
                    var _0x4b7c0f = _0x521f46.data(_0x391795);
                    _0x391795 = _0x4b7c0f === !![] ? _0x33ea19.extend(_0x391795, _0x4b7c0f) : _0x391795;
                } else if (_0x33ea19.isPlainObject(_0x521f46.data)) {
                    _0x33ea19['extend'](_0x391795, _0x521f46.data);
                }
                _0x23fbe9.jqXHR = _0x33ea19['ajax']({
                    'type': _0x521f46.method,
                    'url': _0x521f46.url,
                    'data': _0x391795,
                    'dataType': 'jsonp',
                    'cache': ![],
                    'success': function (_0x2fa46e) {
                        _0x3d8f26 = _0x33ea19.extend(!![], {}, _0x2fa46e);
                        if (_0x4147c5 !== _0x4ae007) {
                            _0x2fa46e.data.splice(0x0, _0x4ae007 - _0x4147c5);
                        }
                        if (_0x437ea9 >= -0x1) {
                            _0x2fa46e.data.splice(_0x437ea9, _0x2fa46e.data['length']);
                        }
                        _0x5ac099(_0x2fa46e);
                    }
                });
            } else {
                _0x1e25e6 = _0x33ea19.extend(!![], {}, _0x3d8f26);
                _0x1e25e6.draw = _0x391795['draw'];
                _0x1e25e6.data['splice'](0x0, _0x420946 - _0x4147c5);
                _0x1e25e6.data.splice(_0x437ea9, _0x1e25e6.data.length);
                _0x5ac099(_0x1e25e6);
            }
        };
    };
    _0x33ea19['fn'].dataTable.Api.register('clearPipeline()', function () {
        return this.iterator('table', function (_0x58bfb3) {
            _0x58bfb3['clearCache'] = !![];
        });
    });
    _0x33ea19('#dataTableExample').DataTable(_0x33ea19['po']('dataTable', {
        'processing': !![],
        'serverSide': !![],
        'ajax': _0x33ea19['fn'].dataTable.pipeline({
            'url': 'http://demo.admui.com/employee/query',
            'dataType': 'jsonp',
            'pages': 0x5
        }),
        'columns': [{
            'data': 'name'
        }, {
            'data': 'title'
        }, {
            'data': 'base'
        }, {
            'data': 'age'
        }, {
            'data': 'hireDate'
        }, {
            'data': 'salary'
        }]
    }));
}(window, document, jQuery));