(function(){
    'use strict';

    angular
        .module('app')
        .controller('MessageController', MessageController)

    MessageController.$inject = ['$location','MessageFactory'];

    function MessageController($location, MessageFactory) {
        /* jshint validthis:true */
        var MsgCtrl = this;
        MsgCtrl.CredObject.username = ""
        MsgCtrl.CredObject.password = ""
        MsgCtrl.CredObject ={}



        MsgCtrl.login = function(creds) {
            MessageFactory
            .login(creds)
            .then(function(rec) {

            }, function(error){
                SweetAlert.swal("Error");
            })
            
        }
    }
})();