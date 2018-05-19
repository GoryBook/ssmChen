(function (_0x374918, _0x214734, _0x33e9c9) {

    var _0x12b393 = function () {
        var _0x181b2f = _0x33e9c9('#exampleFlotRealtime');
        if (!_0x33e9c9.isFunction(_0x33e9c9['fn']['plot']) || _0x181b2f['length'] === 0x0) {
            return;
        }
        var _0xe3b03f = [];
        var _0x538494 = 0xfa;

        function _0x55581e() {
            if (_0xe3b03f.length > 0x0) {
                _0xe3b03f = _0xe3b03f['slice'](0x1);
            }
            while (_0xe3b03f.length < _0x538494) {
                var _0x9440a5 = _0xe3b03f.length > 0x0 ? _0xe3b03f[_0xe3b03f.length - 0x1] : 0x32;
                var _0x1975f2 = _0x9440a5 + Math.random() * 0xa - 0x5;
                if (_0x1975f2 < 0x0) {
                    _0x1975f2 = 0x0;
                } else if (_0x1975f2 > 0x64) {
                    _0x1975f2 = 0x64;
                }
                _0xe3b03f['push'](_0x1975f2);
            }
            var _0x43c407 = [];
            for (var _0xeda4d5 = 0x0; _0xeda4d5 < _0xe3b03f.length; ++_0xeda4d5) {
                _0x43c407['push']([_0xeda4d5, _0xe3b03f[_0xeda4d5]]);
            }
            return _0x43c407;
        }
        var _0x4afd5f = _0x33e9c9.colors('grey', 0x258);
        var _0x579c39 = 0x1e;
        var _0x4a96d4 = _0x33e9c9.plot(_0x181b2f, [{
            'data': _0x55581e()
        }], {
                'colors': [_0x33e9c9.colors('blue-grey', 0x64)],
                'series': {
                    'shadowSize': 0x0,
                    'lines': {
                        'show': !![],
                        'lineWidth': 0x0,
                        'fill': !![],
                        'fillColor': _0x33e9c9.colors('blue-grey', 0x64)
                    }
                },
                'legend': {
                    'show': ![]
                },
                'xaxis': {
                    'show': ![],
                    'font': {
                        'color': _0x4afd5f
                    }
                },
                'yaxis': {
                    'tickColor': '#edeff2',
                    'color': '#474e54',
                    'min': 0x0,
                    'max': 0x64,
                    'font': {
                        'size': 0xe,
                        'color': _0x4afd5f,
                        'weight': '300'
                    }
                },
                'grid': {
                    'color': '#474e54',
                    'tickColor': '#e3e6ea',
                    'backgroundColor': {
                        'colors': ['#fff', '#fff']
                    },
                    'borderWidth': {
                        'top': 0x0,
                        'right': 0x0,
                        'bottom': 0x1,
                        'left': 0x0
                    },
                    'borderColor': '#eef0f2'
                }
            });

        function _0x7ee990() {
            _0x4a96d4.setData([_0x55581e()]);
            _0x4a96d4.draw();
            setTimeout(_0x7ee990, _0x579c39);
        }
        _0x7ee990();
    };
    var _0x1abbf6 = function () {
        var _0x47757e = [
            [0x125e72e7800, 0x0],
            [0x12686d39c00, 0x1f4],
            [0x1271705ac00, 0x2bc],
            [0x127b6aad000, 0x514],
            [0x12851299800, 0xa28],
            [0x128f0cebc00, 0x514],
            [0x1298b4d8400, 0x6a4],
            [0x12a2af2a800, 0x514],
            [0x12aca97cc00, 0x5dc],
            [0x12b65169400, 0x7d0],
            [0x12c04bbb800, 0x5dc],
            [0x12c9f3a8000, 0x4b0]
        ];
        var _0x505d51 = [{
            'label': '值',
            'data': _0x47757e
        }];
        _0x33e9c9.plot('#exampleFlotFullBg', _0x505d51, {
            'xaxis': {
                'min': new Date(0x7d9, 0xc, 0x1).getTime(),
                'max': new Date(0x7da, 0xb, 0x2).getTime(),
                'mode': 'time',
                'tickSize': [0x1, '月'],
                'monthNames': ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
                'tickLength': 0x0,
                'color': '#474e54',
                'font': {
                    'size': 0xe,
                    'weight': 0x12c
                }
            },
            'yaxis': {
                'tickColor': '#edeff2',
                'color': '#474e54',
                'font': {
                    'size': 0xe,
                    'weight': '300'
                }
            },
            'series': {
                'shadowSize': 0x0,
                'lines': {
                    'show': !![],
                    'lineWidth': 1.5
                },
                'points': {
                    'show': !![],
                    'fill': !![],
                    'fillColor': _0x33e9c9.colors('purple', 0x258),
                    'radius': 0x3,
                    'lineWidth': 0x1
                }
            },
            'colors': [_0x33e9c9.colors('purple', 0x190)],
            'grid': {
                'hoverable': !![],
                'clickable': !![],
                'backgroundColor': {
                    'colors': ['#fcfdfe', '#fcfdfe']
                },
                'borderWidth': 0x0
            },
            'legend': {
                'show': ![]
            }
        });
    };
    var _0x53457d = function () {
        var _0x3fb108 = [];
        for (var _0x2db1cb = 0x0; _0x2db1cb < Math['PI'] * 0x2; _0x2db1cb += 0.25) {
            _0x3fb108['push']([_0x2db1cb, Math.sin(_0x2db1cb)]);
        }
        var _0x33d5c5 = [];
        for (_0x2db1cb = 0x0; _0x2db1cb < Math['PI'] * 0x2; _0x2db1cb += 0.25) {
            _0x33d5c5.push([_0x2db1cb, Math.cos(_0x2db1cb)]);
        }
        var _0x3da7e2 = _0x33e9c9('#exampleFlotCurve');
        _0x33e9c9.plot(_0x3da7e2, [{
            'label': 'sin(x)',
            'data': _0x3fb108,
            'color': _0x33e9c9['colors']('purple', 0x190),
            'points': {
                'show': !![],
                'fill': !![],
                'radius': 0x3,
                'fillColor': _0x33e9c9.colors('purple', 0x190)
            }
        }, {
            'label': 'cos(x)',
            'data': _0x33d5c5,
            'yaxis': 0x2,
            'color': _0x33e9c9.colors('green', 0x190),
            'points': {
                'show': !![],
                'fill': !![],
                'radius': 0x3,
                'fillColor': _0x33e9c9.colors('green', 0x258)
            }
        }], {
                'series': {
                    'shadowSize': 0x0,
                    'lines': {
                        'show': !![],
                        'lineWidth': 1.5
                    },
                    'points': {
                        'show': !![],
                        'radius': 0x3,
                        'lineWidth': 0x1
                    }
                },
                'xaxes': [{
                    'ticks': [0x0, [Math['PI'] / 0x2, 'π/2'],
                        [Math['PI'], 'π'],
                        [Math['PI'] * 0x3 / 0x2, '3π/2'],
                        [Math['PI'] * 0x2, '2π']
                    ]
                }],
                'yaxes': [{
                    'ticks': 0x5,
                    'min': -0x2,
                    'max': 0x2,
                    'tickDecimals': 0x3
                }, {
                    'ticks': 0x5,
                    'min': -0x1,
                    'max': 0x1,
                    'tickLength': 0x0,
                    'tickDecimals': 0x2,
                    'position': 'right'
                }],
                'grid': {
                    'hoverable': !![],
                    'color': '#474e54',
                    'tickColor': '#e3e6ea',
                    'backgroundColor': {
                        'colors': ['#fff', '#fff']
                    },
                    'borderWidth': {
                        'top': 0x1,
                        'right': 0x1,
                        'bottom': 0x1,
                        'left': 0x1
                    },
                    'borderColor': '#eef0f2'
                },
                'legend': {
                    'show': ![]
                }
            });
    };
    var _0x14795d = function () {
        var _0x5d13af = [];
        for (var _0x2e49e2 = 0x0; _0x2e49e2 < 0xe; _0x2e49e2 += 0.5) {
            _0x5d13af.push([_0x2e49e2, Math['cos'](_0x2e49e2) + 0x1]);
        }
        var _0x4e5a65 = [
            [0x2, 0x3],
            [0x4, 0x8],
            [0x6, 0x5],
            [0x9, 0xd]
        ];
        var _0x17c75b = [];
        for (_0x2e49e2 = 0x0; _0x2e49e2 < 0xe; _0x2e49e2 += 0.5) {
            _0x17c75b.push([_0x2e49e2, Math.cos(_0x2e49e2) + Math.sin(_0x2e49e2) - 0x1]);
        }
        var _0x170270 = [];
        for (_0x2e49e2 = 0x0; _0x2e49e2 < 0xe; _0x2e49e2 += 0.1) {
            _0x170270.push([_0x2e49e2, Math.sqrt(_0x2e49e2 * 0xa) - 0x4 * Math.cos(_0x2e49e2)]);
        }
        var _0x169554 = [];
        for (_0x2e49e2 = 0x0; _0x2e49e2 < 0xe; _0x2e49e2 += 1.5) {
            _0x169554.push([_0x2e49e2, Math.cos(_0x2e49e2) + 0x2 * Math['sin'](_0x2e49e2) + 0x6]);
        }
        var _0x318c35 = [];
        for (_0x2e49e2 = 0x0; _0x2e49e2 < 0xe; _0x2e49e2 += 0.5 + Math['random']()) {
            _0x318c35.push([_0x2e49e2, Math['sqrt'](_0x2e49e2 + 0x2 * Math.cos(_0x2e49e2)) - Math['sin'](_0x2e49e2) - 0x3]);
        }
        _0x33e9c9.plot('#exampleFlotMix', [{
            'data': _0x4e5a65,
            'bars': {
                'show': !![],
                'align': 'center',
                'fill': !![],
                'fillColor': _0x33e9c9['colors']('blue-grey', 0x64)
            }
        }, {
            'data': _0x5d13af,
            'lines': {
                'show': !![],
                'fill': !![],
                'fillColor': 'rgba(251,213,181,.1)'
            }
        }, {
            'data': _0x17c75b,
            'points': {
                'show': !![],
                'fill': !![],
                'fillColor': _0x33e9c9['colors']('green', 0x258),
                'radius': 0x2
            }
        }, {
            'data': _0x170270,
            'lines': {
                'show': !![]
            },
            'points': {
                'show': ![]
            }
        }, {
            'data': _0x169554,
            'lines': {
                'show': !![]
            },
            'points': {
                'show': !![],
                'fill': !![],
                'fillColor': _0x33e9c9.colors('purple', 0x258),
                'radius': 0x2
            }
        }, {
            'data': _0x318c35,
            'lines': {
                'show': !![],
                'steps': !![]
            }
        }], {
                'xaxis': {
                    'tickLength': 0x0,
                    'color': '#474e54',
                    'font': {
                        'size': 0xe,
                        'weight': 0x12c
                    }
                },
                'yaxis': {
                    'tickColor': '#edeff2',
                    'color': '#474e54',
                    'font': {
                        'size': 0xe,
                        'weight': '300'
                    }
                },
                'grid': {
                    'color': '#474e54',
                    'tickColor': '#e3e6ea',
                    'backgroundColor': {
                        'colors': ['#fff', '#fff']
                    },
                    'borderWidth': {
                        'top': 0x0,
                        'right': 0x0,
                        'bottom': 0x1,
                        'left': 0x0
                    },
                    'borderColor': '#eef0f2'
                },
                'series': {
                    'shadowSize': 0x0
                },
                'colors': [_0x33e9c9.colors('blue-grey', 0x64), _0x33e9c9['colors']('orange', 0xc8), _0x33e9c9.colors('green', 0x258), _0x33e9c9.colors('yellow', 0x258), _0x33e9c9['colors']('purple', 0x258), _0x33e9c9.colors('purple', 0xc8)]
            });
    };
    var _0x39d39b = function () {
        var _0x568c0f = [];
        for (var _0x58907d = 0x1; _0x58907d <= 0x4; _0x58907d += 0x1) {
            _0x568c0f.push([_0x58907d, parseInt(Math.random() * 0x1e)]);
        }
        var _0x27672e = [];
        for (_0x58907d = 0x1; _0x58907d <= 0x4; _0x58907d += 0x1) {
            _0x27672e.push([_0x58907d, parseInt(Math.random() * 0x1e)]);
        }
        var _0x24cbcd = [];
        for (_0x58907d = 0x1; _0x58907d <= 0x4; _0x58907d += 0x1) {
            _0x24cbcd.push([_0x58907d, parseInt(Math['random']() * 0x1e)]);
        }
        var _0x161808 = [];
        for (_0x58907d = 0x1; _0x58907d <= 0x4; _0x58907d += 0x1) {
            _0x161808['push']([_0x58907d, parseInt(Math.random() * 0x1e - 0xa)]);
        }
        _0x33e9c9.plot('#exampleFlotStackBar', [{
            'data': _0x568c0f,
            'bars': {
                'fill': !![],
                'fillColor': _0x33e9c9.colors('light-green', 0x1f4)
            }
        }, {
            'data': _0x27672e,
            'bars': {
                'fill': !![],
                'fillColor': _0x33e9c9.colors('blue-grey', 0x12c)
            }
        }, {
            'data': _0x24cbcd,
            'bars': {
                'fill': !![],
                'fillColor': _0x33e9c9.colors('purple', 0x1f4)
            }
        }, {
            'data': _0x161808,
            'bars': {
                'fill': !![],
                'fillColor': _0x33e9c9.colors('purple', 0x1f4)
            }
        }], {
                'series': {
                    'stack': !![],
                    'shadowSize': 0x0,
                    'lines': {
                        'show': ![],
                        'fill': !![],
                        'steps': ![]
                    },
                    'bars': {
                        'show': !![],
                        'align': 'center',
                        'barWidth': 0.38
                    }
                },
                'colors': [_0x33e9c9.colors('light-green', 0x1f4), _0x33e9c9.colors('blue-grey', 0x12c), _0x33e9c9.colors('purple', 0x1f4), _0x33e9c9.colors('purple', 0x1f4)],
                'xaxis': {
                    'tickLength': 0x0,
                    'color': '#474e54',
                    'min': 0x0,
                    'max': 5.5,
                    'ticks': [0x1, 0x2, 0x3, 0x4],
                    'font': {
                        'size': 0xe,
                        'weight': 0x12c
                    }
                },
                'yaxis': {
                    'tickColor': '#edeff2',
                    'color': '#474e54',
                    'min': -0xa,
                    'font': {
                        'size': 0xe,
                        'weight': '300'
                    }
                },
                'grid': {
                    'color': '#474e54',
                    'tickColor': '#e3e6ea',
                    'backgroundColor': {
                        'colors': ['#fff', '#fff']
                    },
                    'borderWidth': {
                        'top': 0x0,
                        'right': 0x0,
                        'bottom': 0x1,
                        'left': 0x0
                    },
                    'borderColor': '#eef0f2'
                }
            });
    };
    var _0x1d2c32 = function () {
        var _0x5dbca2 = [];
        for (var _0x2fdf4f = 0x1; _0x2fdf4f <= 0x5; _0x2fdf4f += 0x1) {
            _0x5dbca2.push([parseInt(Math.random() * 0x1e), _0x2fdf4f]);
        }
        var _0x299a80 = [];
        for (_0x2fdf4f = 0x1; _0x2fdf4f <= 0x5; _0x2fdf4f += 0x1) {
            _0x299a80['push']([parseInt(Math['random']() * 0x1e), _0x2fdf4f]);
        }
        var _0x45e84f = [];
        for (_0x2fdf4f = 0x1; _0x2fdf4f <= 0x5; _0x2fdf4f += 0x1) {
            _0x45e84f.push([parseInt(Math.random() * 0x1e), _0x2fdf4f]);
        }
        _0x33e9c9['plot']('#exampleFlotHorizontalBar', [{
            'data': _0x5dbca2,
            'bars': {
                'fill': !![],
                'fillColor': _0x33e9c9['colors']('purple', 0x1f4)
            }
        }, {
            'data': _0x299a80,
            'bars': {
                'fill': !![],
                'fillColor': _0x33e9c9.colors('blue-grey', 0x12c)
            }
        }, {
            'data': _0x45e84f,
            'bars': {
                'fill': !![],
                'fillColor': _0x33e9c9['colors']('red', 0x1f4)
            }
        }], {
                'series': {
                    'stack': !![],
                    'lines': {
                        'show': ![],
                        'fill': !![]
                    },
                    'bars': {
                        'show': !![],
                        'barWidth': 0.55,
                        'align': 'center',
                        'horizontal': !![]
                    }
                },
                'colors': [_0x33e9c9.colors('purple', 0x1f4), _0x33e9c9.colors('blue-grey', 0x12c), _0x33e9c9.colors('red', 0x1f4)],
                'xaxis': {
                    'color': '#474e54',
                    'font': {
                        'size': 0xe,
                        'weight': 0x12c
                    }
                },
                'yaxis': {
                    'tickLength': 0x0,
                    'tickColor': '#edeff2',
                    'color': '#474e54',
                    'min': 0x0,
                    'max': 0x6,
                    'ticks': [0x1, 0x2, 0x3, 0x4, 0x5],
                    'font': {
                        'size': 0xe,
                        'weight': '300'
                    }
                },
                'grid': {
                    'color': '#474e54',
                    'tickColor': '#e3e6ea',
                    'backgroundColor': {
                        'colors': ['#fff', '#fff']
                    },
                    'borderWidth': {
                        'top': 0x1,
                        'right': 0x1,
                        'bottom': 0x1,
                        'left': 0x1
                    },
                    'borderColor': '#eef0f2'
                }
            });
    };
    var _0x11ba0b = function () {
        var _0x23cd3f = [],
            _0x47d484 = 0x2,
            _0x278f8e = _0x33e9c9('#btnPieDefault'),
            _0xd2ddd8 = _0x33e9c9('#exampleFlotPie');
        for (var _0x21360f = 0x0; _0x21360f < _0x47d484; _0x21360f++) {
            _0x23cd3f[_0x21360f] = {
                'label': '示例' + (_0x21360f + 0x1),
                'data': Math.floor(Math['random']() * 0x64) + 0x1
            };
        }

        function _0x58d8af(_0x38f652, _0x1a760f) {
            return '<div' + '\x20style=\x27' + 'font-size:\x208pt;\x20text-align:\x20center;\x20padding:\x202px;\x20color:\x20#747474;\x27' + '>' + _0x38f652 + '<br/>' + Math.round(_0x1a760f['percent']) + '%</div>';
        }
        _0x278f8e.click(function () {
            _0xd2ddd8.unbind();
            _0x33e9c9.plot(_0xd2ddd8, _0x23cd3f, {
                'series': {
                    'pie': {
                        'show': !![]
                    }
                },
                'colors': [_0x33e9c9['colors']('purple', 0x1f4), _0x33e9c9.colors('blue-grey', 0xc8)]
            });
        });
        _0x33e9c9('#btnPieWithoutLegend').click(function () {
            _0xd2ddd8.unbind();
            _0x33e9c9['plot'](_0xd2ddd8, _0x23cd3f, {
                'series': {
                    'pie': {
                        'show': !![],
                        'label': {
                            'show': !![]
                        }
                    }
                },
                'colors': [_0x33e9c9.colors('purple', 0x1f4), _0x33e9c9.colors('blue-grey', 0xc8)],
                'legend': {
                    'show': ![]
                }
            });
        });
        _0x33e9c9('#btnPieLabelRadius').click(function () {
            _0xd2ddd8.unbind();
            _0x33e9c9['plot'](_0xd2ddd8, _0x23cd3f, {
                'series': {
                    'pie': {
                        'show': !![],
                        'radius': 0x1,
                        'label': {
                            'show': !![],
                            'radius': 0x3 / 0x4,
                            'formatter': _0x58d8af
                        }
                    }
                },
                'colors': [_0x33e9c9.colors('purple', 0x1f4), _0x33e9c9['colors']('blue-grey', 0xc8)],
                'legend': {
                    'show': ![]
                }
            });
        });
        _0x33e9c9('#btnPieRectangular')['click'](function () {
            _0xd2ddd8.unbind();
            _0x33e9c9.plot(_0xd2ddd8, _0x23cd3f, {
                'series': {
                    'pie': {
                        'show': !![],
                        'radius': 0x1f4,
                        'label': {
                            'show': !![],
                            'formatter': _0x58d8af,
                            'threshold': 0.1
                        }
                    }
                },
                'colors': [_0x33e9c9['colors']('purple', 0x1f4), _0x33e9c9.colors('blue-grey', 0xc8)],
                'legend': {
                    'show': ![]
                }
            });
        });
        _0x33e9c9('#btnPieDonutHole').click(function () {
            _0xd2ddd8['unbind']();
            _0x33e9c9.plot(_0xd2ddd8, _0x23cd3f, {
                'series': {
                    'pie': {
                        'innerRadius': 0.5,
                        'show': !![]
                    }
                },
                'colors': [_0x33e9c9.colors('purple', 0x1f4), _0x33e9c9.colors('blue-grey', 0xc8)]
            });
        });
        _0x33e9c9('#btnPieInteractivity').click(function () {
            _0xd2ddd8.unbind();
            _0x33e9c9.plot(_0xd2ddd8, _0x23cd3f, {
                'series': {
                    'pie': {
                        'show': !![]
                    }
                },
                'colors': [_0x33e9c9.colors('purple', 0x1f4), _0x33e9c9['colors']('blue-grey', 0xc8)],
                'grid': {
                    'hoverable': !![],
                    'clickable': !![]
                }
            });
            _0xd2ddd8.bind('plothover', function (_0x518b5a, _0x2970dd, _0x158c31) {
                if (!_0x158c31) {
                    return;
                }
                var _0x34ee2c = parseFloat(_0x158c31['series']['percent']).toFixed(0x2);
                _0x33e9c9('#hover').html('<span style="font- weight:bold; color: ' + _0x158c31.series.color + '" > ' + _0x158c31.series.label + ' (' + _0x34ee2c + ' %)</span > ');
            });
            _0xd2ddd8.bind('plotclick', function (_0x559d11, _0x6a827f, _0x177527) {
                if (!_0x177527) {
                    return;
                }
                var _0x50a303 = parseFloat(_0x177527.series.percent).toFixed(0x2);
                toastr.info('' + _0x177527.series.label + ':\x20' + _0x50a303 + '%');
            });
        });
        _0x278f8e.click();
    };
    var _0x1ff68d = function () {
        var _0x503a33 = [
            [0x11692c9b180, 0x0],
            [0x11697f00d80, 0x0],
            [0x1169d166980, 0x0],
            [0x116a23cc580, 0x4d],
            [0x116a7632180, 0xe34],
            [0x116ac897d80, 0xdf7],
            [0x116b1afd980, 0xab0],
            [0x116b6d63580, 0x43e],
            [0x116bbfc9180, 0x2a4],
            [0x116c122ed80, 0x4b5],
            [0x116c6494980, 0x38a],
            [0x116cb6fa580, 0x2c6],
            [0x116d0960180, 0x27f],
            [0x116d5bc5d80, 0x21c],
            [0x116dae2b980, 0x1b3],
            [0x116e0091580, 0x12d],
            [0x116e52f7180, 0x23f],
            [0x116ea55cd80, 0x1e1],
            [0x116ef7c2980, 0x24f],
            [0x116f4a28580, 0x260],
            [0x116f9c8e180, 0x1cb],
            [0x116feef3d80, 0xea],
            [0x11704159980, 0x548],
            [0x117093bf580, 0x2ae],
            [0x1170e625180, 0x117],
            [0x1171388ad80, 0x1c1],
            [0x11718af0980, 0x1d4],
            [0x1171dd56580, 0x188],
            [0x11722fbc180, 0x11a],
            [0x11728221d80, 0xd0],
            [0x1172d487980, 0xe5],
            [0x117326ed580, 0xb1],
            [0x11737953180, 0x176],
            [0x1173cbb8d80, 0x1b4],
            [0x11741e1e980, 0x194],
            [0x11747084580, 0xfd],
            [0x1174c2ea180, 0xda],
            [0x1175154fd80, 0x1dc],
            [0x117567b5980, 0x1ce],
            [0x1175ba1b580, 0x1c0],
            [0x11760c81180, 0x1ba],
            [0x11765ee6d80, 0x193],
            [0x1176b14c980, 0xcc],
            [0x117703b2580, 0xc2],
            [0x11775618180, 0x147],
            [0x1177a87dd80, 0x176],
            [0x1177fae3980, 0x1fb],
            [0x11784d49580, 0x222],
            [0x11789faf180, 0x1e2],
            [0x1178f214d80, 0x11b],
            [0x1179447a980, 0xdd],
            [0x117996e0580, 0x1e3],
            [0x1179e946180, 0x20b],
            [0x117a3babd80, 0x210],
            [0x117a8e11980, 0x1e3],
            [0x117ae077580, 0x1c4],
            [0x117b32dd180, 0x10e],
            [0x117b8542d80, 0xde],
            [0x117bd7a8980, 0x1b7],
            [0x117c2a0e580, 0x22f],
            [0x117c7c74180, 0x209],
            [0x117cced9d80, 0x1dd],
            [0x117d213f980, 0x1ba],
            [0x117d73a5580, 0xfc],
            [0x117dc60b180, 0xec],
            [0x117e1870d80, 0x20d],
            [0x117e6ad6980, 0x1dd],
            [0x117ebd3c580, 0x182],
            [0x117f0fa2180, 0x199],
            [0x117f6207d80, 0x198],
            [0x117fb46d980, 0xed],
            [0x118006d3580, 0xc1],
            [0x11805939180, 0x165],
            [0x1180ab9ed80, 0x19e],
            [0x1180fe04980, 0x189],
            [0x1181506a580, 0x161],
            [0x1181a2d0180, 0x16c],
            [0x1181f535d80, 0xd7],
            [0x1182479b980, 0xd6],
            [0x11829a01580, 0x164],
            [0x1182ec67180, 0x18f],
            [0x11833eccd80, 0x14e],
            [0x11839132980, 0x15c],
            [0x1183e398580, 0xf3],
            [0x118435fe180, 0x7e],
            [0x11848863d80, 0x9d],
            [0x1184dac9980, 0x120]
        ];
        for (var _0x25f236 = 0x0; _0x25f236 < _0x503a33.length; ++_0x25f236) {
            _0x503a33[_0x25f236][0x0] += 0x3c * 0x3c * 0x3e8;
        }

        function _0x108634(_0x4f95e9) {
            var _0x5d0ec3 = [],
                _0x4db9db = new Date(_0x4f95e9.xaxis.min);
            _0x4db9db.setUTCDate(_0x4db9db.getUTCDate() - (_0x4db9db.getUTCDay() + 0x1) % 0x7);
            _0x4db9db.setUTCSeconds(0x0);
            _0x4db9db.setUTCMinutes(0x0);
            _0x4db9db.setUTCHours(0x0);
            var _0x50b988 = _0x4db9db['getTime']();
            do {
                _0x5d0ec3.push({
                    'xaxis': {
                        'from': _0x50b988,
                        'to': _0x50b988 + 0x2 * 0x18 * 0x3c * 0x3c * 0x3e8
                    }
                });
                _0x50b988 += 0x7 * 0x18 * 0x3c * 0x3c * 0x3e8;
            } while (_0x50b988 < _0x4f95e9['xaxis']['max']);
            return _0x5d0ec3;
        }
        var _0x2ceb68 = {
            'series': {
                'lines': {
                    'show': !![],
                    'lineWidth': 0x1
                },
                'shadowSize': 0x0
            },
            'colors': [_0x33e9c9['colors']('purple', 0x258)],
            'selection': {
                'mode': 'x',
                'color': [_0x33e9c9.colors('purple', 0x12c)]
            },
            'xaxis': {
                'tickLength': 0x0,
                'mode': 'time',
                'color': '#474e54',
                'font': {
                    'size': 0xe,
                    'weight': 0x12c
                }
            },
            'yaxis': {
                'tickColor': '#edeff2',
                'color': '#474e54',
                'font': {
                    'size': 0xe,
                    'weight': '300'
                }
            },
            'grid': {
                'markings': _0x108634,
                'color': '#474e54',
                'tickColor': '#e3e6ea',
                'backgroundColor': {
                    'colors': ['#fff', '#fff']
                },
                'borderWidth': {
                    'top': 0x0,
                    'right': 0x0,
                    'bottom': 0x1,
                    'left': 0x0
                },
                'borderColor': '#eef0f2'
            }
        };
        var _0x3ced0a = _0x33e9c9.plot('#exampleFlotVisitors', [_0x503a33], _0x2ceb68);
        var _0x538898 = _0x33e9c9.plot('#exampleFlotVisitorsOverview', [_0x503a33], {
            'series': {
                'lines': {
                    'show': !![],
                    'lineWidth': 0x1
                },
                'shadowSize': 0x0
            },
            'colors': [_0x33e9c9.colors('purple', 0x258)],
            'xaxis': {
                'ticks': [],
                'mode': 'time'
            },
            'yaxis': {
                'ticks': [],
                'min': 0x0,
                'autoscaleMargin': 0.1
            },
            'selection': {
                'mode': 'x',
                'color': [_0x33e9c9.colors('purple', 0x12c)]
            },
            'grid': {
                'color': '#474e54',
                'tickColor': '#e3e6ea',
                'backgroundColor': {
                    'colors': ['#fff', '#fff']
                },
                'borderWidth': {
                    'top': 0x1,
                    'right': 0x1,
                    'bottom': 0x1,
                    'left': 0x1
                },
                'borderColor': '#eef0f2'
            }
        });
        _0x33e9c9('#exampleFlotVisitors').bind('plotselected', function (_0x43e46e, _0x148e05) {
            _0x33e9c9.each(_0x3ced0a.getXAxes(), function (_0x5bb5c8, _0x704a8b) {
                var _0x2c47f8 = _0x704a8b.options;
                _0x2c47f8.min = _0x148e05.xaxis['from'];
                _0x2c47f8.max = _0x148e05.xaxis['to'];
            });
            _0x3ced0a.setupGrid();
            _0x3ced0a.draw();
            _0x3ced0a.clearSelection();
            _0x538898.setSelection(_0x148e05, !![]);
        });
        _0x33e9c9('#exampleFlotVisitorsOverview').bind('plotselected', function (_0x2d5055, _0x493463) {
            _0x3ced0a.setSelection(_0x493463);
        });
    };
    var _0x3bb1bf = function () {
        _0x33e9c9('<div\x20class=\x27flot-tooltip\x27></div>').css({
            'position': 'absolute',
            'color': '#fff',
            'display': 'none',
            'border': '1px solid #777',
            'padding': '2px',
            'background-color': '#777',
            'opacity': 0.8
        }).appendTo('body');
        _0x33e9c9('#exampleFlotCurve').bind('plothover', function (_0x54a9fc, _0x5c98f3, _0x1032cd) {
            if (_0x1032cd) {
                var _0x57b47d = _0x1032cd.datapoint[0x0]['toFixed'](0x2),
                    _0x5a729a = _0x1032cd.datapoint[0x1]['toFixed'](0x2);
                _0x33e9c9('.flot-tooltip')['html'](_0x1032cd.series.label + '\x20：' + _0x57b47d + '，' + _0x5a729a).css({
                    'top': _0x1032cd.pageY + 0x5,
                    'left': _0x1032cd.pageX + 0x5
                }).fadeIn(0xc8);
            } else {
                _0x33e9c9('.flot-tooltip').hide();
            }
        });
        _0x33e9c9('#exampleFlotFullBg').bind('plothover', function (_0x3a05fc, _0xfb3f99, _0x24c94e) {
            if (_0x24c94e) {
                var _0x4d46ae = _0x24c94e.datapoint[0x0].toFixed(0x2),
                    _0x421377 = _0x24c94e.datapoint[0x1].toFixed(0x2);
                _0x33e9c9('.flot-tooltip').html(_0x24c94e.series.label + ' ： ' + _0x4d46ae + ' ， ' + _0x421377)['css']({
                    'top': _0x24c94e.pageY + 0x5,
                    'left': _0x24c94e['pageX'] + 0x5
                }).fadeIn(0xc8);
            } else {
                _0x33e9c9('.flot-tooltip')['hide']();
            }
        });
        _0x33e9c9('#exampleFlotRealtime')['bind']('plothover', function (_0x335470, _0x56d62e, _0x266874) {
            if (_0x266874) {
                var _0x183bdd = _0x266874.datapoint[0x0].toFixed(0x2),
                    _0x2d3e98 = _0x266874.datapoint[0x1]['toFixed'](0x2);
                _0x33e9c9('.flot-tooltip').html('x | ' + _0x183bdd + ',' + ' y | ' + _0x2d3e98)['css']({
                    'top': _0x266874['pageY'] + 0x5,
                    'left': _0x266874.pageX + 0x5
                }).fadeIn(0xc8);
            } else {
                _0x33e9c9('.flot-tooltip').hide();
            }
        });
    };
    _0x12b393();
    _0x1abbf6();
    _0x53457d();
    _0x14795d();
    _0x39d39b();
    _0x1d2c32();
    _0x11ba0b();
    _0x1ff68d();
    _0x3bb1bf();
}(document, window, jQuery));