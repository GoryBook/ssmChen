(function (_0x4a3682, _0xd64a1a, _0x52f8d9) {

    App.extend({
        'handleProject': function () {
            _0x52f8d9(_0x4a3682)['on']('click', '[data-tag=project-delete]', function (_0x991246) {
                var _0x981158 = _0x52f8d9(_0x991246['target']);
                parent.layer.alert('您确定要删除这个项目吗？', {
                    'icon': 0x4
                }, function (_0x5f41ea) {
                    _0x981158['closest']('.list-group-item')['remove']();
                    parent['layer'].close(_0x5f41ea);
                });
            });
        }, 'run': function (_0xf81284) {
            this.handleProject();
            _0xf81284();
        }
    });
    App.run();
}(document, window, jQuery));