angular.module('hello', [])
  .controller('home', function($scope, $http) {
  $http.get('greeting').success(function(data) {
    $scope.greeting = data;
  });
  
    $scope.update = function(){
         $http.get('greeting', {params: {name: $scope.name}}).
                 success(function(data) {
                 $scope.greeting = data;
       
        });
       }    
   });
    
  


 
  
 
