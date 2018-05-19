(function (_0x5a1cdf, _0x2bb23d, _0x5e5b14) {

    _0x5e5b14('#exampleAccountForm').formValidation(_0x5e5b14['po']('formValidation', {
        'fields': {
            'username': {
                'validators': {
                    'notEmpty': {
                        'message': '请填写用户名'
                    },
                    'stringLength': {
                        'min': 0x6,
                        'max': 0x1e,
                        'message': '用户名长度为6-30个字符'
                    },
                    'regexp': {
                        'regexp': /^[a-zA-Z0-9_\.]+$/,
                        'message': '用户名只能由字母，数字，小数点和下划线组成'
                    }
                }
            },
            'password': {
                'validators': {
                    'notEmpty': {
                        'message': '请填写密码'
                    },
                    'different': {
                        'field': 'username',
                        'message': '密码不能和用户名一致'
                    }
                }
            }
        }
    }));
    _0x5e5b14('#exampleBillingForm').formValidation(_0x5e5b14['po']('formValidation', {
        'fields': {
            'number': {
                'validators': {
                    'notEmpty': {
                        'message': '请填写信用卡卡号'
                    }
                }
            },
            'cvv': {
                'validators': {
                    'notEmpty': {
                        'message': '请填写CVV码'
                    }
                }
            }
        }
    }));
    var _0x80b1cb = _0x5e5b14('#exampleWizardForm').wizard(_0x5e5b14['po']('wizard', {
        'buttonsAppendTo': '.panel-body'
    }))['data']('wizard');
    _0x80b1cb.get('#exampleAccount')['setValidator'](function () {
        var _0x4b3f9b = _0x5e5b14('#exampleAccountForm')['data']('formValidation');
        _0x4b3f9b.validate();
        return _0x4b3f9b['isValid']();
    });
    _0x80b1cb.get('#exampleBilling').setValidator(function () {
        var _0x530964 = _0x5e5b14('#exampleBillingForm')['data']('formValidation');
        _0x530964.validate();
        return _0x530964.isValid();
    });
    _0x5e5b14('#exampleWizardFormContainer')['wizard'](_0x5e5b14['po']('wizard', {
        'onInit': function () {
            _0x5e5b14('#exampleFormContainer').formValidation(_0x5e5b14['po']('formValidation', {
                'fields': {
                    'username': {
                        'validators': {
                            'notEmpty': {
                                'message': '请填写用户名'
                            }
                        }
                    },
                    'password': {
                        'validators': {
                            'notEmpty': {
                                'message': '请填写密码'
                            }
                        }
                    },
                    'number': {
                        'validators': {
                            'notEmpty': {
                                'message': '请填写信用卡卡号'
                            }
                        }
                    },
                    'cvv': {
                        'validators': {
                            'notEmpty': {
                                'message': '请填写CVV码'
                            }
                        }
                    }
                }
            }));
        }, 'validator': function () {
            var _0x21740c = _0x5e5b14('#exampleFormContainer').data('formValidation');
            var _0x360958 = _0x5e5b14(this);
            _0x21740c.validateContainer(_0x360958);
            var _0x4cac53 = _0x21740c['isValidContainer'](_0x360958);
            return !(_0x4cac53 === ![] || _0x4cac53 === null);
        }, 'onFinish': function () { }, 'buttonsAppendTo': '.panel-body'
    }));
    _0x5e5b14('#exampleWizardPager')['wizard'](_0x5e5b14['po']('wizard', {
        'step': '.wizard-pane',
        'templates': {
            'buttons': function () {
                var _0x31138b = this.options;
                return '<div class="btn-group btn-group-sm">' + '<a class="btn btn-default btn-outline" href="#' + this['id'] + '" data-wizard="back" role="button">' + _0x31138b['buttonLabels'].back + '</a>' + '<a class="btn btn-success btn-outline pull-right" href="#' + this['id'] + '" data-wizard="finish" role="button">' + _0x31138b['buttonLabels'].finish + '</a>' + '<a class="btn btn-default btn-outline pull-right" href="#' + this['id'] + '" data-wizard="next" role="button">' + _0x31138b.buttonLabels.next + '</a>' + '</div>';
            }
        },
        'buttonLabels': {
            'next': '<i class="icon wb-chevron-right" aria-hidden="true"></i>',
            'back': '<i class="icon wb-chevron-left" aria-hidden="true"></i>',
            'finish': '<i class="icon wb-check" aria-hidden="true"></i>'
        },
        'buttonsAppendTo': '.panel-actions'
    }));
    _0x5e5b14('#exampleWizardProgressbar').wizard(_0x5e5b14['po']('wizard', {
        'step': '.wizard-pane',
        'onInit': function () {
            this.$progressbar = this.$element.find('.progress-bar').addClass('progress-bar-striped');
        }, 'onBeforeShow': function (_0x363a68) {
            _0x363a68.$element.tab('show');
        }, 'onFinish': function () {
            this.$progressbar['removeClass']('progress-bar-striped').addClass('progress-bar-success');
        }, 'onAfterChange': function (_0x4fe6cf, _0xfaf679) {
            var _0x3abc98 = this.length();
            var _0x47ffa7 = _0xfaf679.index + 0x1;
            var _0x245703 = _0x47ffa7 / _0x3abc98 * 0x64;
            this['$progressbar'].css({
                'width': _0x245703 + '%'
            }).find('.sr-only').text(_0x47ffa7 + '/' + _0x3abc98);
        }, 'buttonsAppendTo': '.panel-body'
    }));
    _0x5e5b14('#exampleWizardTabs')['wizard'](_0x5e5b14['po']('wizard', {
        'step': '> .nav > li > a',
        'onBeforeShow': function (_0x162a52) {
            _0x162a52.$element.tab('show');
        }, 'classes': {
            'step': {
                'error': 'color-error'
            }
        }, 'onFinish': function () {
            toastr['success']('完成');
        }, 'buttonsAppendTo': '.tab-content'
    }));
    var _0x36200e = _0x5e5b14['po']('wizard');
    _0x5e5b14('#exampleWizardAccordion').wizard(_0x5e5b14['po']('wizard', {
        'step': '.panel-title[data-toggle="collapse"]',
        'classes': {
            'step': {
                'error': 'color-error'
            }
        },
        'templates': {
            'buttons': function () {
                return '<div class="panel-footer">' + _0x36200e.templates.buttons.call(this) + '</div>';
            }
        },
        'onBeforeShow': function (_0x52a582) {
            _0x52a582.$pane.collapse('show');
        }, 'onBeforeHide': function (_0x4b213e) {
            _0x4b213e.$pane.collapse('hide');
        }, 'onFinish': function () {
            toastr.success('完成');
        }, 'buttonsAppendTo': '.panel-collapse'
    }));
}(document, window, jQuery));