angular.module('angular-meteor-skeleton').controller('SearchEventsListCtrl', function ($rootScope, $scope, $meteor, $state, SessionService, CollectionService, MapService, AnimService) {

    var department = SessionService.getUserProfile().department;
    var options = {collectionOptions:{'department.code': department.code}, backend:true};

    CollectionService.subscribe('search-events', options).then(function(events) {
        angular.forEach(events, function(event){event.icon = event.icon ? event.icon : 'img/e-marker.png';});
        $scope.events = events;
        $scope.map = MapService.getMap(department.location);
        AnimService.stopTransition();
    });

    $scope.eventClicked = function(marker, eventName, event) {
        MapService.animate(marker, 'bounce');
        $state.go("app.main.events.search.byProfile.detail", {"event" : event});
        $rootScope.$broadcast('event-detail', event);
    };

    $scope.$on('marker-mouseover', function(e, marker){
        console.log('mouseover');
    });

    $scope.$on('marker-mouseout', function(e, marker){
        console.log('mouseout');
    });
});

