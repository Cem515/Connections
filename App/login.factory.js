(function(){
    'use strict';

    angular
        .module('app')
        .factory('UserFactory', UserFactory)

    UserFactory.$inject = ['$http'];

    function UserFactory($http) {
        var service = {
            getData: getData
        };

        return service;

        function getData() { }
    }
})();