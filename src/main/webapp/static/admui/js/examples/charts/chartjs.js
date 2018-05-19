(function (_0x4a3682, _0xd64a1a, _0x52f8d9) {

    Chart.defaults.global.responsive = !![];
    var _0x991246 = {
        'labels': ['1月', '2', '3月', '4月', '5月', '6月', '7月'],
        'scaleShowGridLines': !![],
        'scaleShowVerticalLines': ![],
        'scaleGridLineColor': '#ebedf0',
        'datasets': [{
            'fillColor': 'rgba(204,\x20213,\x20219,\x20.1)',
            'strokeColor': _0x52f8d9.colors('blue-grey', 0x12c),
            'pointColor': _0x52f8d9.colors('blue-grey', 0x12c),
            'pointStrokeColor': '#fff',
            'pointHighlightFill': '#fff',
            'pointHighlightStroke': _0x52f8d9['colors']('blue-grey', 0x12c),
            'data': [0x41, 0x3b, 0x50, 0x51, 0x38, 0x37, 0x28]
        }, {
            'fillColor': 'rgba(98, 168, 234, .1)',
            'strokeColor': _0x52f8d9.colors('purple', 0x258),
            'pointColor': _0x52f8d9.colors('purple', 0x258),
            'pointStrokeColor': '#fff',
            'pointHighlightFill': '#fff',
            'pointHighlightStroke': _0x52f8d9['colors']('purple', 0x258),
            'data': [0x1c, 0x30, 0x28, 0x13, 0x56, 0x1b, 0x5a]
        }]
    };
    new Chart(_0x52f8d9('#exampleChartjsLine').get(0x0).getContext('2d')).Line(_0x991246);
    var _0x26d672 = {
        'labels': ['1月', '2', '3月', '4月', '5月'],
        'scaleShowGridLines': !![],
        'scaleShowVerticalLines': ![],
        'scaleGridLineColor': '#ebedf0',
        'barShowStroke': ![],
        'datasets': [{
            'fillColor': _0x52f8d9.colors('blue', 0x1f4),
            'strokeColor': _0x52f8d9.colors('blue', 0x1f4),
            'highlightFill': _0x52f8d9.colors('blue', 0x1f4),
            'highlightStroke': _0x52f8d9.colors('blue', 0x1f4),
            'data': [0x41, 0x2d, 0x4b, 0x32, 0x3c]
        }, {
            'fillColor': _0x52f8d9['colors']('blue-grey', 0x12c),
            'strokeColor': _0x52f8d9['colors']('blue-grey', 0x12c),
            'highlightFill': _0x52f8d9['colors']('blue-grey', 0x12c),
            'highlightStroke': _0x52f8d9.colors('blue-grey', 0x12c),
            'data': [0x1e, 0x14, 0x28, 0x19, 0x2d]
        }]
    };
    new Chart(_0x4a3682.getElementById('exampleChartjsBar').getContext('2d')).Bar(_0x26d672);
    var _0x106033 = {
        'labels': ['吃饭', '喝水', '睡觉', '设计', '编码', '娱乐', '跑步'],
        'pointLabelFontSize': 0xe,
        'datasets': [{
            'fillColor': 'rgba(204,213,219,0.35)',
            'strokeColor': 'rgba(0,0,0,0)',
            'pointColor': _0x52f8d9.colors('blue-grey', 0x12c),
            'pointStrokeColor': '#fff',
            'pointHighlightFill': '#fff',
            'pointHighlightStroke': _0x52f8d9.colors('blue-grey', 0x12c),
            'data': [0x41, 0x3b, 0x5a, 0x51, 0x38, 0x37, 0x28]
        }, {
            'fillColor': 'rgba(250,122,122,0.25)',
            'strokeColor': 'rgba(0,0,0,0)',
            'pointColor': _0x52f8d9.colors('red', 0x1f4),
            'pointStrokeColor': '#fff',
            'pointHighlightFill': '#fff',
            'pointHighlightStroke': _0x52f8d9['colors']('red', 0x1f4),
            'data': [0x1c, 0x30, 0x28, 0x13, 0x60, 0x1b, 0x64]
        }]
    };
    new Chart(_0x4a3682.getElementById('exampleChartjsRadar').getContext('2d')).Radar(_0x106033, {
        'scaleShowLabels': ![],
        'pointLabelFontSize': 0xa
    });
    var _0x4abc77 = [{
        'value': 0x12c,
        'color': _0x52f8d9.colors('red', 0x258),
        'label': '红色'
    }, {
        'value': 0xc8,
        'color': _0x52f8d9.colors('purple', 0x1f4),
        'label': '蓝色'
    }, {
        'value': 0x64,
        'color': _0x52f8d9.colors('blue-grey', 0xc8),
        'label': '蓝灰色'
    }, {
        'value': 0x32,
        'color': _0x52f8d9['colors']('blue-grey', 0x12c),
        'label': '深蓝灰色'
    }];
    new Chart(_0x4a3682.getElementById('exampleChartjsPloarArea').getContext('2d'))['PolarArea'](_0x4abc77);
    var _0x384319 = [{
        'value': 0x32,
        'color': _0x52f8d9['colors']('purple', 0x1f4),
        'label': '蓝色'
    }, {
        'value': 0x32,
        'color': _0x52f8d9['colors']('blue-grey', 0xc8),
        'label': '蓝灰色'
    }];
    new Chart(_0x4a3682.getElementById('exampleChartjsPie').getContext('2d')).Pie(_0x384319);
    var _0x11c3b6 = [{
        'value': 0x2d,
        'color': _0x52f8d9.colors('red', 0x1f4),
        'label': '红色'
    }, {
        'value': 0xf,
        'color': _0x52f8d9.colors('blue-grey', 0xc8),
        'label': '蓝灰色'
    }, {
        'value': 0x3c,
        'color': _0x52f8d9.colors('purple', 0x1f4),
        'label': '蓝色'
    }];
    new Chart(_0x4a3682.getElementById('exampleChartjsDonut').getContext('2d')).Doughnut(_0x11c3b6);
}(document, window, jQuery));