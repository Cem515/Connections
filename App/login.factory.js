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

        function login(creds) {
            
                       return $http({
                           method: 'GET',
                           url:localApi+''+creds
                       }).then(function(response){
                           return response
                       }, function (error){
                           return error;
                       })
                    }

        function getData() {
            return $http({
                method: 'GET',
                url:localApi+''+creds
            }).then(function(response){
                return response
            }, function (error){
                return error;
            })
         }
         }
    }
})();