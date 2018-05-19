(function (_0x5b2d43, _0xc712dc, _0x5deb02) {

    var _0x4fafc7 = null,
        _0x22a807 = _0x5deb02('#dataTableExample').DataTable(_0x5deb02['po']('dataTable'));
    _0x5deb02(_0xc712dc)['on']('mouseover', '#dataTableExample tbody td', function () {
        var _0x3a9307 = _0x22a807.cell(this)['index']()['column'];
        if (_0x3a9307 !== _0x4fafc7) {
            _0x5deb02(_0x22a807['cells']()['nodes']()).removeClass('highlight');
            _0x5deb02(_0x22a807['column'](_0x3a9307).nodes()).addClass('highlight');
        }
    })['on']('mouseleave', '#dataTableExample tbody', function () {
        _0x5deb02(_0x22a807.cells().nodes()).removeClass('highlight');
    });
}(window, document, jQuery));