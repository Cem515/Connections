(function(){
    'use strict';

    angular
        .module('app')
        .controller('MessageController', MessageController)

    MessageController.$inject = ['$location','MessageFactory'];

    function MessageController($location, MessageFactory) {
        /* jshint validthis:true */
        var MsgCtrl = this;
        
        MsgCtrl.CredObject.username = "";
        MsgCtrl.CredObject.password = "";
        MsgCtrl.CredObject.email="";
        MsgCtrl.CredObject ={};
        MsgCtrl.user= true;
        MsgCtrl.Register= !MsgCtrl.user;



        MsgCtrl.login = function(creds) {
            if(MsgCtrl.user = true){
            MessageFactory
            .login(creds)
            .then(function(rec) {

            }, function(error){
                SweetAlert.swal("Error");
            })
        } else {
            MessageFactory
            .login(creds)
            .then(function(rec) {

            }, function(error){
                SweetAlert.swal("Error");
            })
        }
        }
    }
})();