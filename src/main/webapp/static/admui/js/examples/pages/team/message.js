$(function (_0x4a3682, _0xd64a1a, $) {
    App.extend({
        'scrollChatsToBottom': function () {
            var _0x432180 = $('.page-message-chats');
            var _0x991246 = _0x432180.height();
            var _0x57b080 = $('.chats', _0x432180).outerHeight();
            var _0x2cc193 = $('#historyBtn').outerHeight();
            _0x432180.scrollTop(_0x57b080 + _0x2cc193 - _0x991246);
        }, 'handleResize': function () {
            var _0x56465b = this;
            $(document).on('resize', function () {
                _0x56465b.scrollChatsToBottom();
            });
        }, 'handleTalking': function () {
            var _0xf81284 = this;
            var _0x307b3e = $('.page-message-chats');
            var _0xfeb75b = $('.page-message-input');
            autosize($('.message-input textarea'));
            $(window).on('autosize:resized', '.message-input textarea', function () {
                var _0x4cfe67 = _0xfeb75b.outerHeight();
                _0x307b3e.css('height', 'calc(100% - ' + _0x4cfe67 + 'px)');
                _0xf81284.scrollChatsToBottom();
            });
            $(window).on('click', '.message-input-btn>button', function () {
                var _0x239b12 = $('.message-input>.form-control').val();
                var _0x44dcfd = $('<div class="chat- content">' + '<p>' + _0x239b12 + '</p>' + '</div>');
                if (_0x239b12.length > 0x0) {
                    $('.chat').last().find('.chat-body').append(_0x44dcfd);
                    $('.message-input>.form-control').attr('placeholder', '');
                    $('.message-input>.form-control').val('');
                } else {
                    $('.message-input>.form-control').attr('placeholder', 'type text here...');
                }
                $('.message-input>.form-control').focus();
                _0xf81284.scrollChatsToBottom();
            });
        }, 'run': function (_0x105080) {
            this.scrollChatsToBottom();
            this.handleResize();
            this.handleTalking();
            _0x105080();
        }
    });
    App.run();
});