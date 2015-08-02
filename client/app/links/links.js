angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, $location, Auth, $timeout) {
  $scope.data = {}; 
  // console.log('TEST -------> Links = ', Links);
  // var links = Links; 

  $scope.getLinks = function(){
    Links.getLinks()
      .then(function(data){
        $scope.links = data.data;

      }).catch(function (error) {
        console.error(error);
      });

  } //getLinks

  $scope.postLink = function(link){
    if(Links.isValidUrl(link)){ //check if url is valid
      
      $scope.spinner = true;
      
      Links.postLink(link)
        .then(function(data){
          
          $location.path('/links');
          $scope.spinner = false;
       
        }).catch(function (error) {
          console.error(error);
        });
    }else{
      $scope.warning = "Sorry, please enter a valid url."; 
      $scope.newUrl = '';

      $timeout(function(){
        console.log('resetting warning');
        $scope.warning = false; 
      }, 1000);
      
      $scope.spinner = false;

    }

  } //postLink

  // $scope.postLink = postLink;
  $scope.changeView = function(){
    // console.log('clicked. url = '+ $location.url('/'));
  }

  // NOTE: should be refactored into its
  $scope.signout = Auth.signout; //signout mechanic

  $scope.spinner = false; 
  $scope.links = $scope.getLinks();

  // $scope.data = 
  // $scope.postLink({visits:5, title:'testlink.com', url:'http://www.yahoo.com'});
});
