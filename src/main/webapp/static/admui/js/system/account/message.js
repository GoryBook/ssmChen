(function (_0x187667, _0x23ca2c, _0xf18139) {

    var _0x369cd0 = {
        'loadMsg': function (_0xde2356) {
            var _0x68487f;
            template.helper('iconType', function (_0x4d5559) {
                switch (_0x4d5559) {
                    case 'SYSTEM':
                        return 'fa-desktop system';
                    case 'TASK':
                        return 'fa-tasks task';
                    case 'SETTING':
                        return 'fa-cog setting';
                    case 'EVENT':
                        return 'fa-calendar event';
                    default:
                        return 'fa-comment-o other';
                }
            });
            template['helper']('timeMsg', function (_0x29195a) {
                var _0x503d9d, _0x54f2ec, _0x7286a6 = new Date();
                _0x54f2ec = _0x29195a.split(/[- : \/]/);
                _0x503d9d = new Date(_0x54f2ec[0x0], _0x54f2ec[0x1] - 0x1, _0x54f2ec[0x2], _0x54f2ec[0x3], _0x54f2ec[0x4], _0x54f2ec[0x5]);
                return _0x187667.notifyFn.timeDistance(_0x503d9d, _0x7286a6);
            });
            _0xf18139['ajax']({
                'url': _0xf18139.ctx + '/message/query?page=' + _0xde2356,
                'dataType': 'JSON',
                'success': function (_0x40516f) {
                    if (_0x40516f.success) {
                        _0x68487f = template('newMessge', _0x40516f);
                        _0xf18139('#messageLists').html(_0x68487f);
                    } else {
                        toastr.error('出错了，请重试！');
                    }
                }, 'error': function () {
                    toastr['error']('服务器异常，请稍后再试！');
                }
            });
        }, 'fnExtend': function () {
            var _0xf141da = this;
            _0xf18139.extend(_0x187667.notifyFn, {
                'messagePage': function () {
                    var _0x1cf33c = _0xf18139('#messageLists');
                    if (!_0xf18139('#accountMsg')['hasClass']('active')) {
                        return;
                    }
                    if (_0x1cf33c.children('.no-message')['length'] !== 0x0 || _0xf18139('#paging')['data']('page') === 0x1) {
                        _0xf141da['loadMsg']('');
                    }
                }, 'msgStatus': function (_0x3d36dd) {
                    var _0x2d809e = _0xf18139('[data-message-id=\x22' + _0x3d36dd + '\x22]')['children']('.media'),
                        _0x1df954 = _0x2d809e.children('.media-right')['find']('a'),
                        _0x3f720a = _0x2d809e.children('.media-body')['find']('i');
                    _0x3f720a.remove();
                    _0x1df954.attr('title', '删除');
                    _0x1df954.removeClass('wb-check')['addClass']('wb-close');
                }
            });
        }, 'run': function () {
            var _0x28d3ea = this,
                _0x3468f4 = _0x187667['notifyFn']['unReadMsg'];
            this.loadMsg('');
            this.fnExtend();
            if (_0x3468f4 && _0xf18139.isFunction(_0x3468f4)) {
                _0x3468f4(_0xf18139('#admui-navbarMessage')['find']('span.msg-num').text());
            }
            _0xf18139(_0x23ca2c)['on']('click', '.news-list', function (_0x96f77a) {
                _0x96f77a.preventDefault();
                var _0x23f89e = _0xf18139(this),
                    _0x305972 = _0x23f89e['parents']('.list-group-item')['data']();
                _0x305972['readFlag'] = _0x23f89e['find']('i.icon').size() <= 0x0;
                _0x187667.notifyFn['readMsg'](_0x305972);
            });
            _0xf18139(_0x23ca2c)['on']('click', '.wb-check', function (_0x1a8760) {
                _0x1a8760.preventDefault();
                _0x187667.notifyFn.readMsg(_0xf18139(this)['parents']('[data-message-id]').data());
            });
            _0xf18139(_0x23ca2c)['on']('click', '.wb-close', function (_0x1181de) {
                _0x1181de.preventDefault();
                var _0x1bbbed = _0xf18139(this).closest('.list-group-item'),
                    _0x4f0a33 = _0xf18139('.msg-number'),
                    _0x1cda83 = Number(_0x4f0a33.text()),
                    _0x4cca69 = _0xf18139('#paging')['data']('page'),
                    _0x398275 = _0x1bbbed.data('messageId');
                parent['layer']['confirm']('你确定要删除吗？', function (_0x17aa3d) {
                    _0xf18139['ajax']({
                        'url': _0xf18139['ctx'] + '/message/delete',
                        'type': 'POST',
                        'data': {
                            'messageId': _0x398275
                        },
                        'dataType': 'JSON',
                        'success': function (_0x159bb6) {
                            if (_0x159bb6.success) {
                                _0x28d3ea.loadMsg(_0x4cca69);
                                _0x1cda83--;
                                _0x4f0a33.text(_0x1cda83);
                                toastr['clear']();
                                toastr['success']('删除成功！');
                                parent['layer']['close'](_0x17aa3d);
                            } else {
                                toastr.error('出错了，请重试！');
                            }
                        }, 'error': function () {
                            toastr.error('服务器异常，请稍后再试！');
                        }
                    });
                });
            });
            _0xf18139(_0x23ca2c)['on']('click', '.previous,\x20.next', function () {
                var _0x15c878 = _0xf18139(this),
                    _0x443852 = _0x15c878.parents('#paging').data('page'),
                    _0x453c8d = _0x15c878.parents('#paging').data('max-page'),
                    _0x5ac794 = _0xf18139('.previous'),
                    _0x4f350b = _0xf18139('.next');
                if (_0x15c878['is']('.previous')) {
                    if (_0x4f350b['is'](':hidden')) {
                        _0x4f350b.show();
                    }
                    if (_0x443852 === 0x2) {
                        _0x5ac794.hide();
                    }
                    _0x443852--;
                } else if (_0x15c878['is']('.next')) {
                    if (_0x5ac794['is'](':hidden')) {
                        _0x5ac794['show']();
                    }
                    if (_0x443852 === _0x453c8d - 0x1) {
                        _0x4f350b.hide();
                    }
                    _0x443852++;
                }
                _0x28d3ea['loadMsg'](_0x443852);
            });
        }
    };
    _0x369cd0.run();
}(window, document, jQuery));