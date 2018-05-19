(function (_0x15fa3b, _0x47484f, _0x553a5d) {

    var _0x11f51d = {
        'run': function () {
            this.exampleOne();
            this['exampleTwo']();
            this.exampleThree();
            this.exampleFour();
            this['exampleFive']();
        }, 'exampleOne': function () {
            var _0x587657 = [
                [],
                [],
                []
            ];
            var _0x59d8dc = new Rickshaw[('Fixtures')]['RandomData'](0x96);
            for (var _0x550c74 = 0x0; _0x550c74 < 0x96; _0x550c74++) {
                _0x59d8dc['addData'](_0x587657);
            }
            var _0x42789b = _0x553a5d('#exampleChart');
            var _0x41fdc3 = new Rickshaw[('Graph')]({
                'element': _0x42789b.get(0x0),
                'width': _0x42789b.width(),
                'height': 0x12c,
                'renderer': 'line',
                'series': [{
                    'color': _0x553a5d['colors']('purple', 0x1f4),
                    'data': _0x587657[0x0],
                    'name': '北京'
                }, {
                    'color': _0x553a5d.colors('red', 0x1f4),
                    'data': _0x587657[0x1],
                    'name': '上海'
                }, {
                    'color': _0x553a5d.colors('green', 0x1f4),
                    'data': _0x587657[0x2],
                    'name': '广州'
                }]
            });
            _0x41fdc3.render();
            setInterval(function () {
                _0x59d8dc.removeData(_0x587657);
                _0x59d8dc.addData(_0x587657);
                _0x41fdc3.update();
            }, 0x7d0);
            new Rickshaw['Graph'][('HoverDetail')]({
                'graph': _0x41fdc3
            });
            var _0x15fbf8 = new Rickshaw[('Graph')]['Legend']({
                'graph': _0x41fdc3,
                'element': _0x15fa3b.getElementById('exampleChartLegend')
            });
            new Rickshaw['Graph'][('Behavior')][('Series')][('Toggle')]({
                'graph': _0x41fdc3,
                'legend': _0x15fbf8
            });
            var _0xd3a4c9 = new Rickshaw[('Graph')][('Axis')][('Time')]({
                'graph': _0x41fdc3
            });
            _0xd3a4c9['render']();
            _0x553a5d(_0x47484f)['on']('resize', function () {
                _0x41fdc3['configure']({
                    'width': _0x42789b.width()
                });
                _0x41fdc3['render']();
            });
        }, 'exampleTwo': function () {
            var _0x2d7df5 = [
                [],
                [],
                []
            ];
            var _0x38ceed = new Rickshaw[('Fixtures')]['RandomData'](0x96);
            for (var _0x3e8220 = 0x0; _0x3e8220 < 0x96; _0x3e8220++) {
                _0x38ceed.addData(_0x2d7df5);
            }
            var _0x3005ee = _0x553a5d('#exampleScatterChart');
            var _0x540f44 = new Rickshaw[('Graph')]({
                'element': _0x3005ee.get(0x0),
                'width': _0x3005ee['width'](),
                'height': 0x12c,
                'renderer': 'scatterplot',
                'series': [{
                    'color': _0x553a5d['colors']('purple', 0x1f4),
                    'data': _0x2d7df5[0x0],
                    'name': '北京'
                }, {
                    'color': _0x553a5d['colors']('red', 0x1f4),
                    'data': _0x2d7df5[0x1],
                    'name': '上海'
                }, {
                    'color': _0x553a5d.colors('green', 0x1f4),
                    'data': _0x2d7df5[0x2],
                    'name': '广州'
                }]
            });
            _0x540f44['render']();
            new Rickshaw['Graph'][('HoverDetail')]({
                'graph': _0x540f44
            });
            var _0x330641 = new Rickshaw[('Graph')][('Legend')]({
                'graph': _0x540f44,
                'element': _0x15fa3b['getElementById']('exampleScatterLegend')
            });
            new Rickshaw['Graph'][('Behavior')][('Series')][('Toggle')]({
                'graph': _0x540f44,
                'legend': _0x330641
            });
            _0x553a5d(_0x47484f)['on']('resize', function () {
                _0x540f44.configure({
                    'width': _0x3005ee.width()
                });
                _0x540f44.render();
            });
        }, 'exampleThree': function () {
            var _0x19a0b8 = [
                [],
                [],
                []
            ];
            var _0x2ed38a = new Rickshaw[('Fixtures')]['RandomData'](0x96);
            for (var _0x2f702d = 0x0; _0x2f702d < 0x96; _0x2f702d++) {
                _0x2ed38a.addData(_0x19a0b8);
            }
            var _0x4e84e2 = _0x553a5d('#exampleStackedChart');
            var _0x340940 = new Rickshaw[('Graph')]({
                'element': _0x4e84e2.get(0x0),
                'width': _0x4e84e2.width(),
                'height': 0x12c,
                'renderer': 'bar',
                'series': [{
                    'color': _0x553a5d.colors('purple', 0x2bc),
                    'data': _0x19a0b8[0x0],
                    'name': '北京'
                }, {
                    'color': _0x553a5d.colors('purple', 0x1f4),
                    'data': _0x19a0b8[0x1],
                    'name': '上海'
                }, {
                    'color': _0x553a5d.colors('purple', 0x12c),
                    'data': _0x19a0b8[0x2],
                    'name': '广州'
                }]
            });
            _0x340940['render']();
            setInterval(function () {
                _0x2ed38a.removeData(_0x19a0b8);
                _0x2ed38a.addData(_0x19a0b8);
                _0x340940.update();
            }, 0x7d0);
            new Rickshaw['Graph'][('HoverDetail')]({
                'graph': _0x340940
            });
            var _0x46eb94 = new Rickshaw['Graph']['Legend']({
                'graph': _0x340940,
                'element': _0x15fa3b.getElementById('exampleStackedLegend')
            });
            new Rickshaw[('Graph')][('Behavior')]['Series'][('Toggle')]({
                'graph': _0x340940,
                'legend': _0x46eb94
            });
            _0x553a5d(_0x47484f)['on']('resize', function () {
                _0x340940.configure({
                    'width': _0x4e84e2.width()
                });
                _0x340940.render();
            });
        }, 'exampleFour': function () {
            var _0x3564f8 = [
                [],
                [],
                []
            ];
            var _0x26555c = new Rickshaw[('Fixtures')][('RandomData')](0x96);
            for (var _0x4aa296 = 0x0; _0x4aa296 < 0x96; _0x4aa296++) {
                _0x26555c['addData'](_0x3564f8);
            }
            var _0x326049 = _0x553a5d('#exampleAreaChart');
            var _0xc32fc6 = new Rickshaw['Graph']({
                'element': _0x326049.get(0x0),
                'width': _0x326049['width'](),
                'height': 0x12c,
                'renderer': 'area',
                'stroke': !![],
                'series': [{
                    'color': _0x553a5d.colors('purple', 0x2bc),
                    'data': _0x3564f8[0x0],
                    'name': '北京'
                }, {
                    'color': _0x553a5d.colors('purple', 0x1f4),
                    'data': _0x3564f8[0x1],
                    'name': '上海'
                }, {
                    'color': _0x553a5d['colors']('purple', 0x12c),
                    'data': _0x3564f8[0x2],
                    'name': '广州'
                }]
            });
            _0xc32fc6.render();
            setInterval(function () {
                _0x26555c.removeData(_0x3564f8);
                _0x26555c['addData'](_0x3564f8);
                _0xc32fc6.update();
            }, 0x7d0);
            new Rickshaw['Graph'][('HoverDetail')]({
                'graph': _0xc32fc6
            });
            var _0x2753b1 = new Rickshaw[('Graph')][('Legend')]({
                'graph': _0xc32fc6,
                'element': _0x15fa3b.getElementById('exampleAreaLegend')
            });
            new Rickshaw[('Graph')][('Behavior')][('Series')]['Toggle']({
                'graph': _0xc32fc6,
                'legend': _0x2753b1
            });
            _0x553a5d(_0x47484f)['on']('resize', function () {
                _0xc32fc6.configure({
                    'width': _0x326049.width()
                });
                _0xc32fc6['render']();
            });
        }, 'exampleFive': function () {
            var _0x23bfc3 = [
                [],
                [],
                [],
                [],
                []
            ];
            var _0x38d8f9 = new Rickshaw[('Fixtures')][('RandomData')](0x32);
            for (var _0x11202f = 0x0; _0x11202f < 0x4b; _0x11202f++) {
                _0x38d8f9['addData'](_0x23bfc3);
            }
            var _0x1741cc = _0x553a5d('#exampleMultipleChart');
            var _0x2f1b05 = new Rickshaw[('Graph')]({
                'element': _0x1741cc.get(0x0),
                'width': _0x1741cc.width(),
                'height': 0x12c,
                'renderer': 'multi',
                'dotSize': 0x5,
                'series': [{
                    'name': '温度',
                    'data': _0x23bfc3.shift(),
                    'color': _0x553a5d.colors('green', 0x1f4),
                    'renderer': 'stack'
                }, {
                    'name': '体感温度',
                    'data': _0x23bfc3.shift(),
                    'color': _0x553a5d['colors']('cyan', 0x1f4),
                    'renderer': 'stack'
                }, {
                    'name': '降雨量',
                    'data': _0x23bfc3.shift(),
                    'color': _0x553a5d.colors('blue', 0x1f4),
                    'renderer': 'scatterplot'
                }, {
                    'name': '空气质量',
                    'data': _0x23bfc3.shift().map(function (_0x500629) {
                        return {
                            'x': _0x500629['x'],
                            'y': _0x500629['y'] / 0x4
                        };
                    }),
                    'color': _0x553a5d.colors('indigo', 0x1f4),
                    'renderer': 'bar'
                }, {
                    'name': '紫外线',
                    'data': _0x23bfc3.shift().map(function (_0x28b63e) {
                        return {
                            'x': _0x28b63e['x'],
                            'y': _0x28b63e['y'] * 1.5
                        };
                    }),
                    'renderer': 'line',
                    'color': _0x553a5d.colors('red', 0x1f4)
                }]
            });
            new Rickshaw['Graph'][('RangeSlider')][('Preview')]({
                'graph': _0x2f1b05,
                'element': _0x15fa3b.querySelector('#exampleMultipleSlider')
            });
            _0x2f1b05.render();
            new Rickshaw[('Graph')][('HoverDetail')]({
                'graph': _0x2f1b05
            });
            var _0x4f1e31 = new Rickshaw['Graph']['Legend']({
                'graph': _0x2f1b05,
                'element': _0x15fa3b.querySelector('#exampleMultipleLegend')
            });
            new Rickshaw[('Graph')][('Behavior')]['Series'][('Highlight')]({
                'graph': _0x2f1b05,
                'legend': _0x4f1e31,
                'disabledColor': function () {
                    return 'rgba(0, 0, 0, 0.2)';
                }
            });
            new Rickshaw['Graph'][('Behavior')]['Series'][('Toggle')]({
                'graph': _0x2f1b05,
                'legend': _0x4f1e31
            });
            _0x553a5d(_0x47484f)['on']('resize', function () {
                _0x2f1b05['configure']({
                    'width': _0x1741cc.width()
                });
                _0x2f1b05.render();
            });
        }
    };
    _0x11f51d.run();
}(document, window, jQuery));