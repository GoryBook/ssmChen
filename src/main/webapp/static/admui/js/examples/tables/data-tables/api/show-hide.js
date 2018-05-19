(function (_0x5be2bf, _0x5eb756, _0x52a706) {

    var _0x3ad583 = _0x52a706('#dataTableExample').DataTable(_0x52a706['po']('dataTable', {
        'scrollY': '200px',
        'paging': ![]
    }));
    _0x52a706(_0x5eb756)['on']('click', '#DTToggleBtn .btn', function () {
        var _0x54bc5a = _0x3ad583['column'](_0x52a706(this).attr('data-column'));
        _0x54bc5a['visible'](!_0x54bc5a.visible());
    });
}(window, document, jQuery));