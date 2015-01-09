var myApp = angular.module('myApp', []);

myApp.factory('Data', function () {
    return {message: "I'm data from a service"}
})
.controller('FirstCtrl', function($scope, Data) {
    $scope.data = Data;
})
.controller('SecondCtrl', function($scope, Data) {
    $scope.data = Data;

    $scope.reversedMessage = function(message) {
        return message.split("").reverse().join("");
    }
})
;
