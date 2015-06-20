/**
 * Created by Maksym on 6/20/2015.
 */

    var rozetkaStore = angular.module('rozetkaStore', []);

    rozetkaStore.controller('CarListCtrl', function ($scope, $http) {
        $http.get('carsData/cars.json').success(function(data) {
            $scope.cars = data;
        });
        $scope.orderProp = 'age';


        /*$scope.cars = [
            {'name': '2016 Acura ILX',
                'description': 'The 2016 Acura ILX has a sportier focus than other entry-luxury sedans, without sacrificing comfort and refinement.',
                    'age': 0},
            {'name': '2015 Alfa Romeo 4C',
                'description': 'The 2015 Alfa Romeo 4C is a dazzling sports-car reincarnation of a heady past, and a future classic in its own right.',
                    'age': 1},
            {'name': '2014 Aston Martin DB9™',
                'description': 'The 2015 Aston Martin DB9 is coming soon. You can sign up to receive email updates any time we learn anything new on the Aston Martin DB9.',
                    'age':2}
        ];*/

    });