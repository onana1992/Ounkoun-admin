angular.module('maayiApp')
.controller('AdminMarqueCtrl', function ($scope,baseUrl,$http,$interval,$location,$rootScope,$routeParams){
	
  $scope.baseUrl=  baseUrl;
  $scope.isUploading=false;
  $scope.marque-null;
  $scope.idLogo=null;
  $scope.isLoading=false;
  $scope.isNotSucceed=false;
  $scope.actualMarque= null;

  $http.get(baseUrl+"marque/all").then(function (response) {
    $scope.statut= response.data.statut;
    $scope.tabMarque = response.data.data;
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
         $scope.idLogo=response.data.response.id;
      }
    }, function () {
        //$scope.categories=response;
        //alert("not ok 1");
      }).then(function () {
      // here the end of the request
    });  
  };

  $scope.createMarque=function(file){
    var myobject = {'name':$scope.marque,'idLogo': $scope.idLogo,'popularity':$scope.popularity};
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
      url: baseUrl+"marque",
      data:Object.toparams(myobject),
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    }).then(function (response) {
        $scope.statut = response.data.statut;
        $scope.isLoading=false;
        if($scope.statut=="200"){ 
            $scope.isNotSucceed=false;  
            $('#createMarque').modal('hide');
        $http.get(baseUrl+"marque/all").then(function (response) {
          $scope.statut= response.data.statut;
          $scope.tabMarque =[];
           $scope.tabMarque=response.data.data;
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



  $scope.selectMarque= function(marque){
    $scope.selectMarque=marque;
  };

  $scope.annulerSuppressionMarque= function(){
   $('#deleteMarque').modal('hide');
  };

  $scope.ConfirmSupprimerMarque=function(){
      $scope.isLoading=true;
      var myobject = {'idMarque':$scope.selectMarque.id};
      Object.toparams = function ObjecttoParams(obj) {
        var p = [];
        for (var key in obj) {
          p.push(key + '=' + encodeURIComponent(obj[key]));
        }
          return p.join('&');
      }

      $http({
        method: "POST",
        url: baseUrl+"marque/delete",
        data:Object.toparams(myobject),
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      }).then(function (response) {
        $scope.isLoading=false;
        for (var i = 0; i < $scope.tabMarque.length; i++) {
          if($scope.tabMarque[i].id== $scope.selectMarque.id){
            $scope.tabMarque.splice(i, 1);
          } 
        }

        $('#deleteMarque').modal('hide');
      
      },function () {
        alert("not ok");
    }).then(function () {

    });
  };

  $scope.modifierMarque=function(){
    
    $scope.isLoading=true;
      var myobject = {'idMarque':$scope.selectMarque.id,'name':$scope.selectMarque.name,'idLogo': $scope.selectMarque.idLogo
      ,'popularity':$scope.selectMarque.popularity};

      Object.toparams = function ObjecttoParams(obj) {
        var p = [];
        for (var key in obj) {
          p.push(key + '=' + encodeURIComponent(obj[key]));
        }
          return p.join('&');
      }

      $http({
          method: "POST",
          url: baseUrl+"marque/modify",
          data:Object.toparams(myobject),
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      }).then(function (response) {
          $scope.isLoading=false;
          for (var i = 0; i < $scope.tabMarque.length; i++) {
            if($scope.tabMarque[i].id== $scope.selectMarque.id){
              $scope.tabMarque.splice(i, 1);
              $scope.tabMarque.push($scope.selectMarque);
            } 
          }

        $('#modifyMarque').modal('hide');

        
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
          $scope.selectMarque.idLogo=response.data.response.id;
      }
    }, function () {
        //$scope.categories=response;
        alert("not ok 1");
      }).then(function () {
      // here the end of the request
    });  
  };



 });


   