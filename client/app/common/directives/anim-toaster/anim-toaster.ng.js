angular.module('angular-meteor-skeleton').directive('animToaster', function(AnimToasterNotificationService){

    return {
        restrict: 'AE',
        replace: true,
        templateUrl: 'client/app/common/directives/anim-toaster/anim-toaster.ng.html',
        controller: function($scope){
            $scope.service = AnimToasterNotificationService;
        },
        link: function (scope) {
            scope.$on("$destroy", function () {});
        }
    };

});
