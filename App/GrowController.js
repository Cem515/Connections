(function(){
    'use strict';

    angular
        .module('app')
        .controller('MessageController', MessageController)

    MessageController.$inject = ['$location','MessageFactory'];

    function GrowController($location, MessageFactory) {
        /* jshint validthis:true */
        var GrowCtrl = this;
        
        GrowCtrl.CredObject.username = "";
        GrowCtrl.CredObject.password = "";
        GrowCtrl.CredObject.email="";
        GrowCtrl.CredObject ={};
        GrowCtrl.user= true;
        GrowCtrl.Register= !MsgCtrl.user;



        GrowCtrl.login = function(creds) {
            if(GrowCtrl.user = true){
                GrowFactory
            .login(creds)
            .then(function(rec) {

            }, function(error){
                SweetAlert.swal("Error");
            })
        } else {
            GrowFactory
            .login(creds)
            .then(function(rec) {

            }, function(error){
                SweetAlert.swal("Error");
            })
        }
        }
    }
})();