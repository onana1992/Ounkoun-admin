angular.module('maayiApp')
.controller('AdminBanniereCtrl', function ($scope,baseUrl,$http,$interval,$location,$rootScope,$routeParams){
	
  $scope.baseUrl=  baseUrl;
  $scope.isUploading=false;
  $scope.marque-null;
  $scope.idImage=null;
  $scope.isLoading=false;
  $scope.isNotSucceed=false;
  $scope.actualMarque= null;

  $http.get(baseUrl+"baniere/all").then(function (response) {
    $scope.statut= response.data.statut;
    $scope.tabBanniere = response.data.data;
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
         $scope.idImage=response.data.response.id;
      }
    }, function () {
        //$scope.categories=response;
        //alert("not ok 1");
      }).then(function () {
      // here the end of the request
    });  
  };

  $scope.createBanniere=function(file){
    var myobject = {'page':$scope.page,'idImage': $scope.idImage,'priority':$scope.priority};
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
      url: baseUrl+"banniere",
      data:Object.toparams(myobject),
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    }).then(function (response) {
        $scope.statut = response.data.statut;
        $scope.isLoading=false;
        if($scope.statut=="200"){ 
            $scope.isNotSucceed=false;  
            $('#createBanniere').modal('hide');
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



  $scope.selectBanniere= function(banniere){
    $scope.selectBanniere=banniere;
  };

  $scope.annulerSuppressionBanniere= function(){
   $('#deleteBanniere').modal('hide');
  };

  $scope.ConfirmSupprimerBanniere=function(){
      $scope.isLoading=true;
      var myobject = {'idBanniere':$scope.selectBanniere.id};
      Object.toparams = function ObjecttoParams(obj) {
        var p = [];
        for (var key in obj) {
          p.push(key + '=' + encodeURIComponent(obj[key]));
        }
          return p.join('&');
      }

      $http({
        method: "POST",
        url: baseUrl+"banniere/delete",
        data:Object.toparams(myobject),
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      }).then(function (response) {
        $scope.isLoading=false;
        for (var i = 0; i < $scope.tabBanniere.length; i++) {
          if($scope.tabBanniere[i].id == $scope.selectBanniere.id){
            $scope.tabBanniere.splice(i, 1);
          } 
        }

        $('#deleteBanniere').modal('hide');
      
      },function () {
        alert("not ok");
    }).then(function () {

    });
  };

  $scope.modifierBanniere=function(){
    
    $scope.isLoading=true;
      var myobject = {'idBanniere':$scope.selectBanniere.id,'page':$scope.selectBanniere.page,'idImage': $scope.selectBanniere.image
      ,'priority':$scope.selectBanniere.priority};

      Object.toparams = function ObjecttoParams(obj) {
        var p = [];
        for (var key in obj) {
          p.push(key + '=' + encodeURIComponent(obj[key]));
        }
          return p.join('&');
      }

      $http({
          method: "POST",
          url: baseUrl+"banniere/modify",
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

        $('#modifyBanniere').modal('hide');

        
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
          $scope.selectBanniere.image=response.data.response.id;
      }
    }, function () {
        //$scope.categories=response;
        alert("not ok 1");
      }).then(function () {
      // here the end of the request
    });  
  };



 });


   