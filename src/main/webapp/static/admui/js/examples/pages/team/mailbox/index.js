(function (_0x5d9f66, _0x1fc56c, _0x5082a5) {

    App['extend']({
        'handleAction': function () {
            var _0x293dae = _0x5082a5('.site-action').actionBtn()['data']('actionBtn'),
                _0x4883e8 = _0x5082a5('[data-selectable]');
            _0x5082a5('.site-action-toggle')['on']('click', function (_0xe00ca1) {
                var _0x449e45 = _0x4883e8.asSelectable('getSelected');
                if (!_0x449e45['length']) {
                    _0x5082a5('#addMailForm').modal('show');
                    _0xe00ca1.stopPropagation();
                }
            });
            _0x5082a5(_0x5d9f66)['on']('click', '[data-action="trash"]', '.site-action', function () {
                toastr.info('删除所选邮件');
            });
            _0x5082a5(_0x5d9f66)['on']('click', '[data-action="inbox"]', '.site-action', function () {
                toastr['info']('移动所选邮件到指定文件夹');
            });
            _0x5082a5(_0x5d9f66)['on']('asSelectable::change', '[data-selectable]', function (_0x1dc8dd, _0x3c0ddc, _0x26fa9a) {
                if (_0x26fa9a) {
                    _0x293dae.show();
                } else {
                    _0x293dae.hide();
                }
            });
        }, 'handleListItem': function () {
            _0x5082a5(_0x5d9f66)['on']('click', '#addLabelToggle', function (_0x5deac2) {
                _0x5082a5('#addLabelForm').modal('show');
                _0x5deac2['stopPropagation']();
            });
            _0x5082a5(_0x5d9f66)['on']('click', '[data-tag=list-delete]', function (_0x2c31a4) {
                parent.layer.alert('您确定要删除这个标签吗？', {
                    'icon': 0x4
                }, function (_0x2ae8c1) {
                    _0x5082a5(_0x2c31a4.target).closest('.list-group-item').remove();
                    parent['layer']['close'](_0x2ae8c1);
                });
            });
        }, 'itemTpl': function (_0x56bce2) {
            return '<tr id="' + _0x56bce2['id'] + '" data-mailbox="slidePanel" ' + (_0x56bce2.unread === 'true' ? 'class="unread"' : '') + '>' + '<td class="cell-60">' + '<span class="checkbox-custom checkbox-primary checkbox-lg">' + '<input type="checkbox" class="mailbox-checkbox selectable-item" id="mail_' + _0x56bce2['id'] + '"/>' + '<label for="mail_' + _0x56bce2['id'] + '"></label>' + '</span>' + '</td>' + '<td class="cell-30 responsive-hide">' + '<span class="checkbox-important checkbox-default">' + '<input type="checkbox" class="mailbox-checkbox mailbox-important" ' + (_0x56bce2.starred === 'true' ? 'checked="checked"' : '') + ' id="mail_' + _0x56bce2['id'] + '_important"/>' + '<label for="mail_' + _0x56bce2['id'] + '_important"></label>' + '</span>' + '</td>' + '<td class="cell-60 responsive-hide">' + '<a class="avatar" href="javascript:;"><img class="img-responsive" src="' + _0x56bce2.avatar + '" alt="..."></a>' + '</td>' + '<td>' + '<div class="content">' + '<div class="title">' + _0x56bce2.name + '</div>' + '<div class="abstract">' + _0x56bce2.title + '</div>' + '</div>' + '</td>' + '<td class="cell-30 responsive-hide">' + (_0x56bce2.attachments['length'] > 0x0 ? '<i class="icon wb-paperclip" aria-hidden="true"></i>' : '') + '</td>' + '<td class="cell-130">' + '<div class="time">' + _0x56bce2.time + '</div>' + (_0x56bce2.group.length > 0x0 ? '<div class="identity"><i class="wb-medium-point ' + _0x56bce2.color + '" aria-hidden="true"></i>' + _0x56bce2.group + '</div>' : '') + '</td>' + '</tr>';
        }, 'attachmentsTpl': function (_0x15e4a5) {
            var _0x4aa1d6 = this,
                _0x5d17e9 = '';
            _0x5d17e9 += '<div class="mail-attachments">' + '<p><i Class="icon wb-paperclip"></i>Attachments | <a href="javascript:;">Download All</a></p>' + '<ul class="list-group">';
            _0x5082a5['each'](_0x15e4a5, function (_0xfc2d95, _0x5527c1) {
                _0x5d17e9 += _0x4aa1d6.attachmentTpl(_0x5527c1);
            });
            _0x5d17e9 += '</ul></div>';
            return _0x5d17e9;
        }, 'attachmentTpl': function (_0x5de212) {
            return '<li class="list-group-item">' + '<span class="name">' + _0x5de212.name + '</span><span class="size">' + _0x5de212.size + '</span>' + '<button type="button" class="btn btn-icon btn-pure btn-default"><i class="icon wb-download" aria-hidden="true"></i></button>' + '</li>';
        }, 'messagesTpl': function (_0x42530a) {
            var _0x480e20 = '';
            _0x5082a5.each(_0x42530a.messages, function (_0x52e519, _0x1e8108) {
                _0x480e20 += '<section class="slidePanel-inner-section">' + '<div class="mail-header">' + '<div class="mail-header-main">' + '<a class="avatar" href="javascript:;"><img src="' + _0x42530a.avatar + '" alt="..."></a>' + '<div><span class="name">' + _0x42530a.name + '</span></div>' + '<div>' + '<a href="javascript:;" class="mailbox-panel-email">' + _0x42530a.email + '</a>' + ' 发送给 <a href="javascript:;" class="margin-right-10">我</a>' + '<span class="identity"><i class="wb-medium-point red-600" aria-hidden="true"></i>' + _0x42530a.group + '</span>' + '</div>' + '</div>' + '<div class="mail-header-right">' + '<span class="time">' + _0x1e8108.time + '</span>' + '<div class="btn-group actions" role="group">' + '<button type="button" class="btn btn-icon btn-pure btn-default"><i class="icon wb-star" aria-hidden="true"></i></button>' + '<button type="button" class="btn btn-icon btn-pure btn-default"><i class="icon wb-reply" aria-hidden="true"></i></button>' + '</div>' + '</div>' + '</div>' + '<div class="mail-content">' + _0x1e8108.content + '</div>';
                if (_0x52e519 === 0x0) {
                    if (_0x1e8108.attachments && _0x1e8108.attachments.length > 0x0) {
                        _0x480e20 += this.attachmentsTpl(_0x1e8108.attachments);
                    }
                }
                _0x480e20 += '</section>';
            });
            return _0x480e20;
        }, 'initMail': function () {
            var _0xfe808 = this;
            _0x5082a5['getJSON'](_0x5082a5.ctx + '/public/data/examples/pages/mailbox.json', function (_0x468fa3) {
                var _0x1818ad = _0x5082a5('#mailboxTable');
                _0xfe808.buildMail(_0x1818ad, _0x468fa3);
                _0xfe808.initMailData(_0x468fa3);
                _0xfe808['handlSlidePanelPlugin']();
            });
        }, 'initMailData': function (_0x5ead04) {
            this['mailboxData'] = _0x5ead04;
        }, 'buildMail': function (_0x36dc08, _0x7e6379) {
            var _0x312539 = this,
                _0x2b9118 = _0x5082a5('<tbody></tbody>');
            _0x5082a5.each(_0x7e6379, function (_0x101970, _0x201aac) {
                _0x312539['buildItem'](_0x2b9118, _0x201aac);
            });
            _0x36dc08.empty().append(_0x2b9118);
        }, 'buildItem': function (_0x215ebb, _0x120514) {
            _0x215ebb.append(_0x5082a5(this['itemTpl'](_0x120514)).data('mailInfo', _0x120514));
        }, 'handlSlidePanelPlugin': function () {
            var _0x53c394 = this;
            if (typeof _0x5082a5.slidePanel === 'undefined') {
                return;
            }
            _0x5082a5(_0x5d9f66)['on']('click', '[data-mailbox="slidePanel"]', function (_0x2242c9) {
                _0x5082a5.slidePanel.show({
                    'url': _0x5082a5.ctx + '/public/data/examples/pages/mailbox-panel.tpl',
                    'target': _0x5082a5(this)
                }, _0x5082a5['po']('slidePanel', {
                    'template': function (_0xfd39e9) {
                        return '<div class="' + _0xfd39e9['classes'].base + ' ' + _0xfd39e9.classes.base + '-' + _0xfd39e9.direction + '">' + '<div class="' + _0xfd39e9['classes'].base + '-scrollable"><div>' + '<div class="' + _0xfd39e9.classes.content + '"></div>' + '</div></div>' + '<div class="' + _0xfd39e9.classes.base + '-handler"></div>' + '</div>';
                    }, 'afterLoad': function () {
                        this.$panel.find('.' + this['options'].classes.base + '-scrollable').slimScroll(_0x5082a5['po']('slimScroll'));
                    }, 'contentFilter': function (_0x294682, _0x54665f) {
                        var _0x1bdd4c = _0x5082a5(_0x54665f['target']),
                            _0x1a3c16 = _0x1bdd4c.data('mailInfo'),
                            _0x380f25 = _0x5082a5(_0x294682);
                        _0x5082a5('.mailbox-panel-title', _0x380f25).html(_0x1a3c16.title);
                        _0x5082a5('.slidePanel-messages', _0x380f25).html(_0x53c394['messagesTpl'](_0x1a3c16));
                        return _0x380f25;
                    }
                }));
                _0x2242c9['stopPropagation']();
            });
        }, 'run': function (_0x3bffb0) {
            this.handleAction();
            this.handleListItem();
            this.initMail();
            _0x5082a5('#addlabelForm').modal({
                'show': ![]
            });
            _0x5082a5('#addMailForm').modal({
                'show': ![],
                'pageHeight': 0x21c,
                'page': _0x5082a5['ctx'] + '/pages/team/mailbox/_add-mail'
            });
            _0x5082a5(_0x5d9f66)['on']('click', '.checkbox-important', function (_0x519434) {
                _0x519434.stopPropagation();
            });
            _0x3bffb0();
        }
    });
    App.run();
}(document, window, jQuery));