var Controller_Home = {

    init: function () {
        this.homeMenu();
    },

    homeMenu: function () {
        var self = this;
        arrayElement = $('.js-home-menu').children();
        arrayElement.each(function ($i, el) {
            Default.click(el, function (el) {
                Controller_Home.viewModal(el);
            })
        });
        Default.click('.js-close-modal', function () {
            self.closeModal()
        })
    },

    viewModal: function (el, params) {
        $('.js-modal').empty();
        $('.js-modal').removeClass('hidden');
        Default.includeOne('.js-modal', 'modal/' + el.className.match('js-event-(.+)')[1]);
    },

    closeModal: function () {
        $('.js-modal').empty();
        $('.js-modal').addClass('hidden');
    }
};