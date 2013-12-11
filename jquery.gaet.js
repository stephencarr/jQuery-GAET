(function($) {
  "use strict";
  $.fn.gaet = function(options) {

    var settings = {
      asynchronous: true,
      prefix: '',
      eventType: 'click'
    };

    options = options || {};

    if (options) {
      $.extend(settings, options);
    }

    return this.each(function() {

      var $this = $(this);

      var category = $this.data('category'),
        action = $this.data('action'),
        opt_label = $this.data('label'),
        opt_value = $this.data('value'),
        opt_noninteraction = $this.data('noninteraction');

      $this.on(settings.eventType, function() {

        if (settings.asynchronous) {

          _gaq.push([settings.prefix + '_trackEvent', category, action, opt_label, opt_value, opt_noninteraction]);

        } else {

          ga('send', 'event', category, action);

        }

      });

    });

  };

})(jQuery);