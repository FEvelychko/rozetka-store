/**
 * Created by Maksym on 6/20/2015.
 */

    var rozetkaApp = angular.module('rozetkaApp', [
        'ngRoute',
        'rozetkaControllers'
    ]);

    rozetkaApp.config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.
                when('/cars', {
                    templateUrl: 'views/car-list.html',
                    controller: 'CarListCtrl',
                    directive: 'monKeys'
                }).
                when('/cars/:carId', {
                    templateUrl: 'views/car-detail.html',
                    controller: 'CarDetailCtrl'
                }).
                otherwise({
                    redirectTo: '/cars'
                });
        }]);