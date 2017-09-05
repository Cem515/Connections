(function () {
    'use strict';

    var app = angular.module('app', ['LocalStorageModule']).value('localApi', 'http://localhost:61066/api/');
    app.config(function () {
    })
})();