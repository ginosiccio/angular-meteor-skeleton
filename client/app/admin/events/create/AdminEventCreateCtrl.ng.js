angular.module('angular-meteor-skeleton').controller('AdminEventCreateCtrl', function ($scope, $meteor, $stateParams, $state, CollectionService, AnimToasterNotificationService, SessionService) {

    CollectionService.subscribe('all-events').then(function(events){
        $scope.events = events;
    });

    CollectionService.subscribe('all-departments', false).then(function(departments){
        $scope.departments = departments;
    });

    $scope.event = {
        department:SessionService.getUserProfile().department,
        location: SessionService.getUserProfile().department.location,
        icon:'img/e-marker.png',
        removed:false
    };

    $scope.setLocation = function(){
        $scope.event.location = {
            latitude: $scope.event.department.location.latitude,
            longitude: $scope.event.department.location.longitude
        };
    };

    $scope.create = function(event){
        $scope.events.save(event).then(function(){
            AnimToasterNotificationService.addSuccessMessage("The event has been successfully added.");
            $scope.back();
        },function(error){
            AnimToasterNotificationService.addErrorMessage("Error : " + error.reason);
        });
    };

    $scope.back = function(){
        $state.go('app.main.admin.events.all');
    };

    $scope.hasChanged = function(){
        return true;
    };

});

