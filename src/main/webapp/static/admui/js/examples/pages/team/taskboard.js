(function (_0x1d4e86, _0x175990, _0x4047e7) {

    var _0x27f3bf = {
        'stageTpl': function (_0x11794e) {
            return '<li class="taskboard-stage">' + '<header class="taskboard-stage-header">' + '<div class="taskboard-stage-actions pull-right">' + '<div class="dropdown">' + '<a class="dropdown-toggle" data-toggle="dropdown" href="#" aria-expanded="false"><i class="icon wb-chevron-down" aria-hidden="true"></i></a>' + '<ul class="dropdown-menu bullet" role="menu">' + '<li role="presentation" class="taskboard-stage-rename"><a href="javascript:;" role="menuitem"><i class="icon wb-pencil" aria-hidden="true"></i>重命名</a></li>' + '<li role="presentation" class="taskboard-stage-delete" ><a href="javascript:;" role="menuitem"><i class="icon wb-trash" aria-hidden="true"></i>删除</a></li>' + '<li class="taskboard-stage-rename-wrap">' + '<div class="form-group">' + '<input class="form-control taskboard-stage-rename-input" type="text" value="' + _0x11794e + '" name="name">' + '</div>' + '<button class="btn btn-primary btn-block taskboard-stage-rename-save" type="button">保存</button>' + '</li>' + '</ul>' + '</div>' + '</div>' + '<h5 class="taskboard-stage-title">' + _0x11794e + '</h5>' + '</header>' + '<div class="taskboard-stage-content">' + '<ul class="list-group taskboard-list">' + '</ul>' + '<div class="action-wrap">' + '<a class="add-item-toggle" href="#"><i class="icon wb-plus" aria-hidden="true"></i>添加任务</a>' + '<div class="add-item-wrap">' + '<form class="add-item" role="form" method="post" action="#">' + '<div class="form-group">' + '<label class="control-label margin-bottom-15" for="name">任务名称：</label>' + '<input class="form-control" type="text" placeholder="任务名称" name="name">' + '</div>' + '<div class="form-group text-right">' + '<a class="btn btn-sm btn-white add-item-cancel">取消</a>' + '<button type="button" class="btn btn-primary add-item-add">添加</button>' + '</div>' + '</form>' + '</div>' + '</div>' + '</div>' + '</li>';
        }, 'taskTpl': function (_0x291906) {
            return '<li class="list-group-item priority-' + _0x291906['priority'] + '" data-taskboard="slidePanel" data-url="/public/data/examples/pages/taskboard-panel.tpl">' + '<div class="checkbox-custom checkbox-primary">' + '<input type="checkbox" ' + (_0x291906.complete ? 'checked="checked"' : '') + ' name="checkbox">' + '<label class="task-title">' + _0x291906.title + '</label>' + '</div>' + '<div class="task-badges"></div>' + '<ul class="task-members">' + '<li><img class="avatar avatar-sm" src="/public/images/portraits/5.jpg"></li>' + '</div>' + '</li>';
        }, 'badgesTpl': function (_0x84d71b, _0x239ad1) {
            var _0x1a935c = '';
            switch (_0x84d71b) {
                case 'duedate':
                    _0x1a935c = '<span class="task-badge task-badge-subtask icon wb-calendar">' + _0x239ad1 + '</span>';
                    break;
                case 'subtasks':
                    _0x1a935c = '<span class="task-badge task-badge-subtask icon wb-list-bulleted">' + _0x239ad1 + '</span>';
                    break;
                case 'attachments':
                    _0x1a935c = '<span class="task-badge task-badge-attachments icon wb-paperclip">' + _0x239ad1 + '</span>';
                    break;
                case 'comments':
                    _0x1a935c = '<span class="task-badge task-badge-comments icon wb-chat">' + _0x239ad1 + '</span>';
                    break;
            }
            return _0x1a935c;
        }, 'membersTpl': function (_0x2a6149) {
            return '<li><img class="avatar avatar-sm" src="' + _0x2a6149 + '"></li>';
        }, 'subtaskTpl': function (_0x363b89) {
            return '<li class="list-group-item subtask">' + '<div class="checkbox-custom checkbox-primary">' + '<input type="checkbox" ' + (_0x363b89.complete ? 'checked="checked"' : '') + ' name="checkbox">' + '<label class="title">' + _0x363b89['title'] + '</label>' + '</div>' + '<div class="subtask-editor">' + '<form>' + '<div class="form-group">' + '<input class="form-control subtask-title" type="text" name="title">' + '</div>' + '<div class="form-group">' + '<button class="btn btn-primary subtask-editor-save" type="button">保存</button>' + '<a class="btn btn-sm btn-white subtask-editor-delete" href="javascript:;">删除</a>' + '</div>' + '</form>' + '</div>' + '</li>';
        }, 'attachmentTpl': function (_0x2d0aeb) {
            return '<li class="list-group-item">' + '<div class="meida">' + '<div class="media-left">' + '<div class="attachments-image">' + '<img src="' + _0x2d0aeb.src + '">' + '</div>' + '</div>' + '<div class="media-body">' + '<p><span class="name">' + _0x2d0aeb.title + '</span><span</p>' + '<p>' + '<span class="size">' + _0x2d0aeb.size + '</span>' + '<span class="attachments-actions">' + '<button class="btn btn-icon btn-pure" type="button">' + '<i class="icon wb-download" aria-hidden="true"></i>' + '</button>' + '<button class="btn btn-icon btn-pure" type="button">' + '<i class="icon wb-trash" aria-hidden="true"></i>' + '</button>' + '</span>' + '</p>' + '</div>' + '</div>' + '</li>';
        }, 'commentTpl': function (_0x3e702a, _0x1663bd, _0x57113e, _0x41f908) {
            return '<div class="comment media">' + '<div class="media-left">' + '<a class="avatar avatar-lg" href="javascript:;">' + '<img src="' + _0x3e702a + '" alt="...">' + '</a>' + '</div>' + '<div class="media-body">' + '<div class="comment-body">' + '<a class="comment-author" href="javascript:;">' + _0x1663bd + '</a>' + '<div class="comment-meta">' + '<span class="date">' + _0x57113e + '</span>' + '</div>' + '<div class="comment-content"><p>' + _0x41f908 + '</p></div>' + '</div>' + '</div>' + '</div>';
        }, 'dataTpl': function () {
            var _0x35eb09 = {
                'status': ![],
                'title': '',
                'description': '',
                'priority': 'normal',
                'duedate': '',
                'members': [],
                'subtasks': [],
                'attachments': [],
                'comments': []
            };
            return _0x35eb09;
        }, 'init': function () {
            var _0x183e23 = this;
            _0x4047e7.getJSON(_0x4047e7.ctx + '/public/data/examples/pages/taskboard.json', function (_0x4aeec9) {
                var _0x47e69a = _0x4047e7('#taskboard-stages');
                _0x183e23['buildStage'](_0x47e69a, _0x4aeec9);
                _0x183e23.initSortable();
            });
        }, 'buildStage': function (_0x228c27, _0x90a714) {
            if (_0x90a714.length === 0x0) {
                return;
            }
            var _0x43edb6 = this;
            _0x4047e7.each(_0x90a714, function (_0x57ba95, _0x2ccb23) {
                var _0xf8484b = _0x4047e7(_0x43edb6.stageTpl(_0x2ccb23.title, _0x2ccb23.type));
                _0x43edb6.buildTask(_0xf8484b, _0x2ccb23.tasks);
                _0x228c27.append(_0xf8484b);
            });
        }, 'buildTask': function (_0x1c82b3, _0x5704ab, _0x52d90d) {
            if (_0x5704ab.length === 0x0) {
                return;
            }
            var _0x340e38 = this,
                _0x3df773 = _0x4047e7('.taskboard-list', _0x1c82b3);
            if (_0x52d90d) {
                var _0x5486bd = _0x4047e7(_0x340e38.taskTpl(_0x5704ab));
                _0x340e38.buildBadges(_0x5486bd, _0x5704ab);
                _0x5486bd.data('taskInfo', _0x5704ab);
                _0x1c82b3['append'](_0x5486bd);
            } else {
                _0x4047e7.each(_0x5704ab, function (_0x3acd24, _0x1ee4af) {
                    var _0x4305de = _0x4047e7(_0x340e38.taskTpl(_0x1ee4af));
                    _0x340e38.buildBadges(_0x4305de, _0x1ee4af);
                    _0x340e38.buildMembers(_0x4305de, _0x1ee4af['members']);
                    _0x4305de.data('taskInfo', _0x1ee4af);
                    _0x3df773['append'](_0x4305de);
                });
            }
        }, 'buildBadges': function (_0x5027a0, _0x2494c6) {
            var _0x58f3db = this,
                _0x19766d = '',
                _0x16beea = _0x2494c6.duedate,
                _0x4e4aaf = _0x2494c6.subtasks,
                _0x2a16ee = _0x2494c6.attachments,
                _0x54ee7a = _0x2494c6.comments;
            if (_0x16beea.length > 0x0) {
                _0x19766d += _0x58f3db['badgesTpl']('duedate', _0x16beea['split'](/\//, 0x2).join('/'));
            }
            if (_0x4e4aaf.length > 0x0) {
                var _0x5dbee5 = 0x0;
                _0x4047e7.each(_0x4e4aaf, function (_0x184888, _0x101bfe) {
                    if (_0x101bfe.complete) {
                        _0x5dbee5++;
                    }
                });
                _0x19766d += _0x58f3db.badgesTpl('subtasks', _0x5dbee5 + '/' + _0x4e4aaf.length);
            }
            if (_0x2a16ee.length > 0x0) {
                _0x19766d += _0x58f3db.badgesTpl('attachments', _0x2a16ee.length);
            }
            if (_0x54ee7a.length > 0x0) {
                _0x19766d += _0x58f3db['badgesTpl']('comments', _0x54ee7a.length);
            }
            _0x5027a0.find('.task-badges')['html'](_0x19766d);
        }, 'buildMembers': function (_0x35ef48, _0x4e3f22) {
            var _0x181278 = this,
                _0x3c44c0 = '';
            if (_0x4e3f22.length === 0x0) {
                return;
            }
            _0x4047e7.each(_0x4e3f22, function (_0x588a1d, _0x4a641f) {
                _0x3c44c0 += _0x181278.membersTpl(_0x4a641f.img);
            });
            _0x35ef48['find']('.task-members')['html'](_0x3c44c0);
        }, 'initSortable': function () {
            _0x4047e7('.taskboard-stages').sortable({
                'handle': '.taskboard-stage-header'
            });
            _0x4047e7('.taskboard-stage .list-group').sortable({
                'connectWith': '.taskboard-stage .list-group'
            });
        }, 'handleAddStage': function () {
            var _0x62db7 = this;
            _0x4047e7(_0x1d4e86)['on']('click', '.site-floataction', function () {
                var _0x444efb = _0x4047e7('#addStageFrom');
                _0x4047e7('input', _0x444efb).val('');
                _0x4047e7('option:first', _0x4047e7('select', _0x444efb)).prop('selected', 'selected');
            });
            _0x4047e7(_0x1d4e86)['on']('click', '#taskboard-stage-creat', function () {
                var _0x553ea4 = _0x4047e7('#addStageFrom'),
                    _0xade0ea = _0x4047e7('[name="name"]', _0x553ea4);
                _0x4047e7('.taskboard-stages').append(_0x62db7.stageTpl(_0xade0ea['val']()));
                _0x62db7.initSortable();
            });
        }, 'handleDeleteStage': function () {
            _0x4047e7(_0x1d4e86)['on']('click', '.taskboard-stage-delete', function () {
                var _0x13afaf = _0x4047e7(this);
                parent.layer.alert('您确定要删除吗？', {
                    'icon': 0x4
                }, function (_0x3fda3f) {
                    _0x13afaf.closest('.taskboard-stage').remove();
                    parent.layer.close(_0x3fda3f);
                });
            });
        }, 'getStage': function (_0x2dd2b7) {
            return _0x2dd2b7['closest']('.taskboard-stage');
        }, 'initStageDropdown': function () {
            _0x4047e7(_0x1d4e86)['on']('click', '.taskboard-stage-actions .dropdown-toggle', function () {
                _0x4047e7(this)['next']('.dropdown-menu').removeClass('is-edit');
            });
        }, 'handleStageRename': function () {
            _0x4047e7(_0x1d4e86)['on']('click', '.taskboard-stage-rename', function (_0xa91a57) {
                var _0x2c1db9 = _0x4047e7(this)['closest']('.taskboard-stage-header'),
                    _0x47a561 = _0x4047e7(this).closest('.dropdown-menu'),
                    _0x288c6a = _0x4047e7('.taskboard-stage-rename-input', _0x47a561),
                    _0x39562b = _0x4047e7('.taskboard-stage-title', _0x2c1db9);
                _0x47a561.toggleClass('is-edit');
                _0x288c6a['val']('')['focus']().val(_0x39562b['html']());
                _0xa91a57.stopPropagation();
            });
            _0x4047e7(_0x1d4e86)['on']('click', '.taskboard-stage-rename-save', function () {
                var _0x51603c = _0x4047e7(this)['closest']('.taskboard-stage-header'),
                    _0x4deeb0 = _0x4047e7('.taskboard-stage-rename-input', _0x51603c),
                    _0x527873 = _0x4047e7('.taskboard-stage-title', _0x51603c),
                    _0x4ebba1 = _0x4deeb0.val();
                if (_0x4ebba1['length'] === 0x0) {
                    return;
                }
                _0x527873.html(_0x4ebba1);
            });
        }, 'handleAddTask': function () {
            var _0xca396d = this;
            _0x4047e7(_0x1d4e86)['on']('click', '.add-item-toggle, .add-item-add, .add-item-cancel', function () {
                var _0x5932eb = _0x4047e7(this),
                    _0x1790c5 = _0x5932eb.closest('.action-wrap'),
                    _0x5a6a59 = _0x4047e7('[name="name"]', _0x1790c5);
                _0x1790c5.toggleClass('action-open');
                if (_0x5932eb['hasClass']('add-item-toggle')) {
                    _0x5a6a59.val('');
                }
                if (_0x5932eb['hasClass']('add-item-toggle')) {
                    _0x4047e7(_0x1d4e86)['on']('click.add-item', function (_0x49dcae) {
                        var _0xc47881 = _0x4047e7(_0x49dcae.target);
                        if (_0xc47881.closest('.add-item-wrap')['length'] === 0x0) {
                            _0x1790c5.removeClass('action-open');
                            _0x4047e7(_0x1d4e86)['off']('click.add-item');
                        }
                    });
                } else {
                    _0x4047e7(_0x1d4e86)['off']('click.add-item');
                }
            });
            _0x4047e7(_0x1d4e86)['on']('click', '.add-item-add', function () {
                var _0x350b42 = _0x4047e7(this),
                    _0x2fa267 = _0x350b42.closest('.action-wrap'),
                    _0x3a788f = _0x4047e7('[name="name"]', _0x2fa267),
                    _0x12b203 = _0x4047e7('.taskboard-list', _0x350b42.closest('.taskboard-stage-content')),
                    _0x4183f3 = _0xca396d.dataTpl();
                if (_0x3a788f.val()['length'] === 0x0) {
                    return;
                }
                _0x4183f3.title = _0x3a788f.val();
                _0xca396d.buildTask(_0x12b203, _0x4183f3, !![]);
            });
        }, 'handleDeleteTask': function () {
            _0x4047e7(_0x1d4e86)['on']('click', '.taskboard-task-delete', function () {
                var _0x21b594 = _0x4047e7(this);
                parent.layer.alert('确定要删除此任务吗？', function (_0x5f2694) {
                    _0x21b594.closest('.slidePanel')['data']('slidePanel')['target']['remove']();
                    _0x4047e7('.slidePanel-close').trigger('click');
                    parent.layer.close(_0x5f2694);
                });
            });
        }, 'handleTaskInput': function () {
            var _0x38d258 = this;
            _0x4047e7(_0x1d4e86)['on']('click', '.taskboard-list .checkbox-custom input', function (_0x2f2a86) {
                var _0x39ee83 = _0x4047e7(this),
                    _0x567198 = _0x39ee83.closest('.list-group-item');
                _0x38d258.dataChange(_0x567198, 'complete', _0x39ee83.prop('checked'));
                _0x2f2a86.stopPropagation();
            });
        }, 'handlSlidePanelPlugin': function () {
            if (typeof _0x4047e7.slidePanel === 'undefined') {
                return;
            }
            var _0x3a6f92 = this;
            _0x4047e7(_0x1d4e86)['on']('click', '[data-taskboard="slidePanel"]', function (_0x92191a) {
                var _0x52968d = _0x4047e7(_0x92191a['target']).closest('.list-group-item');
                _0x4047e7.slidePanel.show({
                    'url': _0x4047e7(this).data('url'),
                    'target': _0x52968d
                }, _0x4047e7['po']('slidePanel', {
                    'template': function (_0x35e1dc) {
                        return '<div class="' + _0x35e1dc['classes']['base'] + ' ' + _0x35e1dc.classes.base + '-' + _0x35e1dc.direction + '">' + '<div class="' + _0x35e1dc.classes.base + '-scrollable"><div>' + '<div class="' + _0x35e1dc['classes']['content'] + '"></div>' + '</div></div>' + '<div class="' + _0x35e1dc.classes['base'] + '-handler"></div>' + '</div>';
                    }, 'afterLoad': function (_0x17f2ec) {
                        var _0x4cef97 = this,
                            _0x6a66d3 = _0x4047e7(_0x17f2ec.target),
                            _0x27f1c8 = _0x6a66d3.data('taskInfo');
                        this.$panel.find('.' + this.options.classes.base + '-scrollable').slimScroll(_0x4047e7['po']('slimScroll'));
                        this['$panel'].find('#task-description')['markdown']({
                            'language': 'zh'
                        });
                        if (_0x27f1c8['duedate'].length > 0x0) {
                            this.$panel['find']('#taskDatepicker').data('date', _0x27f1c8['duedate']);
                        }
                        this['$panel'].find('#taskDatepicker')['datepicker'](_0x4047e7['po']('datepicker', {
                            'autoclose': ![],
                            'todayHighlight': !![],
                            'language': 'zh-CN'
                        }))['on']('changeDate', function () {
                            _0x4047e7('#taskDatepickerInput').val(_0x4cef97.$panel.find('#taskDatepicker')['datepicker']('getFormattedDate'));
                        });
                        this.$panel.data('slidePanel', _0x17f2ec);
                        _0x4047e7(_0x1d4e86)['off']('click.slidePanelDatepicker');
                        _0x4047e7(_0x1d4e86)['on']('click.slidePanelDatepicker', 'span, td, th', function (_0xcdf604) {
                            _0xcdf604.stopPropagation();
                        });
                    }, 'afterShow': function () {
                        var _0x5f09fd = this;
                        _0x4047e7(_0x1d4e86)['on']('click.slidePanelShow', function (_0x5914d0) {
                            if (_0x4047e7(_0x5914d0['target']).closest('.slidePanel').length === 0x0 && _0x4047e7(_0x5914d0.target).closest('body')['length'] === 0x1) {
                                _0x5f09fd.hide();
                            }
                        });
                    }, 'afterHide': function () {
                        _0x4047e7(_0x1d4e86).off('click.slidePanelShow');
                        _0x4047e7(_0x1d4e86)['off']('click.slidePanelDatepicker');
                    }, 'contentFilter': function (_0x91bd88, _0x4aa301) {
                        var _0x1c602b = _0x4047e7(_0x4aa301['target']),
                            _0x2ceb11 = _0x1c602b.data('taskInfo'),
                            _0x5732c5 = _0x4047e7(_0x91bd88),
                            _0x15f28b;
                        _0x4047e7('.stage-name', _0x5732c5)['html'](_0x4047e7('.taskboard-stage-title', _0x3a6f92['getStage'](_0x1c602b)).html());
                        _0x4047e7('.task-title', _0x5732c5).html(_0x2ceb11.title);
                        switch (_0x2ceb11.priority) {
                            case 'high':
                                _0x15f28b = _0x4047e7('#priorityHigh', _0x5732c5);
                                break;
                            case 'urgent':
                                _0x15f28b = _0x4047e7('#priorityUrgent', _0x5732c5);
                                break;
                            default:
                                _0x15f28b = _0x4047e7('#priorityNormal', _0x5732c5);
                                break;
                        }
                        _0x15f28b.prop('checked', !![]);
                        _0x3a6f92['handleSelective'](_0x4047e7('[data-plugin="jquery-selective"]', _0x5732c5), _0x2ceb11.members);
                        if (_0x2ceb11.description['length'] === 0x0) {
                            _0x4047e7('.description', _0x5732c5)['addClass']('is-empty');
                        } else {
                            _0x4047e7('.description-content', _0x5732c5).html(_0x2ceb11.description);
                        } if (_0x2ceb11['subtasks'].length !== 0x0) {
                            _0x4047e7['each'](_0x2ceb11['subtasks'], function (_0x149c09, _0x2fb6f2) {
                                var _0x34373e = _0x4047e7(_0x3a6f92['subtaskTpl'](_0x2fb6f2));
                                _0x4047e7('.subtasks-list', _0x5732c5).append(_0x34373e);
                            });
                            _0x4047e7('.subtasks', _0x5732c5)['toggleClass']('is-show');
                        }
                        if (_0x2ceb11['attachments'].length !== 0x0) {
                            _0x4047e7.each(_0x2ceb11.attachments, function (_0x466aa7, _0x48293a) {
                                var _0x395ab0 = _0x4047e7(_0x3a6f92.attachmentTpl(_0x48293a));
                                _0x4047e7('.attachments-list', _0x5732c5).append(_0x395ab0);
                            });
                            _0x4047e7('.attachments', _0x5732c5)['toggleClass']('is-show');
                        }
                        if (_0x2ceb11.comments.length !== 0x0) {
                            _0x4047e7.each(_0x2ceb11['comments'], function (_0x232115, _0x1df0c3) {
                                var _0x61cc6c = _0x4047e7(_0x3a6f92.commentTpl(_0x1df0c3.src, _0x1df0c3.user, _0x1df0c3['time'], _0x1df0c3['content']));
                                _0x4047e7('.comments-history', _0x5732c5).append(_0x61cc6c);
                            });
                        }
                        return _0x5732c5;
                    }
                }));
                _0x92191a.stopPropagation();
            });
            _0x4047e7(_0x1d4e86)['on']('click', '#fileuploadToggle', function () {
                _0x4047e7('#fileupload').trigger('click');
            });
        }, 'handleSelective': function (_0x427166, _0x340ac5) {
            var _0x44dec9 = this;
            var _0x3a471e = function () {
                var _0x3567a3 = this,
                    _0x1d3a2c = [];
                _0x4047e7['each'](this._options.getOptions(this), function (_0x5208c9, _0xa75bb0) {
                    _0x4047e7['each'](_0x3567a3.options.local, function (_0x3b9a5c, _0x8d8d05) {
                        if (_0x8d8d05['id'] === _0x4047e7(_0xa75bb0).val()) {
                            _0x1d3a2c['push'](_0x8d8d05);
                        }
                    });
                });
                return _0x1d3a2c;
            };
            var _0x3b9b6a = [{
                'id': 'uid_1',
                'name': '梅小燕',
                'img': '/public/images/portraits/1.jpg'
            }, {
                'id': 'uid_2',
                'name': '赵桦',
                'img': '/public/images/portraits/2.jpg'
            }, {
                'id': 'uid_3',
                'name': '唐雪琴',
                'img': '/public/images/portraits/3.jpg'
            }, {
                'id': 'uid_4',
                'name': '曹洁群',
                'img': '/public/images/portraits/4.jpg'
            }, {
                'id': 'uid_5',
                'name': '陈媚婉',
                'img': '/public/images/portraits/5.jpg'
            }, {
                'id': 'uid_6',
                'name': '嵇慧莉',
                'img': '/public/images/portraits/6.jpg'
            }];
            _0x427166['selective']({
                'namespace': 'addMember',
                'local': _0x3b9b6a,
                'selected': _0x340ac5,
                'buildFromHtml': ![],
                'tpl': {
                    'optionValue': function (_0x4243e1) {
                        return _0x4243e1['id'];
                    }, 'frame': function () {
                        return '<div class="' + this['namespace'] + '">' + this.options['tpl'].items['call'](this) + '<div class="' + this.namespace + '-trigger">' + this.options.tpl['triggerButton']['call'](this) + '<div class="' + this['namespace'] + '-trigger-dropdown">' + this.options.tpl.list.call(this) + '</div>' + '</div>' + '</div>';
                    }, 'triggerButton': function () {
                        return '<div class="' + this.namespace + '-trigger-button"><i class="wb-plus"></i></div>';
                    }, 'listItem': function (_0x228cff) {
                        return '<li class="' + this.namespace + '-list-item"><img class="avatar" src="' + _0x228cff.img + '">' + _0x228cff.name + '</li>';
                    }, 'item': function (_0x5b9e22) {
                        return '<li class="' + this['namespace'] + '-item"><img class="avatar" src="' + _0x5b9e22.img + '">' + this['options'].tpl.itemRemove.call(this) + '</li>';
                    }, 'itemRemove': function () {
                        return '<span class="' + this.namespace + '-remove"><i class="wb-minus-circle"></i></span>';
                    }, 'option': function (_0x34aa8f) {
                        return '<option value="' + this.options['tpl'].optionValue.call(this, _0x34aa8f) + '">' + _0x34aa8f.name + '</option>';
                    }
                },
                'onAfterItemAdd': function () {
                    var _0x427166 = this.$el.closest('.slidePanel').data('slidePanel').target,
                        _0x3c60ba = _0x3a471e.call(this);
                    _0x44dec9['dataChange'](_0x427166, 'members', _0x3c60ba);
                }, 'onAfterItemRemove': function () {
                    var _0x427166 = this.$el['closest']('.slidePanel')['data']('slidePanel').target,
                        _0x15aa20 = _0x3a471e['call'](this);
                    _0x44dec9['dataChange'](_0x427166, 'members', _0x15aa20);
                }
            });
        }, 'handlePriority': function () {
            var _0x7789c1 = this;
            _0x4047e7(_0x1d4e86)['on']('click', '[name="priorities"]', function () {
                var _0x4abcb2 = _0x4047e7(this),
                    _0x21a6ed = _0x4abcb2.closest('.slidePanel').data('slidePanel')['target'];
                _0x7789c1.dataChange(_0x21a6ed, 'priority', _0x4abcb2.data('priority'));
            });
        }, 'handleEditor': function () {
            var _0x2212d7 = this;
            _0x4047e7(_0x1d4e86)['on']('click', '.slidePanel .task-title, .taskboard-task-edit, .description-toggle', function () {
                var _0x50049d = _0x4047e7(this),
                    _0x1fa1cc = _0x50049d.closest('.slidePanel').data('slidePanel').target,
                    _0x835c27 = _0x1fa1cc.data('taskInfo');
                _0x4047e7('#task-title').val(_0x835c27.title);
                _0x4047e7('#task-description').val(_0x835c27['description']);
                _0x50049d.closest('.slidePanel').find('.task-main').addClass('is-edit');
            });
            _0x4047e7(_0x1d4e86)['on']('click', '.task-main-editor-save', function () {
                var _0x90b362 = _0x4047e7(this),
                    _0x1416fb = _0x90b362['closest']('.slidePanel').data('slidePanel')['target'];
                _0x2212d7['dataChange'](_0x1416fb, 'title', _0x4047e7('#task-title').val());
                _0x2212d7['dataChange'](_0x1416fb, 'description', _0x4047e7('#task-description').val());
                _0x90b362['closest']('.slidePanel').find('.task-main').removeClass('is-edit');
                if (_0x4047e7('#task-description')['val']()['length'] === 0x0) {
                    _0x4047e7('.description').addClass('is-empty');
                } else {
                    _0x4047e7('.description').removeClass('is-empty');
                }
            });
            _0x4047e7(_0x1d4e86)['on']('click', '.task-main-editor-cancel', function () {
                _0x4047e7(this).closest('.slidePanel').find('.task-main').removeClass('is-edit');
            });
        }, 'handleSubtasks': function () {
            var _0x1f7fe6 = this;
            _0x4047e7(_0x1d4e86)['on']('click', '.subtask-toggle', function () {
                var _0x457998 = _0x4047e7('.subtask').length,
                    _0x2e11fa = _0x4047e7('.subtasks-add .subtask-title'),
                    _0x1159cb = _0x4047e7('.subtasks');
                _0x2e11fa['val']('');
                if (_0x457998 === 0x0) {
                    _0x1159cb.addClass('is-show');
                }
                _0x1159cb.addClass('is-edit');
                _0x2e11fa.focus();
                _0x4047e7(_0x1d4e86)['on']('click.subtask-add', function (_0x173f07) {
                    var _0x5498bd = _0x4047e7(_0x173f07.target);
                    if (_0x5498bd['closest'](_0x4047e7('.subtasks-add')).length === 0x0) {
                        _0x1159cb.removeClass('is-edit');
                        _0x4047e7(_0x1d4e86).off('click.subtask-add');
                    }
                });
            });
            _0x4047e7(_0x1d4e86)['on']('click', '.subtask-add-save', function () {
                var _0x4c9de0 = _0x4047e7('.subtask')['length'],
                    _0x3cd173 = _0x4047e7('.subtasks'),
                    _0x27df01 = _0x4047e7('.subtasks-add .subtask-title'),
                    _0x54920b = _0x27df01.val(),
                    _0x5b51c0 = _0x4047e7(this).closest('.slidePanel').data('slidePanel')['target'];
                if (_0x54920b.length === 0x0) {
                    if (_0x4c9de0 === 0x0) {
                        _0x3cd173['removeClass']('is-show');
                    }
                } else {
                    var _0x3433e1 = {
                        'title': _0x54920b,
                        'complete': ![]
                    },
                        _0x2c6ca4 = _0x4047e7(_0x1f7fe6.subtaskTpl(_0x3433e1));
                    _0x4047e7('.subtasks-list').append(_0x2c6ca4);
                    _0x1f7fe6['dataChange'](_0x5b51c0, 'subtasks', _0x3433e1, _0x4c9de0);
                }
                _0x27df01['val']('').focus();
            });
            _0x4047e7(_0x1d4e86)['on']('click', '.subtask-add-cancel', function () {
                _0x4047e7('.subtasks').removeClass('is-edit');
                _0x4047e7(_0x1d4e86).off('click.subtask-add');
            });
            _0x4047e7(_0x1d4e86)['on']('click', '.subtask input', function () {
                var _0x262832 = _0x4047e7(this),
                    _0x26db81 = _0x262832.closest('.slidePanel').data('slidePanel').target,
                    _0x59edc3 = _0x262832.closest('.subtask'),
                    _0x44a8da = _0x59edc3['index']();
                _0x1f7fe6.dataChange(_0x26db81, 'subtasks', _0x262832.prop('checked'), _0x44a8da, 'complete');
            });
            _0x4047e7(_0x1d4e86)['on']('click', '.subtask .title', function () {
                var _0x1cdce1 = _0x4047e7(this),
                    _0x463ea4 = _0x1cdce1.closest('.slidePanel').data('slidePanel').target,
                    _0x1ae3e5 = _0x463ea4.data('taskInfo'),
                    _0x1d1865 = _0x1cdce1.closest('.subtask'),
                    _0x1f7adb = _0x1d1865['index'](),
                    _0x586ade = _0x4047e7('.subtask-title', _0x1d1865);
                _0x1d1865.addClass('is-edit');
                _0x586ade.val('')['focus']().val(_0x1ae3e5.subtasks[_0x1f7adb].title);
                _0x4047e7(_0x1d4e86)['on']('click.subtask', function (_0x57a124) {
                    var _0x1e6834 = _0x4047e7(_0x57a124.target);
                    if (_0x1e6834.closest(_0x1d1865)['length'] === 0x0) {
                        _0x1d1865.removeClass('is-edit');
                        _0x4047e7(_0x1d4e86)['off']('click.subtask');
                    }
                });
            });
            _0x4047e7(_0x1d4e86)['on']('click', '.subtask-editor-save', function () {
                var _0x5de154 = _0x4047e7(this),
                    _0x50e8d1 = _0x5de154.closest('.slidePanel').data('slidePanel').target,
                    _0x472991 = _0x5de154.closest('.subtask'),
                    _0x3df22b = _0x472991.index();
                _0x1f7fe6.dataChange(_0x50e8d1, 'subtasks', _0x4047e7('.subtask-title', _0x472991).val(), _0x3df22b, 'title');
                _0x472991['removeClass']('is-edit');
                _0x4047e7(_0x1d4e86).off('click.subtask');
            });
            _0x4047e7(_0x1d4e86)['on']('click', '.subtask-editor-delete', function () {
                var _0x1af129 = _0x4047e7(this);
                parent['layer'].alert('确定要删除子任务吗？', function (_0x4259cc) {
                    var _0x4043ab = _0x1af129['closest']('.slidePanel')['data']('slidePanel')['target'],
                        _0x35e8e6 = _0x1af129.closest('.subtask'),
                        _0x3d039d = _0x35e8e6['index']();
                    _0x1f7fe6.dataDelete(_0x4043ab, 'subtasks', _0x3d039d);
                    _0x35e8e6.remove();
                    _0x4047e7(_0x1d4e86).off('click.subtask');
                    if (_0x4047e7('.subtask').length === 0x0) {
                        _0x4047e7('.subtasks').removeClass('is-show');
                    }
                    parent['layer'].close(_0x4259cc);
                });
            });
        }, 'handleDatepicker': function () {
            var _0x36b847 = this;
            _0x4047e7(_0x1d4e86)['on']('click', '.due-date-save', function () {
                var _0x130132 = _0x4047e7(this),
                    _0x12b679 = _0x130132.closest('.slidePanel').data('slidePanel')['target'],
                    _0x249a21 = _0x4047e7('#taskDatepickerInput').val();
                if (_0x249a21['length'] > 0x0) {
                    _0x36b847.dataChange(_0x12b679, 'duedate', _0x249a21);
                }
            });
            _0x4047e7(_0x1d4e86)['on']('click', '.due-date-delete', function () {
                var _0x3d21cc = _0x4047e7(this),
                    _0xda03c5 = _0x3d21cc.closest('.slidePanel')['data']('slidePanel').target,
                    _0x134da1 = _0xda03c5['data']('taskInfo');
                if (_0x134da1.duedate.length === 0x0) {
                    return;
                }
                _0x36b847['dataDelete'](_0xda03c5, 'duedate');
                _0x4047e7('#taskDatepicker').datepicker('clearDates');
            });
        }, 'dataDelete': function (_0x1d85e8, _0x4a348c, _0x486109) {
            if (_0x486109) {
                _0x1d85e8.data('taskInfo')[_0x4a348c].splice(_0x486109, 0x1);
                this.dataDeleteResponse(_0x1d85e8, _0x4a348c, _0x486109);
            } else {
                _0x1d85e8.data('taskInfo')[_0x4a348c] = '';
                this['dataChangeResponse'](_0x1d85e8, _0x4a348c);
            }
        }, 'dataDeleteResponse': function (_0x3c06ea, _0x11ddd6) {
            switch (_0x11ddd6) {
                case 'duedate':
                    this.buildBadges(_0x3c06ea, _0x3c06ea['data']('taskInfo'));
                    break;
                case 'subtasks':
                    this.buildBadges(_0x3c06ea, _0x3c06ea.data('taskInfo'));
                    break;
            }
        }, 'dataChange': function (_0x3bbd44, _0x5a0e7c, _0x57a3c8, _0x3a0aad, _0x1ee688) {
            if (_0x57a3c8['length'] === 0x0) {
                return;
            }
            if (_0x3a0aad !== undefined) {
                if (_0x1ee688) {
                    _0x3bbd44.data('taskInfo')[_0x5a0e7c][_0x3a0aad][_0x1ee688] = _0x57a3c8;
                } else {
                    _0x3bbd44.data('taskInfo')[_0x5a0e7c][_0x3a0aad] = _0x57a3c8;
                }
            } else {
                _0x3bbd44.data('taskInfo')[_0x5a0e7c] = _0x57a3c8;
            }
            this.dataChangeResponse(_0x3bbd44, _0x5a0e7c, _0x57a3c8, _0x3a0aad, _0x1ee688);
        }, 'dataChangeResponse': function (_0x1970ea, _0x465bcb, _0x159560, _0x50ac5a, _0x100d79) {
            switch (_0x465bcb) {
                case 'title':
                    _0x4047e7('.task-title', _0x1970ea).html(_0x159560);
                    _0x4047e7('.slidePanel .task-title').html(_0x159560);
                    break;
                case 'description':
                    _0x4047e7('.slidePanel .description-content').html(_0x159560);
                    break;
                case 'priority':
                    _0x1970ea.removeClass('priority-normal priority-high priority-urgent').addClass('priority-' + _0x159560);
                    break;
                case 'duedate':
                    this.buildBadges(_0x1970ea, _0x1970ea.data('taskInfo'));
                    break;
                case 'members':
                    this['buildMembers'](_0x1970ea, _0x1970ea.data('taskInfo').members);
                    break;
                case 'subtasks':
                    if (_0x100d79 === 'title') {
                        _0x4047e7('.title', _0x4047e7('.subtasks-list .subtask')[_0x50ac5a])['html'](_0x159560);
                    } else {
                        this['buildBadges'](_0x1970ea, _0x1970ea.data('taskInfo'));
                    }
                    break;
                case 'attachments':
                    break;
                case 'comments':
                    break;
            }
        }, 'run': function () {
            this.init();
            this['handleAddStage']();
            this.handleDeleteStage();
            this.handleAddTask();
            this.handleDeleteTask();
            this.handleTaskInput();
            this.initStageDropdown();
            this.handleStageRename();
            this.handleDatepicker();
            this.handlSlidePanelPlugin();
            this.handleEditor();
            this.handleSubtasks();
            this.handlePriority();
            _0x4047e7.leavePage = function () {
                _0x4047e7.slidePanel = null;
            };
        }
    };
    _0x27f3bf.run();
}(document, window, jQuery));