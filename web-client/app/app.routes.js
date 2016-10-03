(function() {
    'use strict';

    angular
        .module('npm-gui')
        .config(['$routeProvider', '$locationProvider',
            function($routeProvider, $locationProvider, ListService) {
                $routeProvider
                    .when('/dependencies', {
                        templateUrl: 'app/modules/index.modules.html',
                        controller: 'ModulesController',
                        controllerAs: 'modules',
                        resolve: {
                            modules: ['ListService', function(ListService) {
                                return ListService.dependencies;
                            }]
                        }
                    })
                    .when('/dependencies-dev', {
                        templateUrl: 'app/modules/index.modules.html',
                        controller: 'ModulesController',
                        controllerAs: 'modules',
                        resolve: {
                            modules: ['ListService', function(ListService) {
                                return ListService.dependenciesDev;
                            }]
                        }
                    })
                    .when('/dependencies-global', {
                        templateUrl: 'app/modules/index.modules.html',
                        controller: 'ModulesController',
                        controllerAs: 'modules',
                        resolve: {
                            modules: ['ListService', function(ListService) {
                                return ListService.globalModules;
                            }]
                        }
                    })
                    .when('/tasks', {
                        templateUrl: 'app/tasks/index.tasks.html',
                        controller: 'TasksController',
                        controllerAs: 'tasks'
                    })
                    .when('/builder', {
                        templateUrl: 'app/builder/index.builder.html',
                        controller: 'BuilderController',
                        controllerAs: 'builder'
                    })
                    .otherwise('/dependencies');

                $locationProvider.html5Mode(false);
            }
        ]);

})();