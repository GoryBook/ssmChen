(function (_0x51eda9, _0x37d53c, _0x45c8e1) {

    _0x45c8e1('#exampleContext').contextmenu({
        'target': '#exampleContextMenu',
        'before': function (_0x10e699) {
            _0x10e699.preventDefault();
            if (_0x10e699.target.tagName === 'SPAN') {
                _0x10e699.preventDefault();
                this.closemenu();
                return ![];
            }
            this.getMenu().find('li').eq(4).find('a').html('选中内容');
            return !![];
        }
    });
    _0x45c8e1('#exampleContext2').contextmenu({
        'target': '#exampleContextMenu',
        'onItem': function (_0xf637f6, _0x16f5fe) {
            toastr.info(_0x45c8e1.trim(_0x45c8e1(_0x16f5fe.target).text()));
        }
    });
    _0x45c8e1(_0x51eda9).on('show.bs.context', '#exampleContextMenu', function () {
        toastr.info('显示之前');
    });
    _0x45c8e1(_0x51eda9).on('shown.bs.context', '#exampleContextMenu', function () {
        toastr.info('显示之后');
    });
    _0x45c8e1(_0x51eda9).on('hide.bs.context', '#exampleContextMenu', function () {
        toastr.info('隐藏之前');
    });
    _0x45c8e1(_0x51eda9).on('hidden.bs.context', '#exampleContextMenu', function () {
        toastr.info('隐藏之后');
    });
}(document, window, jQuery));