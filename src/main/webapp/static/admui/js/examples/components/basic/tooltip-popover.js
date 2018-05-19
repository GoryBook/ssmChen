(function (_0x40b480, _0x4525c0, _0x35099b) {

    _0x35099b('[data-toggle="tooltip"]:not(#tooltipClick)').tooltip({
        'trigger': 'hover'
    });
    _0x35099b('#tooltipClick').tooltip({
        'trigger': 'click'
    });
    _0x35099b('[data-toggle="popover"]')['popover']();
    var _0x36ea93 = _0x35099b('#examplePopoverTable')['html']();
    _0x35099b('#examplePopWithTable').webuiPopover(_0x35099b['po']('webuiPopover', {
        'title': 'WebUI Popover',
        'content': _0x36ea93,
        'width': 0x1f4
    }));
    var _0x2ffa31 = _0x35099b('#examplePopoverList').html();
    _0x35099b('#examplePopWithList').webuiPopover(_0x35099b['po']('webuiPopover', {
        'content': _0x2ffa31,
        'title': '',
        'padding': ![]
    }));
    var _0x3e8b3d = _0x35099b('#examplePopoverLargeContent').html();
    _0x35099b('#examplePopWithLargeContent').webuiPopover(_0x35099b['po']('webuiPopover', {
        'title': 'WebUI Popover',
        'content': _0x3e8b3d,
        'width': 0x190,
        'height': 0x15e,
        'closeable': !![]
    }));
}(document, window, jQuery));