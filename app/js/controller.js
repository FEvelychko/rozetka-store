/**
 * Created by Maksym on 6/20/2015.
 */

    var rozetkaApp = angular.module('rozetkaApp', []);

    rozetkaApp.controller('CarListCtrl', ['$scope', '$http',
        function($scope, $http) {
        $http.get('../data/cars.json').success(function(data) {
            $scope.cars = data;
        });
        $scope.orderProp = 'age';

        }]);

    rozetkaApp.controller('CarDetailCtrl', ['$scope', '$routeParams', '$http',
            function($scope, $routeParams, $http) {
                $http.get('../data/' + $routeParams.carId + '.json').success(function(data) {
                    $scope.car = data;
                });
        }
    ]);

    //rozetkaApp.directive('monKeys', function() {
    //        return {
    //            restrict: 'E',
    //            templateUrl: 'views/monkeys.html',
    //            replace: false,
    //            scope: {},
    //            link: function (scope) {
    //                scope.monkeys = [
    //                    {"id": 1, "name": "CAPUCHIN MONKEY"},
    //                    {"id": 2, "name": "BABOON"},
    //                    {"id": 3, "name": "BLUE MONKEY"},
    //                    {"id": 4, "name" : "COMMON MARMOSET"},
    //                    {"id": 5, "name":"SQUIRREL MONKEY"}
    //                ]
    //            }
    //        }
    //    }
    //);


