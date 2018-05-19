(function (_0x48865d, _0x1b7bdd, _0x3bb833) {

    var _0x5e4988 = _0x3bb833('#add');
    var _0x4a8c47 = {
        'queryIp': function () {
            var _0xde6180 = _0x3bb833.extend(!![], {}, _0x3bb833['po']('webuiPopover'), _0x3bb833('.ip-msg').data(), {
                'trigger': 'click',
                'title': '详细信息',
                'type': 'async',
                'content': function (_0x143346) {
                    var _0x3f69aa = '出错了，请重试！';
                    if (_0x143346.success) {
                        _0x3f69aa = _0x143346['message'];
                    }
                    return _0x3f69aa;
                }
            });
            _0x3bb833('.ip-msg').webuiPopover(_0xde6180);
        }, 'run': function () {
            var _0x3b1ad1, _0x19b616 = this,
                _0x76bcff = _0x3bb833('#blackList');
            _0x3b1ad1 = _0x3bb833('.dataTable')['DataTable'](_0x3bb833['po']('dataTable', {
                'rowId': 'blId',
                'autoWidth': ![],
                'columns': [{
                    'render': function (_0x2b0c91, _0x32e259, _0x16d93d, _0x345665) {
                        return _0x345665.row + 0x1;
                    }
                }, {
                    'render': function (_0x528b11, _0x56781d, _0x160edb) {
                        var _0x57f6c8, _0x2330b4 = _0x160edb.loginIp;
                        if (_0x2330b4 === undefined) {
                            _0x57f6c8 = _0x160edb[0x1];
                        } else {
                            _0x57f6c8 = '<a href="javascript:;" class="ip-msg" data-url="/query/ip?' + _0x2330b4 + '\x22>' + _0x2330b4 + '</a>';
                        }
                        return _0x57f6c8;
                    }
                }, {
                    'data': 'createTime'
                }, {
                    'data': 'comment'
                }, {
                    'render': function () {
                        return '<a class="btn btn-pure btn-xs btn-default icon wb-close delete-tr" href="#"></a>';
                    }
                }],
                'drawCallback': function () {
                    this.api().column(0x0).nodes()['each'](function (_0x2e6b72, _0x3433bf) {
                        _0x2e6b72['innerHTML'] = _0x3433bf + 0x1;
                    });
                    _0x19b616['queryIp']();
                }
            }));
            _0x76bcff.formValidation(_0x3bb833['po']('formValidation', {
                'fields': {
                    'ip': {
                        'validators': {
                            'notEmpty': {
                                'message': '请填写IP地址'
                            }
                        }
                    }
                }
            }))['on']('success.form.fv', function (_0x1166e5) {
                var _0x82055b = _0x3bb833(_0x1166e5.target)['data']('formValidation'),
                    _0x4652bc = {
                        'loginIp': _0x82055b.getFieldElements('ip').val(),
                        'comment': _0x82055b.getFieldElements('comment').val()
                    };
                _0x3bb833.ajax({
                    'url': _0x3bb833['ctx'] + '/blacklist/save',
                    'type': 'POST',
                    'data': _0x3bb833(this)['serialize'](),
                    'dataType': 'JSON',
                    'success': function (_0x1d4aab) {
                        if (_0x1d4aab.success) {
                            _0x4652bc.blId = _0x1d4aab.blacklist.blId;
                            _0x4652bc.createTime = _0x1d4aab.blacklist.createTime;
                            _0x5e4988.one('hidden.bs.modal', function () {
                                _0x3b1ad1['row'].add(_0x4652bc).draw(![]);
                                toastr['success']('添加成功！');
                            }).modal('hide');
                        } else {
                            toastr.error(_0x1d4aab.msg);
                        }
                    }, 'error': function () {
                        toastr.error('服务器异常，请稍后再试！');
                    }
                });
                _0x1166e5['preventDefault']();
            });
            _0x5e4988['one']('hide.bs.modal', function () {
                _0x76bcff['formValidation']('resetForm', !![]);
                _0x76bcff.find('textarea').val('');
            });
            _0x3bb833(_0x1b7bdd)['on']('click', '.delete-tr', function (_0x1f669d) {
                var _0x5a452d = _0x3bb833(this).closest('tr'),
                    _0x5788ef, _0x4a5009 = _0x5a452d.prev();
                if (_0x5a452d.hasClass('child') && _0x4a5009.hasClass('parent')) {
                    _0x5a452d = _0x4a5009;
                }
                _0x5788ef = _0x3b1ad1.row(_0x5a452d)['id']();
                parent.layer.confirm('你确定要删除吗？', function (_0x2bcb22) {
                    _0x3bb833.ajax({
                        'url': _0x3bb833.ctx + '/blacklist/delete?blId=' + _0x5788ef,
                        'type': 'POST',
                        'dataType': 'JSON',
                        'success': function (_0x564119) {
                            if (_0x564119.success) {
                                _0x3b1ad1['row'](_0x5a452d).remove().draw(![]);
                                toastr.success('删除成功！');
                                parent.layer.close(_0x2bcb22);
                            } else {
                                toastr.error('出错了，请重试！');
                            }
                        }, 'error': function () {
                            toastr.error('服务器异常，请稍后再试！');
                        }
                    });
                });
                _0x1f669d.preventDefault();
            });
        }
    };
    _0x4a8c47['run']();
}(document, window, jQuery));