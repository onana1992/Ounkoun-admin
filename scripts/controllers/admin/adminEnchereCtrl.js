angular.module('maayiApp')
.controller('AdminEnchereCtrl', function ($scope,$http,baseUrl,$interval,$location,$rootScope,$routeParams){
   
  $scope.baseUrl=  baseUrl;
  $scope.isUploading=false;
  $scope.Categorie-null;
  $scope.urlBaniere=null;
  $scope.isLoading=false;
  $scope.isNotSucceed=false;
  $scope.actualCategorie= null;
  $scope.urlIcone= null;
  $scope.numero;
  $scope.id_bigPhoto1=null;
  $scope.id_bigPhoto2=null;
  $scope.id_bigPhoto3=null;
  $scope.id_bigPhoto4=null;
  $scope.id_photo=null;
  $scope.details=[];
  $scope.isLoadingInit = false;


  $scope.ajouterDetail= function(){
    $scope.details.push({ 'name':null,'value':null });
  };
  

  $scope.ajouterDetail1= function(){
    $scope.selectedEnchere.detail.push({ 'name':null,'value':null });
  };



  $scope.retirerDetail= function(i){
    angular.forEach($scope.details, function (value, key) {
      if(key==i){
          $scope.details.splice(key, 1);
        }
     });
  };

  $scope.retirerDetail1= function(i){
    angular.forEach( $scope.selectedEnchere.detail, function (value, key) {
      if(key==i){
           $scope.selectedEnchere.detail.splice(key, 1);
        }
     });
  };


  $http.get(baseUrl+"enchere/all").then(function (response) {
    $scope.statut= response.data.statut;
    $scope.encheres = response.data.data;
   }, function () {
      //alert("not ok");
      }).then(function () {
  });

   $scope.sendImage1=function(file){
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
         $scope.id_photo= response.data.response.id;

      }
    }, function () {
        //$scope.categories=response;
        alert("not ok 1");
      }).then(function () {
      // here the end of the request
    });  
  };

  $scope.sendImage2=function(file){
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
         $scope.id_bigPhoto1=response.data.response.id;
      }
    }, function () {
        //$scope.categories=response;
        alert("not ok 1");
      }).then(function () {
      // here the end of the request
    });  
  };

    $scope.sendImage3=function(file){
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
           $scope.id_bigPhoto2=response.data.response.id;
        }
      }, function () {
          //$scope.categories=response;
          alert("not ok 1");
        }).then(function () {
        // here the end of the request
      });  
    };

    $scope.sendImage4=function(file){
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
           $scope.id_bigPhoto3=response.data.response.id;
        }
      }, function () {
          //$scope.categories=response;
          alert("not ok 1");
        }).then(function () {
        // here the end of the request
      });  
    };

    $scope.sendImage5=function(file){
      $scope.isUploading=true;
      var fd = new FormData();
      fd.append('image', file);
      $http({
        method: "POST",
        url: baseUrl+"image",
        data:fd,
        headers: {'Content-Type': undefined}
      }).then(function (respons) {
        $scope.isUploading=false;
        if(respons.data.statut=="200"){
           $scope.id_bigPhoto4=respons.data.response.id;
        }
      }, function () {
          //$scope.categories=response;
          alert("not ok 1");
        }).then(function () {
        // here the end of the request
      });  
    };


    $scope.createEnchere=function(){ 
    
    $scope.myobject = {'numEnchere':$scope.numero,'name':$scope.name,'category':$scope.category,'etat':$scope.etat.value,
      'time':$scope.time,'quantity':$scope.quantity,
      'initPrice':angular.toJson($scope.prix),'idImage':$scope.id_photo,
      'idImage1':$scope.id_bigPhoto1,'idImage2':$scope.id_bigPhoto2,
      'idImage3':$scope.id_bigPhoto3,
      'idImage4':$scope.id_bigPhoto4,'description':$scope.description, 'detail':angular.toJson($scope.details)};

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
      url: baseUrl+"enchere",
      data:Object.toparams($scope.myobject),
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    }).then(function (response) {
        $scope.statut = response.data.statut;
        $scope.isLoading=false;
        if($scope.statut=="200"){ 
          $scope.isNotSucceed=false;
          $('#createEnchere').modal('hide');
          $http.get(baseUrl+"enchere/all").then(function (response) {
            $scope.statut= response.data.statut;
            $scope.encheres = response.data.data;
            }, function () {
                //alert("not ok");
            }).then(function () {
          });
        } else{
            $scope.isNotSucceed=true;
        }   
            $scope.isLoading=false;
        }, function () {
            $scope.isLoading=false;
        }).then(function () {

        });


  };

  $scope.modifiedEnchere=function(){

    $scope.myobject = {'numEnchere':$scope.selectedEnchere.numEnchere,'name':$scope.selectedEnchere.name,'etat':$scope.selectedEnchere.etat,
    'initPrice':$scope.selectedEnchere.initPrice,'idImage':$scope.selectedEnchere.idImage,
    'idImage1':$scope.selectedEnchere.idImage1,'idImage2':$scope.selectedEnchere.idImage2,
    'idImage3':$scope.selectedEnchere.idImage3,
    'idImage4':$scope.selectedEnchere.idImage4,'description':$scope.selectedEnchere.description, 'detail':angular.toJson($scope.selectedEnchere.detail)};

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
      url: baseUrl+"enchere/modify",
      data:Object.toparams($scope.myobject),
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    }).then(function (response) {
        $scope.statut = response.data.statut;
        $scope.isLoading=false;
        if($scope.statut=="200"){ 
         
          $http.get(baseUrl+"enchere/all").then(function (response) {
            $scope.statut= response.data.statut;
            $scope.encheres = response.data.data;
            }, function () {
                //alert("not ok");
            }).then(function () {
          });
          $('#modifiedEnchere').modal('hide');

          
          } else{
            $scope.isNotSucceed=true;
          }   
            $scope.isLoading=false;
        }, function () {
            $scope.isLoading=false;
        }).then(function () {

        });
  };


  $scope.selectEnchere= function(enchere){
       $scope.selectedEnchere=enchere;
  };

  $scope.annulerSupprimerEnchere= function(){
   $('#deleteEnchere').modal('hide');
  };

  $scope.annulerCloturerEnchere= function(){
   $('#cloturerEnchere').modal('hide');
  };

  $scope.annulerReinitEnchere= function(){
   $('#initEnchere').modal('hide');
  };

  $scope.ConfirmReinitEnchere=function(){
      $scope.isLoadingInit = true;
      $http.get(baseUrl+"enchere_statut/reset").then(function (response) {
          $scope.isLoadingInit = false;
          $('#initEnchere').modal('hide');
      }, function () {
      }).then(function () {
      });
  };

  $scope.ConfirmSupprimerEnchere=function(){

      $scope.isLoading=true;
      var myobject = {'numEnchere':$scope.selectedEnchere.numEnchere};
      Object.toparams = function ObjecttoParams(obj) {
        var p = [];
        for (var key in obj) {
          p.push(key + '=' + encodeURIComponent(obj[key]));
        }
          return p.join('&');
      }

      $http({
        method: "POST",
        url: baseUrl+"enchere/delete",
        data:Object.toparams(myobject),
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      }).then(function (response) {
        $scope.isLoading=false;
        for (var i = 0; i < $scope.encheres.length; i++) {
          if($scope.encheres[i].numEnchere == $scope.selectedEnchere.numEnchere){
            $scope.encheres.splice(i, 1);
          } 
        }
        $('#deleteEnchere').modal('hide');
      },function () {
          
          alert("not ok");
    }).then(function () {

  });

  };

  $scope.ConfirmCloturerEnchere=function(){

      $scope.isLoading=true;
      var myobject = {'numEnchere':$scope.selectedEnchere.numEnchere};
      Object.toparams = function ObjecttoParams(obj) {
        var p = [];
        for (var key in obj) {
          p.push(key + '=' + encodeURIComponent(obj[key]));
        }
          return p.join('&');
      }

      $http({
        method: "POST",
        url: baseUrl+"enchere_statut/vendu",
        data:Object.toparams(myobject),
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      }).then(function (response) {

        $('#cloturerEnchere').modal('hide');
      },function () {
          
          alert("not ok");
    }).then(function () {

    });

  };



  $scope.sendUpdateImage1=function(file){
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
         $scope.selectedEnchere.idImage= response.data.response.id;

      }
    }, function () {
        //$scope.categories=response;
        alert("not ok 1");
      }).then(function () {
      // here the end of the request
    });  
  };

  $scope.sendUpdateImage2=function(file){
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
         $scope.selectedEnchere.idImage1=response.data.response.id;
      }
    }, function () {
        //$scope.categories=response;
        alert("not ok 1");
      }).then(function () {
      // here the end of the request
    });  
  };

  $scope.sendUpdateImage3=function(file){
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
         $scope.selectedEnchere.idImage2=response.data.response.id;
      }
    }, function () {
        //$scope.categories=response;
        alert("not ok 1");
      }).then(function () {
      // here the end of the request
    });  
  };

  $scope.sendUpdateImage4=function(file){
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
         $scope.selectedEnchere.idImage3=response.data.response.id;
      }
    }, function () {
        //$scope.categories=response;
        alert("not ok 1");
      }).then(function () {
      // here the end of the request
    });  
  };

  $scope.sendUpdateImage5=function(file){
    $scope.isUploading=true;
    var fd = new FormData();
    fd.append('image', file);
    $http({
      method: "POST",
      url: baseUrl+"image",
      data:fd,
      headers: {'Content-Type': undefined}
    }).then(function (respons) {
      $scope.isUploading=false;
      if(respons.data.statut=="200"){
        $scope.selectedEnchere.idImage4=respons.data.response.id;
      }
    }, function () {
        //$scope.categories=response;
        alert("not ok 1");
      }).then(function () {
      // here the end of the request
    });  
  };



 
 });


   