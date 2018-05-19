(function (_0xa8787a, _0x3bb648, _0x134c86) {

    _0x134c86('#exampleSingleItem').slick();
    _0x134c86('#exampleMultipleItems').slick({
        'infinite': !![],
        'slidesToShow': 0x3,
        'slidesToScroll': 0x3
    });
    _0x134c86('#exampleResponsive').slick({
        'dots': !![],
        'infinite': ![],
        'speed': 0x1f4,
        'slidesToShow': 0x4,
        'slidesToScroll': 0x4,
        'responsive': [{
            'breakpoint': 0x400,
            'settings': {
                'slidesToShow': 0x3,
                'slidesToScroll': 0x3,
                'infinite': !![],
                'dots': !![]
            }
        }, {
            'breakpoint': 0x258,
            'settings': {
                'slidesToShow': 0x2,
                'slidesToScroll': 0x2
            }
        }, {
            'breakpoint': 0x1e0,
            'settings': {
                'slidesToShow': 0x1,
                'slidesToScroll': 0x1
            }
        }]
    });
    _0x134c86('#exampleVariableWidth').slick({
        'dots': !![],
        'infinite': !![],
        'speed': 0x12c,
        'slidesToShow': 0x1,
        'centerMode': !![],
        'variableWidth': !![]
    });
    _0x134c86('#exampleAdaptiveHeight').slick({
        'dots': !![],
        'infinite': !![],
        'speed': 0x12c,
        'slidesToShow': 0x1,
        'adaptiveHeight': !![]
    });
    _0x134c86('#exampleData').slick();
    _0x134c86('#exampleCenter').slick({
        'centerMode': !![],
        'centerPadding': '60px',
        'slidesToShow': 0x3,
        'responsive': [{
            'breakpoint': 0x300,
            'settings': {
                'arrows': ![],
                'centerMode': !![],
                'centerPadding': '40px',
                'slidesToShow': 0x3
            }
        }, {
            'breakpoint': 0x1e0,
            'settings': {
                'arrows': ![],
                'centerMode': !![],
                'centerPadding': '40px',
                'slidesToShow': 0x1
            }
        }]
    });
    _0x134c86('#exampleLazy').slick({
        'lazyLoad': 'ondemand',
        'slidesToShow': 0x3,
        'slidesToScroll': 0x1
    });
    _0x134c86('#exampleAutoplay').slick({
        'dots': !![],
        'infinite': !![],
        'speed': 0x1f4,
        'slidesToShow': 0x3,
        'slidesToScroll': 0x1,
        'autoplay': !![],
        'autoplaySpeed': 0x7d0
    });
    _0x134c86('#exampleFade')['slick']({
        'dots': !![],
        'infinite': !![],
        'speed': 0x1f4,
        'fade': !![],
        'slide': 'div',
        'cssEase': 'linear'
    });
    var _0x52e906 = 0x1;
    _0x134c86('#exampleAddRemove').slick({
        'dots': !![],
        'slidesToShow': 0x3,
        'speed': 0x1f4,
        'slidesToScroll': 0x3
    });
    _0x134c86(_0xa8787a)['on']('click', '#exampleAddSlide', function () {
        _0x52e906++;
        _0x134c86('#exampleAddRemove').slick('slickAdd', '<div><h3>' + _0x52e906 + '</h3></div>');
    });
    _0x134c86(_0xa8787a)['on']('click', '#exampleRemoveSlide', function () {
        _0x134c86('#exampleAddRemove')['slick']('slickRemove', _0x52e906 - 0x1);
        if (_0x52e906 !== 0x0) {
            _0x52e906--;
        }
    });
    _0x134c86('#exampleFiltering')['slick']({
        'slidesToShow': 0x4,
        'slidesToScroll': 0x4
    });
    var _0x205e4b = ![];
    _0x134c86(_0xa8787a)['on']('click', '#exampleFilter', function () {
        if (_0x205e4b === ![]) {
            _0x134c86('#exampleFiltering')['slick']('slickFilter', ':even');
            _0x134c86(this).text('不过滤');
            _0x205e4b = !![];
        } else {
            _0x134c86('#exampleFiltering').slick('slickUnfilter');
            _0x134c86(this).text('过滤');
            _0x205e4b = ![];
        }
    });
}(document, window, jQuery));