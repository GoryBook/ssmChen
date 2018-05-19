(function (_0x2fa6c9, _0x2432c3, _0x16ac51) {


    function _0x2eff7b() {
        _0x16ac51('#dataTableExample').DataTable(_0x16ac51['po']('dataTable')).search(_0x16ac51('#global_filter')['val'](), _0x16ac51('#global_regex').prop('checked'), _0x16ac51('#global_smart')['prop']('checked')).draw();
    }

    function _0x437e00(_0x4efcad) {
        _0x16ac51('#dataTableExample').DataTable(_0x16ac51['po']('dataTable'))['column'](_0x4efcad).search(_0x16ac51('#col' + _0x4efcad + '_filter').val(), _0x16ac51('#col' + _0x4efcad + '_regex').prop('checked'), _0x16ac51('#col' + _0x4efcad + '_smart').prop('checked'))['draw']();
    }
    _0x16ac51('#dataTableExample').DataTable(_0x16ac51['po']('dataTable'));
    _0x16ac51(_0x2432c3)['on']('keyup click', 'input.global_filter', function () {
        _0x2eff7b();
    });
    _0x16ac51(_0x2432c3)['on']('keyup click', 'input.column_filter', function () {
        _0x437e00(_0x16ac51(this).parents('tr').attr('data-column'));
    });
}(window, document, jQuery));