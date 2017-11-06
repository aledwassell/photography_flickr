(function(){
    'use strict';

    angular.module('flickr_photo', ['ngRoute'])
        .config(function ($routeProvider) {

            $routeProvider

                .when('/', {
                    controller: 'homeController',
                    templateUrl: 'views/home.html'
                })
                .when('/about', {
                    controller: 'aboutController',
                    templateUrl: 'views/about.html'
                })
        })
        .service('server_connector', ['$http', function($http){
            $http.get('/api')
                .success(function (res) {
                    return res;
                })
                .error(function(data, err){
                    console.log(data, err)
                })
        }])
        .controller('homeController', ['$scope', function ($scope) {
            $scope.me = 'Aled';
            $scope.list = [
                'Sheep',
                'Goats',
                'Bananas'
            ]
        }])
        .controller('aboutController', ['$scope', function ($scope) {
            $scope.me = 'Aled';
            $scope.list = [
                'Sheep',
                'Goats',
                'Bananas'
            ]
    }]);
})();