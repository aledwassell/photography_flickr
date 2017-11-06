(function(){
    'use strict';

    angular.module('flickr_photo', ['ngRoute'])
        .config(function ($routeProvider) {
            $routeProvider.when('/', {
                controller: 'HomeController',
                templateUrl: 'views/home.html'
            })
        })
        .controller('representation_section_controller', ['$scope', function ($scope) {
            $scope.me = 'Aled';
            $scope.list = [
                'Sheep',
                'Goats',
                'Bananas'
            ]
        }]);
})();