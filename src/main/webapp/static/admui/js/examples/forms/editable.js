(function (_0x516361, _0x8f7aa3, _0x38268c) {

    _0x38268c('#editableEnable').click(function () {
        _0x38268c('#editableUser .editable').editable('toggleDisabled');
    });
    var _0x1b0389 = function () {
        _0x38268c['fn'].editableform.buttons = '<button type="submit" class="btn btn-primary btn-sm editable-submit">' + '<i class="icon wb-check" aria-hidden="true"></i>' + '</button>' + '<button type="button" class="btn btn-default btn-sm editable-cancel">' + '<i class="icon wb-close" aria-hidden="true"></i>' + '</button>';
        _0x38268c['fn'].editabletypes.datefield.defaults.inputclass = 'form-control input-sm';
        _0x38268c['fn'].editable.defaults['url'] = _0x38268c['ctx'] + '/post';
        _0x38268c('#editableSuperuser').editable({
            'url': _0x38268c.ctx + '/post',
            'type': 'text',
            'pk': 0x1,
            'name': 'username',
            'title': '请输入用户名'
        });
        _0x38268c('#editableFirstname')['editable']({
            'validate': function (_0x48bc72) {
                if (_0x38268c.trim(_0x48bc72) === '') {
                    return '必填';
                }
            }
        });
        _0x38268c('#editableSex')['editable']({
            'prepend': '请选择',
            'source': [{
                'value': 0x1,
                'text': '男'
            }, {
                'value': 0x2,
                'text': '女'
            }],
            'display': function (_0x22c50c, _0x5d9263) {
                var _0x24f3ac = {
                    '': 'gray',
                    1: 'green',
                    2: 'blue'
                },
                    _0x5c3fe7 = _0x38268c['grep'](_0x5d9263, function (_0x3bd572) {
                        return _0x3bd572['value'] === _0x22c50c;
                    });
                if (_0x5c3fe7.length) {
                    _0x38268c(this).text(_0x5c3fe7[0x0]['text'])['css']('color', _0x24f3ac[_0x22c50c]);
                } else {
                    _0x38268c(this).empty();
                }
            }
        });
        _0x38268c('#editableVacation').editable({
            'datepicker': {
                'todayBtn': 'linked'
            }
        });
        _0x38268c('#editableDob').editable();
        _0x38268c('#editableEvent').editable({
            'placement': 'right',
            'combodate': {
                'firstItem': 'name'
            }
        });
        _0x38268c('#editableMeetingStart').editable({
            'format': 'yyyy-mm-dd hh:ii',
            'viewformat': 'yyyy/mm/dd\x20hh:ii',
            'validate': function (_0x3ccd87) {
                if (_0x3ccd87 && _0x3ccd87.getDate() === 0xa) {
                    return '日期不能为10！';
                }
            }, 'datetimepicker': {
                'todayBtn': 'linked',
                'weekStart': 0x1
            }
        });
        _0x38268c('#editableComments')['editable']({
            'showbuttons': 'bottom'
        });
        _0x38268c('#editableNote').editable();
        _0x38268c('#editablePencil')['click'](function (_0x3ecdf1) {
            _0x3ecdf1.stopPropagation();
            _0x3ecdf1['preventDefault']();
            _0x38268c('#editableNote').editable('toggle');
        });
        _0x38268c('#editableState')['editable']({
            'source': ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New\x20Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming']
        });
        var _0x2440be = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New\x20York', 'North\x20Dakota', 'North\x20Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South\x20Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West\x20Virginia', 'Wisconsin', 'Wyoming'],
            _0xdd0bee = new Bloodhound({
                'datumTokenizer': Bloodhound.tokenizers.whitespace,
                'queryTokenizer': Bloodhound['tokenizers'].whitespace,
                'local': _0x2440be
            });
        _0x38268c('#editableState2').editable({
            'value': 'California',
            'typeahead': {
                'options': {
                    'hint': !![],
                    'highlight': !![],
                    'minLength': 0x1
                },
                'datasets': {
                    'name': 'states',
                    'source': _0xdd0bee
                }
            }
        });
        _0x38268c('#editableFruits')['editable']({
            'pk': 0x1,
            'limit': 0x3,
            'source': [{
                'value': 0x1,
                'text': '香蕉'
            }, {
                'value': 0x2,
                'text': '桃子'
            }, {
                'value': 0x3,
                'text': '苹果'
            }, {
                'value': 0x4,
                'text': '西瓜'
            }, {
                'value': 0x5,
                'text': '橘子'
            }]
        });
        _0x38268c('#editableAddress').editable({
            'url': _0x38268c.ctx + '/post',
            'value': {
                'city': '上海',
                'street': '人民大道',
                'building': '12'
            },
            'validate': function (_0x3fcb2d) {
                if (_0x3fcb2d.city === '') {
                    return '请选择城市';
                }
            }, 'display': function (_0x5f1c92) {
                if (!_0x5f1c92) {
                    _0x38268c(this).empty();
                    return;
                }
                var _0x10de2a = '<b>' + _0x38268c('<div>').text(_0x5f1c92.city)['html']() + '</b>, ' + _0x38268c('<div>').text(_0x5f1c92.street)['html']() + '\x20st.,\x20bld.\x20' + _0x38268c('<div>').text(_0x5f1c92.building)['html']();
                _0x38268c(this)['html'](_0x10de2a);
            }
        });
    };
    _0x38268c['fn'].editable.defaults.mode = 'inline';
    _0x1b0389();
}(document, window, jQuery));