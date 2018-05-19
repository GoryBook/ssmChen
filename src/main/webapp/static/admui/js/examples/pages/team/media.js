(function (_0x1c399a, _0xdcc3d0, _0x5af87) {

    App.extend({
        'handleArrangement': function () {
            _0x5af87(_0x1c399a)['on']('click', '#arrangement-grid', function () {
                var _0x18c91e = _0x5af87(this);
                if (_0x18c91e['hasClass']('active')) {
                    return;
                }
                _0x5af87('#arrangement-list').removeClass('active');
                _0x18c91e.addClass('active');
                _0x5af87('.media-list')['removeClass']('is-list').addClass('is-grid');
                _0x5af87('.media-list>ul>li').removeClass('animation-fade').addClass('animation-scale-up');
            });
            _0x5af87(_0x1c399a)['on']('click', '#arrangement-list', function () {
                var _0x111fd1 = _0x5af87(this);
                if (_0x111fd1.hasClass('active')) {
                    return;
                }
                _0x5af87('#arrangement-grid').removeClass('active');
                _0x111fd1.addClass('active');
                _0x5af87('.media-list').removeClass('is-grid').addClass('is-list');
                _0x5af87('.media-list>ul>li').removeClass('animation-scale-up').addClass('animation-fade');
            });
        }, 'handleActive': function () {
            _0x5af87['po']('selectable').rowSelector = '.media-item';
        }, 'handleAction': function () {
            var _0x570923 = _0x5af87('.site-action').actionBtn()['data']('actionBtn');
            var _0x3fe451 = _0x5af87('[data-selectable]');
            _0x5af87('.site-action-toggle')['on']('click', function (_0x4b93c3) {
                var _0x4ffb28 = _0x3fe451.asSelectable('getSelected');
                if (_0x4ffb28['length'] === 0x0) {
                    _0x5af87('#fileupload').trigger('click');
                    _0x4b93c3.stopPropagation();
                }
            });
            _0x5af87(_0x1c399a)['on']('click', '[data-action="trash"]', '.site-action', function () {
                toastr.info('删除所选文件');
            });
            _0x5af87(_0x1c399a)['on']('click', '[data-action=\x22download\x22]', '.site-action', function () {
                toastr.info('下载所选文件');
            });
            _0x5af87(_0x1c399a)['on']('asSelectable::change', '[data-selectable]', function (_0x2fd9f5, _0x307ac0, _0x29d7bf) {
                if (_0x29d7bf) {
                    _0x570923.show();
                } else {
                    _0x570923['hide']();
                }
            });
        }, 'handleDropdownAction': function () {
            _0x5af87(_0x1c399a)['on']('show.bs.dropdown', '.info-wrap>.dropdown', function () {
                _0x5af87(this).closest('.media-item').toggleClass('item-active');
            })['on']('hidden.bs.dropdown', '.info-wrap>.dropdown', function () {
                _0x5af87(this).closest('.media-item').toggleClass('item-active');
            });
            _0x5af87(_0x1c399a)['on']('click', '.info-wrap\x20.dropdown-menu', function (_0x560a30) {
                _0x560a30['stopPropagation']();
            });
        }, 'run': function (_0x39324f) {
            _0x5af87(_0x1c399a)['on']('click', '.media-item-actions', function (_0xb10623) {
                _0xb10623.stopPropagation();
            });
            this.handleArrangement();
            this.handleAction();
            this.handleActive();
            this.handleDropdownAction();
            _0x39324f();
        }
    });
    App.run();
}(document, window, jQuery));