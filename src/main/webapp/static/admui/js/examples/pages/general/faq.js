(function (_0x5c383c, _0x2d7b9d, _0x26d064) {

    if (_0x26d064('.list-group[data-plugin="nav-tabs"]').length) {
        _0x26d064('a[data-toggle="tab"]')['on']('shown.bs.tab', function (_0x1cbf99) {
            _0x26d064(_0x1cbf99['target'])['addClass']('active').siblings().removeClass('active');
        });
    }
}(document, window, jQuery));