(function (_0x4333c2, _0x5bcc0a) {

    var _0x54481c;
    if (typeof $ === 'undefined') {
        _0x54481c = _0x5bcc0a['getElementById']('closeTab');
        _0x54481c.innerHTML = '退回上一页';
        _0x54481c.onclick = function () {
            history['go'](-0x1);
        };
    } else if (typeof $.site.contentTabs !== 'undefined') {
        $(_0x5bcc0a)['on']('click', '#closeTab', function () {
            $.site.contentTabs['closeTab']();
        });
    }
}(window, document));