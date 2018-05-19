(function (_0x3bced7, _0x3ebff7, _0x27ba07) {

    var _0x2b7d2f = {
        'timeButton': function () {
            _0x27ba07('#exampleTimeButton')['on']('click', function () {
                _0x27ba07('#inputTextCurrent')['timepicker']('setTime', new Date());
            });
        }, 'inlineDatepicker': function () {
            var _0x3fd395 = _0x27ba07('#inlineDatepicker');
            _0x3fd395.datepicker(_0x27ba07['po']('datepicker', {
                'language': 'zh-CN'
            }));
            _0x3fd395['on']('changeDate', function () {
                _0x27ba07('#inputHiddenInline').val(_0x27ba07('#inlineDatepicker')['datepicker']('getFormattedDate'));
            });
        }, 'inputTokenfieldTypeahead': function () {
            var _0x7b67a2 = new Bloodhound({
                'local': [{
                    'value': 'red-红色'
                }, {
                    'value': 'blue-蓝色'
                }, {
                    'value': 'green-绿色'
                }, {
                    'value': 'yellow-黄色'
                }, {
                    'value': 'violet-紫罗兰'
                }, {
                    'value': 'brown-棕色'
                }, {
                    'value': 'purple-紫色'
                }, {
                    'value': 'black-黑色'
                }, {
                    'value': 'white-白色'
                }],
                'datumTokenizer': Bloodhound.tokenizers.obj.whitespace('value'),
                'queryTokenizer': Bloodhound.tokenizers.whitespace
            });
            _0x27ba07('#inputTokenfieldTypeahead').tokenfield({
                'typeahead': [null, {
                    'name': 'engine',
                    'displayKey': 'value',
                    'source': _0x7b67a2['ttAdapter']()
                }]
            });
        }, 'inputTokenfieldEvents': function () {
            _0x27ba07('#inputTokenfieldEvents')['on']('tokenfield:createtoken', function (_0x3fe082) {
                var _0x5768db = _0x3fe082['attrs']['value']['split']('|');
                _0x3fe082.attrs.value = _0x5768db[0x1] || _0x5768db[0x0];
                _0x3fe082.attrs.label = _0x5768db[0x1] ? _0x5768db[0x0] + ' (' + _0x5768db[0x1] + ')' : _0x5768db[0x0];
            })['on']('tokenfield:createdtoken', function (_0x31ebb3) {
                var _0xd38892 = /\S+@\S+\.\S+/;
                var _0x3fe575 = _0xd38892.test(_0x31ebb3.attrs.value);
                if (!_0x3fe575) {
                    _0x27ba07(_0x31ebb3.relatedTarget).addClass('invalid');
                }
            })['on']('tokenfield:edittoken', function (_0x17e65c) {
                if (_0x17e65c['attrs'].label !== _0x17e65c.attrs.value) {
                    var _0x396fb7 = _0x17e65c.attrs.label.split(' (');
                    _0x17e65c.attrs.value = _0x396fb7[0x0] + '|' + _0x17e65c.attrs.value;
                }
            })['on']('tokenfield:removedtoken', function (_0x3c4c08) {
                if (_0x3c4c08.attrs.length > 0x1) {
                    var _0x210051 = _0x27ba07.map(_0x3c4c08.attrs, function (_0x318c2b) {
                        return _0x318c2b.value;
                    });
                    toastr.info(_0x3c4c08['attrs'].length + '已删除：' + _0x210051.join(', '));
                } else {
                    toastr.info('已删除：' + _0x3c4c08['attrs'].value);
                }
            }).tokenfield();
        }, 'tagsObj': function () {
            var _0x511ef = new Bloodhound({
                'datumTokenizer': Bloodhound['tokenizers'].obj.whitespace('text'),
                'queryTokenizer': Bloodhound.tokenizers['whitespace'],
                'prefetch': _0x27ba07.ctx + '/public/data/examples/forms/cities.json'
            });
            _0x511ef.initialize();
            var _0x1f646d = _0x27ba07('#inputTagsObject');
            _0x1f646d.tagsinput(_0x27ba07['po']('tagsinput', {
                'itemValue': 'value',
                'itemText': 'text',
                'typeaheadjs': [{
                    'hint': !![],
                    'highlight': !![],
                    'minLength': 0x1
                }, {
                    'name': 'cities',
                    'displayKey': 'text',
                    'source': _0x511ef.ttAdapter()
                }]
            }));
            _0x1f646d.tagsinput('add', {
                'value': 0x1,
                'text': '北京',
                'continent': '北京'
            });
            _0x1f646d.tagsinput('add', {
                'value': 0x2,
                'text': '广州',
                'continent': '广东'
            });
            _0x1f646d.tagsinput('add', {
                'value': 0x3,
                'text': '韶关',
                'continent': '广东'
            });
            _0x1f646d.tagsinput('add', {
                'value': 0x4,
                'text': '深圳',
                'continent': '广东'
            });
            _0x1f646d.tagsinput('add', {
                'value': 0x5,
                'text': '珠海',
                'continent': '广东'
            });
        }, 'tagsSort': function () {
            var _0x1ff039 = new Bloodhound({
                'datumTokenizer': Bloodhound.tokenizers.obj.whitespace('text'),
                'queryTokenizer': Bloodhound['tokenizers'].whitespace,
                'prefetch': _0x27ba07.ctx + '/public/data/examples/forms/cities.json'
            });
            _0x1ff039.initialize();
            var _0x1fedce = _0x27ba07('#inputTagsCategorizing');
            _0x1fedce.tagsinput(_0x27ba07['po']('tagsinput', {
                'tagClass': function (_0x462025) {
                    switch (_0x462025.continent) {
                        case '北京':
                            return 'label label-primary';
                        case '广东':
                            return 'label label-danger';
                        case '浙江':
                            return 'label label-success';
                        case '新疆':
                            return 'label label-default';
                        case '江苏':
                            return 'label label-warning';
                    }
                }, 'itemValue': 'value',
                'itemText': 'text',
                'typeaheadjs': [{
                    'hint': !![],
                    'highlight': !![],
                    'minLength': 0x1
                }, {
                    'name': 'cities',
                    'displayKey': 'text',
                    'source': _0x1ff039.ttAdapter()
                }]
            }));
            _0x1fedce['tagsinput']('add', {
                'value': 0x1,
                'text': '北京',
                'continent': '北京'
            });
            _0x1fedce.tagsinput('add', {
                'value': 0x2,
                'text': '广州',
                'continent': '广东'
            });
            _0x1fedce['tagsinput']('add', {
                'value': 0x3,
                'text': '韶关',
                'continent': '广东'
            });
            _0x1fedce.tagsinput('add', {
                'value': 0x4,
                'text': '深圳',
                'continent': '广东'
            });
            _0x1fedce.tagsinput('add', {
                'value': 0x5,
                'text': '珠海',
                'continent': '广东'
            });
        }, 'multiSelect': function () {
            _0x27ba07('.multi-select-methods').multiSelect();
            _0x27ba07('#buttonSelectAll').click(function () {
                _0x27ba07('.multi-select-methods').multiSelect('select_all');
                return ![];
            });
            _0x27ba07('#buttonDeselectAll')['click'](function () {
                _0x27ba07('.multi-select-methods')['multiSelect']('deselect_all');
                return ![];
            });
            _0x27ba07('#buttonSelectSome').click(function () {
                _0x27ba07('.multi-select-methods').multiSelect('select', ['BMW', 'Audi', 'Benz']);
                return ![];
            });
            _0x27ba07('#buttonDeselectSome').click(function () {
                _0x27ba07('.multi-select-methods')['multiSelect']('select', ['BMW', 'Audi', 'Benz']);
                return ![];
            });
            _0x27ba07('#buttonRefresh')['on']('click', function () {
                _0x27ba07('.multi-select-methods').multiSelect('refresh');
                return ![];
            });
            _0x27ba07('#buttonAdd')['on']('click', function () {
                _0x27ba07('.multi-select-methods').multiSelect('addOption', {
                    'value': 0x2a,
                    'text': '测试项 42',
                    'index': 0x0
                });
                return ![];
            });
        }, 'typeahead': function () {
            var _0x51cdcc = ['Andorra , 安道尔', 'Afghanistan , 阿富汗', 'Antigua and Barbuda , 安提瓜和巴布达', 'Anguilla , 安格拉', 'Albania , 阿尔巴尼亚', 'Armenia , 亚美尼亚', 'Netherlands Antilles , 荷兰属地', 'Angola , 安哥拉', 'Antarctica , 南极洲', 'Argentina , 阿根廷', 'American Samoa , 东萨摩亚', 'Austria , 奥地利', 'Australia , 澳大利亚', 'Aruba , 阿鲁巴', 'Azerbaijan , 阿塞拜疆', 'Bosnia Hercegovina , 波黑', 'Barbados , 巴巴多斯', 'Bangladesh , 孟加拉国', 'Belgium , 比利时', 'Burkina Faso , 布基纳法索', 'Bulgaria , 保加利亚', 'Bahrain , 巴林', 'Burundi , 布隆迪', 'Benin , 贝宁', 'Bermuda , 百慕大 ', 'China, 中国'];
            var _0x4939cf = function (_0x3d816d) {
                return function findMatches(_0x25c5d6, _0x18cb54) {
                    var _0x97543c, _0x278941;
                    _0x97543c = [];
                    _0x278941 = new RegExp(_0x25c5d6, 'i');
                    _0x27ba07['each'](_0x3d816d, function (_0x1e30dc, _0x15f5cc) {
                        if (_0x278941.test(_0x15f5cc)) {
                            _0x97543c['push'](_0x15f5cc);
                        }
                    });
                    _0x18cb54(_0x97543c);
                };
            };
            _0x27ba07('#exampleTypeaheadBasic, #exampleTypeaheadStyle').typeahead({
                'hint': !![],
                'highlight': !![],
                'minLength': 0x1
            }, {
                    'name': 'states',
                    'source': _0x4939cf(_0x51cdcc)
                });
            var _0x148729 = new Bloodhound({
                'datumTokenizer': Bloodhound.tokenizers.whitespace,
                'queryTokenizer': Bloodhound.tokenizers['whitespace'],
                'local': _0x51cdcc
            });
            _0x27ba07('#exampleTypeaheadBloodhound').typeahead({
                'hint': !![],
                'highlight': !![],
                'minLength': 0x1
            }, {
                    'name': 'states',
                    'source': _0x148729
                });
            var _0x2eeaaa = new Bloodhound({
                'datumTokenizer': Bloodhound.tokenizers['whitespace'],
                'queryTokenizer': Bloodhound.tokenizers.whitespace,
                'prefetch': _0x27ba07['ctx'] + '/public/data/examples/forms/countries.json'
            });
            _0x27ba07('#exampleTypeaheadPrefetch')['typeahead'](null, {
                'name': 'countries',
                'source': _0x2eeaaa
            });
        }, 'colorpickerEvent': function () {
            _0x27ba07('#colorpickerEvent')['colorpicker']()['on']('changeColor', function (_0x4c5c0f) {
                toastr.info('颜色值已改变');
                _0x4c5c0f.stopPropagation();
            });
        }, 'dateRangePicker': function () {
            var _0x14b484 = _0x27ba07('#drpConfigText'),
                _0x124d34 = function () {
                    var _0x25ffaa = {},
                        _0xd0d4c7 = _0x27ba07('#timePickerIncrement').val(),
                        _0x20f81a = _0x27ba07('#cancelClass')['val'](),
                        _0x1ee3b1 = _0x27ba07('#opens').val(),
                        _0xf175fd = _0x27ba07('#drops')['val'](),
                        _0x70e13a = _0x27ba07('#buttonClasses').val(),
                        _0x1aff47 = _0x27ba07('#applyClass').val();
                    if (_0x27ba07('#singleDatePicker')['is'](':checked')) {
                        _0x25ffaa.singleDatePicker = !![];
                    }
                    if (_0x27ba07('#showDropdowns')['is'](':checked')) {
                        _0x25ffaa.showDropdowns = !![];
                    }
                    if (_0x27ba07('#showWeekNumbers')['is'](':checked')) {
                        _0x25ffaa.showWeekNumbers = !![];
                    }
                    if (_0x27ba07('#showISOWeekNumbers')['is'](':checked')) {
                        _0x25ffaa.showISOWeekNumbers = !![];
                    }
                    if (_0x27ba07('#timePicker')['is'](':checked')) {
                        _0x25ffaa.timePicker = !![];
                    }
                    if (_0x27ba07('#timePicker24Hour')['is'](':checked')) {
                        _0x25ffaa.timePicker24Hour = !![];
                    }
                    if (_0xd0d4c7['length'] && _0xd0d4c7 !== 0x1) {
                        _0x25ffaa.timePickerIncrement = parseInt(_0xd0d4c7, 0xa);
                    }
                    if (_0x27ba07('#timePickerSeconds')['is'](':checked')) {
                        _0x25ffaa.timePickerSeconds = !![];
                    }
                    if (_0x27ba07('#autoApply')['is'](':checked')) {
                        _0x25ffaa.autoApply = !![];
                    }
                    if (_0x27ba07('#dateLimit')['is'](':checked')) {
                        _0x25ffaa.dateLimit = {
                            'days': 0x7
                        };
                    }
                    if (_0x27ba07('#ranges')['is'](':checked')) {
                        _0x25ffaa.ranges = {
                            'Today': [moment(), moment()],
                            'Yesterday': [moment().subtract(0x1, 'days'), moment().subtract(0x1, 'days')],
                            'Last 7 Days': [moment().subtract(0x6, 'days'), moment()],
                            'Last 30 Days': [moment().subtract(0x1d, 'days'), moment()],
                            'This Month': [moment().startOf('month'), moment().endOf('month')],
                            'Last Month': [moment()['subtract'](0x1, 'month').startOf('month'), moment().subtract(0x1, 'month')['endOf']('month')]
                        };
                    }
                    if (_0x27ba07('#locale')['is'](':checked')) {
                        _0x25ffaa.locale = {
                            'format': 'MM/DD/YYYY',
                            'separator': ' - ',
                            'applyLabel': 'Apply',
                            'cancelLabel': 'Cancel',
                            'fromLabel': 'From',
                            'toLabel': 'To',
                            'customRangeLabel': 'Custom',
                            'weekLabel': 'W',
                            'daysOfWeek': ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
                            'monthNames': ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                            'firstDay': 0x1
                        };
                    }
                    if (!_0x27ba07('#linkedCalendars')['is'](':checked')) {
                        _0x25ffaa.linkedCalendars = ![];
                    }
                    if (!_0x27ba07('#autoUpdateInput')['is'](':checked')) {
                        _0x25ffaa.autoUpdateInput = ![];
                    }
                    if (!_0x27ba07('#showCustomRangeLabel')['is'](':checked')) {
                        _0x25ffaa['showCustomRangeLabel'] = ![];
                    }
                    if (_0x27ba07('#alwaysShowCalendars')['is'](':checked')) {
                        _0x25ffaa.alwaysShowCalendars = !![];
                    }
                    if (_0x27ba07('#parentEl')['val']().length) { }
                    _0x25ffaa.parentEl = _0x27ba07('#parentEl').val();
                    if (_0x27ba07('#startDate')['val']().length) { }
                    _0x25ffaa.startDate = _0x27ba07('#startDate').val();
                    if (_0x27ba07('#endDate')['val']().length) { }
                    _0x25ffaa.endDate = _0x27ba07('#endDate').val();
                    if (_0x27ba07('#minDate').val().length) { }
                    _0x25ffaa.minDate = _0x27ba07('#minDate').val();
                    if (_0x27ba07('#maxDate').val().length) { }
                    _0x25ffaa.maxDate = _0x27ba07('#maxDate').val();
                    if (_0x1ee3b1['length'] && _0x1ee3b1 !== 'right') {
                        _0x25ffaa.opens = _0x1ee3b1;
                    }
                    if (_0xf175fd['length'] && _0xf175fd !== 'down') {
                        _0x25ffaa.drops = _0xf175fd;
                    }
                    if (_0x70e13a['length'] && _0x70e13a !== 'btn btn-sm') {
                        _0x25ffaa['buttonClasses'] = _0x70e13a;
                    }
                    if (_0x1aff47.length && _0x1aff47 !== 'btn-success') {
                        _0x25ffaa['applyClass'] = _0x1aff47;
                    }
                    if (_0x20f81a.length && _0x20f81a !== 'btn-default') {
                        _0x25ffaa['cancelClass'] = _0x20f81a;
                    }
                    _0x14b484.val('$('#demo').daterangepicker(' + JSON.stringify(_0x25ffaa, null, '    ') + ', function(start, end, label) {
  console.log("New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')");
                }); ');
            _0x27ba07('#drpConfigDemo').daterangepicker(_0x27ba07['po']('daterangepicker', _0x25ffaa), function (_0x4f09b0, _0x5d4a00, _0x2ca572) {
                console.log('New date range selected: ' + _0x4f09b0.format('YYYY-MM-DD') + ' to ' + _0x5d4a00['format']('YYYY-MM-DD') + ' (predefined range: ' + _0x2ca572 + ')');
            });
        };
        _0x14b484['keyup'](function () {
            eval(_0x27ba07(this).val());
        });
        _0x27ba07('#rangePickerConfig').find('input:not("#drpConfigDemo, #drpConfigText"),select')['change'](function () {
            _0x124d34();
        });
    _0x27ba07('#startDate').daterangepicker(_0x27ba07['po']('daterangepicker', {
        'singleDatePicker': !![],
        'startDate': moment().subtract(0x6, 'days')
    }));
    _0x27ba07('#endDate').daterangepicker(_0x27ba07['po']('daterangepicker', {
        'singleDatePicker': !![],
        'startDate': moment()
    }));
    _0x124d34();
}, 'iconFun': function () {
    var _0x6209e1 = {
        'fullClassFormatter': function (_0xc812ae) {
            return 'icon ' + _0xc812ae;
        }, 'templates': {
            'popover': '<div class="iconpicker-popover popover"><div class="arrow"></div>' + '<div class="popover-title"></div><div class="popover-content"></div></div>',
            'footer': '<div class="popover-footer"></div>',
            'buttons': '<button class="iconpicker-btn iconpicker-btn-cancel btn btn-default btn-sm">取消</button>' + ' <button class="iconpicker-btn iconpicker-btn-accept btn btn-primary btn-sm">确认</button>',
            'search': '<input type="search" class="form-control iconpicker-search" placeholder="查找图标">',
            'iconpicker': '<div class="iconpicker"><div class="iconpicker-items"></div></div>',
            'iconpickerItem': '<a role="button" href="#" class="iconpicker-item"><i></i></a>'
        }
    };
    _0x27ba07('#definedIcon1').iconpicker(_0x27ba07.extend({
        'title': '自定义配置',
        'icons': ['fa-github', 'fa-heart', 'fa-html5', 'fa-css3'],
        'selectedCustomClass': 'label label-success',
        'mustAccept': !![],
        'placement': 'bottomRight',
        'showFooter': !![]
    }, _0x6209e1));
    _0x27ba07('#definedIcon2').iconpicker(_0x27ba07.extend({
        'title': '使用 glypghicons',
        'icons': _0x27ba07.merge(['glyphicon-home', 'glyphicon-repeat', 'glyphicon-search', 'glyphicon-arrow-left', 'glyphicon-arrow-right', 'glyphicon-star'], _0x27ba07.iconpicker.defaultOptions['icons']),
        'fullClassFormatter': function (_0x16e1a7) {
            if (_0x16e1a7['match'](/^fa-/)) {
                return 'fa ' + _0x16e1a7;
            } else {
                return 'glyphicon ' + _0x16e1a7;
            }
        }
    }, _0x6209e1));
}, 'run': function () {
    this.inlineDatepicker();
    this.inputTokenfieldEvents();
    this.inputTokenfieldTypeahead();
    this['multiSelect']();
    this.tagsObj();
    this.tagsSort();
    this['timeButton']();
    this.typeahead();
    this['colorpickerEvent']();
    this.dateRangePicker();
    this.iconFun();
}
    };
_0x2b7d2f.run();
}(document, window, jQuery));