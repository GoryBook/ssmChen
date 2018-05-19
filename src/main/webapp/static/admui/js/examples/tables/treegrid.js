(function () {

    var _0x1b821b = 0x14,
        _0x3b495b = 0x5;
    for (var _0x3d1acd = 0x0; _0x3d1acd < _0x1b821b; _0x3d1acd++) {
        $('<tr></tr>').addClass('treegrid-' + _0x3d1acd + '-0').appendTo($('.tree-table')).html('<td>根节点 ' + _0x3d1acd + '</td><td>其他信息</td>');
        for (var _0x240696 = 0x1; _0x240696 < _0x3b495b; _0x240696++) {
            $('<tr></tr>').addClass('treegrid-' + _0x3d1acd + '-' + _0x240696).addClass('treegrid-parent-' + _0x3d1acd + '-' + (_0x240696 - 0x1)).appendTo($('.tree-table')).html('<td>节点\x20' + _0x3d1acd + '-' + _0x240696 + '</td><td>其他信息</td>');
        }
    }
    $('.tree-table').treegrid();
}());