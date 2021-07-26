angular.module('maayiApp')
.controller('AdminVendeurCtrl', function ($scope,baseUrl,$http,$interval,$location,$rootScope,$routeParams){
	
  $scope.baseUrl=  baseUrl;
  $scope.isUploading=false;
  $scope.boutique-null;
  $scope.idLogo=null;
  $scope.isLoading=false;
  $scope.isNotSucceed=false;
  $scope.actualBoutique= null;
  $scope.tel1;
 


  $http.get(baseUrl+"boutique/all").then(function (response) {
    $scope.statut= response.data.statut;
    $scope.boutiques = response.data.data;
   }, function () {
      //alert("not ok");
      }).then(function () {
  });

  

  $scope.createBoutique = function(file){
    var myobject = {'name':$scope.name,'idImage': $scope.idLogo,'tel1': $scope.tel1,'tel2':$scope.tel2,'adresse': $scope.adresse};
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
      url: baseUrl+"boutique",
      data:Object.toparams(myobject),
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    }).then(function (response) {
        $scope.statut = response.data.statut;
        $scope.isLoading=false;
        if($scope.statut=="200"){ 
          
          $scope.isNotSucceed=false;
          $('#createBoutique').modal('hide');

          $http.get(baseUrl+"boutique/all").then(function (response) {
            $scope.statut= response.data.statut;
            $scope.boutiques = response.data.data;
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




  $scope.selectBoutique= function(boutique){
      $scope.selectBoutique= boutique;
  };

  $scope.annulerSuppressionBoutique = function(){
     $('#deleteBoutique').modal('hide');
  };


  $scope.ConfirmSupprimerBoutique= function(){

    $scope.isLoading=true;
    var myobject = {'idBoutique':$scope.selectBoutique.id};

    Object.toparams = function ObjecttoParams(obj) {
      var p = [];
      for (var key in obj) {
            p.push(key + '=' + encodeURIComponent(obj[key]));
          }
            return p.join('&');
    }

    $http({
      method: "POST",
      url: baseUrl+"boutique/delete",
      data:Object.toparams(myobject),
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    }).then(function (response) {

    $scope.isLoading=false;
    for (var i = 0; i < $scope.boutiques.length; i++) {
        if($scope.boutiques[i].id == $scope.selectBoutique.id){
          $scope.boutiques.splice(i,1);
        } 
    }

    $('#deleteBoutique').modal('hide');
        
        },function () {
          alert("not ok");
      }).then(function () {

    });

  };

  $scope.modifierBoutique=function(){
    
    $scope.isLoading=true;
    var myobject = {'idBoutique':$scope.selectBoutique.id,'name':$scope.selectBoutique.name, 'idImage': $scope.selectBoutique.idLogo,'tel1': $scope.selectBoutique.tel1
      ,'tel2':$scope.selectBoutique.tel2,'adresse':$scope.selectBoutique.adresse};

      Object.toparams = function ObjecttoParams(obj) {
        var p = [];
        for (var key in obj) {
          p.push(key + '=' + encodeURIComponent(obj[key]));
        }
          return p.join('&');
      }

      $http({
          method: "POST",
          url: baseUrl+"boutique/modify",
          data:Object.toparams(myobject),
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      }).then(function (response) {
          $scope.isLoading=false;
          for (var i = 0; i < $scope.boutiques.length; i++) {
            if($scope.boutiques[i].id == $scope.selectBoutique.id){
              $scope.boutiques.splice(i,1);
              $scope.boutiques.push($scope.selectBoutique);
            } 
          }
        $('#modifyBoutique').modal('hide');
      },function () {
          alert("not ok");
    }).then(function () {

    });
  };

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
         alert($scope.idLogo);
      }
    }, function () {
        //$scope.categories=response;
        //alert("not ok 1");
      }).then(function () {
      // here the end of the request
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
          $scope.selectBoutique.idLogo=response.data.response.id;
      }
    }, function () {
        //$scope.categories=response;
        alert("not ok 1");
      }).then(function () {
      // here the end of the request
    });  
  };




 });


   