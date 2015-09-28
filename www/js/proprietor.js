// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('proprietor', ['ionic']);

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

app.controller('myController', function($scope, $ionicModal){

$ionicModal.fromTemplateUrl('edit_profile_modal.html', function(modal){
    $scope.editModal = modal;
}, {
    scope: $scope,
    animation: 'slide-in-up'
});
    
$scope.openModal=function(){$scope.editModal.show();};
