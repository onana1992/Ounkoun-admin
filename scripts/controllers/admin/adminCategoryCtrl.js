angular.module('maayiApp')
.controller('AdminCategoryCtrl', function ($scope,$http,baseUrl,$interval,$location,$rootScope,$routeParams){
   
  $scope.baseUrl=  baseUrl;
  $scope.isUploading=false;
  $scope.Categorie-null;
  $scope.urlBaniere=null;
  $scope.isLoading=false;
  $scope.isNotSucceed=false;
  $scope.actualCategorie= null;
  $scope.urlIcone= null;

  $http.get(baseUrl+"category/all").then(function (response) {
    $scope.statut= response.data.statut;
    $scope.tabCategories = response.data.data;
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

  $scope.sendIcone=function(file){
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
         $scope.urlIcone=response.data.response.id;
      }
    }, function () {
        //$scope.categories=response;
        alert("not ok 1");
      }).then(function () {
      // here the end of the request
    });  
  };

  $scope.createcategorie=function(){
    var myobject = {'name':$scope.categorie,'urlBaniere': $scope.urlBaniere,'urlIcone': $scope.urlIcone};
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
      url: baseUrl+"category",
      data:Object.toparams(myobject),
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    }).then(function (response) {
        $scope.statut = response.data.statut;
        $scope.isLoading=false;
        if($scope.statut=="200"){ 
        $scope.isNotSucceed=false;  
        $('#createcategorie').modal('hide');
        $http.get(baseUrl+"category/all").then(function (response) {
          $scope.statut= response.data.statut;
          $scope.tabCategories =[];
           $scope.tabCategories=response.data.data;
        }, function () {
            //alert("not ok");
           }).then(function () {
        }); 
           
        } else{
         $scope.isNotSucceed=true;
        
        }   

        }, function () {
          //$scope.categories=response;
          //alert("not ok");
          $scope.isLoading=false;
        }).then(function () {

        });
    };



  $scope.selectCategorie= function(categorie){
    $scope.selectCategorie=categorie;
  };

  $scope.annulerSuppressionCategorie= function(){
   $('#deleteCategorie').modal('hide');
  };

  $scope.ConfirmSupprimerCategorie=function(){

      $scope.isLoading=true;
      var myobject = {'idCategory':$scope.selectCategorie.id};
      Object.toparams = function ObjecttoParams(obj) {
        var p = [];
        for (var key in obj) {
          p.push(key + '=' + encodeURIComponent(obj[key]));
        }
          return p.join('&');
      }

      $http({
        method: "POST",
        url: baseUrl+"category/delete",
        data:Object.toparams(myobject),
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      }).then(function (response) {
        $scope.isLoading=false;
        for (var i = 0; i < $scope.tabCategories.length; i++) {
          if($scope.tabCategories[i].id== $scope.selectCategorie.id){
            $scope.tabCategories.splice(i, 1);
          } 
        }

        $('#deleteCategorie').modal('hide');
      
      },function () {
          
          alert("not ok");
    }).then(function () {

    });
  };

  $scope.modifierCategorie=function(){
    
    $scope.isLoading=true;
      var myobject = {'idCategory':$scope.selectCategorie.id,'name':$scope.selectCategorie.name,
      'urlBaniere': $scope.selectCategorie.urlBaniere, 'urlIcone': $scope.selectCategorie.urlIcone
    };

      Object.toparams = function ObjecttoParams(obj) {
        var p = [];
        for (var key in obj) {
          p.push(key + '=' + encodeURIComponent(obj[key]));
        }
          return p.join('&');
      }

      $http({
          method: "POST",
          url: baseUrl+"category/update",
          data:Object.toparams(myobject),
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      }).then(function (response) {
          $scope.isLoading=false;
  
          for (var i = 0; i < $scope.tabCategories; i++) {
            if($scope.tabCategories[i].id == $scope.selectCategorie.id){
              $scope.tabCategories.splice(i, 1);
              $scope.tabCategories.push($scope.selectCategorie);
            } 
          }
        $('#modifyCategorie').modal('hide');
        
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
          $scope.selectCategorie.urlBaniere=response.data.response.id;
      }
    }, function () {
        //$scope.categories=response;
        alert("not ok 1");
      }).then(function () {
      // here the end of the request
    });  
  };

  $scope.sendIconeModify=function(file){
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
          $scope.selectCategorie.urlIcone=response.data.response.id;
      }
    }, function () {
        //$scope.categories=response;
        alert("not ok 1");
      }).then(function () {
      // here the end of the request
    });  
  };





 });


   