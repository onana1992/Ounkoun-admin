angular.module('maayiApp')
  .controller('AdminCommandeDetailCtrl', function ($scope,PanierFactory,CommandFactory,baseUrl,AuthFactory,$http,$interval,$location,$anchorScroll,$rootScope,$location,$timeout,$routeParams) {
   
    $scope.baseUrl=baseUrl; 
    $scope.isLoading=false;
    $scope.isVisible=false;
    $scope.showMessage=false;
    $scope.commands =[];
    $scope.isLoading=false;
    $scope.reference= $routeParams["reference"];
    $scope.actualCommand;
    $scope.selectArticle;
    $scope.command;

    $http.get(baseUrl+"command/one/"+$scope.reference).then(function (response) {
    $scope.statut= response.data.statut;
    $scope.command = response.data.data;
    }, function () {
      //alert("not ok");
      }).then(function () {
    });


    // requete a fer
    $scope.commands= CommandFactory.getCommand();
    for (var i = 0; i < $scope.commands.length; i++) {
         if($scope.commands[i].reference == $scope.reference){
          $scope.actualCommand= $scope.commands[i];
         }
    } 

    $scope.total=function(command){
      var total=0; 
      for (var i = 0; i < command.products.length; i++) { 
        total+= command.products[i].quantity * command.products[i].price;
      }
          return total;
    }

    $scope.selectArticle= function(article){
      $scope.selectArticle=article;
    };


    $scope.annuler= function(){
      $('#cancelArticleModal').modal('hide');
      $('#cancelCommandModal').modal('hide');
    };


    $scope.cancelArticle=function(){

      var myobject = {'name':$scope.selectArticle.name,'reference': $scope.reference};
      Object.toparams = function ObjecttoParams(obj) {
        var p = [];
        for (var key in obj) {
          p.push(key + '=' + encodeURIComponent(obj[key]));
        }
        return p.join('&');
      }

      $scope.isLoading=true;
      $http({
        method: "POST",
        url: baseUrl+"command/article/cancel",
        data:Object.toparams(myobject),
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      }).then(function (response) {
        $scope.statut = response.data.statut;
        $scope.isLoading=false;
        $('#cancelArticleModal').modal('hide');
          if($scope.statut=="200"){ 
             
          } else{
          
          }   
        }, function () {
          //$scope.categories=response;
          alert("not ok");
            $scope.isLoading=false;
        }).then(function () {

        });
    };


    $scope.cancelCommande=function(){

      var myobject = {'reference': $scope.reference};
      Object.toparams = function ObjecttoParams(obj) {
        var p = [];
        for (var key in obj) {
          p.push(key + '=' + encodeURIComponent(obj[key]));
        }
        return p.join('&');
      }

      $scope.isLoading=true;
      $http({
        method: "POST",
        url: baseUrl+"command/cancel",
        data:Object.toparams(myobject),
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      }).then(function (response) {
        $scope.statut = response.data.statut;
        $scope.isLoading=false;
        $('#cancelCommandModal').modal('hide');
          if($scope.statut=="200"){ 
             
          } else{
          
          }   
        }, function () {
          //$scope.categories=response;
          alert("not ok");
            $scope.isLoading=false;
        }).then(function () {

        });
    };


    

 });  
    
    