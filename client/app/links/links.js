angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, $location) {
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
    $scope.spinner = true;
    Links.postLink(link)
      .then(function(data){
        $location.path('/links');
        $scope.spinner = false;
      }).catch(function (error) {
        $scope.spinner = false;
        console.error(error);
      });

  } //postLink

  // $scope.postLink = postLink;
  $scope.changeView = function(){
    // console.log('clicked. url = '+ $location.url('/'));
  }

  $scope.spinner = false; 
  $scope.links = $scope.getLinks();

  // $scope.data = 
  // $scope.postLink({visits:5, title:'testlink.com', url:'http://www.yahoo.com'});
});
