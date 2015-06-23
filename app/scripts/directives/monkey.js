/**
 * Created by Maksym on 6/21/2015.
 */
    "use strict";

    var rozetkaApp = angular.module('rozetkaApp', []);
    rozetkaApp.directive('monKeys', function() {
                return {
                    restrict: 'E',
                    templateUrl: '../../views/monkeys.html',
                    replace: false,
                    scope: {},
                    link: function (scope, element) {
                        scope.monkeys = [
                            {"id": 1, "name": "CAPUCHIN MONKEY"},
                            {"id": 2, "name": "BABOON"},
                            {"id": 3, "name": "BLUE MONKEY"},
                            {"id": 4, "name" : "COMMON MARMOSET"},
                            {"id": 5, "name":"SQUIRREL MONKEY"}
                        ]
                    }
                }
            }
    );

