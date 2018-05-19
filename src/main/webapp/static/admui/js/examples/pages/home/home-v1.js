(function (_0x304d04, _0x69e1b4, _0x4b6887) {

    var _0x300151 = {
        '$tagsPage': _0x4b6887('#admui-siteConTabs > .contabs-scroll'),
        'exampleOne': null,
        'exampleTwo': null,
        'timeExample': null,
        'chartExample1': function () {
            var _0x4637cc = [];
            var _0x4490b2 = [];
            var _0x57de5d = [];
            var _0x2c6f44 = [];
            var _0x522e48 = 0x14;
            var _0x948423 = 0x7d0;
            var _0x1ca3c8 = new Date().getTime();

            function _0x149ab8() {
                _0x4637cc.shift();
                _0x4490b2['shift']();
                _0x57de5d.shift();
                _0x2c6f44.shift();
                while (_0x4490b2['length'] < _0x522e48) {
                    var _0x5add4c = Math.random() * 0x64 + 0x320;
                    var _0x21d865 = Math['random']() * 0x64 + 0x190;
                    var _0x3f67a8 = Math.random() * 0x64 + 0xc8;
                    _0x4637cc.push(_0x1ca3c8 += _0x948423);
                    _0x4490b2.push(_0x5add4c);
                    _0x57de5d['push'](_0x21d865);
                    _0x2c6f44.push(_0x3f67a8);
                }
            }
            var _0x143080 = {
                'labels': _0x4637cc,
                'series': [_0x4490b2, _0x57de5d, _0x2c6f44]
            };
            var _0x491538 = {
                'low': 0x0,
                'showArea': !![],
                'showPoint': ![],
                'showLine': ![],
                'fullWidth': !![],
                'chartPadding': {
                    'top': 0x0,
                    'right': 0x0,
                    'bottom': 0x0,
                    'left': 0x0
                },
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
                'plugins': [Chartist['plugins'].tooltip()]
            };
            var _0xed1f88 = this;

            function _0x5dd40b() {
                _0x149ab8();
                new Chartist[('Line')]('#widgetLineareaColor .ct-chart', _0x143080, _0x491538);
                _0xed1f88.exampleOne = setTimeout(_0x5dd40b, _0x948423);
            }
            _0x5dd40b();
        }, 'chartExample2': function () {
            var _0x56b02f = [];
            var _0x47d752 = [];
            var _0x158edb = [];
            var _0x5c9983 = 0x1e;
            var _0x4971e1 = 0x9c4;
            var _0x3dea03 = new Date().getTime();

            function _0x24577c() {
                _0x56b02f.shift();
                _0x47d752['shift']();
                _0x158edb.shift();
                while (_0x47d752.length < _0x5c9983) {
                    var _0x3281b1 = Math.floor(Math.random() * 0x64) + 0x320;
                    var _0x1cfce7 = Math.floor(Math.random() * 0x64) + 0x258;
                    _0x56b02f.push(_0x3dea03 += _0x4971e1);
                    _0x47d752.push(_0x3281b1);
                    _0x158edb.push(_0x1cfce7);
                }
            }
            var _0x430a3b = {
                'labels': _0x56b02f,
                'series': [_0x47d752, _0x158edb]
            };
            var _0x621642 = {
                'stackBars': !![],
                'fullWidth': !![],
                'seriesBarDistance': 0x0,
                'chartPadding': {
                    'top': 0x0,
                    'right': 0x1e,
                    'bottom': 0x1e,
                    'left': 0x14
                },
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
                'plugins': [Chartist.plugins['tooltip']()]
            };
            var _0x57a76a = this;

            function _0x48c6cf() {
                _0x24577c();
                new Chartist['Bar']('#widgetStackedBar\x20.ct-chart', _0x430a3b, _0x621642);
                _0x57a76a['exampleTwo'] = setTimeout(_0x48c6cf, _0x4971e1);
            }
            _0x48c6cf();
        }, 'linePoint1': function () {
            new Chartist[('Line')]('#widgetLinepoint\x20.ct-chart', {
                'labels': ['1', '2', '3', '4', '5', '6', '7', '8'],
                'series': [
                    [0x1, 1.5, 0.5, 0x2, 0x1, 2.5, 1.5, 0x2]
                ]
            }, {
                    'low': 0x0,
                    'showArea': ![],
                    'showPoint': !![],
                    'showLine': !![],
                    'fullWidth': !![],
                    'lineSmooth': ![],
                    'chartPadding': {
                        'top': 0xa,
                        'right': -0x4,
                        'bottom': 0xa,
                        'left': -0x4
                    },
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
                    'plugins': [Chartist.plugins.tooltip()]
                });
        }, 'saleBar': function () {
            new Chartist['Bar']('#widgetSaleBar .ct-chart', {
                'labels': ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'K', 'L', 'M', 'N', 'O', 'P', 'Q'],
                'series': [
                    [0x32, 0x5a, 0x64, 0x5a, 0x6e, 0x64, 0x78, 0x82, 0x73, 0x5f, 0x50, 0x55, 0x64, 0x8c, 0x82, 0x78]
                ]
            }, {
                    'low': 0x0,
                    'fullWidth': !![],
                    'chartPadding': {
                        'top': 0x0,
                        'right': 0x14,
                        'bottom': 0x1e,
                        'left': 0x14
                    },
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
                    'plugins': [Chartist.plugins.tooltip()]
                });
        }, 'overallViews': function () {
            new Chartist[('Bar')]('#widgetOverallViews .small-bar-one', {
                'labels': ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
                'series': [
                    [0x78, 0x3c, 0x64, 0x32, 0x28, 0x78, 0x50, 0x82]
                ]
            }, {
                    'low': 0x0,
                    'fullWidth': !![],
                    'chartPadding': {
                        'top': -0xa,
                        'right': 0x0,
                        'bottom': 0x0,
                        'left': 0x0
                    },
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
                    'plugins': [Chartist.plugins['tooltip']()]
                });
            new Chartist[('Bar')]('#widgetOverallViews .small-bar-two', {
                'labels': ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
                'series': [
                    [0x32, 0x5a, 0x1e, 0x5a, 0x82, 0x28, 0x78, 0x5a]
                ]
            }, {
                    'low': 0x0,
                    'fullWidth': !![],
                    'chartPadding': {
                        'top': -0xa,
                        'right': 0x0,
                        'bottom': 0x0,
                        'left': 0x0
                    },
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
                    'plugins': [Chartist['plugins']['tooltip']()]
                });
            new Chartist['Line']('#widgetOverallViews .line-chart', {
                'labels': ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
                'series': [
                    [0x14, 0x32, 0x46, 0x6e, 0x64, 0xc8, 0xe6],
                    [0x32, 0x50, 0x8c, 0x82, 0x96, 0x6e, 0xa0]
                ]
            }, {
                    'low': 0x0,
                    'showArea': ![],
                    'showPoint': ![],
                    'showLine': !![],
                    'lineSmooth': ![],
                    'fullWidth': !![],
                    'chartPadding': {
                        'top': 0x0,
                        'right': 0xa,
                        'bottom': 0x0,
                        'left': 0xa
                    },
                    'axisX': {
                        'showLabel': !![],
                        'showGrid': ![],
                        'offset': 0x1e
                    },
                    'axisY': {
                        'showLabel': !![],
                        'showGrid': !![],
                        'offset': 0x1e
                    },
                    'plugins': [Chartist.plugins['tooltip']()]
                });
        }, 'timeLine': function () {
            var _0x1f0ba7 = [];
            var _0x57271d = [];
            var _0x38beaa = [];
            var _0x5791f4 = 0x14;
            var _0x47524c = 0x3e8;
            var _0x34cb9f = new Date().getTime();

            function _0x44322() {
                _0x1f0ba7.shift();
                _0x57271d['shift']();
                _0x38beaa.shift();
                while (_0x57271d['length'] < _0x5791f4) {
                    var _0x1294be = Math.random() * 0x64 + 0x320;
                    var _0x43a69b = Math.random() * 0x64 + 0x190;
                    _0x1f0ba7.push(_0x34cb9f += _0x47524c);
                    _0x57271d['push'](_0x1294be);
                    _0x38beaa.push(_0x43a69b);
                }
            }
            var _0x3a5b0a = {
                'labels': _0x1f0ba7,
                'series': [_0x57271d, _0x38beaa]
            };
            var _0x108cfa = {
                'low': 0x0,
                'showArea': !![],
                'showPoint': ![],
                'showLine': ![],
                'fullWidth': !![],
                'chartPadding': {
                    'top': 0x0,
                    'right': 0x0,
                    'bottom': 0x0,
                    'left': 0x0
                },
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
                'plugins': [Chartist['plugins'].tooltip()]
            };
            var _0x573593 = this;

            function _0x3f92e8() {
                _0x44322();
                new Chartist[('Line')]('#widgetTimeline\x20.ct-chart', _0x3a5b0a, _0x108cfa);
                _0x573593.timeExample = setTimeout(_0x3f92e8, _0x47524c);
            }
            _0x3f92e8();
        }, 'skyCon': function () {
            var _0x3e8f1c = new Skycons({
                'color': _0x4b6887['colors']('blue-grey', 0x1f4)
            });
            _0x3e8f1c['set'](_0x69e1b4.getElementById('widgetSnow'), 'snow');
            _0x3e8f1c.play();
            var _0x563610 = new Skycons({
                'color': _0x4b6887.colors('blue-grey', 0x2bc)
            });
            _0x563610.set(_0x69e1b4.getElementById('widgetSunny'), 'clear-day');
            _0x563610['play']();
        }, 'linePoint2': function () {
            new Chartist[('Line')]('#widgetLinepointDate .ct-chart', {
                'labels': ['1', '2', '3', '4', '5', '6', '7', '8'],
                'series': [
                    [0x24, 0x2d, 0x1c, 0x13, 0x27, 0x2e, 0x23, 0xd]
                ]
            }, {
                    'low': 0x0,
                    'showArea': ![],
                    'showPoint': !![],
                    'showLine': !![],
                    'fullWidth': !![],
                    'lineSmooth': ![],
                    'chartPadding': {
                        'top': 0x5,
                        'right': -0x4,
                        'bottom': 0xa,
                        'left': -0x4
                    },
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
                    'plugins': [Chartist.plugins.tooltip()]
                });
        }, 'run': function () {
            var _0xe52e8 = this;
            this['chartExample1']();
            this.chartExample2();
            this.linePoint1();
            this['linePoint2']();
            this.saleBar();
            this.overallViews();
            this.timeLine();
            this['skyCon']();
            _0x4b6887.leavePage = function () {
                clearTimeout(_0xe52e8.exampleOne);
                clearTimeout(_0xe52e8.exampleTwo);
                clearTimeout(_0xe52e8.timeExample);
            };
        }
    };
    _0x300151.run();
}(window, document, jQuery));