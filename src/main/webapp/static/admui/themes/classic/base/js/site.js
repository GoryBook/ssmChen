(function (_0x32a493, _0x126224, _0x45cbb5) {

    _0x45cbb5['extend'](_0x45cbb5.site, {
        'theme': function () {
            var _0x118577 = _0x45cbb5('body'),
                _0x1d9384 = 'admui.base.skinTools',
                _0x52047f = _0x45cbb5('#admui-siteStyle', _0x45cbb5('head')),
                _0x53ed64 = localStorage.getItem(_0x1d9384),
                _0x333fa4 = _0x52047f['prop']('href').indexOf('?v=') === -0x1 ? '' : '.min',
                _0x372bde, _0x7f87e0, _0x55ce81, _0x42b871, _0x223587;
            if (!_0x53ed64) {
                return;
            }
            _0x53ed64 = JSON.parse(_0x53ed64).val;
            _0x372bde = this.themeColor = _0x53ed64.themeColor;
            _0x7f87e0 = _0x53ed64.sidebar;
            _0x55ce81 = _0x53ed64['navbar'];
            _0x42b871 = _0x53ed64.menuDisplay;
            _0x223587 = _0x53ed64.menuTxtIcon;
            if (_0x372bde && _0x372bde !== 'primary') {
                setTimeout(function () {
                    _0x52047f.attr('href', '/themes/classic/base/skins/' + _0x372bde + '/index' + _0x333fa4 + '.css');
                }, 0x82);
            }
            if (_0x7f87e0 && _0x7f87e0 === 'site-menubar-light') {
                _0x45cbb5('#admui-siteMenubar').addClass('site-menubar-light');
            }
            if (_0x55ce81 && _0x55ce81 !== '') {
                _0x45cbb5('.site-navbar').addClass(_0x55ce81);
            }
            if (_0x53ed64.navbarInverse === '') {
                _0x45cbb5('.site-navbar').removeClass('navbar-inverse');
            }
            if (_0x42b871 && _0x42b871 === 'site-menubar-fold') {
                _0x45cbb5.site.menubar.fold();
                if (_0x223587 && _0x223587 === 'site-menubar-keep') {
                    _0x118577.addClass('site-menubar-keep');
                } else {
                    _0x118577.addClass('site-menubar-fold-alt');
                }
            }
            if (_0x53ed64.tabFlag === '') {
                _0x118577.removeClass('site-contabs-open');
            }
        }, 'iframeTheme': function () {
            var _0x49eddb = _0x45cbb5('#admui-siteStyle', this['iframeDocument']),
                _0x69262b = _0x49eddb.prop('href').indexOf('?v=') === -0x1 ? '' : '.min',
                _0x43db4f = this.themeColor;
            if (_0x43db4f && _0x43db4f !== 'primary') {
                _0x49eddb.attr('href', '/themes/classic/base/skins/' + this['themeColor'] + '/site' + _0x69262b + '.css');
            }
        }, '_tabsDraw': function () {
            var _0x23bfa3 = this,
                _0x483c6f = 'admui.base.contentTabs',
                _0x51d3b1 = _0x45cbb5.sessionStorage.get(_0x483c6f),
                _0x5dadbb, _0x182245, _0x3c8192, _0x16a3c7, _0x7aa71, _0x3ceaf5, _0x48fad1, _0x6a1e71 = location['hash'].substring(0x2),
                _0x21a15 = _0x45cbb5('.con-tabs'),
                _0x4c46b8 = _0x45cbb5.site.contentTabs,
                _0x57b9da = function (_0x27b525, _0x5515ca, _0x3960b8) {
                    var _0xe31336 = _0x23bfa3.$content.find('iframe:first');
                    if (_0x27b525 === _0x5515ca || !_0x6a1e71) {
                        _0x3c8192 = _0x3960b8;
                        _0x21a15['find']('li:first')['addClass']('active');
                        _0xe31336.attr('src', _0x3960b8);
                        _0x23bfa3.iframeEvents(_0xe31336);
                    } else {
                        _0xe31336.removeClass('active');
                    }
                };
            _0x182245 = _0x51d3b1.checked;
            for (var _0x4bfe7f in _0x51d3b1) {
                _0x5dadbb = _0x51d3b1[_0x4bfe7f];
                if (_0x4bfe7f === 'checked' || _0x4bfe7f === 'tabId') {
                    continue;
                } else if (_0x4bfe7f === 'iframe-0') {
                    _0x57b9da(_0x4bfe7f, _0x182245, _0x5dadbb['url']);
                    continue;
                }
                _0x7aa71 = _0x5dadbb.url;
                _0x3ceaf5 = _0x5dadbb.name;
                _0x16a3c7 = '<a href="' + _0x7aa71 + '\x22\x20' + 'target=\x22' + _0x4bfe7f + '\x22' + '" title="' + _0x3ceaf5 + '' + '" rel="contents"><span>' + _0x3ceaf5 + '</span><i class="icon' + ' wb-close-mini">' + '</i></a></li>';
                if (_0x4bfe7f === _0x182245 && _0x6a1e71) {
                    _0x3c8192 = _0x7aa71;
                    _0x16a3c7 = '<li class="active">' + _0x16a3c7;
                    _0x48fad1 = '<iframe src="' + _0x7aa71 + '" frameborder="0" name="' + _0x4bfe7f + '" class="page-frame animation-fade active"></iframe>';
                } else {
                    _0x16a3c7 = '<li>' + _0x16a3c7;
                    _0x48fad1 = '<iframe src="" frameborder="0" name="' + _0x4bfe7f + '" class="page-frame animation-fade"></iframe>';
                }
                _0x21a15.append(_0x16a3c7);
                _0x23bfa3.$content.append(_0x48fad1);
            }
            if (_0x6a1e71 !== _0x3c8192 && _0x6a1e71) {
                this._urlRequest(_0x6a1e71);
            }
            _0x4c46b8['enable'](_0x21a15.find('.active'));
            if (Object.keys(_0x51d3b1).length >= 0x13) {
                _0x4c46b8.tabSize();
                _0x4c46b8.tabEvent(_0x21a15, 'media');
            }
        }, '_urlRequest': function (_0x1e6280) {
            var _0x1c6d11 = '未知页面';
            _0x45cbb5('.site-menu\x20a').each(function () {
                var _0x1fa75b = _0x45cbb5(this);
                if (_0x1fa75b.attr('href') === _0x1e6280) {
                    _0x1c6d11 = _0x45cbb5['trim'](_0x1fa75b.attr('title') || _0x1fa75b.text());
                    return ![];
                }
            });
            _0x45cbb5['site']['contentTabs'].buildTab({
                'name': _0x1c6d11,
                'url': _0x1e6280
            });
        }, '_hideNavbar': function () {
            var _0x48aa0e = _0x45cbb5('body');
            _0x48aa0e.addClass('site-navbar-collapsing');
            _0x45cbb5('#admui-navbarCollapse').collapse('hide');
            setTimeout(function () {
                _0x48aa0e.removeClass('site-navbar-collapsing');
            }, 0xa);
            _0x48aa0e.removeClass('site-navbar-collapse-show');
        }, 'iframeEvents': function (_0x1d9bb9) {
            var _0x157871 = this,
                _0x525a74 = function (_0x5d61c1) {
                    _0x45cbb5('#admui-siteStyle', _0x5d61c1)['load'](function () {
                        _0x157871.iframeTheme();
                    });
                };
            _0x1d9bb9['load'](function () {
                var _0x48dd74 = _0x157871.iframeDocument = _0x45cbb5['content'].document();
                _0x45cbb5(_0x48dd74)['on']('click', function () {
                    if (Breakpoints['is']('xs') && _0x45cbb5('body').hasClass('site-menubar-open')) {
                        _0x45cbb5.site['menubar'].hide();
                        _0x157871._hideNavbar();
                    }
                    _0x45cbb5('[data-toggle="dropdown"]').parent().removeClass('open');
                });
                _0x525a74(_0x48dd74);
            });
        }, 'run': function () {
            var _0x5e8572 = this,
                _0x492df0 = this['$content'] = _0x45cbb5('#admui-pageContent');
            _0x45cbb5.content = _0x45cbb5.content || {};
            _0x45cbb5.extend(_0x45cbb5.content, {
                'window': function () {
                    var _0x2d47c6 = _0x492df0['find']('iframe.active').attr('name');
                    return _0x126224['frames'][_0x2d47c6];
                }, 'document': function () {
                    var _0x1dcb88 = _0x492df0.find('iframe.active').attr('name');
                    return _0x126224.frames[_0x1dcb88]['document'];
                }
            });
            this.iframeDocument = null;
            _0x45cbb5['ctx'] = _0x45cbb5('#admui-signOut').data('ctx') || _0x45cbb5.ctx;
            if (typeof _0x45cbb5['site'].menu !== 'undefined') {
                _0x45cbb5.site.menu.init();
            }
            if (typeof _0x45cbb5['site'].contentTabs !== 'undefined') {
                _0x45cbb5.site.contentTabs.init();
            }
            _0x45cbb5('#admui-navbar').responsiveHorizontalTabs({
                'tabParentSelector': '#admui-navTabs',
                'fnCallback': function (_0x46d4ee) {
                    if (_0x45cbb5('#admui-navbar')['is'](':visible')) {
                        _0x46d4ee.removeClass('is-load');
                    }
                }
            });
            if (typeof _0x45cbb5['site'].menubar !== 'undefined') {
                _0x45cbb5('#admui-siteMenubar')['on']('changing.site.menubar', function () {
                    var _0x570303 = _0x45cbb5('[data-toggle="menubar"]');
                    _0x570303.toggleClass('hided', !_0x45cbb5.site.menubar.opened);
                    _0x570303.toggleClass('unfolded', !_0x45cbb5.site.menubar.folded);
                });
                _0x45cbb5.site['menubar']['init']();
                Breakpoints['on']('change', function () {
                    _0x45cbb5.site.menubar.change();
                });
                _0x45cbb5(document)['on']('click', '[data-toggle=\x22collapse\x22]', function (_0x360cd0) {
                    var _0x39efb5 = _0x45cbb5(_0x360cd0.target),
                        _0x4fecf7, _0xf54f87, _0xbe02ed;
                    if (!_0x39efb5['is']('[data-toggle=\x22collapse\x22]')) {
                        _0x39efb5 = _0x39efb5.parents('[data-toggle="collapse"]');
                    }
                    _0xf54f87 = _0x39efb5['attr']('data-target') || (_0x4fecf7 = _0x39efb5.attr('href')) && _0x4fecf7.replace(/.*(?=#[^\s]+$)/, '');
                    _0xbe02ed = _0x45cbb5(_0xf54f87);
                    if (_0xbe02ed.hasClass('navbar-search-overlap')) {
                        _0xbe02ed.find('input').focus();
                        _0x360cd0['preventDefault']();
                    } else if (_0xbe02ed.attr('id') === 'admui-navbarCollapse') {
                        var _0x516e75 = !_0x39efb5.hasClass('collapsed'),
                            _0xc2b1b6 = _0x45cbb5(document['body']);
                        _0xc2b1b6.addClass('site-navbar-collapsing');
                        _0xc2b1b6.toggleClass('site-navbar-collapse-show', _0x516e75);
                        _0x45cbb5('#admui-navbar').responsiveHorizontalTabs({
                            'tabParentSelector': '#admui-navTabs',
                            'fnCallback': function (_0x561158) {
                                _0x561158.removeClass('is-load');
                            }
                        });
                        setTimeout(function () {
                            _0xc2b1b6.removeClass('site-navbar-collapsing');
                        }, 0x15e);
                    }
                });
                _0x45cbb5(document)['on']('click', '[data-toggle="menubar"]', function () {
                    if (Breakpoints['is']('xs') && _0x45cbb5('body').hasClass('site-menubar-open')) {
                        _0x5e8572._hideNavbar();
                    }
                    _0x45cbb5.site.menubar.toggle();
                });
                _0x45cbb5('#admui-navbar >.nav-tabs >li:not(.no-menu)')['on']('click', function (_0x5b9010) {
                    if (_0x45cbb5(_0x5b9010.target)['closest']('li')['is']('.dropdown')) {
                        return;
                    }
                    if (Breakpoints['is']('xs')) {
                        _0x45cbb5.site.menubar.open();
                    }
                });
            }
            if (typeof screenfull !== 'undefined') {
                _0x45cbb5(document)['on']('click', '[data-toggle="fullscreen"]', function () {
                    if (screenfull.enabled) {
                        screenfull.toggle();
                    }
                    return ![];
                });
                if (screenfull.enabled) {
                    document.addEventListener(screenfull.raw['fullscreenchange'], function () {
                        _0x45cbb5('[data-toggle="fullscreen"]')['toggleClass']('active', screenfull.isFullscreen);
                    });
                }
            }
            _0x45cbb5(document)['on']('show.bs.dropdown', function (_0x47aa4c) {
                var _0x4a2378 = _0x45cbb5(_0x47aa4c.target),
                    _0x3c3d29, _0x148dde = _0x47aa4c.relatedTarget ? _0x45cbb5(_0x47aa4c['relatedTarget']) : _0x4a2378.children('[data-toggle="dropdown"]'),
                    _0x4c46e0 = _0x148dde.data('animation');
                if (_0x4c46e0) {
                    _0x3c3d29 = _0x4a2378.children('.dropdown-menu');
                    _0x3c3d29.addClass('animation-' + _0x4c46e0);
                    _0x3c3d29.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                        _0x3c3d29['removeClass']('animation-' + _0x4c46e0);
                    });
                }
            });
            _0x45cbb5('[data-toggle="tooltip"]').tooltip({
                'trigger': 'hover'
            });
            _0x45cbb5('[data-toggle="popover"]').popover();
            if (_0x126224.localStorage) {
                this.theme();
                this['_tabsDraw']();
            }
            _0x45cbb5.components.init();
        }
    });
    _0x45cbb5['site'].run();
}(document, window, jQuery));