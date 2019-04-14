var Default = {

    mobile: false,

    init: function () {
        this.isMobile();
        this.include();
    },

    click: function(el, callback, params = {}, parent = document) {
        var el = el;
        var params = params;
        var callback = callback;
        if (this.mobile) {
            $(el).on('click touch', callback(el, params));
            return;
        }
        $(el).on('click', function () {
            callback(el, params)
        });
    },

    isMobile: function() {
        if( navigator.userAgent.match(/Android/i)
            || navigator.userAgent.match(/webOS/i)
            || navigator.userAgent.match(/iPhone/i)
            || navigator.userAgent.match(/iPad/i)
            || navigator.userAgent.match(/iPod/i)
            || navigator.userAgent.match(/BlackBerry/i)
            || navigator.userAgent.match(/Windows Phone/i)
        ){
            this.mobile = true;
        }
        this.mobile = false;
    },

    include: function() {
        self = this
        $('[class ^= js-load-]').each(function (index, el) {
            self.includeOne(el, this.className.match('js-load-(.+) .+')[1]);
        });
    },
    includeOne: function($class, $page) {
        $($class).load('include/' + $page + '.html');
    },
};