(function (_0x4dca26, _0x42d2e6, _0x423100) {

    var _0x456dc1 = _0x423100('#addtodoItemForm'),
        _0x3d8ada = _0x423100('#edittodoItemForm');
    var _0x1fe1a5 = {
        'chartExample': function () {
            var _0x1f5b8a = {
                'showArea': !![],
                'low': 0x0,
                'high': 0x3e8,
                'height': 0x1c5,
                'fullWidth': !![],
                'axisX': {
                    'offset': 0x1e
                },
                'axisY': {
                    'offset': 0x1e,
                    'labelInterpolationFnc': function (_0x3e1067) {
                        if (_0x3e1067 === 0x0) {
                            return null;
                        }
                        return _0x3e1067;
                    }, 'scaleMinSpace': 0x32
                },
                'chartPadding': {
                    'bottom': 0xc,
                    'left': 0xa
                },
                'plugins': [Chartist.plugins.tooltip()]
            };
            var _0x344f8b = ['4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月', '1月', '2月', '3月'];
            var _0x1a7b93 = {
                'name': 'series-1',
                'data': [0x0, 0xb4, 0x258, 0x3d4, 0x352, 0x258, 0x12c, 0x15e, 0x258, 0xc8, 0x276, 0x15e]
            };
            var _0x441d03 = {
                'name': 'series-2',
                'data': [0x0, 0x64, 0x208, 0x32a, 0x26c, 0x1f4, 0x276, 0x190, 0x17c, 0x195, 0xd2, 0xdc]
            };
            var _0x2a7339 = function (_0x49b3a0, _0x3fd7e2, _0x1e55b7, _0x4dd794, _0x513b5e) {
                var _0x1ee25 = new Chartist[('Line')](_0x49b3a0, {
                    'labels': _0x3fd7e2,
                    'series': [_0x1e55b7, _0x4dd794]
                }, _0x513b5e);
                _0x1ee25['on']('draw', function (_0x35059e) {
                    var _0x517e64, _0xc25112;
                    if (_0x35059e.type === 'point') {
                        _0x517e64 = _0x35059e.element;
                        _0xc25112 = new Chartist[('Svg')](_0x517e64._node.parentNode);
                        _0xc25112['elem']('line', {
                            'x1': _0x35059e['x'],
                            'y1': _0x35059e['y'],
                            'x2': _0x35059e['x'] + 0.01,
                            'y2': _0x35059e['y'],
                            'class': 'ct-point-content'
                        });
                    }
                });
            };
            _0x2a7339('#teamCompletedWidget .ct-chart', _0x344f8b, _0x1a7b93, _0x441d03, _0x1f5b8a);
        }, 'waitingThing': function () {
            var _0x16edeb = this;
            _0x423100('#addNewItemBtn')['on']('click', function () {
                _0x456dc1.modal('show');
            });
            _0x423100('#toDoListWidget .list-group-item input')['on']('click', function (_0x1f1397) {
                _0x1f1397.stopPropagation();
            });
            _0x423100('#toDoListWidget\x20.list-group-item')['on']('click', function () {
                var _0x1b68c1 = _0x423100(this)['find']('.item-due-date > span').text();
                _0x16edeb.title = _0x423100(this).find('.item-title')['text']();
                _0x3d8ada['modal']('show')['on']('shown.bs.modal', function () {
                    _0x423100(this).find('iframe').prop('contentWindow').teamModal.editDraw(_0x16edeb.title, _0x16edeb.date);
                });
                if (_0x1b68c1 === 'No due date') {
                    _0x16edeb.date = null;
                } else {
                    _0x16edeb.date = '8/25/2015';
                }
            });
        }, 'run': function () {
            this.chartExample();
            _0x456dc1.modal({
                'show': ![],
                'pageHeight': 0x172,
                'page': _0x423100['ctx'] + '/pages/home/team/_add-todo'
            });
            _0x3d8ada.modal({
                'show': ![],
                'pageHeight': 0x172,
                'page': _0x423100['ctx'] + '/pages/home/team/_edit-todo'
            });
            this['waitingThing']();
        }
    };
    _0x1fe1a5.run();
}(document, window, jQuery));