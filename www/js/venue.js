var app = angular.module('venue',['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

app.controller('venueCtrl',function($scope){
  
    $scope.vName = "Liv";
    $scope.bannerImage = "img/liv_image.jpg";
    $scope.street= "4441 Collins Ave";
    $scope.city="Miami Beach";
    $scope.state="FL";
    $scope.zip="33140";
    $scope.vImages = [];
    
  
    
    
    $scope.getAddress = function(){return $scope.street + ",\n" + $scope.city + ",\n" + $scope.state + ",\n" + $scope.zip;  }
    $scope.setName = function(){return this.vName;}
    $scope.getImage = function(){return this.bannerImage;}
    
});
