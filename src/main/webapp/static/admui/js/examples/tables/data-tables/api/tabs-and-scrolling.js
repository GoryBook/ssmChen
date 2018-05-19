(function (_0x200b24, _0x40b2b1, _0xd9a430) {

    _0xd9a430(_0x40b2b1)['on']('shown.bs.tab', '#DTExample a[data-toggle="tab"]', function () {
        _0xd9a430['fn']['dataTable'].tables({
            'visible': !![],
            'api': !![]
        })['columns'].adjust();
    });
    _0xd9a430('#DTExample table.dataTable').DataTable(_0xd9a430['po']('dataTable', {
        'ajax': _0xd9a430.ctx + '/public/data/examples/tables/dt-ajax.json',
        'scrollY': 0xc8,
        'scrollCollapse': !![],
        'paging': ![]
    }));
    _0xd9a430('#myTable2').DataTable().search('北京').draw();
}(window, document, jQuery));