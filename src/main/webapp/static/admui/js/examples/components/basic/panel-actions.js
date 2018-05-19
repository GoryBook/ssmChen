(function (_0x521786, _0x692730, _0x3e7501) {

    var _0x374e94 = _0x3e7501('#examplePanel'),
        _0x5317d0 = _0x374e94.data('panel-api');
    _0x3e7501(_0x521786)['on']('click', '#exampleTogglFullscreene', function () {
        _0x5317d0['toggleFullscreen']();
    });
    _0x3e7501(_0x521786)['on']('click', '#exampleEnterFullscreen', function () {
        _0x5317d0.enterFullscreen();
    });
    _0x3e7501(_0x521786)['on']('click', '#exampleLeaveFullscreen', function () {
        _0x5317d0.leaveFullscreen();
    });
    _0x3e7501(_0x521786)['on']('click', '#exampleToggleContent', function () {
        _0x5317d0['toggleContent']();
    });
    _0x3e7501(_0x521786)['on']('click', '#exampleShowContent', function () {
        _0x5317d0['showContent']();
    });
    _0x3e7501(_0x521786)['on']('click', '#exampleHideContent', function () {
        _0x5317d0.hideContent();
    });
    _0x3e7501(_0x521786)['on']('click', '#exampleToggle', function () {
        _0x5317d0.toggle();
    });
    _0x3e7501(_0x521786)['on']('click', '#exampleOpen', function () {
        _0x5317d0.open();
    });
    _0x3e7501(_0x521786)['on']('click', '#exampleClose', function () {
        _0x5317d0.close();
    });
    var _0x315ca9 = ![];
    _0x3e7501(_0x521786)['on']('click', '#exampleReplace', function () {
        _0x5317d0.load(function (_0x18ad35) {
            var _0x265f6b = _0x3e7501(this);
            var _0x61c724;
            if (_0x315ca9) {
                _0x61c724 = '印度首富穆克什·安巴尼创立的新公司“Reliance Jio”投入运营。从9月5日起，将向全印度数亿人民提供高速廉价的4G网络服务。该公司的4G网络已经覆盖全印度80%的地区。在试运营期间，Jio将向全印度人免费提供服务，直到今年年底。在免费期过后，其数据流量月资费也低至每月149卢比（约合15元人民币）。安巴尼上周在公司年度全体大会上对投资者说：“任何、所有能实现数字化的东西都将快速走向数字化，生活将走向数字化。”目前，只有五分之一的印度成年人口能够上网。在印度，公共WiFi热点极少。城市贫困区缺乏高速宽带所需的基础设备，更不用说乡村地区了。';
                _0x315ca9 = ![];
            } else {
                _0x61c724 = '上海洛克公园日前宣布获得华人文化产业基金B轮4000万元投资，此前曾获得荣正投资、青松基金投资的数千万天使轮融资。洛克公园创始人戴富祺以美国纽约的街篮圣殿洛克公园为蓝本，打造属于中国的富有接头文化的篮球馆，戴富祺曾透露，洛克公园的目标是在2020年，达到全国50家店，会员达到50万，并启动上市计划。';
                _0x315ca9 = !![];
            }
            _0x265f6b.find('.panel-body').html(_0x61c724);
            _0x18ad35();
        });
    });
    _0x3e7501(_0x521786)['on']('click', '#exampleLoad', function () {
        _0x5317d0.load();
    });
    _0x3e7501(_0x521786)['on']('click', '#exampleDone', function () {
        _0x5317d0.done();
    });
}(document, window, jQuery));