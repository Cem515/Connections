(function(){
    'use strict';

    angular
        .module('app')
        .factory('MessageFactory', MessageFactory)

    MessageFactory.$inject = ['$http','localApi'];

    function MessageFactory($http, localApi) {
        var service = {
           login: login,
           sendMsg: sendMsg
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
    }
})();