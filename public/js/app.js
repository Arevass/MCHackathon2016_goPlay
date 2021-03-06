var app = angular.module('goPlay', ['ui.bootstrap']);

app.controller('ModalCtrl', function ($scope, $uibModal, $log) {

	  $scope.animationsEnabled = true;

	  $scope.open = function (size) {

	    var modalInstance = $uibModal.open({
	      animation: $scope.animationsEnabled,
	      templateUrl: 'form.html',
	      controller: 'ModalInstanceCtrl',
	      size: size,
	   });

	    modalInstance.result.then(function (selectedItem) {
	      $scope.selected = selectedItem;
	    }, function () {
	      $log.info('Modal dismissed at: ' + new Date());
	    });
	  };

	  $scope.toggleAnimation = function () {
	    $scope.animationsEnabled = !$scope.animationsEnabled;
	  };

});

app.controller('ModalInstanceCtrl', function ($scope, $uibModalInstance) {

    $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
    };

});

app.controller('listCtrl', function ($scope) {

    $scope.clubsShow = true;
    $scope.socsShow = false;

    $scope.clubs = function () {
        if($scope.socsShow) {
            $scope.socsShow = false;
            $scope.clubsShow = true;
        }
    }

    $scope.socs = function () {
        if($scope.clubsShow) {
            $scope.clubsShow = false;
            $scope.socsShow = true;
        }
    }
});
