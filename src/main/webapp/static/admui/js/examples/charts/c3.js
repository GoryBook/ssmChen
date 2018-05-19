(function (_0x194d1e, _0x2c8569, _0x4dd683) {

    var _0x216920 = function () {
        c3.generate({
            'bindto': '#exampleC3SimpleLine',
            'data': {
                'columns': [
                    ['数据1', 0x64, 0xa5, 0x8c, 0x10e, 0xc8, 0x8c, 0xdc],
                    ['数据2', 0x6e, 0x50, 0x64, 0x55, 0x7d, 0x5a, 0x64]
                ]
            },
            'color': {
                'pattern': [_0x4dd683['colors']('purple', 0x258), _0x4dd683.colors('green', 0x258)]
            },
            'axis': {
                'x': {
                    'tick': {
                        'outer': ![]
                    }
                },
                'y': {
                    'max': 0x12c,
                    'min': 0x0,
                    'tick': {
                        'outer': ![],
                        'count': 0x7,
                        'values': [0x0, 0x32, 0x64, 0x96, 0xc8, 0xfa, 0x12c]
                    }
                }
            },
            'grid': {
                'x': {
                    'show': ![]
                },
                'y': {
                    'show': !![]
                }
            }
        });
    };
    var _0x4d50b4 = function () {
        c3.generate({
            'bindto': '#exampleC3LineRegions',
            'data': {
                'columns': [
                    ['数据1', 0x64, 0xa5, 0x8c, 0x10e, 0xc8, 0x8c, 0xdc],
                    ['数据2', 0x6e, 0x50, 0x64, 0x55, 0x7d, 0x5a, 0x64]
                ],
                'regions': {
                    'data1': [{
                        'start': 0x1,
                        'end': 0x2,
                        'style': 'dashed'
                    }, {
                        'start': 0x3
                    }],
                    'data2': [{
                        'end': 0x3
                    }]
                }
            },
            'color': {
                'pattern': [_0x4dd683.colors('purple', 0x258), _0x4dd683.colors('green', 0x258)]
            },
            'axis': {
                'x': {
                    'tick': {
                        'outer': ![]
                    }
                },
                'y': {
                    'max': 0x12c,
                    'min': 0x0,
                    'tick': {
                        'outer': ![],
                        'count': 0x7,
                        'values': [0x0, 0x32, 0x64, 0x96, 0xc8, 0xfa, 0x12c]
                    }
                }
            },
            'grid': {
                'x': {
                    'show': ![]
                },
                'y': {
                    'show': !![]
                }
            }
        });
    };
    var _0x6021e8 = function () {
        var _0x2d494e = c3.generate({
            'bindto': '#exampleC3TimeSeries',
            'data': {
                'x': 'x',
                'columns': [
                    ['x', '2013-01-01', '2013-01-02', '2013-01-03', '2013-01-04', '2013-01-05', '2013-01-06'],
                    ['数据1', 0x50, 0x7d, 0x64, 0xdc, 0x50, 0xa0],
                    ['数据2', 0x28, 0x55, 0x2d, 0x9b, 0x32, 0x41]
                ]
            },
            'color': {
                'pattern': [_0x4dd683.colors('purple', 0x258), _0x4dd683.colors('green', 0x258), _0x4dd683.colors('red', 0x1f4)]
            },
            'padding': {
                'right': 0x28
            },
            'axis': {
                'x': {
                    'type': 'timeseries',
                    'tick': {
                        'outer': ![],
                        'format': '%Y-%m-%d'
                    }
                },
                'y': {
                    'max': 0x12c,
                    'min': 0x0,
                    'tick': {
                        'outer': ![],
                        'count': 0x7,
                        'values': [0x0, 0x32, 0x64, 0x96, 0xc8, 0xfa, 0x12c]
                    }
                }
            },
            'grid': {
                'x': {
                    'show': ![]
                },
                'y': {
                    'show': !![]
                }
            }
        });
        setTimeout(function () {
            _0x2d494e.load({
                'columns': [
                    ['数据3', 0xd2, 0xb4, 0x104, 0x122, 0xfa, 0xf0]
                ]
            });
        }, 0x3e8);
    };
    var _0x1e30c4 = function () {
        c3.generate({
            'bindto': '#exampleC3Spline',
            'data': {
                'columns': [
                    ['数据1', 0x64, 0xa5, 0x8c, 0x10e, 0xc8, 0x8c, 0xdc],
                    ['数据2', 0x6e, 0x50, 0x64, 0x55, 0x7d, 0x5a, 0x64]
                ],
                'type': 'spline'
            },
            'color': {
                'pattern': [_0x4dd683.colors('purple', 0x258), _0x4dd683.colors('green', 0x258)]
            },
            'axis': {
                'x': {
                    'tick': {
                        'outer': ![]
                    }
                },
                'y': {
                    'max': 0x12c,
                    'min': 0x0,
                    'tick': {
                        'outer': ![],
                        'count': 0x7,
                        'values': [0x0, 0x32, 0x64, 0x96, 0xc8, 0xfa, 0x12c]
                    }
                }
            },
            'grid': {
                'x': {
                    'show': ![]
                },
                'y': {
                    'show': !![]
                }
            }
        });
    };
    var _0x32c054 = function () {
        c3.generate({
            'bindto': '#exampleC3Scatter',
            'data': {
                'xs': {
                    'setosa': 'setosa_x',
                    'versicolor': 'versicolor_x'
                },
                'columns': [
                    ['setosa_x', 3.5, 0x3, 3.2, 3.1, 3.6, 3.9, 3.4, 3.4, 2.9, 3.1, 3.7, 3.4, 0x3, 0x3, 0x4, 4.2, 3.9, 3.5, 3.8, 3.8, 3.4, 3.7, 3.6, 3.3, 3.4, 0x3, 3.4, 3.5, 3.4, 3.2, 3.1, 3.4, 4.1, 4.2, 3.1, 3.2, 3.5, 3.6, 0x3, 3.4, 3.5, 2.3, 3.2, 3.5, 3.8, 0x3, 3.8, 3.2, 3.7, 3.3],
                    ['versicolor_x', 3.2, 3.2, 3.1, 2.3, 2.8, 2.8, 3.3, 2.4, 2.9, 2.7, 0x2, 0x3, 2.2, 2.9, 2.9, 3.1, 0x3, 2.7, 2.2, 2.5, 3.2, 2.8, 2.5, 2.8, 2.9, 0x3, 2.8, 0x3, 2.9, 2.6, 2.4, 2.4, 2.7, 2.7, 0x3, 3.4, 3.1, 2.3, 0x3, 2.5, 2.6, 0x3, 2.6, 2.3, 2.7, 0x3, 2.9, 2.9, 2.5, 2.8],
                    ['setosa', 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
                    ['versicolor', 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 0x1, 1.3, 1.4, 0x1, 1.5, 0x1, 1.4, 1.3, 1.4, 1.5, 0x1, 1.5, 1.1, 1.6, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.2, 1.5, 0x1, 1.1, 0x1, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 0x1, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3]
                ],
                'type': 'scatter'
            },
            'color': {
                'pattern': [_0x4dd683['colors']('green', 0x258), _0x4dd683['colors']('red', 0x1f4)]
            },
            'axis': {
                'x': {
                    'label': 'Sepal.Width',
                    'tick': {
                        'outer': ![],
                        'fit': ![]
                    }
                },
                'size': {
                    'height': 0x190
                },
                'padding': {
                    'right': 0x28
                },
                'y': {
                    'label': 'Petal.Width',
                    'tick': {
                        'outer': ![],
                        'count': 0x5,
                        'values': [0x0, 0.4, 0.8, 1.2, 1.6]
                    }
                }
            },
            'grid': {
                'x': {
                    'show': ![]
                },
                'y': {
                    'show': !![]
                }
            }
        });
    };
    var _0x54f7bf = function () {
        var _0x458d3f = c3.generate({
            'bindto': '#exampleC3Bar',
            'data': {
                'columns': [
                    ['数据1', 0x1e, 0xc8, 0x64, 0x190, 0x96, 0xfa],
                    ['数据2', 0x82, 0x64, 0x8c, 0xc8, 0x96, 0x32]
                ],
                'type': 'bar'
            },
            'bar': {
                'width': {
                    'max': 0x14
                }
            },
            'color': {
                'pattern': [_0x4dd683.colors('red', 0x190), _0x4dd683['colors']('blue-grey', 0x190), _0x4dd683.colors('blue-grey', 0xc8)]
            },
            'grid': {
                'y': {
                    'show': !![]
                },
                'x': {
                    'show': ![]
                }
            }
        });
        setTimeout(function () {
            _0x458d3f.load({
                'columns': [
                    ['数据3', 0x82, -0x96, 0xc8, 0x12c, -0xc8, 0x64]
                ]
            });
        }, 0x3e8);
    };
    var _0x21c952 = function () {
        var _0x33d42c = c3['generate']({
            'bindto': '#exampleC3StackedBar',
            'data': {
                'columns': [
                    ['数据1', -0x1e, 0xc8, 0x12c, 0x190, -0x96, 0xfa],
                    ['数据2', 0x82, 0x64, -0x190, 0x64, -0x96, 0x32],
                    ['数据3', -0xe6, 0xc8, 0xc8, -0x12c, 0xfa, 0xfa]
                ],
                'type': 'bar',
                'groups': [
                    ['数据1', 'data2']
                ]
            },
            'color': {
                'pattern': [_0x4dd683['colors']('purple', 0x1f4), _0x4dd683.colors('blue-grey', 0x12c), _0x4dd683['colors']('purple', 0x1f4), _0x4dd683.colors('light-green', 0x1f4)]
            },
            'bar': {
                'width': {
                    'max': 0x2d
                }
            },
            'grid': {
                'y': {
                    'show': !![],
                    'lines': [{
                        'value': 0x0
                    }]
                }
            }
        });
        setTimeout(function () {
            _0x33d42c.groups([
                ['数据1', 'data2', 'data3']
            ]);
        }, 0x3e8);
        setTimeout(function () {
            _0x33d42c.load({
                'columns': [
                    ['数据4', 0x64, -0xfa, 0x96, 0xc8, -0x12c, -0x64]
                ]
            });
        }, 0x5dc);
        setTimeout(function () {
            _0x33d42c.groups([
                ['数据1', 'data2', 'data3', 'data4']
            ]);
        }, 0x7d0);
    };
    var _0x58356b = function () {
        c3.generate({
            'bindto': '#exampleC3Combination',
            'data': {
                'columns': [
                    ['数据1', 0x1e, 0x14, 0x32, 0x28, 0x3c, 0x32],
                    ['数据2', 0xc8, 0x82, 0x5a, 0xf0, 0x82, 0xdc],
                    ['数据3', 0x12c, 0xc8, 0xa0, 0x190, 0xfa, 0xfa],
                    ['数据4', 0xc8, 0x82, 0x5a, 0xf0, 0x82, 0xdc],
                    ['数据5', 0x82, 0x78, 0x96, 0x8c, 0xa0, 0x96],
                    ['数据6', 0x5a, 0x46, 0x14, 0x32, 0x3c, 0x78]
                ],
                'type': 'bar',
                'types': {
                    'data3': 'spline',
                    'data4': 'line',
                    'data6': 'area'
                },
                'groups': [
                    ['数据1', 'data2']
                ]
            },
            'color': {
                'pattern': [_0x4dd683['colors']('blue-grey', 0x190), _0x4dd683.colors('blue-grey', 0xc8), _0x4dd683.colors('yellow', 0x258), _0x4dd683.colors('purple', 0x258), _0x4dd683.colors('red', 0x190), _0x4dd683.colors('green', 0x258)]
            },
            'grid': {
                'x': {
                    'show': ![]
                },
                'y': {
                    'show': !![]
                }
            }
        });
    };
    var _0x59b817 = function () {
        c3.generate({
            'bindto': '#exampleC3Pie',
            'data': {
                'columns': [
                    ['数据1', 0x64],
                    ['数据2', 0x28]
                ],
                'type': 'pie'
            },
            'color': {
                'pattern': [_0x4dd683.colors('purple', 0x1f4), _0x4dd683.colors('blue-grey', 0xc8)]
            },
            'legend': {
                'position': 'right'
            },
            'pie': {
                'label': {
                    'show': ![]
                }
            }
        });
    };
    var _0x592d81 = function () {
        c3['generate']({
            'bindto': '#exampleC3Donut',
            'data': {
                'columns': [
                    ['数据1', 0x78],
                    ['数据2', 0x28],
                    ['数据3', 0x50]
                ],
                'type': 'donut'
            },
            'color': {
                'pattern': [_0x4dd683['colors']('purple', 0x1f4), _0x4dd683.colors('blue-grey', 0xc8), _0x4dd683.colors('red', 0x190)]
            },
            'legend': {
                'position': 'right'
            },
            'donut': {
                'label': {
                    'show': ![]
                },
                'width': 0xa,
                'title': 'C3 环形图'
            }
        });
    };
    var _0x73b060 = function () {
        c3.generate({
            'bindto': '#exampleC3Subchart',
            'data': {
                'columns': [
                    ['数据1', 0x64, 0xa5, 0x8c, 0x10e, 0xc8, 0x8c, 0xdc, 0xd2, 0xbe, 0x64, 0xaa, 0xfa],
                    ['数据2', 0x6e, 0x50, 0x64, 0x55, 0x7d, 0x5a, 0x64, 0x82, 0x78, 0x5a, 0x64, 0x73]
                ],
                'type': 'spline'
            },
            'color': {
                'pattern': [_0x4dd683.colors('purple', 0x258), _0x4dd683['colors']('green', 0x258)]
            },
            'subchart': {
                'show': !![]
            }
        });
    };
    var _0x3f5122 = function () {
        c3.generate({
            'bindto': '#exampleC3Zoom',
            'data': {
                'columns': [
                    ['数据', 0x1e, 0xc8, 0x64, 0x190, 0x96, 0xfa, 0x96, 0xc8, 0xaa, 0xf0, 0x15e, 0x96, 0x64, 0x190, 0x96, 0xfa, 0x96, 0xc8, 0xaa, 0xf0, 0x64, 0x96, 0xfa, 0x96, 0xc8, 0xaa, 0xf0, 0x1e, 0xc8, 0x64, 0x190, 0x96, 0xfa, 0x96, 0xc8, 0xaa, 0xf0, 0x15e, 0x96, 0x64, 0x190, 0x15e, 0xdc, 0xfa, 0x12c, 0x10e, 0x8c, 0x96, 0x5a, 0x96, 0x32, 0x78, 0x46, 0x28]
                ],
                'colors': {
                    'sample': _0x4dd683.colors('purple', 0x258)
                }
            },
            'zoom': {
                'enabled': !![]
            }
        });
    };
    _0x216920();
    _0x4d50b4();
    _0x6021e8();
    _0x1e30c4();
    _0x32c054();
    _0x54f7bf();
    _0x21c952();
    _0x58356b();
    _0x59b817();
    _0x592d81();
    _0x73b060();
    _0x3f5122();
}(document, window, jQuery));