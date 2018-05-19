(function (_0x4211d1, _0x1be214, _0xb2a002) {

    var _0x4d41fa = function (_0x3d127f) {
        var _0x3344c8 = _0xb2a002('#dataTableEventDemoInfo')[0x0];
        _0x3344c8.innerHTML += '<div>' + _0x3d127f + ' 事件 - ' + new Date().getTime() + '</div>';
        _0x3344c8.scrollTop = _0x3344c8['scrollHeight'];
    };
    _0xb2a002('#dataTableExample')['on']('order.dt', function () {
        _0x4d41fa('排序');
    })['on']('search.dt', function () {
        _0x4d41fa('查找');
    })['on']('page.dt', function () {
        _0x4d41fa('分页');
    }).DataTable(_0xb2a002['po']('dataTable'));
}(window, document, jQuery));