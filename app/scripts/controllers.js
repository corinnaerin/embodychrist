'use strict';

embodychristApp.controller('ContactCtrl', function($scope, $http) {
    $scope.subject = "Prayer Request"; //Default subject
    $scope.url = "contact.php";
    $scope.browserValidate = Modernizr.input.required;
    
    $scope.sendMessage = function() {
        var $form = jQuery('form');
        if (typeof $form.data('validator') === 'undefined' || $form.valid()) {
            $scope.response = "";
        
            var data = {
                name: $scope.name,
                email: $scope.email,
                subject: $scope.subject,
                message: $scope.message
            };
            
            $http.post($scope.url, data)
            .success(function(response) {
                $scope.response = response;
            })
            .error(function(response) {
                $scope.response = response || "An unknown error occurred.";
            });
       }
    };
});