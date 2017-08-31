(function(){
    'use strict';

    angular
        .module('app')
        .controller('MessageController', MessageController)

    MessageController.$inject = ['$location'];

    function MessageController($location) {
        /* jshint validthis:true */
        var vm = this;

        activate();

        function activate() { }
    }
})();