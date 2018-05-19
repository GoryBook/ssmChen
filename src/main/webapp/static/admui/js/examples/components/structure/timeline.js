(function (_0x4ea22a, _0x18539a, _0x3a9631) {
    _0x3a9631('.timeline-item').appear();
    _0x3a9631('.timeline-item').not(':appeared').each(function () {
        var _0x358c82 = _0x3a9631(this);
        _0x358c82.addClass('timeline-invisible');
        _0x358c82.find('.timeline-dot').addClass('invisible');
        _0x358c82.find('.timeline-info').addClass('invisible');
        _0x358c82.find('.timeline-content').addClass('invisible');
    });
    _0x3a9631(_0x4ea22a).on('appear', '.timeline-item.timeline-invisible', function () {
        var _0x4525e7 = _0x3a9631(this);
        _0x4525e7.removeClass('timeline-invisible');
        _0x4525e7.find('.timeline-dot').removeClass('invisible').addClass('animation-scale-up');
        if (_0x4525e7.hasClass('timeline-reverse') || _0x4525e7.css('float') === 'none') {
            _0x4525e7.find('.timeline-info').removeClass('invisible').addClass('animation-slide-right');
            _0x4525e7.find('.timeline-content').removeClass('invisible').addClass('animation-slide-right');
        } else {
            _0x4525e7.find('.timeline-info').removeClass('invisible').addClass('animation-slide-left');
            _0x4525e7.find('.timeline-content').removeClass('invisible').addClass('animation-slide-left');
        }
    });
}(document, window, jQuery));