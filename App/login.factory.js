(function(){
    'use strict';

    angular
        .module('app')
        .factory('UserFactory', UserFactory)

    UserFactory.$inject = ['$http'];

    function UserFactory($http) {
        var service = {
            login: login,
            signup: signup
        };

        return service;

        function getData() { }
    }
})();