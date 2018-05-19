(function (_0x40293e, _0x3b408b, _0x219138) {

    _0x219138['fn']['dataTable']['ext'].order.dom - text = function (_0x3c77b7, _0xd7de91) {
        return this.api().column(_0xd7de91, {
            'order': 'index'
        }).nodes().map(function (_0x3387df) {
            return _0x219138('input', _0x3387df).val();
        });
    };
    _0x219138['fn'].dataTable.ext.order['dom-text-numeric'] = function (_0x22a8e5, _0xee70dd) {
        return this.api().column(_0xee70dd, {
            'order': 'index'
        })['nodes']()['map'](function (_0x53d93d) {
            return _0x219138('input', _0x53d93d).val() * 0x1;
        });
    };
    _0x219138['fn'].dataTable.ext.order.dom - select = function (_0x325229, _0x10c389) {
        return this['api']()['column'](_0x10c389, {
            'order': 'index'
        }).nodes().map(function (_0x472989) {
            return _0x219138('select', _0x472989).val();
        });
    };
    _0x219138['fn'].dataTable['ext'].order['dom-checkbox'] = function (_0x40fc53, _0x3b6ee5) {
        return this.api()['column'](_0x3b6ee5, {
            'order': 'index'
        }).nodes().map(function (_0xa15d36) {
            return _0x219138('input', _0xa15d36).prop('checked') ? '1' : '0';
        });
    };
    _0x219138('#dataTableExample').DataTable(_0x219138['po']('dataTable', {
        'columns': [null, {
            'orderDataType': 'dom-text-numeric'
        }, {
                'orderDataType': 'dom-select'
            }, {
                'orderDataType': 'dom-text',
                'type': 'string'
            },
            null, null
        ]
    }));
}(window, document, jQuery));