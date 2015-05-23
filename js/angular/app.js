'use strict'

angular.module('myApp', ['ngRoute','myApp.controllers'])
        .config(
            ['$routeProvider',
                function($routeProvider){
                    $routeProvider
                            .when('/dashboard/',{
                                templateUrl: 'templates/dashboard.html',
                                controller: 'DashboardCtrl'
                            })
                            .when('/clientes/',{
                                templateUrl: 'templates/clientes.html'
                            })
                            .when('/menus/',{
                                templateUrl: 'templates/menus.html'
                            })
                            
                            
                            
                            
                            
                            
                            
                            .when('/cafe/',{
                                templateUrl: 'templates/cafe.html'
                            })
                }
            ]
        );