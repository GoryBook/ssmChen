(function (_0x1924cd, _0x40605d, _0x54824b) {
    function _0x240374(_0x45ee00) {
        return '入职时间: ' + _0x45ee00.hireDate + '<br>' + '年薪: ' + _0x45ee00['salary'] + '<br>' + '子行可以放置一些您希望显示的信息，如图片，链接，表格等';
    }
    var _0x1df902 = _0x54824b('#dataTableExample')['DataTable'](_0x54824b['po']('dataTable', {
        'processing': !![],
        'serverSide': !![],
        'ajax': {
            'url': 'http://demo.admui.com/employee/all/get',
            'dataType': 'jsonp'
        },
        'columns': [{
            'class': 'details-control',
            'orderable': ![],
            'data': null,
            'defaultContent': ''
        }, {
            'data': 'name'
        }, {
            'data': 'title'
        }, {
            'data': 'base'
        }, {
            'data': 'age'
        }],
        'order': [
            [0x1, 'asc']
        ]
    }));
    var _0x443d35 = [];
    _0x54824b('#dataTableExample tbody')['on']('click', 'tr td.details-control', function () {
        var _0x5cf87d = _0x54824b(this).closest('tr');
        var _0x5d48ed = _0x1df902['row'](_0x5cf87d);
        var _0x5db4d8 = _0x54824b.inArray(_0x5cf87d.attr('id'), _0x443d35);
        if (_0x5d48ed.child.isShown()) {
            _0x5cf87d.removeClass('details');
            _0x5d48ed.child.hide();
            _0x443d35.splice(_0x5db4d8, 0x1);
        } else {
            _0x5cf87d.addClass('details');
            _0x5d48ed.child(_0x240374(_0x5d48ed.data())).show();
            if (_0x5db4d8 === -0x1) {
                _0x443d35['push'](_0x5cf87d.attr('id'));
            }
        }
    });
    _0x1df902['on']('draw', function () {
        _0x54824b['each'](_0x443d35, function (_0x20dacc, _0x39c093) {
            _0x54824b('#' + _0x39c093 + ' td.details-control').trigger('click');
        });
    });
}(window, document, jQuery));