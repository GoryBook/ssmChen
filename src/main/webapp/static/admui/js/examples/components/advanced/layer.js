(function (_0x4b3aed, _0x5808d3, _0x5e8e52) {

    if (typeof layer !== 'undefined') {
        layer.config({
            'extend': '../retina.css'
        });
    }
    _0x5e8e52('.getting-started > .btn')['on']('click', function () {
        var _0x2ef0ca;
        switch (_0x5e8e52(this).index('.getting-started > .btn')) {
            case 0x0:
                _0x2ef0ca = -0x1;
                (function changeIcon() {
                    var _0x9872d = parent.layer.alert('Hi，你好！ 点击确认更换图标', {
                        'icon': _0x2ef0ca,
                        'shadeClose': !![],
                        'title': _0x2ef0ca === -0x1 ? '初体验 - layer ' + layer['v'] : 'icon：' + _0x2ef0ca + '\x20-\x20layer\x20' + layer['v']
                    }, changeIcon);
                    if (0x8 === ++_0x2ef0ca) {
                        parent.layer.close(_0x9872d);
                    }
                }());
                break;
            case 0x1:
                _0x2ef0ca = 0x0;
                (function changeIcon1() {
                    parent['layer'].alert('我们对layer的皮肤进行了部分重写，使其支持Retina屏幕，这可能会对第三方皮肤造成影响', {
                        'icon': _0x2ef0ca,
                        'shadeClose': !![],
                        'skin': 'layer-ext-moon'
                    });
                }());
                break;
            case 0x2:
                parent.layer['confirm']('您是如何看待前端开发？', {
                    'btn': ['重要', '奇葩']
                }, function () {
                    parent['layer'].msg('的确很重要', {
                        'icon': 0x1
                    });
                }, function () {
                    parent.layer.msg('也可以这样', {
                        'time': 0x4e20,
                        'btn': ['明白了', '知道了']
                    });
                });
                break;
            case 0x3:
                parent.layer.msg('玩命提示中');
                break;
            case 0x4:
                parent.layer['alert']('墨绿风格，点击确认看深蓝', {
                    'skin': 'layui-layer-molv',
                    'closeBtn': 0x0
                }, function () {
                    parent.layer.alert('偶吧深蓝style', {
                        'skin': 'layui-layer-lan',
                        'closeBtn': 0x0,
                        'anim': 0x4
                    });
                });
                break;
            case 0x5:
                parent.layer.open({
                    'type': 0x1,
                    'shade': ![],
                    'title': ![],
                    'content': _0x5e8e52('.layer-notice'),
                    'cancel': function () {
                        parent['layer'].msg('捕获就是从页面已经存在的元素上，包裹layer的结构', {
                            'time': 0x1388,
                            'icon': 0x6
                        });
                    }
                });
                break;
            case 0x6:
                parent.layer['open']({
                    'type': 0x1,
                    'skin': 'layui-layer-rim',
                    'area': ['420px', '240px'],
                    'content': '<div>任意html内容</div>'
                });
                break;
            case 0x7:
                parent.layer.open({
                    'type': 0x1,
                    'skin': 'layui-layer-demo',
                    'closeBtn': ![],
                    'area': '350px',
                    'anim': 0x2,
                    'shadeClose': !![],
                    'content': '<div>即传入skin:"样式名"，然后你就可以为所欲为了。<br>你怎么样给她整容都行<br><br><br>我是华丽的酱油==。</div>'
                });
                break;
            case 0x8:
                layer.tips('Hi，我是tips', this);
                break;
            case 0x9:
                parent.layer['open']({
                    'type': 0x2,
                    'title': 'layer mobile页',
                    'shadeClose': !![],
                    'shade': 0.8,
                    'area': ['380px', '90%'],
                    'content': '//layer.layui.com/mobile/'
                });
                break;
            case 0xa:
                parent.layer.open({
                    'type': 0x2,
                    'title': ![],
                    'closeBtn': 0x0,
                    'shade': [0x0],
                    'area': ['340px', '215px'],
                    'offset': 'rb',
                    'time': 0x7d0,
                    'anim': 0x2,
                    'content': ['//layer.layui.com/test/guodu.html', 'no'],
                    'end': function () {
                        parent.layer.open({
                            'type': 0x2,
                            'title': '很多时候，我们想最大化看，比如像这个页面。',
                            'shadeClose': !![],
                            'shade': ![],
                            'maxmin': !![],
                            'area': ['960px', '500px'],
                            'content': '//fly.layui.com/'
                        });
                    }
                });
                break;
            case 0xb:
                var _0x3c3c86 = parent['layer']['load'](0x0, {
                    'shade': ![]
                });
                setTimeout(function () {
                    parent.layer.close(_0x3c3c86);
                }, 0x1388);
                break;
            case 0xc:
                var _0x59d075 = parent.layer['load'](0x1, {
                    'shade': [0.1, '#fff']
                });
                setTimeout(function () {
                    parent.layer['close'](_0x59d075);
                }, 0xbb8);
                break;
            case 0xd:
                layer.tips('我是另外一个tips，只不过我长得跟之前那位稍有些不一样。', this, {
                    'tips': [0x1, '#3595CC'],
                    'time': 0xfa0
                });
                break;
            case 0xe:
                parent.layer['prompt']({
                    'title': '输入任何口令，并确认',
                    'formType': 0x1
                }, function (_0x3f6a8e, _0x21454c) {
                    parent.layer['close'](_0x21454c);
                    parent['layer'].prompt({
                        'title': '随便写点啥，并确认',
                        'formType': 0x2
                    }, function (_0x2626a7, _0x5784c9) {
                        parent['layer'].close(_0x5784c9);
                        parent.layer.msg('演示完毕！您的口令：' + _0x3f6a8e + '<br>您最后写下了：' + _0x2626a7);
                    });
                });
                break;
            case 0xf:
                parent.layer.tab({
                    'area': ['600px', '300px'],
                    'tab': [{
                        'title': '无题',
                        'content': '<div>欢迎体验layer.tab<br>此时此刻不禁让人吟诗一首：<br>一入前端深似海<br>从此妹纸是浮云<br>以下省略七个字<br>。。。。。。。<br>——贤心</div>'
                    }, {
                        'title': 'TAB2',
                        'content': '<div>TAB2该说些啥</div>'
                    }, {
                        'title': 'TAB3',
                        'content': '<div>有一种坚持叫：layer</div>'
                    }]
                });
                break;
            case 0x10:
                _0x5e8e52.getJSON('/public/data/examples/components/layer-photos.json', function (_0x447b89) {
                    parent['layer']['photos']({
                        'photos': _0x447b89
                    });
                });
                break;
            default:
                parent.layer['msg']('Hi!');
                break;
        }
    });
    _0x5e8e52('.advanced .btn')['on']('click', function () {
        switch (_0x5e8e52(this)['index']('.advanced button')) {
            case 0x0:
                parent['layer']['alert']('见到你真的很高兴', {
                    'icon': 0x6
                });
                break;
            case 0x1:
                parent['layer'].msg('你确定你很帅么？', {
                    'time': 0x0,
                    'btn': ['必须啊', '丑到爆'],
                    'yes': function (_0x3bc125) {
                        parent.layer['close'](_0x3bc125);
                        parent['layer'].msg('雅蠛蝶 O.o', {
                            'icon': 0x6,
                            'time': 0x0,
                            'btn': ['嗷', '嗷', '嗷']
                        });
                    }
                });
                break;
            case 0x2:
                parent.layer.msg('这是最常用的吧');
                break;
            case 0x3:
                parent.layer.msg('不开心。。', {
                    'icon': 0x5
                });
                break;
            case 0x4:
                parent['layer']['msg']('玩命卖萌中', function () { });
                break;
            case 0x5:
                parent.layer['open']({
                    'type': 0x1,
                    'title': ![],
                    'closeBtn': 0x0,
                    'shadeClose': !![],
                    'skin': 'yourclass',
                    'content': '自定义HTML内容'
                });
                break;
            case 0x6:
                parent.layer.open({
                    'type': 0x1,
                    'title': ![],
                    'area': ['600px', '338px'],
                    'skin': 'layui-layer-nobg',
                    'shade': 0x0,
                    'content': _0x5e8e52('#city')
                });
                break;
            case 0x7:
                parent.layer.open({
                    'type': 0x2,
                    'area': ['700px', '450px'],
                    'fixed': ![],
                    'shade': 0x0,
                    'maxmin': !![],
                    'content': _0x5e8e52.ctx + '/components/advanced/_layer-iframe'
                });
                break;
            case 0x8:
                parent.layer.open({
                    'type': 0x2,
                    'title': ![],
                    'area': ['630px', '360px'],
                    'shade': 0.8,
                    'closeBtn': 0x0,
                    'shadeClose': !![],
                    'content': '//player.youku.com/embed/XMjY3MzgzODg0'
                });
                parent['layer']['msg']('点击任意处关闭');
                break;
            case 0x9:
                parent.layer.open({
                    'type': 0x2,
                    'area': ['360px', '500px'],
                    'skin': 'layui-layer-rim',
                    'content': ['//layer.layui.com/mobile/', 'no']
                });
                break;
            case 0xa:
                parent.layer.load();
                setTimeout(function () {
                    parent.layer['closeAll']('loading');
                }, 0x7d0);
                break;
            case 0xb:
                parent.layer['load'](0x1);
                setTimeout(function () {
                    parent.layer.closeAll('loading');
                }, 0x7d0);
                break;
            case 0xc:
                parent.layer.load(0x2);
                setTimeout(function () {
                    parent.layer.closeAll('loading');
                }, 0x7d0);
                break;
            case 0xd:
                parent.layer.msg('加载中', {
                    'icon': 0x10,
                    'shade': 0.01
                });
                break;
            case 0xe:
                parent.layer.msg('尼玛，打个酱油', {
                    'icon': 0x4
                });
                break;
            case 0xf:
                layer.tips('上', this, {
                    'tips': [0x1, '#000']
                });
                break;
            case 0x10:
                layer['tips']('默认就是向右的', this);
                break;
            case 0x11:
                layer.tips('下', this, {
                    'tips': 0x3
                });
                break;
            case 0x12:
                layer.tips('在很久很久以前，在很久很久以前，在很久很久以前……', this, {
                    'tips': [0x4, '#78BA32']
                });
                break;
            case 0x13:
                layer.tips('不会销毁之前的', this, {
                    'tipsMore': !![]
                });
                break;
            case 0x14:
                parent.layer.prompt(function (_0x4a2ef3, _0x47a8da) {
                    parent.layer.msg('得到了' + _0x4a2ef3);
                    parent.layer.close(_0x47a8da);
                });
                break;
            case 0x15:
                parent.layer.open({
                    'content': '浏览器滚动条已锁',
                    'scrollbar': ![]
                });
                break;
            case 0x16:
                var _0x5960c4 = parent['layer']['open']({
                    'type': 0x2,
                    'content': '//layim.layui.com',
                    'area': ['320px', '195px'],
                    'maxmin': !![]
                });
                parent['layer'].full(_0x5960c4);
                break;
            case 0x17:
                parent.layer.msg('灵活运用offset', {
                    'offset': 't',
                    'anim': 0x6
                });
                break;
            default:
                parent['layer'].msg('Hi!');
                break;
        }
    });
    var _0x2b9507 = {
        'multiple': function (_0x132cd5) {
            parent['layer'].open({
                'type': 0x2,
                'title': '当你选择该窗体时，即会在最顶端',
                'area': ['390px', '330px'],
                'shade': 0x0,
                'offset': [Math.random() * (_0x5e8e52(_0x4b3aed).height() - 0x12c), Math.random() * (_0x5e8e52(_0x4b3aed).width() - 0x186)],
                'maxmin': !![],
                'content': '//layer.layui.com/test/settop.html',
                'btn': ['继续弹出', '全部关闭'],
                'yes': function () {
                    _0x5e8e52(_0x132cd5).trigger('click');
                }, 'btn2': function () {
                    parent['layer'].closeAll();
                }, 'zIndex': parent.layer.zIndex,
                'success': function (_0x55d4df) {
                    parent.layer.setTop(_0x55d4df);
                }
            });
        }, 'confirmTm': function () {
            parent.layer.closeAll();
            parent.layer.msg('大部分参数都是可以公用的<br>合理搭配，展示不一样的风格', {
                'time': 0x4e20,
                'btn': ['明白了', '知道了', '哦']
            });
        }, 'notice': function () {
            parent.layer.open({
                'type': 0x1,
                'title': ![],
                'closeBtn': ![],
                'area': '300px;',
                'shade': 0.8,
                'id': 'LAY_layuipro',
                'resize': ![],
                'content': '<div style="margin: -20px;padding: 50px; background-color: #393D49; color: #e2e2e2;">你知道吗？亲！<br>layer ≠ layui<br><br>layer只是作为Layui的一个弹层模块，由于其用户基数较大，所以常常会有人以为layui是layerui<br><br>layer虽然已被 Layui 收编为内置的弹层模块，但仍然会作为一个独立组件全力维护、升级。<br><br>我们此后的征途是星辰大海 ^_^</div>',
                'btn': ['火速围观', '残忍拒绝'],
                'btnAlign': 'c',
                'moveType': 0x1,
                'success': function (_0x169ed6) {
                    var _0x22b598 = _0x169ed6.find('.layui-layer-btn');
                    _0x22b598.find('.layui-layer-btn0').attr({
                        'href': 'http://www.layui.com/',
                        'target': '_blank'
                    });
                }
            });
        }, 'offset': function (_0x1f5625) {
            var _0x514a2d = _0x1f5625.data('type'),
                _0x5d5d3b = _0x1f5625['text']();
            parent.layer.open({
                'type': 0x1,
                'offset': _0x514a2d,
                'id': 'LAY_demo' + _0x514a2d,
                'content': '<div style="padding: 20px 100px">' + _0x5d5d3b + '</div>',
                'btn': '关闭全部',
                'btnAlign': 'c',
                'shade': 0x0,
                'yes': function () {
                    parent.layer['closeAll']();
                }
            });
        }
    };
    _0x5e8e52('.more > .btn')['on']('click', function () {
        var _0x34565e = _0x5e8e52(this),
            _0x3c4118 = _0x34565e.attr('method');
        _0x2b9507[_0x3c4118].call(this, _0x34565e);
    });
}(window, document, jQuery));