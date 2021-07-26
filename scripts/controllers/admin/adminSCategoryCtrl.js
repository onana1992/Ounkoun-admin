angular.module('maayiApp')
.controller('AdminSCategoryCtrl', function ($scope,$http,baseUrl,$interval,$location,$rootScope,$routeParams){
  
  $scope.baseUrl=  baseUrl;
  $scope.isUploading=false;
  $scope.urlBaniere=null;
  $scope.isLoading=false;
  $scope.isNotSucceed=false;
  $scope.actualCategorie= null;
  $scope.categoriesName=$routeParams["name"];


  $http.get(baseUrl+"category/"+$scope.categoriesName).then(function (response) {
    $scope.statut= response.data.statut
    $scope.tabSCategories = response.data.data.category;
   }, function () {
      //alert("not ok");
      }).then(function () {
  });

  $scope.sendImage=function(file){
    $scope.isUploading=true;
    var fd = new FormData();
    fd.append('image', file);
    $http({
      method: "POST",
      url: baseUrl+"image",
      data:fd,
      headers: {'Content-Type': undefined}
    }).then(function (response) {
      $scope.isUploading=false;
      if(response.data.statut=="200"){
         $scope.urlBaniere=response.data.response.id;
      }
    }, function () {
        //$scope.categories=response;
        alert("not ok 1");
      }).then(function () {
      // here the end of the request
    });  
  };

  $scope.createScategorie=function()
  {
    var myobject = {'name_category':$scope.categoriesName,'name':$scope.SCategorie,'urlBaniere': $scope.urlBaniere};
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
      url: baseUrl+"category/scategory",
      data:Object.toparams(myobject),
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    }).then(function (response) {
        $scope.statut = response.data.statut;
        $scope.isLoading=false;
        if($scope.statut=="200"){ 
        $scope.isNotSucceed=false;  
        $('#createScategorie').modal('hide');
        $http.get(baseUrl+"category/"+$scope.categoriesName).then(function (response) {
        $scope.statut= response.data.statut
        $scope.tabSCategories = response.data.data.category;
        }, function () {
          //alert("not ok");
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



  $scope.selectSCategorie= function(scategorie){
    $scope.selectSCategorie=scategorie;
  };

  $scope.annulerSuppressionCategorie= function(){
   $('#deleteSCategorie').modal('hide');
  };

  $scope.ConfirmSupprimerSCategorie=function(){

      $scope.isLoading=true;
      var myobject = {'nameCategory': $scope.categoriesName,'idSCategory':$scope.selectSCategorie.id};
      Object.toparams = function ObjecttoParams(obj) {
        var p = [];
        for (var key in obj) {
          p.push(key + '=' + encodeURIComponent(obj[key]));
        }
          return p.join('&');
      }

      $http({
        method: "POST",
        url: baseUrl+"category/scategory/delete",
        data:Object.toparams(myobject),
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      }).then(function (response) {
        $scope.isLoading=false;
        for (var i = 0; i < $scope.tabSCategories.length; i++) {
          if($scope.tabSCategories[i].id== $scope.selectSCategorie.id){
            $scope.tabSCategories.splice(i, 1);
          } 
        }
        $('#deleteSCategorie').modal('hide');
      },function () {
          
          alert("not ok");
    }).then(function () {

    });
  };

  $scope.modifierSCategorie=function(){
    $scope.isLoading=true;
    var myobject = {'nameCategory':$scope.categoriesName,'idSCategory':$scope.selectSCategorie.id,'name':$scope.selectSCategorie.name,'urlBaniere': $scope.selectSCategorie.urlBaniere};
    Object.toparams = function ObjecttoParams(obj) {
        var p = [];
        for (var key in obj) {
          p.push(key + '=' + encodeURIComponent(obj[key]));
        }
          return p.join('&');
    }

    $http({
          method: "POST",
          url: baseUrl+"category/scategory/update",
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
 
      $('#modifySCategorie').modal('hide');
        
      },function () {
          alert("not ok");
    }).then(function () {

    });

  };

  $scope.sendImageModify=function(file){
    $scope.isUploading=true;
    var fd = new FormData();
    fd.append('image', file);
    $http({
      method: "POST",
      url: baseUrl+"image",
      data:fd,
      headers: {'Content-Type': undefined}
    }).then(function (response) {
      $scope.isUploading=false;
      if(response.data.statut=="200"){
          $scope.selectSCategorie.urlBaniere=response.data.response.id;
      }
    }, function () {
       // alert("not ok ");
      }).then(function () {
      // here the end of the request
    });  
  };



 });


   