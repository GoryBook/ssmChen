(function (_0x129b15, _0x4ad3bb, _0x2477ff) {

    var _0x3ac59d = _0x2477ff('#dataTableExample').DataTable(_0x2477ff['po']('dataTable'));
    _0x2477ff(_0x4ad3bb)['on']('click', '#DTSubmitBtn', function () {
        var _0x555dbf = _0x3ac59d['$']('input,\x20select').serialize();
        toastr['info']('将向服务器提交以下数据：<br>' + _0x555dbf.substr(0x0, 0x78) + '...');
    });
}(window, document, jQuery));