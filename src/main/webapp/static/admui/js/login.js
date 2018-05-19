(function (_0x20a4a9, _0x397036, _0x3504e5) {

    var _0x536b9 = _0x3504e5('#identity'),
        _0x13c9b0 = location['search'],
        _0x3639ec = _0x13c9b0.indexOf('user'),
        _0x1fbdf5 = _0x13c9b0['substring'](_0x3639ec, _0x13c9b0.length);
    _0x1fbdf5 = _0x1fbdf5.replace('user=', '');

    function _0x838296(_0x573a1a) {
        var _0x3c45f2 = _0x536b9.find('option[value="' + _0x573a1a + '"]')['data']('password');
        if (_0x3639ec !== -0x1) {
            _0x536b9['selectpicker']('val', _0x573a1a);
        }
        _0x3504e5('#loginForm').find('#username')['val'](_0x573a1a);
        _0x3504e5('#loginForm').find('#password')['val'](_0x3c45f2);
        _0x3504e5('#loginForm').formValidation('revalidateField', 'loginName').formValidation('revalidateField', 'password');
    }
    _0x536b9['selectpicker']({
        'style': 'btn-select'
    });
    if (_0x1fbdf5 !== '') {
        _0x838296(_0x1fbdf5);
    }
    _0x536b9['on']('change', function () {
        _0x838296(_0x3504e5(this).val());
    });
    _0x3504e5('#loginForm').formValidation({
        'locale': 'zh_CN',
        'framework': 'bootstrap',
        'excluded': ':disabled',
        'autoFocus': !![],
        'icon': {
            'valid': 'icon wb-check',
            'invalid': 'icon wb-close',
            'validating': 'icon wb-refresh'
        },
        'fields': {
            'loginName': {
                'validators': {
                    'notEmpty': {
                        'message': '用户名不能为空'
                    }
                }
            },
            'password': {
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
            'validCode': {
                'validators': {
                    'notEmpty': {
                        'enabled': !![],
                        'message': '验证码不能为空'
                    }
                }
            }
        }
    });
    _0x3504e5('.reload-vify')['on']('click', function () {
        var _0x3c6600 = _0x3504e5(this).children('img'),
            _0x2abdce = _0x3c6600.prop('src');
        _0x3c6600['prop']('src', _0x2abdce + '?tm=' + Math.random());
    });
    _0x20a4a9.KF5SupportBoxAPI['ready'](function () {
        _0x20a4a9['KF5SupportBoxAPI'].removeButton();
    });
    _0x3504e5(_0x397036)['on']('click', '.open-kf', function (_0x1fc136) {
        _0x1fc136.preventDefault();
        _0x20a4a9['KF5SupportBoxAPI'].open();
    });
}(window, document, jQuery));