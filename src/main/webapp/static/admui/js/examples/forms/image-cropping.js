(function (_0x5b4cc6, _0x361323, _0x4de82e) {

    _0x4de82e('#simpleCropper img').cropper({
        'preview': '#simpleCropperPreview >.img-preview',
        'responsive': !![]
    });
    var _0x5c39ba = _0x4de82e('#exampleFullCropper img'),
        _0x50b486 = _0x4de82e('#inputDataX'),
        _0x57afcd = _0x4de82e('#inputDataY'),
        _0x2a0835 = _0x4de82e('#inputDataHeight'),
        _0x329fe0 = _0x4de82e('#inputDataWidth');
    _0x5c39ba['cropper']({
        'aspectRatio': 0x10 / 0x9,
        'preview': '#exampleFullCropperPreview > .img-preview',
        'responsive': !![],
        'crop': function () {
            var _0x3f98af = _0x4de82e(this).data('cropper');
            if (typeof _0x3f98af !== 'undefined') {
                _0x3f98af = _0x3f98af.getCropBoxData();
                _0x50b486.val(Math['round'](_0x3f98af['left']));
                _0x57afcd['val'](Math.round(_0x3f98af['top']));
                _0x2a0835.val(Math['round'](_0x3f98af.height));
                _0x329fe0.val(Math['round'](_0x3f98af.width));
            }
        }
    });
    _0x4de82e(_0x5b4cc6)['on']('click', '[data-cropper-method]', function () {
        var _0x2d6efb = _0x4de82e(this)['data'](),
            _0x2b3078 = _0x4de82e(this).data('cropper-method'),
            _0x383205;
        if (_0x2b3078) {
            _0x383205 = _0x5c39ba.cropper(_0x2b3078, _0x2d6efb['option']);
        }
        if (_0x2b3078 === 'getCroppedCanvas') {
            _0x4de82e('#getDataURLModal').modal();
            _0x4de82e('#getImageData').html(_0x383205);
        }
    });
    var _0x130586 = _0x4de82e('#inputImage');
    if (_0x361323.FileReader) {
        _0x130586.change(function () {
            var _0x28f44a = new FileReader(),
                _0x1e69e2 = this.files,
                _0x2d8004;
            if (!_0x1e69e2.length) {
                return;
            }
            _0x2d8004 = _0x1e69e2[0x0];
            if (/^image\/\w+$/.test(_0x2d8004['type'])) {
                _0x28f44a.readAsDataURL(_0x2d8004);
                _0x28f44a['onload'] = function () {
                    _0x5c39ba.cropper('reset', !![]).cropper('replace', this.result);
                    _0x130586['val']('');
                };
            } else {
                toastr.warnings('请选择图片文件');
            }
        });
    } else {
        _0x130586.addClass('hide');
    }
    _0x4de82e('#setCropperData').click(function () {
        var _0xf0350b = {
            'left': parseInt(_0x50b486.val()),
            'top': parseInt(_0x57afcd.val()),
            'width': parseInt(_0x329fe0.val()),
            'height': parseInt(_0x2a0835['val']())
        };
        _0x5c39ba.cropper('setCropBoxData', _0xf0350b);
    });
}(document, window, jQuery));