angular.module('maayiApp')
.controller('AdminSSCategoryCtrl', function ($scope,$http,baseUrl,$interval,$location,$rootScope,$routeParams){
  
  $scope.baseUrl=baseUrl;
  $scope.isUploading= false;
  $scope.urlBaniere= null;
  $scope.isLoading= false;
  $scope.isNotSucceed= false;
  $scope.actualCategorie= null;
  $scope.categorieName= $routeParams["catname"];
  $scope.scategorieName= $routeParams["scatname"];



  $http.get(baseUrl+"category/"+$scope.categorieName+"/"+$scope.scategorieName).then(function (response) {
    $scope.statut= response.data.statut
    $scope.tabSSCategories = response.data.data;
   }, function () {
      alert("not ok");
      }).then(function () {
  });


  $scope.createSScategorie=function(){

    var myobject = {'nameCategory':$scope.categorieName,'nameSCategory':$scope.scategorieName,'name':$scope.SSCategorie};
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
      url: baseUrl+"category/sscategory",
      data:Object.toparams(myobject),
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    }).then(function (response) {
        $scope.statut = response.data.statut;
        $scope.isLoading=false;
        if($scope.statut=="200"){ 
          $scope.isNotSucceed=false;  
          $('#createSScategorie').modal('hide');

          $http.get(baseUrl+"category/"+$scope.categorieName+"/"+$scope.scategorieName).then(function (response) {
          $scope.statut= response.data.statut
          $scope.tabSSCategories = response.data.data;
          }, function () {
           alert("not ok");
            }).then(function () {
          });
           
      } else{
         $scope.isNotSucceed=true;
        
        }   

        }, function () {
          //$scope.categories=response;
          alert("not ok");
            $scope.isLoading=false;
        }).then(function () {

        });
    };



  $scope.selectSSCategorie= function(sscategorie){
    $scope.selectSSCategorie=sscategorie;
  };

  $scope.annulerSuppressionSSCategorie= function(){
   $('#deleteSSCategorie').modal('hide');
  };

  $scope.ConfirmSupprimerSSCategorie=function(){

      $scope.isLoading=true;
      var myobject = {'nameCategory': $scope.categorieName,'nameSCategory':$scope.scategorieName,'idSSCategory':$scope.selectSSCategorie.id};
      Object.toparams = function ObjecttoParams(obj) {
        var p = [];
        for (var key in obj) {
          p.push(key + '=' + encodeURIComponent(obj[key]));
        }
          return p.join('&');
      }

      $http({
        method: "POST",
        url: baseUrl+"category/sscategory/delete",
        data:Object.toparams(myobject),
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      }).then(function (response) {
        $scope.isLoading=false;
        for (var i = 0; i < $scope.tabSSCategories.length; i++) {
          if($scope.tabSSCategories[i].id== $scope.selectSSCategorie.id){
            $scope.tabSSCategories.splice(i, 1);
          } 
        }
        $('#deleteSSCategorie').modal('hide');
      },function () {
          
          alert("not ok");
    }).then(function () {

    });
  };

  $scope.modifierSSCategorie=function(){
    $scope.isLoading=true;
    var myobject = {'nameCategory': $scope.categorieName,'nameSCategory':$scope.scategorieName,'idSSCategory':$scope.selectSSCategorie.id,'name':$scope.selectSSCategorie.name,};
    Object.toparams = function ObjecttoParams(obj) {
        var p = [];
        for (var key in obj) {
          p.push(key + '=' + encodeURIComponent(obj[key]));
        }
          return p.join('&');
    }

    $http({
          method: "POST",
          url: baseUrl+"category/sscategory/update",
          data:Object.toparams(myobject),
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
          }).then(function (response) {
            $scope.isLoading=false;
  
          for (var i = 0; i < $scope.tabSCategories; i++) {
            if($scope.tabSCategories[i].id == $scope.selectSCategorie.id){
              $scope.tabSCategories.splice(i, 1);
              $scope.tabSCategories.push($scope.selectCategorie);
            } 
          }
 
        $('#modifySSCategorie').modal('hide');
        
      },function () {
          alert("not ok");
    }).then(function () {

    });

  };

 



 });


   