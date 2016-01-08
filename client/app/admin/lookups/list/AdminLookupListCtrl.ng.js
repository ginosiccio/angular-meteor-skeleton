angular.module('angular-meteor-skeleton').controller('AdminLookupListCtrl', function ($scope, $meteor, CollectionService, AnimToasterNotificationService) {

    CollectionService.subscribe('all-departments').then(function(departments) {
        $scope.departments = departments;
    });

    $scope.removeDepartment = function(department){
        $scope.departments.remove(department).then(function(){
            AnimToasterNotificationService.addSuccessMessage("The department has been successfully deleted.");
        },function(error){
            AnimToasterNotificationService.addErrorMessage("Error : " + error.reason);
        });
    };


});

