(function(){
    'use strict';

    angular.module('flickr_photo', ['ngRoute'])
        .config(function ($routeProvider) {
            $routeProvider.when('/', {
                controller: 'HomeController',
                templateUrl: 'views/home.html'
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
        .controller('representation_section_controller', ['$scope', function ($scope) {
            $scope.me = 'Aled';
            $scope.list = [
                'Sheep',
                'Goats',
                'Bananas'
            ]
        }]);
})();