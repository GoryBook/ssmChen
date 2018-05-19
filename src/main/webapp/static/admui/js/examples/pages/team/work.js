(function (_0x4c1e80, _0x2c0b28, _0xf1c3f6) {

    App.extend({
        'handlePagination': function () {
            var _0xccf365 = _0xf1c3f6('.panel-footer .pagination li').not('.panel-footer.paginationli:first-child').not('.panel-footer .pagination li:last-child');
            var _0x424740 = _0xf1c3f6('.panel-footer .pagination li').first();
            var _0x52cdfb = _0xf1c3f6('.panel-footer.paginationli').last();

            function _0x236e93(_0x248332) {
                var _0x32c6f2 = _0x248332['prev']();
                var _0x56840a = _0x248332.next();
                if (_0x32c6f2.find('a').attr('aria-label') === 'Previous') {
                    _0x32c6f2.addClass('disabled');
                    _0x52cdfb.removeClass('disabled');
                } else if (_0x56840a.find('a').attr('aria-label') === 'Next') {
                    _0x56840a.addClass('disabled');
                    _0x424740.removeClass('disabled');
                } else {
                    _0x52cdfb.removeClass('disabled');
                    _0x424740.removeClass('disabled');
                }
            }
            _0xccf365['on']('click', function () {
                _0xf1c3f6(this).siblings('li').removeClass('active');
                _0xf1c3f6(this).addClass('active');
                _0x236e93(_0xf1c3f6(this));
            });
            _0x424740['on']('click', function () {
                var _0x4fc5d5 = _0xccf365.filter('.active').prev();
                if (_0xf1c3f6(this).attr('class') !== 'disabled') {
                    _0x4fc5d5['addClass']('active');
                    _0x4fc5d5.siblings('li')['removeClass']('active');
                    _0x236e93(_0x4fc5d5);
                }
            });
            _0x52cdfb['on']('click', function () {
                var _0x3a6323 = _0xccf365.filter('.active').next();
                if (_0xf1c3f6(this)['attr']('class') !== 'disabled') {
                    _0x3a6323.addClass('active');
                    _0x3a6323.siblings('li').removeClass('active');
                    _0x236e93(_0x3a6323);
                }
            });
        }, 'handleChart': function () {
            var _0x3c6b76 = function (_0xb456f4) {
                var _0x1c8fbc = new Chartist['Line'](_0xb456f4, {
                    'labels': ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
                    'series': [{
                        'name': 'series-1',
                        'data': [0.8, 1.5, 0.8, 2.7, 2.4, 3.9, 1.1]
                    }, {
                        'name': 'series-2',
                        'data': [2.2, 0x3, 2.7, 3.6, 1.5, 0x1, 2.9]
                    }]
                }, {
                        'lineSmooth': Chartist.Interpolation['simple']({
                            'divisor': 0x64
                        }),
                        'fullWidth': !![],
                        'chartPadding': {
                            'right': 0x19
                        },
                        'series': {
                            'series-1': {
                                'showArea': ![]
                            },
                            'series-2': {
                                'showArea': ![]
                            }
                        },
                        'axisX': {
                            'showGrid': ![]
                        },
                        'axisY': {
                            'scaleMinSpace': 0x28
                        },
                        'plugins': [Chartist['plugins']['tooltip']()],
                        'low': 0x0,
                        'height': 0xfa
                    });
                _0x1c8fbc['on']('draw', function (_0x5071da) {
                    if (_0x5071da['type'] === 'point') {
                        var _0x579de1 = new Chartist[('Svg')](_0x5071da.element['_node'].parentNode);
                        _0x579de1.elem('line', {
                            'x1': _0x5071da['x'],
                            'y1': _0x5071da['y'],
                            'x2': _0x5071da['x'] + 0.01,
                            'y2': _0x5071da['y'],
                            'class': 'ct-point-content'
                        });
                    }
                });
            };
            var _0xe9931 = function (_0x18e9cf) {
                var _0x1fd1c7 = new Chartist[('Bar')](_0x18e9cf, {
                    'labels': ['梅小燕', '唐雪琴', '陈媚婉', '嵇慧莉', '刘文平', '孙玉珍', '柳映秋'],
                    'series': [
                        [3.3, 3.5, 2.5, 0x2, 3.7, 2.7, 1.9],
                        [0x2, 0x4, 3.5, 2.7, 3.3, 3.5, 2.5]
                    ]
                }, {
                        'axisX': {
                            'showGrid': ![]
                        },
                        'axisY': {
                            'showGrid': ![],
                            'scaleMinSpace': 0x1e
                        },
                        'height': 0xd2,
                        'seriesBarDistance': 0x18
                    });
                _0x1fd1c7['on']('draw', function (_0x4bcd54) {
                    if (_0x4bcd54.type === 'bar') {
                        var _0x1f1a65 = new Chartist[('Svg')](_0x4bcd54.element._node.parentNode);
                        _0x1f1a65['elem']('line', {
                            'x1': _0x4bcd54['x1'],
                            'x2': _0x4bcd54['x2'],
                            'y1': _0x4bcd54['y2'],
                            'y2': 0x0,
                            'class': 'ct-bar-fill'
                        });
                        _0x4bcd54.element['attr']({
                            'style': 'stroke-width: 20px'
                        });
                    }
                });
            };
            _0xf1c3f6(_0x4c1e80)['on']('slidePanel::afterLoad', function () {
                _0x3c6b76('.trends-chart');
                _0xe9931('.member-chart');
            });
        }, 'handleSelective': function () {
            var _0x3e9223 = this,
                _0x21b764 = [{
                    'id': 'uid_1',
                    'name': '梅小燕',
                    'avatar': '/public/images/portraits/1.jpg'
                }, {
                    'id': 'uid_2',
                    'name': '赵桦',
                    'avatar': '/public/images/portraits/2.jpg'
                }, {
                    'id': 'uid_3',
                    'name': '曹洁群',
                    'avatar': '/public/images/portraits/3.jpg'
                }, {
                    'id': 'uid_4',
                    'name': '嵇慧莉',
                    'avatar': '/public/images/portraits/4.jpg'
                }, {
                    'id': 'uid_5',
                    'name': '孙玉珍',
                    'avatar': '/public/images/portraits/5.jpg'
                }, {
                    'id': 'uid_6',
                    'name': '柳映秋',
                    'avatar': '/public/images/portraits/6.jpg'
                }, {
                    'id': 'uid_7',
                    'name': '周伊娅',
                    'avatar': '/public/images/portraits/7.jpg'
                }];

            function _0xd9c390(_0x30ce46) {
                return Math.ceil(Math.random() * (_0x30ce46 + 0x1));
            }

            function _0x20aa16() {
                return _0x21b764[_0xd9c390(_0x21b764.length - 0x1) - 0x1];
            }

            function _0x48034d(_0x33b7a8) {
                var _0x16a6b5 = _0x33b7a8;
                var _0x58b001 = _0x20aa16();
                if (_0x16a6b5.indexOf(_0x58b001) === -0x1) {
                    return _0x58b001;
                } else {
                    return _0x48034d(_0x16a6b5);
                }
            }

            function _0x448470(_0x342e8f) {
                var _0x2de4dd = [];
                for (var _0x4b3628 = 0x0; _0x4b3628 < _0x342e8f; _0x4b3628++) {
                    _0x2de4dd.push(_0x48034d(_0x2de4dd));
                }
                _0x3e9223.items = _0x2de4dd;
            }

            function _0x38e324(_0x54b84e) {
                var _0x26ec30 = _0xd9c390(_0x54b84e - 0x1);
                _0x448470(_0x26ec30);
            }
            _0xf1c3f6('[data-plugin="jquery-selective"]').each(function () {
                _0x38e324(_0x21b764.length);
                var _0x156669 = _0x3e9223.items;
                _0xf1c3f6(this)['selective']({
                    'namespace': 'addMember',
                    'local': _0x21b764,
                    'selected': _0x156669,
                    'buildFromHtml': ![],
                    'tpl': {
                        'optionValue': function (_0x58d093) {
                            return _0x58d093['id'];
                        }, 'frame': function () {
                            return '<div class="' + this.namespace + '">' + this['options'].tpl.items.call(this) + '<div class="' + this.namespace + '-trigger">' + this.options.tpl['triggerButton'].call(this) + '<div class="' + this.namespace + '-trigger-dropdown">' + this.options.tpl.list['call'](this) + '</div>' + '</div>' + '</div>';
                        }, 'triggerButton': function () {
                            return '<div class="' + this.namespace + '-trigger-button"><i class="wb-plus"></i></div>';
                        }, 'listItem': function (_0x439799) {
                            return '<li class="' + this.namespace + '-list-item"><img class="avatar" src="' + _0x439799.avatar + '"> ' + _0x439799.name + '</li>';
                        }, 'item': function (_0x6f0cff) {
                            return '<li class="' + this['namespace'] + '-item"><imgclass="avatar"src="' + _0x6f0cff.avatar + '" title="' + _0x6f0cff.name + '">' + this.options.tpl.itemRemove.call(this) + '</li>';
                        }, 'itemRemove': function () {
                            return '<span class="' + this.namespace + '-remove"><i class="wb-minus-circle"></i></span>';
                        }, 'option': function (_0x20d99b) {
                            return '<option value="' + this.options['tpl'].optionValue.call(this, _0x20d99b) + '">' + _0x20d99b['name'] + '</option>';
                        }
                    }
                });
            });
        }, 'run': function (_0x1ed71f) {
            this.items = [];
            this['handlePagination']();
            this['handleChart']();
            this.handleSelective();
            _0x1ed71f();
        }
    });
    App.run();
}(document, window, jQuery));