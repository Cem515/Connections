(function () {
    'use strict';

    var app = angular.module('app', ['oitozero.ngSweetAlert', 'LocalStorageModule', 'angular-filepicker']).value('localApi', 'http://localhost:61066/api/');
    app.config(function ( filepickerProvider) {

      filepickerProvider.setKey('');

    })
})();