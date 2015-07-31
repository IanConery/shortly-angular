angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {}; 
  // console.log('TEST -------> Links = ', Links);
  // var links = Links; 

  $scope.getLinks = function(){
    Links.getLinks()
      .then(function(data){

        console.log('TEST -----> data = ', data);

      }).catch(function (error) {
        console.error(error);
      });

  } //getLinks

  $scope.postLink = function(link){
    Links.postLink(link)
      .then(function(data){

        console.log('TEST -----> data = ', data);

      }).catch(function (error) {
        console.error(error);
      });

  } //postLink

  $scope.links = $scope.getLinks();

  console.log("inside of LinksController");
  // $scope.data = 
  $scope.postLink({visits:5, title:'testlink.com', url:'http://www.yahoo.com'});
});
