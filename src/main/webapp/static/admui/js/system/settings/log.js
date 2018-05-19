(function (_0x5bb53d, _0x312aa5, _0x18ce48) {

    var _0xa77368, _0x5d879f, _0x5073ee = _0x18ce48('#logsForm'),
        _0x44fa98 = _0x18ce48('#compileRoleForm');
    _0xa77368 = _0x18ce48('.dataTable').DataTable(_0x18ce48['po']('dataTable', {
        'autoWidth': ![],
        'processing': !![],
        'rowId': 'configId',
        'columns': [{
            'data': 'url'
        }, {
            'data': 'type'
        }, {
            'data': 'createUser.loginName'
        }, {
            'data': 'createTime'
        }, {
            'render': function () {
                return '<div class="btn-group btn-group-sm"><button type="button"' + '\x20class=\x22btn\x20btn-icon\x20btn-pure\x20btn-default\x20edit-row\x22\x20data-target=\x22#logsForm\x22' + ' data-toggle="modal"><i class="icon wb-edit" aria-hidden="true"></i>' + '</button><button type="button" class="btn btn-icon btn-pure btn-default' + '\x20delete-row\x22><i\x20class=\x22icon\x20wb-close\x22\x20aria-hidden=\x22true\x22></i></button></div>';
            }
        }]
    }));
    _0x44fa98.formValidation(_0x18ce48['po']('formValidation', {
        'fields': {
            'url': {
                'validators': {
                    'notEmpty': {
                        'message': '请填写URL地址'
                    }
                }
            },
            'type': {
                'validators': {
                    'notEmpty': {
                        'message': '请填写URL对应名称'
                    }
                }
            }
        }
    }))['on']('success.form.fv', function (_0x2c4333) {
        _0x2c4333.preventDefault();
        var _0x23dafd = _0x18ce48(_0x2c4333.target)['data']('formValidation'),
            _0x465ec8 = {
                'url': _0x23dafd.getFieldElements('url').val(),
                'type': _0x23dafd.getFieldElements('type')['val']()
            },
            _0x2af68e = _0x5d879f === null ? '' : _0xa77368.row(_0x5d879f)['id']();

        function _0x3588d1(_0x352bc3) {
            if (_0x5d879f !== null) {
                _0x5d879f.find('td:eq(0)')['text'](_0x352bc3.url);
                _0x5d879f['find']('td:eq(1)').text(_0x352bc3.type);
                toastr.success('修改成功！');
            } else {
                _0xa77368.row.add(_0x352bc3)['draw'](![]);
                toastr['success']('添加成功！');
            }
        }
        _0x18ce48['ajax']({
            'url': _0x18ce48.ctx + '/log/saveConfig?configId=' + _0x2af68e,
            'type': 'POST',
            'data': _0x18ce48(this).serialize(),
            'dataType': 'JSON',
            'success': function (_0x36662e) {
                if (_0x36662e['success']) {
                    _0x465ec8.configId = _0x36662e.config.configId;
                    _0x465ec8.createTime = _0x36662e.config.createTime;
                    _0x465ec8.createUser = _0x36662e['config']['createUser'];
                    _0x5073ee.one('hidden.bs.modal', function () {
                        _0x3588d1(_0x465ec8);
                    }).modal('hide');
                } else {
                    toastr.error(_0x36662e.msg);
                }
            }, 'error': function () {
                toastr.error('服务器异常，请稍后再试！');
            }
        });
    });
    _0x5073ee['on']('hide.bs.modal', function () {
        _0x44fa98.formValidation('resetForm', !![]);
    });
    _0x18ce48(_0x5bb53d)['on']('click', '.delete-row', function () {
        var _0x54b9ce = _0x18ce48(this)['closest']('tr'),
            _0x5c0fe4, _0x27dedb = _0x54b9ce['prev']();
        if (_0x54b9ce.hasClass('child') && _0x27dedb.hasClass('parent')) {
            _0x54b9ce = _0x27dedb;
        }
        _0x5c0fe4 = _0xa77368['row'](_0x54b9ce)['id']();
        parent.layer.confirm('你确定要删除吗？', function (_0x480b92) {
            _0x18ce48.ajax({
                'url': _0x18ce48.ctx + '/log/deleteConfig?configId=' + _0x5c0fe4,
                'type': 'POST',
                'data': {
                    'id': _0x5c0fe4
                },
                'dataType': 'JSON',
                'success': function (_0x355fdc) {
                    if (_0x355fdc.success) {
                        _0xa77368['row'](_0x54b9ce).remove()['draw'](![]);
                        toastr['success']('删除成功！');
                        parent['layer'].close(_0x480b92);
                    } else {
                        toastr.error(_0x355fdc.msg);
                    }
                }, 'error': function () {
                    toastr.error('服务器异常，请稍后再试！');
                }
            });
        });
    });
    _0x18ce48(_0x5bb53d)['on']('click', '.add-row', function () {
        _0x5d879f = null;
    });
    _0x18ce48(_0x5bb53d)['on']('click', '.edit-row', function () {
        _0x5d879f = _0x18ce48(this).closest('tr');
        var _0x146d1a = {
            'url': _0x5d879f.find('td:eq(0)').text(),
            'type': _0x5d879f.find('td:eq(1)')['text']()
        };
        _0x44fa98.find('input[name="url"]').val(_0x146d1a.url);
        _0x44fa98.find('input[name="type"]').val(_0x146d1a.type);
    });
}(document, window, jQuery));