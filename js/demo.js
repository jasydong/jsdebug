/**
 * This file is for demo purposes only.
 */

/*@ sourceURL=demo.js*/

(function ($) {

    //"use strict";

    var methods = get_jquery_methods();
    console.log(methods);

    function get_jquery_methods() {
        var methods = [];
        for (m in $.fn) {
            methods.push(m);
        }

        return methods;
    }

})(jQuery);
