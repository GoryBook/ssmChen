(function (_0x386e13, _0x4cd743, _0x5e2eea) {

    var _0x2d914b = {
        'run': function () {
            this.mLine();
            this.mArea();
            this.mBar();
            this['mDonut']();
        }, 'mLine': function () {
            Morris.Line({
                'element': 'exampleMorrisLine',
                'data': [{
                    'y': '2016 Q3',
                    'a': 0x28,
                    'b': 0x64
                }, {
                    'y': '2015 Q4',
                    'a': 0x4b,
                    'b': 0xa5
                }, {
                    'y': '2015 Q4',
                    'a': 0x96,
                    'b': 0xf0
                }, {
                    'y': '2014 Q4',
                    'a': 0x64,
                    'b': 0x10e
                }, {
                    'y': '2013 Q4',
                    'a': 0x104,
                    'b': 0x12c
                }, {
                    'y': '2012 Q4',
                    'a': 0x14,
                    'b': 0xe1
                }, {
                    'y': '2011 Q4',
                    'a': 0x127,
                    'b': 0x6e
                }],
                'xkey': 'y',
                'ykeys': ['a', 'b'],
                'labels': ['收入', '支出'],
                'resize': !![],
                'pointSize': 0x3,
                'smooth': !![],
                'gridTextColor': '#474e54',
                'gridLineColor': '#eef0f2',
                'goalLineColors': '#e3e6ea',
                'gridTextFamily': _0x5e2eea.configs['get']('site', 'fontFamily'),
                'gridTextWeight': '300',
                'numLines': 0x7,
                'gridtextSize': 0xe,
                'lineWidth': 0x1,
                'lineColors': [_0x5e2eea.colors('green', 0x258), _0x5e2eea.colors('purple', 0x258)]
            });
        }, 'mArea': function () {
            Morris.Area({
                'element': 'exampleMorrisArea',
                'data': [{
                    'y': '6',
                    'a': 0x10e,
                    'b': 0xa0
                }, {
                    'y': '7',
                    'a': 0xd2,
                    'b': 0x6e
                }, {
                    'y': '8',
                    'a': 0xf0,
                    'b': 0x82
                }, {
                    'y': '9',
                    'a': 0x118,
                    'b': 0xfa
                }, {
                    'y': '10',
                    'a': 0xd2,
                    'b': 0x8c
                }, {
                    'y': '11',
                    'a': 0x96,
                    'b': 0x5a
                }, {
                    'y': '12',
                    'a': 0x122,
                    'b': 0xb4
                }, {
                    'y': '13',
                    'a': 0x118,
                    'b': 0xf0
                }],
                'xkey': 'y',
                'ykeys': ['a', 'b'],
                'labels': ['收入', '支出'],
                'behaveLikeLine': !![],
                'ymax': 0x12c,
                'resize': !![],
                'pointSize': 0x3,
                'smooth': !![],
                'gridTextColor': '#474e54',
                'gridLineColor': '#eef0f2',
                'goalLineColors': '#e3e6ea',
                'gridTextFamily': _0x5e2eea.configs.get('site', 'fontFamily'),
                'gridTextWeight': '300',
                'numLines': 0x7,
                'gridtextSize': 0xe,
                'lineWidth': 0x1,
                'fillOpacity': 0.1,
                'lineColors': [_0x5e2eea['colors']('purple', 0x258), _0x5e2eea.colors('green', 0x258)]
            });
        }, 'mBar': function () {
            Morris.Bar({
                'element': 'exampleMorrisBar',
                'data': [{
                    'y': '2013-6',
                    'a': 0x15e,
                    'b': 0x19a
                }, {
                    'y': '2013-7',
                    'a': 0x6e,
                    'b': 0x12c
                }, {
                    'y': '2013-8',
                    'a': 0x1cc,
                    'b': 0x82
                }, {
                    'y': '2013-9',
                    'a': 0xfa,
                    'b': 0x136
                }],
                'xkey': 'y',
                'ykeys': ['a', 'b'],
                'labels': ['收入', '支出'],
                'barGap': 0x6,
                'barSizeRatio': 0.35,
                'smooth': !![],
                'gridTextColor': '#474e54',
                'gridLineColor': '#eef0f2',
                'goalLineColors': '#e3e6ea',
                'gridTextFamily': _0x5e2eea.configs.get('site', 'fontFamily'),
                'gridTextWeight': '300',
                'numLines': 0x6,
                'gridtextSize': 0xe,
                'resize': !![],
                'barColors': [_0x5e2eea['colors']('red', 0x1f4), _0x5e2eea.colors('blue-grey', 0x12c)]
            });
        }, 'mDonut': function () {
            Morris.Donut({
                'element': 'exampleMorrisDonut',
                'data': [{
                    'label': '线上',
                    'value': 0x23
                }, {
                    'label': '门店',
                    'value': 0x30
                }, {
                    'label': '市场',
                    'value': 0x16
                }],
                'resize': !![],
                'colors': [_0x5e2eea.colors('red', 0x1f4), _0x5e2eea.colors('purple', 0x1f4), _0x5e2eea.colors('blue-grey', 0x12c)]
            });
        }
    };
    _0x2d914b['run']();
}(document, window, jQuery));