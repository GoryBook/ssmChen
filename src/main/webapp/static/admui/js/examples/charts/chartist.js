(function (_0x29bd98, _0x45145a) {

    var _0x4b5e50 = function () {
        var _0xbc1501 = {
            'labels': ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            'series': [
                [0x1, 0x2, 2.7, 0x0, 0x3, 0x5, 0x3, 0x4, 0x8, 0xa, 0xc, 0x7],
                [0x0, 1.2, 0x2, 0x7, 2.5, 0x9, 0x5, 0x8, 0x9, 0xb, 0xe, 0x4],
                [0xa, 0x9, 0x8, 6.5, 6.8, 0x6, 5.4, 5.3, 4.5, 4.4, 0x3, 2.8]
            ]
        };
        var _0x35a813 = [
            [{
                'axisX': {
                    'labelInterpolationFnc': function (_0x5702dc, _0x210ff7) {
                        if (_0x210ff7 % 0x2 !== 0x0) {
                            return ![];
                        } else {
                            return _0x5702dc;
                        }
                    }
                }
            }]
        ];
        new Chartist[('Line')]('#exampleLineAnimation', _0xbc1501, null, _0x35a813);
    };
    var _0x18f824 = function () {
        new Chartist[('Line')]('#exampleSimpleLine', {
            'labels': ['星期一', '星期二', '星期三', '星期四', '星期五'],
            'series': [
                [0xc, 0x9, 0x7, 0x8, 0x5],
                [0x2, 0x1, 3.5, 0x7, 0x3],
                [0x1, 0x3, 0x4, 0x5, 0x6]
            ]
        }, {
                'fullWidth': !![],
                'chartPadding': {
                    'right': 0x28
                }
            });
    };
    var _0x23b18a = function () {
        var _0x290dfb = function (_0xf84314) {
            return Array['apply'](null, new Array(_0xf84314));
        };
        var _0x1f2b86 = _0x290dfb(0x34).map(Math['random'])['reduce'](function (_0x176618, _0x32146d, _0xe61c36) {
            _0x176618.labels.push(_0xe61c36 + 0x1);
            _0x176618.series.forEach(function (_0x2cb2dd) {
                _0x2cb2dd['push'](Math.random() * 0x64);
            });
            return _0x176618;
        }, {
                'labels': [],
                'series': _0x290dfb(0x4).map(function () {
                    return [];
                })
            });
        var _0x1f2aac = {
            'showLine': ![],
            'axisX': {
                'labelInterpolationFnc': function (_0xa3b05d, _0x29cbd8) {
                    return _0x29cbd8 % 0xd === 0x0 ? 'W' + _0xa3b05d : null;
                }
            }
        };
        var _0x5d80c0 = [
            ['screen and (min-width: 640px)', {
                'axisX': {
                    'labelInterpolationFnc': function (_0x587338, _0x27830d) {
                        return _0x27830d % 0x4 === 0x0 ? 'W' + _0x587338 : null;
                    }
                }
            }]
        ];
        new Chartist[('Line')]('#exampleLineScatter', _0x1f2b86, _0x1f2aac, _0x5d80c0);
    };
    var _0x4bb3d1 = function () {
        new Chartist['Line']('#exampleTooltipsLine', {
            'labels': ['1', '2', '3', '4', '5', '6'],
            'series': [{
                'name': '斐波那契序列',
                'data': [0x1, 0x2, 0x3, 0x5, 0x8, 0xd]
            }, {
                'name': '黄金分割',
                'data': [0x1, 1.618, 2.618, 4.236, 6.854, 11.09]
            }]
        }, {
                'plugins': [Chartist.plugins['tooltip']()]
            });
    };
    var _0x554392 = function () {
        new Chartist[('Line')]('#exampleAreaLine', {
            'labels': [0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8],
            'series': [
                [0x5, 0x9, 0x7, 0x8, 0x5, 0x3, 0x5, 0x4]
            ]
        }, {
                'low': 0x0,
                'showArea': !![]
            });
    };
    var _0x26f631 = function () {
        new Chartist[('Line')]('#exampleOnlyArea', {
            'labels': [0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8],
            'series': [
                [0x1, 0x2, 0x3, 0x1, -0x2, 0x0, 0x1, 0x0],
                [-0x2, -0x1, -0x2, -0x1, -2.5, -0x1, -0x2, -0x1],
                [0x0, 0x0, 0x0, 0x1, 0x2, 2.5, 0x2, 0x1],
                [2.5, 0x2, 0x1, 0.5, 0x1, 0.5, -0x1, -2.5]
            ]
        }, {
                'high': 0x3,
                'low': -0x3,
                'showArea': !![],
                'showLine': ![],
                'showPoint': ![],
                'fullWidth': !![],
                'axisX': {
                    'showLabel': ![],
                    'showGrid': ![]
                }
            });
    };
    var _0x450352 = function () {
        var _0x40d35b = new Chartist[('Line')]('#exampleLineAnimations', {
            'labels': ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
            'series': [
                [0xc, 0x9, 0x7, 0x8, 0x5, 0x4, 0x6, 0x2, 0x3, 0x3, 0x4, 0x6],
                [0x4, 0x5, 0x3, 0x7, 0x3, 0x5, 0x5, 0x3, 0x4, 0x4, 0x5, 0x5],
                [0x5, 0x3, 0x4, 0x5, 0x6, 0x3, 0x3, 0x4, 0x5, 0x6, 0x3, 0x4],
                [0x3, 0x4, 0x5, 0x6, 0x7, 0x6, 0x4, 0x5, 0x6, 0x7, 0x6, 0x3]
            ]
        }, {
                'low': 0x0
            });
        var _0x230ad7 = 0x0,
            _0x115a3c = 0x50,
            _0x6f64e3 = 0x1f4;
        _0x40d35b['on']('created', function () {
            _0x230ad7 = 0x0;
        });
        _0x40d35b['on']('draw', function (_0x466a29) {
            _0x230ad7++;
            if (_0x466a29.type === 'line') {
                _0x466a29.element.animate({
                    'opacity': {
                        'begin': _0x230ad7 * _0x115a3c + 0x3e8,
                        'dur': _0x6f64e3,
                        'from': 0x0,
                        'to': 0x1
                    }
                });
            } else if (_0x466a29['type'] === 'label' && _0x466a29.axis === 'x') {
                _0x466a29.element.animate({
                    'y': {
                        'begin': _0x230ad7 * _0x115a3c,
                        'dur': _0x6f64e3,
                        'from': _0x466a29['y'] + 0x64,
                        'to': _0x466a29['y'],
                        'easing': 'easeOutQuart'
                    }
                });
            } else if (_0x466a29.type === 'label' && _0x466a29.axis === 'y') {
                _0x466a29.element.animate({
                    'x': {
                        'begin': _0x230ad7 * _0x115a3c,
                        'dur': _0x6f64e3,
                        'from': _0x466a29['x'] - 0x64,
                        'to': _0x466a29['x'],
                        'easing': 'easeOutQuart'
                    }
                });
            } else if (_0x466a29.type === 'point') {
                _0x466a29.element['animate']({
                    'x1': {
                        'begin': _0x230ad7 * _0x115a3c,
                        'dur': _0x6f64e3,
                        'from': _0x466a29['x'] - 0xa,
                        'to': _0x466a29['x'],
                        'easing': 'easeOutQuart'
                    },
                    'x2': {
                        'begin': _0x230ad7 * _0x115a3c,
                        'dur': _0x6f64e3,
                        'from': _0x466a29['x'] - 0xa,
                        'to': _0x466a29['x'],
                        'easing': 'easeOutQuart'
                    },
                    'opacity': {
                        'begin': _0x230ad7 * _0x115a3c,
                        'dur': _0x6f64e3,
                        'from': 0x0,
                        'to': 0x1,
                        'easing': 'easeOutQuart'
                    }
                });
            } else if (_0x466a29['type'] === 'grid') {
                var _0x5273cd = {
                    'begin': _0x230ad7 * _0x115a3c,
                    'dur': _0x6f64e3,
                    'from': _0x466a29[_0x466a29.axis['units'].pos + '1'] - 0x1e,
                    'to': _0x466a29[_0x466a29.axis.units.pos + '1'],
                    'easing': 'easeOutQuart'
                };
                var _0x428c17 = {
                    'begin': _0x230ad7 * _0x115a3c,
                    'dur': _0x6f64e3,
                    'from': _0x466a29[_0x466a29.axis.units.pos + '2'] - 0x64,
                    'to': _0x466a29[_0x466a29.axis['units'].pos + '2'],
                    'easing': 'easeOutQuart'
                };
                var _0x18015a = {};
                _0x18015a[_0x466a29.axis.units.pos + '1'] = _0x5273cd;
                _0x18015a[_0x466a29['axis'].units['pos'] + '2'] = _0x428c17;
                _0x18015a.opacity = {
                    'begin': _0x230ad7 * _0x115a3c,
                    'dur': _0x6f64e3,
                    'from': 0x0,
                    'to': 0x1,
                    'easing': 'easeOutQuart'
                };
                _0x466a29['element'].animate(_0x18015a);
            }
        });
        _0x40d35b['on']('created', function () {
            if (_0x45145a.__exampleAnimateTimeout) {
                clearTimeout(_0x45145a.__exampleAnimateTimeout);
                _0x45145a.__exampleAnimateTimeout = null;
            }
            _0x45145a.__exampleAnimateTimeout = setTimeout(_0x40d35b.update.bind(_0x40d35b), 0x2ee0);
        });
    };
    var _0x243555 = function () {
        var _0x1d0545 = new Chartist[('Line')]('#examplePathAnimation', {
            'labels': ['周一', '周二', '周三', '周四', '周五', '周六'],
            'series': [
                [0x1, 0x5, 0x2, 0x5, 0x4, 0x3],
                [0x2, 0x3, 0x4, 0x8, 0x1, 0x2],
                [0x5, 0x4, 0x3, 0x2, 0x1, 0.5]
            ]
        }, {
                'low': 0x0,
                'showArea': !![],
                'showPoint': ![],
                'fullWidth': !![]
            });
        _0x1d0545['on']('draw', function (_0xa420af) {
            if (_0xa420af['type'] === 'line' || _0xa420af.type === 'area') {
                _0xa420af.element['animate']({
                    'd': {
                        'begin': 0x7d0 * _0xa420af['index'],
                        'dur': 0x7d0,
                        'from': _0xa420af.path.clone().scale(0x1, 0x0)['translate'](0x0, _0xa420af.chartRect.height()).stringify(),
                        'to': _0xa420af.path['clone']()['stringify'](),
                        'easing': Chartist['Svg'].Easing.easeOutQuint
                    }
                });
            }
        });
    };
    var _0x33c8f2 = function () {
        new Chartist[('Line')]('#exampleSmoothingLine', {
            'labels': [0x1, 0x2, 0x3, 0x4, 0x5],
            'series': [
                [0x1, 0x5, 0xa, 0x0, 0x1],
                [0xa, 0xf, 0x0, 0x1, 0x2]
            ]
        }, {
                'lineSmooth': Chartist.Interpolation.simple({
                    'divisor': 0x2
                }),
                'fullWidth': !![],
                'chartPadding': {
                    'right': 0x14
                },
                'low': 0x0
            });
    };
    var _0x344f6f = function () {
        var _0x3c6d23 = {
            'labels': ['2', '3', '3', '4', '5', '6', '7', '8', '9', '10'],
            'series': [
                [0x1, 0x2, 0x4, 0x8, 0x6, -0x2, -0x1, -0x4, -0x6, -0x2]
            ]
        };
        var _0x3d632c = {
            'high': 0xa,
            'low': -0xa,
            'axisX': {
                'labelInterpolationFnc': function (_0x38ae8c, _0x4b457d) {
                    return _0x4b457d % 0x2 === 0x0 ? _0x38ae8c : null;
                }
            }
        };
        new Chartist[('Bar')]('#exampleBiPolarBar', _0x3c6d23, _0x3d632c);
    };
    var _0x42aff0 = function () {
        var _0x1f4160 = {
            'labels': ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            'series': [
                [0x5, 0x4, 0x3, 0x7, 0x5, 0xa, 0x3, 0x4, 0x8, 0xa, 0x6, 0x8],
                [0x3, 0x2, 0x9, 0x5, 0x4, 0x6, 0x4, 0x6, 0x7, 0x8, 0x7, 0x4]
            ]
        };
        var _0x54bf87 = {
            'seriesBarDistance': 0xa
        };
        var _0x2d5cdd = [
            ['screen and (max-width: 640px)', {
                'seriesBarDistance': 0x5,
                'axisX': {
                    'labelInterpolationFnc': function (_0x16e177) {
                        return _0x16e177[0x0];
                    }
                }
            }]
        ];
        new Chartist[('Bar')]('#exampleOverlappingBar', _0x1f4160, _0x54bf87, _0x2d5cdd);
    };
    var _0x5d9268 = function () {
        var _0x3fcb23 = new Chartist[('Bar')]('#examplePeakCirclesBar', {
            'labels': ['1', '3', '3', '4', '5', '6', '7', '8', '9', '10'],
            'series': [
                [0x1, 0x2, 0x4, 0x8, 0x6, -0x2, -0x1, -0x4, -0x6, -0x2]
            ]
        }, {
                'high': 0xa,
                'low': -0xa,
                'axisX': {
                    'labelInterpolationFnc': function (_0x452de2, _0x50dc17) {
                        return _0x50dc17 % 0x2 === 0x0 ? _0x452de2 : null;
                    }
                }
            });
        _0x3fcb23['on']('draw', function (_0x43c03c) {
            if (_0x43c03c['type'] === 'bar') {
                _0x43c03c.group.append(new Chartist[('Svg')]('circle', {
                    'cx': _0x43c03c['x2'],
                    'cy': _0x43c03c['y2'],
                    'r': Math['abs'](Chartist['getMultiValue'](_0x43c03c.value)) * 0x2 + 0x5
                }, 'ct-slice-pie'));
            }
        });
    };
    var _0x5b13c7 = function () {
        new Chartist[('Bar')]('#exampleMultiLabelsBar', {
            'labels': ['第1季度', '第2季度', '第3季度', '第4季度'],
            'series': [
                [0xea60, 0x9c40, 0x13880, 0x11170],
                [0x9c40, 0x7530, 0x11170, 0xfde8],
                [0x1f40, 0xbb8, 0x2710, 0x1770]
            ]
        }, {
                'seriesBarDistance': 0xa,
                'axisX': {
                    'offset': 0x3c
                },
                'axisY': {
                    'offset': 0x50,
                    'labelInterpolationFnc': function (_0x1a2d4c) {
                        return _0x1a2d4c + ' CHF';
                    }, 'scaleMinSpace': 0xf
                }
            });
    };
    var _0x1d3826 = function () {
        new Chartist[('Bar')]('#exampleStackedBar', {
            'labels': ['Q1', 'Q2', 'Q3', 'Q4'],
            'series': [
                [0xc3500, 0x124f80, 0x155cc0, 0x13d620],
                [0x30d40, 0x61a80, 0x7a120, 0x493e0],
                [0x186a0, 0x30d40, 0x61a80, 0x927c0]
            ]
        }, {
                'stackBars': !![],
                'axisY': {
                    'labelInterpolationFnc': function (_0x2669f0) {
                        return _0x2669f0 / 0x3e8 + 'k';
                    }
                }
            })['on']('draw', function (_0x5c0495) {
                if (_0x5c0495.type === 'bar') {
                    _0x5c0495.element.attr({
                        'style': 'stroke-width: 30px'
                    });
                }
            });
    };
    var _0x321631 = function () {
        new Chartist[('Bar')]('#exampleHorizontalBar', {
            'labels': ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'],
            'series': [
                [0x5, 0x4, 0x3, 0x7, 0x5, 0xa, 0x3],
                [0x3, 0x2, 0x9, 0x5, 0x4, 0x6, 0x4]
            ]
        }, {
                'seriesBarDistance': 0xa,
                'reverseData': !![],
                'horizontalBars': !![],
                'axisY': {
                    'offset': 0x46
                }
            });
    };
    var _0xe2a20e = function () {
        new Chartist['Bar']('#exampleResponsiveBar', {
            'labels': ['第1部分', '第2部分', '第3部分', '第4部分'],
            'series': [
                [0x5, 0x4, 0x3, 0x7],
                [0x3, 0x2, 0x9, 0x5],
                [0x1, 0x5, 0x8, 0x4],
                [0x2, 0x3, 0x4, 0x6],
                [0x4, 0x1, 0x2, 0x1]
            ]
        }, {
                'stackBars': !![],
                'axisX': {
                    'labelInterpolationFnc': function (_0x23c2db) {
                        return _0x23c2db.split(/\s+/).map(function (_0x442be8) {
                            return _0x442be8[0x0];
                        }).join('');
                    }
                },
                'axisY': {
                    'offset': 0x14
                }
            }, [
                ['screen and (min-width: 480px)', {
                    'reverseData': !![],
                    'horizontalBars': !![],
                    'axisX': {
                        'labelInterpolationFnc': Chartist.noop
                    },
                    'axisY': {
                        'offset': 0x3c
                    }
                }],
                ['screen\x20and\x20(min-width:\x20992px)', {
                    'stackBars': ![],
                    'seriesBarDistance': 0xa
                }],
                ['screen and (min-width: 1200px)', {
                    'reverseData': ![],
                    'horizontalBars': ![],
                    'seriesBarDistance': 0xf
                }]
            ]);
    };
    var _0x372fe4 = function () {
        var _0xe6fc76 = {
            'series': [0x5, 0x3, 0x4]
        };
        var _0x972221 = function (_0x340bf9, _0x4db6fc) {
            return _0x340bf9 + _0x4db6fc;
        };
        new Chartist[('Pie')]('#exampleSimplePie', _0xe6fc76, {
            'labelInterpolationFnc': function (_0x45340b) {
                return Math['round'](_0x45340b / _0xe6fc76['series'].reduce(_0x972221) * 0x64) + '%';
            }
        });
    };
    var _0x50042e = function () {
        var _0x3ea57e = {
            'labels': ['香蕉', '苹果', '葡萄'],
            'series': [0x14, 0xf, 0x28]
        };
        var _0x995fe2 = {
            'labelInterpolationFnc': function (_0x32aaae) {
                return _0x32aaae[0x0];
            }
        };
        var _0x268361 = [
            ['screen and (min-width: 640px)', {
                'chartPadding': 0x1e,
                'labelOffset': 0x64,
                'labelDirection': 'explode',
                'labelInterpolationFnc': function (_0x40a379) {
                    return _0x40a379;
                }
            }],
            ['screen and (min-width: 1024px)', {
                'labelOffset': 0x50,
                'chartPadding': 0x14
            }]
        ];
        new Chartist[('Pie')]('#exampleLabelsPie', _0x3ea57e, _0x995fe2, _0x268361);
    };
    var _0x583d1a = function () {
        new Chartist[('Pie')]('#exampleGaugePie', {
            'series': [0x14, 0xa, 0x1e, 0x28]
        }, {
                'donut': !![],
                'donutWidth': 0x3c,
                'startAngle': 0x10e,
                'total': 0xc8,
                'showLabel': ![]
            });
    };
    _0x4b5e50();
    _0x18f824();
    _0x23b18a();
    _0x4bb3d1();
    _0x554392();
    _0x26f631();
    _0x450352();
    _0x243555();
    _0x33c8f2();
    _0x344f6f();
    _0x42aff0();
    _0x5d9268();
    _0x5b13c7();
    _0x1d3826();
    _0x321631();
    _0xe2a20e();
    _0x372fe4();
    _0x50042e();
    _0x583d1a();
}(document, window));