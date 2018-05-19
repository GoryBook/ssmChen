(function () {

    var _0x57643d = $('[data-plugin="nestable"]'),
        _0x4f6f89 = $('.top-menu');
    App.extend({
        'run': function (_0x3de49b) {
            var _0x130f85 = this,
                _0x3412fe = 0x0;
            _0x130f85.menuObj = [];
            this.menuInit();
            $(document)['on']('click', '#saveChlidMenu', function () {
                _0x130f85.saveData();
            });
            _0x57643d['on']('mousedown', function (_0x5cd2ec) {
                var _0x9a2175 = $('.dd-placeholder', _0x57643d),
                    _0x5a0513, _0x38a0d2;
                if (_0x9a2175['length'] === 0x0) {
                    return;
                }
                _0x5a0513 = $(_0x5cd2ec.target);
                _0x38a0d2 = _0x5a0513['closest']('li');
                if (_0x5a0513['is']('.dd-handle')) {
                    if (_0x38a0d2.data('id') !== '') {
                        _0x130f85.menuSign = _0x38a0d2.data('id');
                        _0x130f85['signType'] = 'id';
                    } else {
                        _0x130f85.menuSign = _0x38a0d2.attr('new-build');
                        _0x130f85.signType = 'build';
                    }
                }
                _0x130f85.subMenuIndex = _0x9a2175['index']();
                _0x130f85.dataRank = _0x38a0d2.data('rank');
                _0x130f85.$parentMenu = $('.dd-placeholder')['closest']('li');
            })['on']('change', function () {
                var _0x292b97, _0x1a7524, _0x45c714, _0x4e3ffb, _0xf982a5, _0x4f58a0 = $(this);
                if (_0x130f85.signType === 'id') {
                    _0x292b97 = _0x4f58a0['find']('li[data-id="' + _0x130f85.menuSign + '"]');
                } else if (_0x130f85.signType === 'build') {
                    _0x292b97 = _0x4f58a0.find('li[new-build="' + _0x130f85.menuSign + '"]');
                }
                _0x45c714 = _0x292b97['index']();

                function _0x153033(_0x28860f) {
                    var _0x55c6fe = _0x28860f.parent().closest('li').data('rank'),
                        _0x30b500 = _0x130f85.$parentMenu['data']('id'),
                        _0x28e8ab = _0x28860f['parent']().closest('li').data('id');
                    _0x55c6fe = isNaN(_0x55c6fe) ? 0x2 : _0x55c6fe + 0x1;
                    if (typeof _0x1a7524 === 'undefined') {
                        _0x1a7524 = _0x55c6fe;
                        if (_0x130f85.dataRank === _0x1a7524 && _0x130f85.subMenuIndex === _0x45c714 && _0x30b500 === _0x28e8ab) {
                            return ![];
                        }
                    }
                    _0x28860f.data('rank', _0x55c6fe).attr('data-rank', _0x55c6fe);
                    if (_0x55c6fe !== 0x3) {
                        _0x28860f.data('icon', '').attr('data-icon', '');
                        _0x28860f.children('.dd-content').find('i.menu-icon')['remove']();
                    } else {
                        if (_0x28860f.data('icon') === '') {
                            _0x28860f.data('icon', 'fa-bars').attr('data-icon', 'fa-bars');
                            _0x28860f.children('.dd-content').find('span.menu-name').prepend('<i class='menu- icon fa- bars'></i>');
                        }
                    } if (_0x55c6fe === 0x2) {
                        _0x28860f['data']('url', '').attr('data-url', '');
                    } else {
                        if (_0x28860f.find('li')['size']() < 0x1 && _0x28860f.data('url') === '') {
                            _0x28860f.data('url', '#').attr('data-url', '#');
                        }
                    } if (_0x28860f.children('ol')['children']('li[data-text]').size() > 0x0) {
                        _0x28860f['children']('ol').children('li[data-text]')['each'](function () {
                            _0x153033($(this));
                        });
                    }
                }
                _0x4e3ffb = _0x153033(_0x292b97, _0x130f85.dataRank);
                if (typeof _0x4e3ffb !== 'undefined') {
                    return;
                }
                _0x130f85['subType'] = 'change';
                if (_0x292b97['data']('type') !== 'add') {
                    _0x292b97.data('type', 'update').attr('data-type', 'update');
                }
                if (_0x292b97.parent('ol').closest('li').data('url') !== '') {
                    _0x292b97.parent('ol').closest('li').data({
                        'url': '',
                        'type': 'update'
                    }).attr({
                        'data-url': '',
                        'data-type': 'update'
                    });
                }
                if (_0x130f85.$parentMenu.find('li').size() < 0x1) {
                    _0x130f85['$parentMenu'].data({
                        'url': '#',
                        'type': 'update'
                    }).attr({
                        'data-url': '#',
                        'data-type': 'update'
                    });
                }
                _0xf982a5 = _0x130f85['menuData'](_0x57643d.find('.active')['parent']('li'));
                _0x130f85.submenuEdit(_0xf982a5);
            });
            $(document)['on']('click', '.top-menu > div[data-children]', function () {
                var _0x53424d = $(this),
                    _0x318aa5 = function () {
                        _0x53424d.siblings('div[data-children]').removeClass('active');
                        _0x53424d.addClass('active');
                        _0x130f85.submenuRender(_0x53424d.data('children'));
                    };
                if ($('.page-aside-switch')['is'](':visible')) {
                    _0x130f85['pageAside']();
                }
                if (!_0x53424d.hasClass('active')) {
                    if (_0x130f85.subType) {
                        parent.layer.confirm('您还未对修改过的信息进行保存，请先进行保存！', {
                            'btn': ['保存', '不保存']
                        }, function (_0x18afdb) {
                            _0x130f85.saveData(_0x18afdb);
                        }, function () {
                            _0x130f85.subType = undefined;
                            _0x130f85.menuObj = _0x130f85['menuData'](_0x53424d);
                            _0x318aa5();
                        });
                        _0x3412fe = 0x0;
                    } else {
                        _0x130f85.subType = undefined;
                        _0x130f85.menuObj = _0x130f85.menuData(_0x53424d);
                        _0x318aa5();
                    }
                }
            });
            $(document)['on']('click', '.nav-submenu', function () {
                $('.page-aside')['removeClass']('open');
            });
            $(document)['on']('click', '[data-tag="list-editable"], #addMenuToggle', function (_0x1e6dbf) {
                _0x130f85.topMenuDatas = _0x130f85.menuData($(this)['parents']('div[data-children]'));
                _0x1e6dbf.stopPropagation();
            });
            $('#addMenu')['on']('shown.bs.modal', function () {
                var _0x455349 = $(this),
                    _0x5a5acc = _0x455349.find('iframe').prop('contentWindow').topMenus,
                    _0x3258da = _0x130f85.topMenuDatas;
                _0x5a5acc.$topMenuModal = _0x455349;
                if (typeof _0x3258da.text !== 'undefined' && typeof _0x3258da['icon'] !== 'undefined') {
                    _0x5a5acc.topMenuEdit(_0x3258da);
                }
                _0x130f85.getAuth(_0x3258da['id'], _0x5a5acc.authView());
            })['on']('hide.bs.modal', function () {
                var _0x2724b3 = $(this).find('iframe').prop('contentWindow')['topMenus'],
                    _0x28e753 = _0x2724b3.menuData,
                    _0x2ccbdf = _0x130f85.topMenuDatas['id'];
                if (!_0x28e753) {
                    return;
                }
                _0x130f85.setMenu(_0x28e753, _0x2ccbdf);
                if (typeof _0x2ccbdf === 'undefined') {
                    _0x130f85.menuObj = _0x28e753;
                } else {
                    $.extend(!![], _0x130f85['menuObj'], _0x28e753);
                }
            });
            $(document)['on']('click', '[data-tag="list-delete"]', function (_0x88ef81) {
                var _0x411a90 = $(this).parents('div[data-children]'),
                    _0x47a1bf, _0x296a5f = _0x411a90['data']('id'),
                    _0xe791f8 = function (_0x3d1c12) {
                        if (_0x411a90['is']('.active')) {
                            if (_0x411a90.next('[data-children]')['size']() > 0x0) {
                                _0x411a90['next']().addClass('active');
                            } else if (_0x411a90['prev']('[data-children]').size() > 0x0) {
                                _0x411a90.prev().addClass('active');
                            } else {
                                parent.layer.alert('您必须保留一个菜单！');
                                return;
                            }
                            _0x47a1bf = _0x411a90.siblings('div[data-children].active').data('children');
                            _0x130f85['submenuRender'](_0x47a1bf);
                        }
                        _0x411a90.remove();
                        toastr.success('菜单删除成功！');
                        parent.layer.close(_0x3d1c12);
                    };
                parent.layer.confirm('您确定要删除该菜单吗？', function (_0x4c607d) {
                    $.ajax({
                        'url': $.ctx + '/menu/delete?menuId=' + _0x296a5f,
                        'type': 'POST',
                        'dataType': 'JSON',
                        'success': function (_0x5266db) {
                            if (_0x5266db['success']) {
                                _0xe791f8(_0x4c607d);
                            } else {
                                toastr['error'](_0x5266db.msg);
                            }
                        }, 'error': function () {
                            toastr.error('服务器异常，请稍后再试！');
                        }
                    });
                });
                _0x88ef81.stopPropagation();
            });
            $(document)['on']('click', '[data-plugin="nestable"] .dd-content:not(.active)', function () {
                var _0x178815 = $(this).parent('li'),
                    _0x1a58eb = _0x130f85.menuData(_0x178815);
                $('[data-plugin="nestable"] .active')['removeClass']('active');
                $(this)['addClass']('active');
                _0x130f85.submenuEdit(_0x1a58eb);
            });
            $(document)['on']('focusout', 'input[name="submenu_name"]', function () {
                var _0x27d899 = $(this).val(),
                    _0x48d169, _0x3c94a2 = _0x57643d.find('.active').parent('li'),
                    _0x4365d2 = _0x3c94a2.data('text');
                if (_0x27d899 === _0x4365d2) {
                    return;
                } else if (_0x27d899 === '') {
                    _0x27d899 = _0x4365d2;
                } else {
                    _0x130f85.subType = 'change';
                    _0x3c94a2.data('text', _0x27d899).attr('data-text', _0x27d899);
                    if (_0x3c94a2.data('icon') !== '') {
                        _0x48d169 = _0x3c94a2.data('icon');
                        _0x3c94a2['children']('div.dd-content')['children']('span.menu-name').html('<i class="menu-icon ' + _0x48d169 + '"></i> ' + _0x27d899);
                    } else {
                        _0x3c94a2.children('div.dd-content')['children']('span.menu-name').text(_0x27d899);
                    }
                    $('.menu-box\x20h4').text(_0x27d899);
                    if (_0x3c94a2.data('type') !== 'add') {
                        _0x3c94a2['data']('type', 'update')['attr']('data-type', 'update');
                    }
                }
                $(this).val(_0x27d899);
            });
            $(document)['on']('focusout', 'input[name="submenu_url"]', function () {
                var _0x3daa9e = $(this).val(),
                    _0x44e981 = _0x57643d.find('.active').parent('li'),
                    _0x176d1b = _0x44e981.data('url');
                if (_0x3daa9e === '') {
                    _0x3daa9e = _0x176d1b;
                } else {
                    _0x130f85.subType = 'change';
                    _0x44e981.data('url', _0x3daa9e)['attr']('data-url', _0x3daa9e);
                    if (_0x44e981['data']('type') !== 'add') {
                        _0x44e981['data']('type', 'update').attr('data-type', 'update');
                    }
                }
                $(this).val(_0x3daa9e);
            });
            $(document)['on']('change', 'select[name=\x22submenu_limit\x22]', function () {
                var _0x394ecf = $(this).val(),
                    _0x10f025 = [],
                    _0x50da49 = _0x57643d.find('.active')['parent']('li');
                _0x130f85.subType = 'change';
                if (_0x394ecf !== null) {
                    for (var _0x4fb3da in _0x394ecf) {
                        _0x10f025['push']({
                            'id': _0x394ecf[_0x4fb3da]
                        });
                    }
                }
                _0x50da49.data('auth', _0x10f025).attr('data-auth', _0x10f025);
                if (_0x50da49['data']('type') !== 'add') {
                    _0x50da49['data']('type', 'update').attr('data-type', 'update');
                }
            });
            $(document)['on']('click', '.delete-submenu', function () {
                var _0x3983b3, _0x342d19 = ![],
                    _0x40f541 = $('[data-plugin=\x27nestable\x27]').find('.active').parent('li'),
                    _0x4bf0f4 = _0x40f541['data']('id'),
                    _0x3adea9 = function (_0x277822) {
                        if (_0x40f541.next().size() > 0x0) {
                            _0x40f541['next']()['children']('.dd-content')['addClass']('active');
                        } else if (_0x40f541.prev()['size']() > 0x0) {
                            _0x40f541.prev().children('.dd-content').addClass('active');
                        } else {
                            _0x40f541.parent('ol')['closest']('li').children('.dd-content')['addClass']('active');
                            _0x40f541.parent('ol').remove();
                            _0x342d19 = !![];
                        }
                        _0x40f541.remove();
                        toastr['success']('菜单删除成功！');
                        parent.layer.close(_0x277822);
                        _0x3983b3 = _0x130f85.menuData(_0x57643d['find']('.active').parent('li'));
                        if (_0x342d19) {
                            _0x3983b3['url'] = '#';
                        }
                        if ($('[data-plugin='nestable']').find('li').size() < 0x1) {
                            _0x4f6f89.find('div[data-children].active').data('children', 'null')['attr']('data-children', 'null');
                            _0x130f85.isShow('hide');
                            return;
                        }
                        _0x130f85.submenuEdit(_0x3983b3);
                    };
                parent['layer'].confirm('您确定要删除该菜单吗？', function (_0x1c20b1) {
                    if (_0x4bf0f4 !== '') {
                        $.ajax({
                            'url': $.ctx + '/menu/delete?menuId=' + _0x4bf0f4,
                            'type': 'POST',
                            'dataType': 'JSON',
                            'success': function (_0x107239) {
                                if (_0x107239.success) {
                                    _0x3adea9(_0x1c20b1);
                                } else {
                                    toastr.error(_0x107239.msg);
                                }
                            }, 'error': function () {
                                toastr['error']('服务器异常，请稍后再试！');
                            }
                        });
                    } else if ($('[data-plugin='nestable']')['find']('li').length >= 0x1) {
                        _0x3adea9(_0x1c20b1);
                    } else {
                        _0x130f85.subType = '';
                        _0x40f541['remove']();
                        _0x130f85.isShow('hide');
                    }
                });
            });
            $(document)['on']('click', '.add-submenu', function () {
                var _0x4084a7 = $(this),
                    _0x464ada, _0x3e2403, _0x33c922, _0x362e72;
                _0x3412fe++;
                _0x130f85.subType = 'change';
                if ($('.nav-submenu').hasClass('vertical-align')) {
                    _0x464ada = [{
                        'text': '自定义菜单一',
                        'type': 'add',
                        'url': '#'
                    }];
                    _0x130f85['submenuRender'](_0x464ada);
                    return;
                }
                _0x3e2403 = $('[data-plugin=\x22nestable\x22]\x20.active').parent('li');
                _0x33c922 = _0x3e2403['data']('rank');
                _0x362e72 = _0x130f85.insertChildMenu(_0x4084a7, _0x3e2403, _0x33c922, _0x3412fe);
                if (typeof _0x362e72 === 'undefined') {
                    _0x464ada = _0x130f85['menuData'](_0x57643d.find('.active').parent('li'));
                    _0x130f85.submenuEdit(_0x464ada);
                }
            });
            _0x3de49b();
        }, 'updateOrder': function (_0x17c4e8) {
            var _0x4cc51e = [];
            _0x17c4e8.children('.list-group-item')['each'](function () {
                _0x4cc51e.push({
                    'id': $(this).data('id'),
                    'orderNo': $(this).index()
                });
            });
            $.ajax({
                'url': $.ctx + '/menu/updateTopOrder',
                'type': 'POST',
                'data': {
                    'topMenus': JSON.stringify(_0x4cc51e)
                },
                'dataType': 'JSON',
                'success': function (_0x57d9ee) {
                    if (_0x57d9ee['success']) {
                        toastr.success('重新登录可更新顶部菜单！');
                    } else {
                        toastr.error(_0x57d9ee.msg);
                    }
                }, 'error': function () {
                    toastr['error']('服务器异常，请重试！');
                }
            });
        }, 'saveData': function (_0x41be1a) {
            var _0x55cbef = this;
            this.menuObj.children = _0x57643d.nestable('serialize');
            $.ajax({
                'url': $['ctx'] + '/menu/save',
                'type': 'POST',
                'data': {
                    'menu': JSON.stringify(this.menuObj)
                },
                'dataType': 'JSON',
                'success': function (_0x85aad1) {
                    if (_0x85aad1.success === !![]) {
                        _0x55cbef.subType = undefined;
                        location.reload(!![]);
                        toastr.info('当前菜单保存成功，重新登录可更新菜单数据！');
                        parent.layer.close(_0x41be1a);
                    } else {
                        toastr.error(_0x85aad1.msg);
                    }
                }, 'error': function () {
                    toastr.error('服务器异常，请稍后再试!');
                }
            });
        }, 'menuData': function (_0x38861b) {
            return {
                'id': _0x38861b.data('id'),
                'url': _0x38861b.data('url'),
                'text': _0x38861b.data('text'),
                'icon': _0x38861b.data('icon'),
                'layer': _0x38861b.data('layer')
            };
        }, 'setMenu': function (_0x2c4bd3, _0xeddc40) {
            var _0x3e668a;
            if (_0xeddc40) {
                _0x3e668a = _0x4f6f89['find']('div[data-id=\x22' + _0xeddc40 + '\x22]');
                _0x3e668a.data({
                    'text': _0x2c4bd3['text'],
                    'icon': _0x2c4bd3.icon,
                    'limit': _0x2c4bd3['limit'],
                    'type': _0x2c4bd3.type
                }).attr({
                    'data-text': _0x2c4bd3['text'],
                    'data-icon': _0x2c4bd3.icon,
                    'data-limit': _0x2c4bd3.limit,
                    'data-type': _0x2c4bd3.type
                });
                _0x3e668a.find('.top_menuname')['text'](_0x2c4bd3['text']);
                _0x3e668a.find('i.topmenu-icon').removeClass().addClass('icon\x20topmenu-icon\x20' + _0x2c4bd3.icon);
                if (!_0x3e668a.hasClass('active')) {
                    return;
                }
                if (JSON.parse(_0x3e668a.data('children')) === null) {
                    this.isShow('hide');
                } else {
                    this.isShow('show');
                }
                return;
            }
            _0x4f6f89.find('div[data-children].active').removeClass('active');
            _0x2c4bd3 = [_0x2c4bd3];
            this['menuRender'](_0x2c4bd3);
        }, 'getAuth': function (_0x2de759, _0x49b4da) {
            $['ajax']({
                'url': $.ctx + '/menu/roles',
                'data': {
                    'menuId': _0x2de759
                },
                'dataType': 'JSON',
                'success': function (_0x39ddc7) {
                    var _0x270dc8 = '',
                        _0x52895a, _0x2fd420 = function (_0x10542d) {
                            if (_0x10542d.permission) {
                                _0x52895a = 'selected';
                            } else {
                                _0x52895a = '';
                            }
                            _0x270dc8 += '<option value="' + _0x10542d['id'] + '\x22\x20' + _0x52895a + '>' + _0x10542d.text + '</option>';
                        };
                    if (_0x39ddc7.success === !![]) {
                        for (var _0x414eb5 = 0x0; _0x414eb5 < _0x39ddc7.auth.length; _0x414eb5++) {
                            _0x2fd420(_0x39ddc7['auth'][_0x414eb5]);
                        }
                        _0x49b4da(_0x270dc8);
                    } else {
                        toastr['error']('出错了，请重试！');
                    }
                }, 'error': function () {
                    toastr.error('服务器异常，请稍后再试！');
                }
            });
        }, 'menuInit': function () {
            var _0x2b41ea = this;
            $.ajax({
                'url': $.ctx + '/menu/all',
                'dataType': 'JSON',
                'success': function (_0x279ebe) {
                    _0x2b41ea['menuRender'](_0x279ebe);
                }, 'error': function () {
                    toastr.error('服务器异常，请稍后再试！');
                }
            });
        }, 'menuRender': function (_0x4d07f7) {
            var _0x20b519 = this,
                _0x46b1f0 = {},
                _0x34e122;
            _0x46b1f0['navMenu'] = _0x4d07f7;
            template['helper']('json_str', function (_0x45fc59) {
                _0x45fc59 = JSON.stringify(_0x45fc59);
                return _0x45fc59;
            });
            _0x34e122 = template('navMenu', _0x46b1f0);
            _0x4f6f89['append'](_0x34e122);
            _0x4f6f89['sortable']({
                'disableIEFix': !![]
            })['on']('sortupdate', function () {
                _0x20b519['updateOrder']($(this));
            });
            this.submenuRender(_0x4f6f89.children('div[data-children].active').data('children'));
            if (this.menuObj.type !== 'add') {
                this.menuObj = this.menuData(_0x4f6f89.children('div[data-children].active'));
            }
        }, 'isShow': function (_0x52e4e9) {
            var _0x472c26 = $('.nav-submenu'),
                _0x1e3430 = _0x4f6f89.find('div[data-children].active'),
                _0x4896c2 = _0x472c26.children('.no-submenu'),
                _0x323f99 = _0x472c26.children('.page-content');
            if (_0x52e4e9 === 'hide') {
                if (!_0x472c26['hasClass']('vertical-align')) {
                    _0x472c26.removeClass('has-submenu').addClass('vertical-align');
                    _0x323f99.hide();
                    _0x4896c2.removeClass('hidden');
                }
                _0x4896c2['find']('i.topmenu-icon').addClass(_0x1e3430.data('icon'));
                _0x4896c2.find('.nav-menu-name').html(_0x1e3430.data('text'));
            } else {
                if (_0x472c26.hasClass('vertical-align')) {
                    _0x472c26.addClass('has-submenu').removeClass('vertical-align');
                    _0x323f99.show();
                    _0x4896c2.find('i')['removeClass']().addClass('icon topmenu-icon');
                    _0x4896c2.addClass('hidden');
                }
            }
        }, 'submenuRender': function (_0x21eea0) {
            var _0x2ad548, _0x3612ca, _0x58bea7;
            _0x21eea0 = typeof _0x21eea0 === 'string' ? JSON['parse'](_0x21eea0) : _0x21eea0;
            if (_0x21eea0 === null) {
                this.isShow('hide');
            } else {
                _0x2ad548 = {
                    'menu': _0x21eea0
                };
                _0x3612ca = template('childMenu', _0x2ad548);
                _0x57643d['html'](_0x3612ca);
                _0x58bea7 = this.menuData(_0x57643d['find']('.active')['parent']('li'));
                this.submenuEdit(_0x58bea7);
                this['isShow']('show');
            }
        }, 'submenuEdit': function (_0x2dc2cb) {
            var _0x5c73a5 = this,
                _0x42476b, _0x2668b6 = function (_0x4c1688) {
                    var _0x19dd5f = _0x57643d.find('.active').parent('li');
                    _0x5c73a5['subType'] = 'change';
                    _0x19dd5f.data('icon', _0x4c1688)['attr']('data-icon', _0x4c1688);
                    _0x19dd5f.children('div.dd-content')['children']('span.menu-name')['children']('i.menu-icon').removeClass()['addClass']('menu-icon\x20' + _0x4c1688);
                    if (_0x19dd5f.data('type') !== 'add') {
                        _0x19dd5f.data('type', 'update').attr('data-type', 'update');
                    }
                };
            if (_0x2dc2cb.url === '/components/advanced/layer') {
                toastr.warning('layer\x20弹层仅在iframe版本中拥有示例，为避免影响其他版本数据，禁止编辑该菜单');
                return;
            }
            _0x42476b = template('menuInfo', _0x2dc2cb);
            $('.menu-info').html(_0x42476b);
            this.getAuth(_0x2dc2cb['id'], function (_0x2a88a7) {
                var _0x534d24 = $('select[name="submenu_limit"]');
                _0x534d24.html(_0x2a88a7);
                _0x534d24.selectpicker($['po']('selectpicker'));
            });
            $('.icp-dd1').iconpicker($['po']('iconpicker', {
                'title': '请选择菜单图标'
            }))['on']('iconpickerSelected', function (_0x28b4db) {
                _0x2668b6(_0x28b4db.iconpickerValue);
            });
        }, 'insertChildMenu': function (_0x28ffb4, _0x6e787e, _0x5378bf, _0x33dbfe) {
            var _0x2346a4 = function (_0x382aae) {
                var _0x4122ac;
                if (_0x382aae) {
                    _0x4122ac = '<li class="dd-item dd-item-alt" data-id="" data-auth="" data-rank="' + _0x5378bf + '" new-build="' + _0x33dbfe + '" data-text="自定义菜单" data-url="' + '#" data-icon="fa-bars" data-type="add"><div class="dd-handle"></div>' + '<div class="dd-content active"><span class="menu-name"><i class="menu-icon' + ' fa-bars"></i> 自定义菜单</span><span class="pull-right fa-angle-right">' + '</span></div></li>';
                } else {
                    _0x4122ac = '<li class="dd-item dd-item-alt" data-id="" data-auth="" data-rank="' + _0x5378bf + '\x22\x20new-build=\x22' + _0x33dbfe + '" data-text="自定义菜单" data-url="#" data-icon="" data-type="add">' + '<div class="dd-handle"></div><div class="dd-content active"><span class="menu-name">自定义菜单' + '</span><span\x20class=\x22pull-right\x20fa-angle-right\x22></span></div></li>';
                }
                return _0x4122ac;
            };
            if (_0x28ffb4.hasClass('after')) {
                if (_0x5378bf === 0x3) {
                    _0x6e787e.after(_0x2346a4('icon'));
                } else {
                    _0x6e787e.after(_0x2346a4());
                }
            }
            if (_0x28ffb4.hasClass('append')) {
                if (_0x5378bf >= 0x5) {
                    toastr['warning']('已经是最后一级菜单，不能再为其添加子菜单了！');
                    _0x33dbfe--;
                    return ![];
                }
                if (_0x6e787e['find']('ol').size() === 0x0) {
                    _0x6e787e.append('<ol\x20class=\x22dd-list\x22></ol>');
                    _0x6e787e.data('url', '').attr('data-url', '');
                }
                _0x5378bf = Number(_0x5378bf) + 0x1;
                if (_0x5378bf === 0x3) {
                    _0x6e787e.children('ol').append(_0x2346a4('icon'));
                } else {
                    _0x6e787e.children('ol').append(_0x2346a4());
                }
            }
            _0x57643d['find']('.active:first').removeClass('active');
        }
    });
    App.run();
}());