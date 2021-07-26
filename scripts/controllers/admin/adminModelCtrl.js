
angular.module('maayiApp')
.controller('AdminModelCtrl', function ($scope,$http,baseUrl,$interval,$location,$rootScope,$routeParams){
  
  $scope.baseUrl=baseUrl;
  $scope.isUploading=false;
  $scope.Categorie-null;
  $scope.urlBaniere=null;
  $scope.isLoading=false;
  $scope.isNotSucceed=false;
  $scope.actualCategorie= null;
  $scope.caracteritiques=[];
  $scope.requireValue = true;
  $scope.selectedModel=null;
  $scope.caracteritiques=[];
  $scope.productName= $routeParams["name"];

  //alert(decode($routeParams["name"]));

  $scope.details=[];
  $scope.quantity=null;
  $scope.weight=null;
  $scope.taille=null;
  $scope.popularity=null;
  $scope.id_bigPhoto1=null;
  $scope.id_bigPhoto2=null;
  $scope.id_bigPhoto3=null;
  $scope.id_bigPhoto4=null;
  $scope.id_photo=null;
  $scope.venteEnDetail=true;
  $scope.venteEnBuyWithMe=false;
  $scope.venteEnGros=false;
  $scope.isDetailInPromotion={'value':false};
  $scope.isGrosInPromotion={'value':false};
  $scope.isPersonalizable={'value':false};
  $scope.isBWMPersonalizable={'value':false};
  $scope.isActivated ={'value':true};
  $scope.isVirtual ={'value':false};
  $scope.retailSale={};
  $scope.wholeSale={};
  $scope.BuyWithMeSale={};
  $scope.matchPatternLogin = new RegExp("^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$");
  $scope.dateFinDetailPromo={};
  $scope.dateFinGrosPromo={};
  $scope.vendeurs=[];
  $scope.selectedVendeur=[];
  


  $http.get($scope.baseUrl+"product/models/"+$scope.productName).then(function (response) {
    $scope.statut= response.data.statut
    $scope.models = response.data.data.product;
   }, function () {
      //alert("not ok");
      }).then(function () {
  });

  $http.get(baseUrl+"marque/all").then(function (response){
    $scope.statut= response.data.statut;
    $scope.marques = response.data.data;
   }, function () {
      //alert("not ok");
      }).then(function () {
  });


  $scope.ajouterCar= function(){
    $scope.caracteritiques.push({ 'name':null, 'unity': "", 'value':null });
  };


  $http.get(baseUrl+"boutique/all").then(function (response) {
    $scope.statut= response.data.statut;
    $scope.vendeurs = response.data.data;
   }, function () {
      //alert("not ok");
      }).then(function () {
  });

  $scope.ajouterCar1= function(){
    $scope.selectedModel.productCar.push({ 'name':null, 'unity': "", 'value':null });
  };

   $scope.ajouterCar2= function(){
    $scope.selectedModel.modelCar.push({'name':null, 'unity': "", 'value':null});
  };

  $scope.retirerCar= function(i){
    angular.forEach($scope.caracteritiques, function (value, key){
      if(key==i){
          $scope.caracteritiques.splice(key, 1);
        }
     });
  };

  $scope.retirerCar1= function(i){
    angular.forEach($scope.selectedModel.productCar, function (value, key) {
      if(key==i){
          $scope.selectedModel.productCar.splice(key, 1);
        }
     });
  };

  $scope.retirerCar2= function(i){
    angular.forEach($scope.selectedModel.modelCar, function (value, key) {
      if(key==i){
          $scope.selectedModel.modelCar.splice(key, 1);
        }
     });
  };

  $scope.ajouterDetail= function(){
    $scope.details.push({ 'name':null,'value':null });
  };

  $scope.ajouterDetail2= function(){
    $scope.selectedModel.detail.push({ 'name':null,'value':null });
  };

  $scope.retirerDetail2= function(i){
    angular.forEach($scope.selectedModel.detail, function (value, key) {
      if(key==i){
          $scope.selectedModel.detail.splice(key, 1);
        }
     });
  };

  $scope.retirerDetail= function(i){
    angular.forEach($scope.details, function (value, key) {
      if(key==i){
          $scope.details.splice(key, 1);
        }
     });
  };


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
         $scope.selectedModel.idImage= response.data.response.id;

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
         $scope.selectedModel.idBigImage1=response.data.response.id;
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
         $scope.selectedModel.idBigImage2=response.data.response.id;
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
         $scope.selectedModel.idBigImage3=response.data.response.id;
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
        $scope.selectedModel.idBigImage4=respons.data.response.id;
      }
    }, function () {
        //$scope.categories=response;
        alert("not ok 1");
      }).then(function () {
      // here the end of the request
    });  
  };

  $scope.createModel=function(){ 
    $scope.retailSale1=null;
    $scope.wholeSale1=null;
    if($scope.venteEnDetail){
      $scope.retailSale1={'price':$scope.retailSale.prix,'promoPrice':$scope.retailSale.promoPrice,'isInPromotion':$scope.isDetailInPromotion.value,'endPromotionDate':$scope.dateFinDetailPromo.value};
    }
    else{
      $scope.retailSale1=null; 
    }

    if($scope.venteEnGros){
    $scope.wholeSale1={'price':$scope.wholeSale.prix,'promoPrice':$scope.wholeSale.promoPrice,'isInPromotion':$scope.isGrosInPromotion.value,
    'isPersonalizable':$scope.isPersonalizable.value,'endPromotionDate':$scope.dateFinGrosPromo.value,
    'lotQuantity':$scope.wholeSale.quantiteParLot};
    }
    else{
      $scope.wholeSale1=null;
    }

    if($scope.venteEnBuyWithMe){
    $scope.venteEnBuyWithMe={ 'price':$scope.BuyWithMeSale.prix,
                              'isPersonalizable':$scope.isBWMPersonalizable.value,
                              'lotQuantity':$scope.BuyWithMeSale.quantiteParLot,
                              'duree':$scope.BuyWithMeSale.duree
                            };
    }
    else{
      $scope.venteEnBuyWithMe=null;
    }


    $scope.myobject = {'nameProduct':$scope.productName,'quantity':$scope.quantity.value,'popularity':$scope.popularity.value,'taille':$scope.taille.value,'weight':$scope.weight.value,'modelCar':angular.toJson($scope.caracteritiques),'idImage':$scope.id_photo,
    'idBigImage1':$scope.id_bigPhoto1,'idBigImage2':$scope.id_bigPhoto2,'idBigImage3':$scope.id_bigPhoto3,
    'idBigImage4':$scope.id_bigPhoto4,'modelDetail':angular.toJson($scope.details),'retailSale':angular.toJson($scope.retailSale1),'wholeSale'
    : angular.toJson($scope.wholeSale1),'BuyWithMeSale'
    : angular.toJson($scope.venteEnBuyWithMe),'idVendeur':$scope.selectedVendeur.id,'isVirtual':$scope.isVirtual.value};

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
      url: baseUrl+"product/model",
      data:Object.toparams($scope.myobject),
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    }).then(function (response) {
        $scope.statut = response.data.statut;
        $scope.isLoading=false;
        if($scope.statut=="200"){ 
          $scope.isNotSucceed=false;
          $scope.models=[];
          $http.get(baseUrl+"product/models/"+$scope.productName).then(function (response) {
          $scope.statut= response.data.statut
          $scope.models = response.data.data.product;
           }, function () {
              //alert("not ok");
              }).then(function () {
          }); 

          $('#createModel').modal('hide');

          
          } else{
            $scope.isNotSucceed=true;
          }   
            $scope.isLoading=false;
        }, function () {
            $scope.isLoading=false;
        }).then(function () {

        });
  };

  $scope.modifiedModel=function(){

    $scope.retailSale1=null;
    $scope.wholeSale1=null;

    if($scope.selectedModel.BWMSale.length==0){
      $scope.venteEnBuyWithMe=null;
    }
    

    $scope.myobject = {'old_name':$scope.old_name,'name':$scope.selectedModel.name,'description':$scope.selectedModel.description,'quantity':$scope.selectedModel.quantity,'taille':$scope.selectedModel.taille,'popularity':$scope.selectedModel.popularity,'weight':$scope.selectedModel.weight,'modelCar':angular.toJson($scope.selectedModel.caracteritiques),'idImage':$scope.selectedModel.idImage,
    'idBigImage1':$scope.selectedModel.idBigImage1,'idBigImage2':$scope.selectedModel.idBigImage2,'idBigImage3':$scope.selectedModel.idBigImage3,'isActivated':$scope.isActivated.value,
    'idBigImage4':$scope.selectedModel.idBigImage4,'modelCar':angular.toJson($scope.selectedModel.modelCar),'productCar':angular.toJson($scope.selectedModel.productCar),'modelDetail':angular.toJson($scope.selectedModel.detail),
    'retailSale':angular.toJson($scope.selectedModel.retailSale), 'BuyWithMeSale': angular.toJson($scope.selectedModel.BWMSale),'idVendeur':$scope.selectedModel.boutique.id,'marque':angular.toJson($scope.selectedModel.marque)
    ,'isVirtual':$scope.isVirtual.value};

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
      url: baseUrl+"product/model/modify",
      data:Object.toparams($scope.myobject),
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    }).then(function (response) {
        $scope.statut = response.data.statut;
        $scope.isLoading=false;
        if($scope.statut=="200"){ 
          $scope.isNotSucceed=false;
          $scope.models=[];
          $http.get(baseUrl+"product/models/"+$scope.productName).then(function (response) {
          $scope.statut= response.data.statut
          $scope.models = response.data.data.product;
           }, function () {
              //alert("not ok");
              }).then(function () {
          }); 

          $('#modifiedModel').modal('hide');

          
          } else{
            $scope.isNotSucceed=true;
          }   
            $scope.isLoading=false;
        }, function () {
            $scope.isLoading=false;
        }).then(function () {

        });
  };



  $scope.selectModel= function(product){
   $scope.selectedModel=product;
   $scope.old_name = product.name;
   $scope.selectedModel.retailSale.endPromotionDate=$scope.selectedModel.retailSale.endPromotionDate.date.split(" ")[0];
  };

  $scope.annulerSupprimerProduct= function(){
   $('#deleteProduit').modal('hide');
  };

  $scope.ConfirmSupprimerModel=function(){

      $scope.isLoading=true;
      var myobject = {'idModel':$scope.selectedModel.id};
      Object.toparams = function ObjecttoParams(obj) {
        var p = [];
        for (var key in obj) {
          p.push(key + '=' + encodeURIComponent(obj[key]));
        }
          return p.join('&');
      }

      $http({
        method: "POST",
        url: baseUrl+"product/model/delete",
        data:Object.toparams(myobject),
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      }).then(function (response) {
        $scope.isLoading=false;
        for (var i = 0; i < $scope.models.length; i++) {
          if($scope.models[i].id == $scope.selectedModel.id){
            $scope.models.splice(i, 1);
          } 
        }
        $('#deleteModel').modal('hide');
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
      url: "http://localhost/maayi/web/app_dev.php/image",
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

  

 });


   