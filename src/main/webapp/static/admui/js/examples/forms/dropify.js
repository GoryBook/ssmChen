(function (_0xf7c352, _0x331f0a, _0x507547) {

    var _0x136130 = _0x507547('#exampleUploadForm');
    _0x136130.fileupload({
        'url': _0x507547.ctx + '../../server/fileupload/',
        'dropzone': _0x136130,
        'filesContainer': _0x507547('.file-list'),
        'uploadTemplateId': ![],
        'downloadTemplateId': ![],
        'uploadTemplate': tmpl('{% for (var i=0, file; file=o.files[i]; i++) { %}' + '<div class="file template-upload fade col-lg-2 col-md-4 col-sm-6 {%=file.type.search("image") !== -1? "image" : "other-file"%}">' + '<div class="file-item">' + '<div class="preview vertical-align">' + '<div class="file-action-wrap">' + '<div class="file-action">' + '{% if (!i && !o.options.autoUpload) { %}' + '<i class="icon wb-upload start" data-toggle="tooltip" data-original-title="Upload file" aria-hidden="true"></i>' + '{% } %}' + '{% if (!i) { %}' + '<i class="icon wb-close cancel" data-toggle="tooltip" data-original-title="Stop upload file" aria-hidden="true"></i>' + '{% } %}' + '</div>' + '</div>' + '</div>' + '<div class="info-wrap">' + '<div class="title">{%=file.name%}</div>' + '</div>' + '<div class="progress progress-striped active" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0" role="progressbar">' + '<div class="progress-bar progress-bar-success" style="width:0%;"></div>' + '</div>' + '</div>' + '</div>' + '{% } %}'),
        'downloadTemplate': tmpl('{% for (var i=0, file; file=o.files[i]; i++) { %}' + '<div class="file template-download fade col-lg-2 col-md-4 col-sm-6 {%=file.type.search("image") !== -1? "image" : "other-file"%}">' + '<div class="file-item">' + '<div class="preview vertical-align">' + '<div class="file-action-wrap">' + '<div class="file-action">' + '<i class="icon wb-trash delete" data-toggle="tooltip" data-original-title="Delete files" aria-hidden="true"></i>' + '</div>' + '</div>' + '<img src="{%=file.url%}"/>' + '</div>' + '<div class="info-wrap">' + '<div class="title">{%=file.name%}</div>' + '</div>' + '</div>' + '</div>' + '{% } %}'),
        'forceResize': !![],
        'previewCanvas': ![],
        'previewMaxWidth': ![],
        'previewMaxHeight': ![],
        'previewThumbnail': ![]
    })['on']('fileuploadprocessalways', function (_0x34e41a, _0xb993a1) {
        var _0x237947 = _0xb993a1.files.length;
        for (var _0x595515 = 0x0; _0x595515 < _0x237947; _0x595515++) {
            if (!_0xb993a1.files[_0x595515].type.match(/^image\/(gif|jpeg|png|svg\+xml)$/)) {
                _0xb993a1.files[_0x595515]['filetype'] = 'other-file';
            } else {
                _0xb993a1.files[_0x595515]['filetype'] = 'image';
            }
        }
    })['on']('fileuploadadded', function (_0x8d406e) {
        var _0x5c55ca = _0x507547(_0x8d406e['target']);
        if (_0x5c55ca.find('.file')['length'] > 0x0) {
            _0x5c55ca.addClass('has-file');
        } else {
            _0x5c55ca['removeClass']('has-file');
        }
    })['on']('fileuploadfinished', function (_0x338636) {
        var _0x561cd2 = _0x507547(_0x338636.target);
        if (_0x561cd2.find('.file')['length'] > 0x0) {
            _0x561cd2.addClass('has-file');
        } else {
            _0x561cd2.removeClass('has-file');
        }
    })['on']('fileuploaddestroyed', function (_0x2cc2eb) {
        var _0x3cd928 = _0x507547(_0x2cc2eb.target);
        if (_0x3cd928['find']('.file')['length'] > 0x0) {
            _0x3cd928['addClass']('has-file');
        } else {
            _0x3cd928.removeClass('has-file');
        }
    })['on']('click', function (_0xb5bc06) {
        if (_0x507547(_0xb5bc06.target).parents('.file').length === 0x0) {
            _0x507547('#inputUpload').trigger('click');
        }
    });
    _0x507547(_0xf7c352).bind('dragover', function (_0xef9ec2) {
        var _0x5cad11 = _0x136130,
            _0x2c75c2 = _0x331f0a.dropZoneTimeout;
        if (!_0x2c75c2) {
            _0x5cad11.addClass('in');
        } else {
            clearTimeout(_0x2c75c2);
        }
        var _0x2b3418 = ![],
            _0x444366 = _0xef9ec2.target;
        do {
            if (_0x444366 === _0x5cad11[0x0]) {
                _0x2b3418 = !![];
                break;
            }
            _0x444366 = _0x444366.parentNode;
        } while (_0x444366 !== null);
        if (_0x2b3418) {
            _0x5cad11.addClass('hover');
        } else {
            _0x5cad11.removeClass('hover');
        }
        _0x331f0a.dropZoneTimeout = setTimeout(function () {
            _0x331f0a.dropZoneTimeout = null;
            _0x5cad11.removeClass('in hover');
        }, 0x64);
    });
    _0x507547('#inputUpload')['on']('click', function (_0x379d60) {
        _0x379d60['stopPropagation']();
    });
    _0x507547('#uploadlink')['on']('click', function (_0x3e58fa) {
        _0x3e58fa.stopPropagation();
    });
}(document, window, jQuery));