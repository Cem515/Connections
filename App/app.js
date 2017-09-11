(function () {
    'use strict';

    var app = angular.module('app', ['LocalStorageModule']).value('localApi', 'http://localhost:27017/GrowGram/');
    app.config(function () {
    })
})();