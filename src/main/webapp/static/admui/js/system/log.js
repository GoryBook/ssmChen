(function (_0x3e04b9, _0x27e65f, _0x504f79) {
    var _0x2c66c4, _0x4437bf, _0x28a014 = _0x504f79('#filter-date');
    var _0x155c4e = function () {
        return _0x504f79('.dataTable').DataTable(_0x504f79['po']('dataTable', {
            'autoWidth': ![],
            'processing': !![],
            'serverSide': !![],
            'searching': ![],
            'pagingType': 'simple_numbers',
            'columns': [{
                'data': 'url'
            }, {
                'data': 'type'
            }, {
                'data': 'params'
            }, {
                'data': 'user',
                'render': function (_0x5e99e7) {
                    return _0x5e99e7 === null ? null : _0x5e99e7['loginName'];
                }
            }, {
                'data': 'userIp'
            }, {
                'data': 'logTime'
            }],
            'ajax': function (_0x420afe, _0x41e5a2) {
                var _0x28bb94, _0x35017f, _0x5d06bb, _0x5da390 = -0x1;
                if (_0x420afe.order.length !== 0x0) {
                    _0x35017f = _0x420afe.order[0x0].column;
                    _0x5d06bb = _0x420afe.order[0x0].dir;
                } else {
                    _0x35017f = _0x5d06bb = '';
                }
                _0x28bb94 = 'start=' + _0x420afe.start + '&limit=' + _0x420afe.length + '&column=' + _0x35017f + '&dir=' + _0x5d06bb;
                if (_0x4437bf) {
                    _0x28bb94 += '&' + _0x4437bf;
                }
                if (_0x504f79('#accountLog')['length'] > 0x0) {
                    _0x5da390 = _0x504f79('#admui-signOut').data('user');
                    _0x28bb94 += '&user.userId=' + _0x5da390;
                }
                _0x504f79.ajax({
                    'url': _0x504f79.ctx + '/log/query',
                    'cache': ![],
                    'data': _0x28bb94,
                    'dataType': 'JSON',
                    'success': function (_0x201122) {
                        var _0x3d89cb = null;
                        if (_0x201122.success) {
                            _0x3d89cb = {
                                'recordsTotal': _0x201122['total'],
                                'recordsFiltered': _0x201122.total,
                                'data': _0x201122.data
                            };
                            _0x41e5a2(_0x3d89cb);
                        } else {
                            toastr.error('出错了，请重试！');
                        }
                    }, 'error': function () {
                        toastr.error('服务器异常，请稍后再试！');
                    }
                });
            }
        }));
    };
    if (!_0x28a014.length) {
        _0x504f79('a[href="#log"]')['on']('shown.bs.tab', function () {
            if (!_0x2c66c4) {
                _0x2c66c4 = _0x155c4e();
            }
        });
    } else {
        _0x2c66c4 = _0x155c4e();
        _0x28a014.daterangepicker(_0x504f79['po']('daterangepicker', {
            'maxDate': new Date(),
            'ranges': {
                '今天': [moment(), moment()],
                '昨天': [moment()['subtract'](0x1, 'days'), moment().subtract(0x1, 'days')],
                '最近7天': [moment().subtract(0x6, 'days'), moment()],
                '最近30天': [moment()['subtract'](0x1d, 'days'), moment()],
                '本月': [moment().startOf('month'), moment().endOf('month')],
                '上月': [moment().subtract(0x1, 'month')['startOf']('month'), moment().subtract(0x1, 'month').endOf('month')]
            }
        }));
        _0x504f79(_0x3e04b9)['on']('submit', '#logForm', function () {
            var _0x1194d0 = _0x28a014.val(),
                _0x5061f1;
            if (_0x1194d0 !== '') {
                _0x5061f1 = _0x1194d0['indexOf']('至');
                _0x504f79('input[name="startDate"]').val(_0x504f79.trim(_0x1194d0.substring(0x0, _0x5061f1)) + '\x2000:00:00');
                _0x504f79('input[name="endDate"]').val(_0x504f79.trim(_0x1194d0.substring(_0x5061f1 + 0x1)) + '\x2023:59:59');
            }
            _0x4437bf = _0x504f79(this).serialize();
            _0x2c66c4.ajax['reload']();
            return ![];
        });
        _0x504f79(_0x3e04b9)['on']('click', '.date-close', function () {
            _0x28a014.val('');
            _0x504f79('input[name="startDate"]')['val']('');
            _0x504f79('input[name=\x22endDate\x22]').val('');
        });
    }
}(document, window, jQuery));