(function (_0x27a2eb, _0x300621, _0x3801f0) {

    var _0x3b55bc = function () {
        var _0xf1dc3a = {
            'showArea': !![],
            'low': 0x0,
            'high': 0x1f40,
            'height': 0xf0,
            'fullWidth': !![],
            'axisX': {
                'offset': 0x28
            },
            'axisY': {
                'offset': 0x1e,
                'labelInterpolationFnc': function (_0x4ee3e2) {
                    if (_0x4ee3e2 === 0x0) {
                        return null;
                    }
                    return _0x4ee3e2 / 0x3e8 + 'k';
                }, 'scaleMinSpace': 0x28
            },
            'plugins': [Chartist.plugins['tooltip']()]
        };
        var _0x41ba33 = ['1:00-3:00', '3:00-6:00', '6:00-9:00', '9:00-12:00', '12:00-15:00', '15:00-18:00', '18:00-21:00', '21:00-1:00'];
        var _0x3272e6 = {
            'name': 'series-1',
            'data': [0x0, 0x1c84, 0x1838, 0x1ab1, 0x1d90, 0x120c, 0x12f8, 0xbb6]
        };
        var _0x18d22d = {
            'name': 'series-2',
            'data': [0x0, 0xc1c, 0x1c20, 0x1490, 0x16ea, 0x898, 0xf0a, 0x408]
        };
        var _0x1216f5 = ['周一', '周二', '周三', '周四', '周五', '周六', '周日', ''];
        var _0x4ba664 = {
            'name': 'series-1',
            'data': [0x0, 0x960, 0x1838, 0x1e99, 0x15c0, 0xe24, 0x12f8, 0xbb6]
        };
        var _0x183f70 = {
            'name': 'series-2',
            'data': [0x0, 0x1004, 0x1a90, 0x1490, 0x16ea, 0xc80, 0xb22, 0x408]
        };
        var _0x44ff48 = ['9.1', '9.2', '9.3', '9.4', '9.5', '9.6', '9.7'];
        var _0x5753fb = {
            'name': 'series-1',
            'data': [0x0, 0x1900, 0x1450, 0x1e99, 0x15c0, 0xe24, 0x16e0, 0x0]
        };
        var _0x3d9ef1 = {
            'name': 'series-2',
            'data': [0x0, 0xc1c, 0x12c0, 0x1490, 0x1ad2, 0xc80, 0xb22, 0x408]
        };
        var _0x3866c1 = function (_0x54fee4, _0x4a59c9, _0x5d117d, _0x3a363b, _0x1be1ae) {
            var _0x190a00 = new Chartist[('Line')](_0x54fee4, {
                'labels': _0x4a59c9,
                'series': [_0x5d117d, _0x3a363b]
            }, _0x1be1ae);
            _0x190a00['on']('draw', function (_0x1a2634) {
                var _0x29d2eb, _0x37ffb2;
                if (_0x1a2634.type === 'point') {
                    _0x29d2eb = _0x1a2634.element;
                    _0x37ffb2 = new Chartist[('Svg')](_0x29d2eb._node.parentNode);
                    _0x37ffb2.elem('line', {
                        'x1': _0x1a2634['x'],
                        'y1': _0x1a2634['y'],
                        'x2': _0x1a2634['x'] + 0.01,
                        'y2': _0x1a2634['y'],
                        'class': 'ct-point-content'
                    });
                }
            });
        };
        var _0x384da = function (_0x3fbb1b) {
            var _0x369da4 = _0x3fbb1b || _0x3801f0('#productOverviewWidget\x20.product-filters').children('.active'),
                _0x3e10f6 = _0x369da4.children('a').attr('href');
            switch (_0x3e10f6) {
                case '#scoreLineToDay':
                    _0x3866c1(_0x3e10f6, _0x41ba33, _0x3272e6, _0x18d22d, _0xf1dc3a);
                    break;
                case '#scoreLineToWeek':
                    _0x3866c1(_0x3e10f6, _0x1216f5, _0x4ba664, _0x183f70, _0xf1dc3a);
                    break;
                case '#scoreLineToMonth':
                    _0x3866c1(_0x3e10f6, _0x44ff48, _0x5753fb, _0x3d9ef1, _0xf1dc3a);
                    break;
            }
        };
        _0x384da();
        _0x3801f0('.product-filters li')['on']('click', function () {
            _0x384da(_0x3801f0(this));
        });
    };
    var _0x21dbd5 = function () {
        var _0x1b4b3a = {
            'labels': ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
            'series': [
                [0x3, 0x4, 0x6, 0xa, 0x8, 0x6, 0x3, 0x4],
                [0x2, 0x3, 0x5, 0x8, 0x6, 0x5, 0x4, 0x3]
            ]
        };
        var _0x189c1e = {
            'labels': ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
            'series': [
                [0x2, 0x4, 0x5, 0xa, 0x6, 0x8, 0x3, 0x5],
                [0x3, 0x5, 0x6, 0x5, 0x4, 0x6, 0x3, 0x3]
            ]
        };
        var _0x3fda00 = {
            'labels': ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
            'series': [
                [0x5, 0x2, 0x6, 0x7, 0xa, 0x8, 0x6, 0x5],
                [0x4, 0x3, 0x5, 0x6, 0x8, 0x6, 0x4, 0x3]
            ]
        };
        var _0x4944ab = [_0x1b4b3a, _0x189c1e, _0x3fda00, _0x3fda00];
        var _0x104191 = {
            'low': 0x0,
            'high': 0xa,
            'seriesBarDistance': 0x6,
            'fullWidth': !![],
            'axisX': {
                'showLabel': ![],
                'showGrid': ![],
                'offset': 0x0
            },
            'axisY': {
                'showLabel': ![],
                'showGrid': ![],
                'offset': 0x0
            },
            'chartPadding': {
                'left': 0x1e
            }
        };
        var _0x9fb6ee = [
            ['screen and (max-width: 640px)', {
                'seriesBarDistance': 0x6,
                'axisX': {
                    'labelInterpolationFnc': function (_0x40b158) {
                        return _0x40b158[0x0];
                    }
                }
            }]
        ];
        var _0x369e99 = function (_0x261d52, _0x2d02b1, _0x1076e7, _0x4fdf62) {
            new Chartist[('Bar')](_0x261d52, _0x2d02b1, _0x1076e7, _0x4fdf62);
        };
        _0x3801f0('#productOptionsData\x20.ct-chart').each(function (_0x4c45ee) {
            _0x369e99(this, _0x4944ab[_0x4c45ee], _0x104191, _0x9fb6ee);
        });
    };
    var _0x4cb2d8 = function () {
        new Chartist[('Bar')]('#weekStackedBarChart', {
            'labels': ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
            'series': [
                [0x4, 4.5, 0x5, 0x6, 0x7, 7.5, 0x7],
                [0x6, 5.5, 0x5, 0x4, 0x3, 2.5, 0x3]
            ]
        }, {
                'stackBars': !![]
            })['on']('draw', function (_0x5d4c82) {
                if (_0x5d4c82.type === 'bar') {
                    _0x5d4c82.element['attr']({
                        'style': 'stroke-width: 20px'
                    });
                }
            });
    };
    var _0x31d9cf = function () {
        var _0x365f34 = Morris.Donut({
            'resize': !![],
            'element': 'browersVistsDonut',
            'data': [{
                'label': 'Chrome',
                'value': 0x1a9
            }, {
                'label': 'Firfox',
                'value': 0x686
            }, {
                'label': 'Safari',
                'value': 0x44c
            }],
            'colors': ['#f96868', '#62a9eb', '#f3a754']
        });
        _0x300621.morris = [];
        _0x300621.morris.push(_0x365f34);
    };
    _0x3b55bc();
    _0x21dbd5();
    _0x4cb2d8();
    _0x31d9cf();
}(document, window, jQuery));