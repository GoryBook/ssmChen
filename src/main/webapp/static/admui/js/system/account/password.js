(function (_0xdbaa1a, _0x37deec, _0x3b9a96) {

    _0x3b9a96('#accountMsg').formValidation(_0x3b9a96['po']('formValidation', {
        'fields': {
            'oldPwd': {
                'validators': {
                    'notEmpty': {
                        'message': '密码不能为空'
                    },
                    'callback': {
                        'enabled': ![],
                        'message': '密码不正确',
                        'callback': function (_0xb120c6, _0x5373b5, _0x13be6e) {
                            return _0x13be6e['data']('valid');
                        }
                    }
                }
            },
            'newPwd': {
                'enabled': ![],
                'validators': {
                    'notEmpty': {
                        'message': '密码不能为空'
                    },
                    'stringLength': {
                        'min': 0x6,
                        'max': 0x1e,
                        'message': '密码必须大于6且小于30个字符'
                    }
                }
            },
            'confirm': {
                'enabled': ![],
                'validators': {
                    'notEmpty': {
                        'message': '确认密码不能为空'
                    },
                    'identical': {
                        'field': 'newPwd',
                        'message': '确认密码必须和密码保持一致'
                    }
                }
            }
        }
    }))['on']('focus', '[name="oldPwd"]', function () {
        _0x3b9a96('#accountMsg')['formValidation']('enableFieldValidators', 'oldPwd', ![], 'callback');
    })['on']('focusout', '[name="oldPwd"]', function () {
        var _0x1bdaf4 = _0x3b9a96(this),
            _0xcb5b78 = _0x1bdaf4['val'](),
            _0x123389 = _0x3b9a96('#accountMsg');
        if (_0xcb5b78 !== '') {
            _0x3b9a96['ajax']({
                'url': _0x3b9a96['ctx'] + '/user/check',
                'type': 'POST',
                'data': {
                    'oldPwd': _0xcb5b78
                },
                'dataType': 'JSON',
                'success': function (_0x35df08) {
                    _0x1bdaf4.data('valid', _0x35df08.success);
                    _0x123389.formValidation('enableFieldValidators', 'oldPwd', !![], 'callback').formValidation('validateField', 'oldPwd');
                    if (_0x35df08.success) {
                        _0x123389.formValidation('enableFieldValidators', 'newPwd', !![]).formValidation('enableFieldValidators', 'confirm', !![]);
                    } else {
                        _0x123389.formValidation('enableFieldValidators', 'newPwd', ![]).formValidation('enableFieldValidators', 'confirm', ![]);
                    }
                }, 'error': function () {
                    _0x123389['formValidation']('enableFieldValidators', 'newPwd', ![]).formValidation('enableFieldValidators', 'confirm', ![]);
                    toastr.error('服务器异常，请稍后再试！');
                }
            });
        }
    })['on']('success.form.fv', function (_0x3ea983) {
        var _0x50c837 = _0x3b9a96(_0x3ea983['target']).data('formValidation').getFieldElements('confirm')['val']();
        _0x3b9a96.ajax({
            'url': _0x3b9a96.ctx + '/user/changePassword',
            'type': 'POST',
            'data': {
                'password': _0x50c837
            },
            'dataType': 'JSON',
            'success': function (_0x10de24) {
                var _0x4374e6 = 0x5,
                    _0x4fbc21;
                if (_0x10de24.success) {
                    parent.layer.alert('<p id="modifyPwd"><span>' + _0x4374e6 + '</span>秒后将自动跳转到登录页面</p>');
                    _0x4fbc21 = setInterval(function () {
                        _0x4374e6--;
                        _0x3b9a96('#modifyPwd span').text(_0x4374e6);
                        if (_0x4374e6 === 0x0) {
                            clearTimeout(_0x4fbc21);
                            parent['location'].href = '/system/logout';
                        }
                    }, 0x3e8);
                } else {
                    toastr.error(_0x10de24.msg);
                }
            }, 'error': function () {
                toastr.error('服务器异常，请稍后再试！');
            }
        });
        _0x3ea983['preventDefault']();
    });
}(window, document, jQuery));