angular.module('app').service('ErrorService', function($uibModal) {

  this.showErrorModal = function(errorText) {
    //todo: show modal
    alert(errorText);

    //var ErrorInstanceCtrl = [
    //  '$scope', 'errorText',
    //  function($scope, errorText) {
    //    $scope.errorText = errorText;
    //  }
    //];
    //
    //var modalInstance = $uibModal.open({
    //  templateUrl: 'error.html',
    //  controller: ErrorInstanceCtrl,
    //  size: 'small',
    //  resolve: {
    //    errorText: function() {
    //      return errorText;
    //    }
    //  }
    //});
  }

});