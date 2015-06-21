/**
 * Created by Maksym on 6/20/2015.
 */

    var rozetkaControllers = angular.module('rozetkaControllers', []);

    rozetkaControllers.controller('CarListCtrl', ['$scope', '$http',
        function($scope, $http) {
        $http.get('../data/cars.json').success(function(data) {
            $scope.cars = data;
        });
        $scope.orderProp = 'age';

        }]);

    rozetkaControllers.controller('CarDetailCtrl', ['$scope', '$routeParams', '$http',
            function($scope, $routeParams, $http) {
                $http.get('../data/' + $routeParams.carId + '.json').success(function(data) {
                    $scope.car = data;
                });
        }]);
