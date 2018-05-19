(function () {

    var _0x45320e = {
        'run': function () {
            this.barChart();
            this.scoreChart();
        }, 'scoreChart': function () {
            var _0x532675 = function (_0x324694, _0xd88445, _0x4130c8, _0x54c6d9) {
                var _0x4c8d3f = new Chartist['Line']('#' + _0x324694, {
                    'labels': _0xd88445,
                    'series': [_0x4130c8, _0x54c6d9]
                }, {
                        'lineSmooth': Chartist['Interpolation'].simple({
                            'divisor': 0x2
                        }),
                        'fullWidth': !![],
                        'chartPadding': {
                            'right': 0x19
                        },
                        'series': {
                            'series-1': {
                                'showArea': !![]
                            },
                            'series-2': {
                                'showArea': !![]
                            }
                        },
                        'axisX': {
                            'showGrid': ![]
                        },
                        'axisY': {
                            'labelInterpolationFnc': function (_0x5f3fd5) {
                                return _0x5f3fd5 / 0x3e8 + 'K';
                            }, 'scaleMinSpace': 0x28
                        },
                        'plugins': [Chartist.plugins.tooltip()],
                        'low': 0x0,
                        'height': 0x12c
                    });
                _0x4c8d3f['on']('created', function (_0x2abfce) {
                    var _0x1db8d1 = _0x2abfce.svg.querySelector('defs') || _0x2abfce.svg.elem('defs');
                    var _0xe06cb3 = _0x1db8d1.elem('filter', {
                        'x': 0x0,
                        'y': '-10%',
                        'id': 'shadow' + _0x324694
                    }, '', !![]);
                    _0xe06cb3.elem('feBlend', {
                        'in': 'SourceGraphic',
                        'mode': 'multiply'
                    });
                    return _0x1db8d1;
                })['on']('draw', function (_0x5ed949) {
                    if (_0x5ed949.type === 'line') {
                        _0x5ed949['element'].attr({
                            'filter': 'url(#shadow' + _0x324694 + ')'
                        });
                    } else if (_0x5ed949.type === 'point') {
                        var _0x364879 = new Chartist[('Svg')](_0x5ed949.element._node['parentNode']);
                        _0x364879.elem('line', {
                            'x1': _0x5ed949['x'],
                            'y1': _0x5ed949['y'],
                            'x2': _0x5ed949['x'] + 0.01,
                            'y2': _0x5ed949['y'],
                            'class': 'ct-point-content'
                        });
                    }
                    if (_0x5ed949.type === 'line' || _0x5ed949['type'] === 'area') {
                        _0x5ed949.element.animate({
                            'd': {
                                'begin': 0x3e8 * _0x5ed949.index,
                                'dur': 0x3e8,
                                'from': _0x5ed949.path.clone().scale(0x1, 0x0)['translate'](0x0, _0x5ed949.chartRect.height())['stringify'](),
                                'to': _0x5ed949.path.clone().stringify(),
                                'easing': Chartist['Svg']['Easing'].easeOutQuint
                            }
                        });
                    }
                });
            };
            var _0x274500 = ['1:00-3:00', '3:00-6:00', '6:00-9:00', '9:00-12:00', '12:00-15:00', '15:00-18:00', '18:00-21:00', '21:00-1:00'];
            var _0x34c9cc = {
                'name': 'series-1',
                'data': [0x960, 0x1194, 0x1388, 0x17d4, 0x1e14, 0x1388, 0x6a4]
            };
            var _0x446096 = {
                'name': 'series-2',
                'data': [0x514, 0x1004, 0x1f40, 0xfa0, 0x19c8, 0x15e0, 0xed8]
            };
            var _0x25b39a = ['周一', '周二', '周三', '周四', '周五', '周六', '周日', ''];
            var _0x2e0c2b = {
                'name': 'series-1',
                'data': [0x4650, 0x9088, 0xa028, 0x7148, 0xe290, 0x124f8, 0xa7f8]
            };
            var _0x3522e7 = {
                'name': 'series-2',
                'data': [0x7530, 0x4e20, 0xa7f8, 0x109a0, 0x11940, 0xcf08, 0x101d0]
            };
            var _0x23f41c = ['9.1', '9.2', '9.3', '9.4', '9.5', '9.6', '9.7'];
            var _0x30d9e1 = {
                'name': 'series-1',
                'data': [0x186a0, 0x7a120, 0x493e0, 0xaae60, 0x186a0, 0x30d40, 0xaae60]
            };
            var _0x4678fa = {
                'name': 'series-2',
                'data': [0x493e0, 0x61a80, 0x30d40, 0x927c0, 0xc3500, 0x927c0, 0x493e0]
            };
            var _0x5c5970 = function (_0x39a771) {
                var _0x45736b = _0x39a771 || $('#ecommerceChartView\x20.chart-action').children('.active');
                var _0x5aca09 = _0x45736b.children('a').attr('href');
                switch (_0x5aca09) {
                    case '#scoreLineToDay':
                        _0x532675('scoreLineToDay', _0x274500, _0x34c9cc, _0x446096);
                        break;
                    case '#scoreLineToWeek':
                        _0x532675('scoreLineToWeek', _0x25b39a, _0x2e0c2b, _0x3522e7);
                        break;
                    case '#scoreLineToMonth':
                        _0x532675('scoreLineToMonth', _0x23f41c, _0x30d9e1, _0x4678fa);
                        break;
                }
            };
            _0x5c5970();
            $('.chart-action li')['on']('click', function () {
                _0x5c5970($(this));
            });
        }, 'barChart': function () {
            var _0x289c90 = new Chartist[('Bar')]('.barChart', {
                'labels': ['2月', '3月', '4月', '5月', '6月'],
                'series': [
                    [0x276, 0x2bc, 0x1f4, 0x190, 0x30c],
                    [0x190, 0x320, 0x2bc, 0x1f4, 0x2bc]
                ]
            }, {
                    'axisX': {
                        'showGrid': ![]
                    },
                    'axisY': {
                        'showGrid': ![],
                        'scaleMinSpace': 0x1e
                    },
                    'height': 0xdc,
                    'seriesBarDistance': 0x18
                });
            _0x289c90['on']('draw', function (_0x2af490) {
                if (_0x2af490['type'] === 'bar') {
                    var _0x6f6e21 = new Chartist[('Svg')](_0x2af490.element._node.parentNode);
                    _0x6f6e21.elem('line', {
                        'x1': _0x2af490['x1'],
                        'x2': _0x2af490['x2'],
                        'y1': _0x2af490['y2'],
                        'y2': 0x0,
                        'class': 'ct-bar-fill'
                    });
                }
            });
        }
    };
    _0x45320e.run();
}());