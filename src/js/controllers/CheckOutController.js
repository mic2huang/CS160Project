app.controller('CheckOutController', ['$scope', 'data', function($scope, data) {
	$scope.fillBackgroundWithOpaqueWhite();
	$scope.title = data.title;
  $scope.message = data.message;
  $scope.views = data.views;
	$scope.iframeHeight = window.innerHeight;

	$scope.checkOutStyle = {
		"margin-top" : "40px"
  };

	$("#checkOut").click(function(e) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "/database",
        data: {
            product: "lettuce", // < note use of 'this' here
            howMany: 4
        },
        success: function(result) {
            alert(result);
        },
        error: function(result) {
            alert('error');
        }
    });
});

}]);
