(function (_0xb8e03c, _0x56b6ec, _0x54b48a) {

    var _0x23f38a = [{
        'text': 'assets',
        'href': '#assets',
        'state': {
            'expanded': ![]
        },
        'nodes': [{
            'text': 'css',
            'href': '#css',
            'nodes': [{
                'text': 'bootstrap.css',
                'href': '#bootstrap.css',
                'icon': 'fa\x20fa-file-code-o'
            }, {
                'text': 'site.css',
                'href': '#site.css',
                'icon': 'fa fa-file-code-o'
            }]
        }, {
            'text': 'fonts',
            'href': '#fonts',
            'nodes': [{
                'text': 'font-awesome',
                'href': '#font-awesome'
            }, {
                'text': 'web-icons',
                'href': '#web-icons'
            }]
        }, {
            'text': 'images',
            'href': '#images',
            'nodes': [{
                'text': 'logo.png',
                'href': '#logo.png',
                'icon': 'fa\x20fa-file-photo-o'
            }, {
                'text': 'bg.png',
                'href': '#bg.png',
                'icon': 'fa fa-file-photo-o'
            }]
        }]
    }, {
        'text': 'grunt',
        'href': '#grunt',
        'state': {
            'expanded': ![]
        },
        'nodes': [{
            'text': 'autoprefixer.js',
            'href': '#autoprefixer.js',
            'icon': 'fa fa-file-code-o'
        }, {
            'text': 'clean.js',
            'href': '#clean.js',
            'icon': 'fa fa-file-code-o'
        }, {
            'text': 'concat.js',
            'href': '#concat.js',
            'icon': 'fa fa-file-code-o'
        }, {
            'text': 'csscomb.js',
            'href': '#csscomb.js',
            'icon': 'fa fa-file-code-o'
        }, {
            'text': 'cssmin.js',
            'href': '#cssmin.js',
            'icon': 'fa fa-file-code-o'
        }, {
            'text': 'less.js',
            'href': '#less.js',
            'icon': 'fa fa-file-code-o'
        }, {
            'text': 'uglify.js',
            'href': '#uglify.js',
            'icon': 'fa fa-file-code-o'
        }]
    }, {
        'text': 'html',
        'href': '#html',
        'state': {
            'expanded': !![]
        },
        'nodes': [{
            'text': 'blog.html',
            'href': '#blog.html',
            'icon': 'fa\x20fa-file-code-o'
        }, {
            'text': 'docs.html',
            'href': '#docs.html',
            'icon': 'fa fa-file-code-o'
        }, {
            'text': 'index.html',
            'href': '#index.html',
            'state': {
                'selected': !![]
            },
            'icon': 'fa fa-file-code-o'
        }]
    }, {
        'text': 'media',
        'href': '#media',
        'state': {
            'expanded': ![]
        },
        'nodes': [{
            'text': 'audio.mp3',
            'href': '#audio.mp3',
            'icon': 'fa fa-file-audio-o'
        }, {
            'text': 'video.mp4',
            'href': '#video.mp4',
            'icon': 'fa fa-file-video-o'
        }]
    }, {
        'text': 'Gruntfile.js',
        'href': '#Gruntfile.js',
        'icon': 'fa fa-file-code-o'
    }, {
        'text': 'bower.json',
        'href': '#bower.json',
        'icon': 'fa\x20fa-file-code-o'
    }, {
        'text': 'README.pdf',
        'href': '#README.pdf',
        'icon': 'fa\x20fa-file-pdf-o'
    }, {
        'text': 'package.json',
        'href': '#package.json',
        'icon': 'fa fa-file-code-o'
    }];
    var _0x327eb6 = _0x54b48a['extend']({}, {
        'injectStyle': ![],
        'expandIcon': 'icon wb-plus',
        'collapseIcon': 'icon wb-minus',
        'emptyIcon': 'icon',
        'nodeIcon': 'icon wb-folder',
        'showBorder': ![],
        'levels': 0x1,
        'color': ![],
        'backColor': ![],
        'borderColor': ![],
        'onhoverColor': ![],
        'selectedColor': ![],
        'selectedBackColor': ![],
        'searchResultColor': ![],
        'searchResultBackColor': ![],
        'data': _0x23f38a,
        'highlightSelected': !![]
    });
    _0x54b48a('#filesTree').treeview(_0x327eb6);
    CodeMirror['fromTextArea'](_0xb8e03c.getElementById('code'), {
        'lineNumbers': !0x0,
        'theme': 'eclipse',
        'mode': 'text/html',
        'scrollbarStyle': 'simple'
    });
    _0x54b48a('#filesTree').contextmenu({
        'target': '#filesContextMenu'
    });
}(document, window, jQuery));