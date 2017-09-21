(function(){
    'use strict';

    angular
        .module('app')
        .factory('GrowFactory', GrowFactory)

        GrowFactory.$inject = ['$http','localApi'];

    function GrowFactory($http, localApi) {
        var service = {
           login: login,
           register:register,
        };

        return service;

         function register(creds) {

            return $http({
             method:'POST',
             url:localApi
            }).then(function(response){
                return response
            }, function(error){
                return error;
            })
         }

         function login(creds) {
            
                        return $http({
                         method:'GET',
                         url:localApi
                        }).then(function(response){
                            return response
                        }, function(error){
                            return error;
                        })
                     }
    }
})();