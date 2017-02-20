(function () {

  'use strict';

  angular
    .module('app')
    .controller('HomeController', HomeController);

  HomeController.$inject = ['authService','$http','$scope','$state'];

  function HomeController(authService,$http,$scope,$state) {

    var vm = this;
    vm.authService = authService;

    $scope.formData= {};

   $scope.franchise = [{
    name:'10/Minute Manicure/10 Minute Manicure'},{
    name:'1000 Degrees Pizzeria'},{
    name:'1-800-Drycarpet'},{
    name:'16 handles'},{
    name:'123 fit'},
    {
    name:'others'}
    ];
  

  $scope.f = function(){
    console.log($scope.formData.franchise_name);

 
  }

      $scope.onSubmit = function(){
   
    	 $http({  
    	  method  : 'POST',
          url     : '/api/companies',
          data    : $scope.formData })
    .then(function(response){
         //your code in case the post succeeds
          	console.log('data added');
         console.log(response.data);
     })
    .catch(function(err){
         //your code in case your post fails
         console.log(err);
     });
   
   $state.go('result');
  
    }
    

  }

}());
