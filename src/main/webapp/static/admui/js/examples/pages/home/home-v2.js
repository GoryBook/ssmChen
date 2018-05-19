(function () {

    new Chartist[('Line')]('#widgetLinearea .ct-chart', {
        'labels': ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
        'series': [
            [0x0, 2.5, 0x2, 2.8, 2.6, 3.8, 0x0],
            [0x0, 1.4, 0.5, 0x2, 1.2, 0.9, 0x0]
        ]
    }, {
            'low': 0x0,
            'showArea': !![],
            'showPoint': ![],
            'showLine': ![],
            'fullWidth': !![],
            'chartPadding': {
                'top': 0x0,
                'right': 0xa,
                'bottom': 0x0,
                'left': 0x0
            },
            'axisX': {
                'showGrid': ![],
                'labelOffset': {
                    'x': -0xe,
                    'y': 0x0
                }
            },
            'axisY': {
                'labelOffset': {
                    'x': -0xa,
                    'y': 0x0
                },
                'labelInterpolationFnc': function (_0x28decb) {
                    return _0x28decb % 0x1 === 0x0 ? _0x28decb : ![];
                }
            }
        });
}());