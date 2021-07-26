angular.module('maayiApp')
.controller('AdminProduitCtrl', function ($scope,$http,$interval,baseUrl,$location,$rootScope,$routeParams){
  	
  $scope.baseUrl=baseUrl;
  $scope.isUploading=false;
  $scope.Categorie-null;
  $scope.urlBaniere=null;
  $scope.isLoading=false;
  $scope.isNotSucceed=false;
  $scope.actualCategorie= null;
  $scope.caracteritiques=[];
  $scope.requireValue = true;
  $scope.selectedProduct=null;
  $scope.caracteritiques=[];
  $scope.vendeurs=[];
  $scope.selectedVendeur = [];
 $scope.selectedProduct=[];

  $http.get(baseUrl+"product/all").then(function (response) {
    $scope.statut= response.data.statut;
    $scope.produits = response.data.data;
   }, function () {
      //alert("not ok");
      }).then(function () {
  });

  $http.get(baseUrl+"boutique/all").then(function (response) {
    $scope.statut= response.data.statut;
    $scope.vendeurs = response.data.data;
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

  $http.get(baseUrl+"category/all").then(function (response) {
    $scope.statut= response.data.statut;
    $scope.categories = response.data.data;
   }, function () {
      //alert("not ok");
      }).then(function () {
  });

  


  /*$scope.ajouterCar= function(){
    $scope.selectedProduct.productCar.push({ 'name':null, 'unity': "", 'value':null });
  };*/

  $scope.ajouterCar= function(){
    $scope.caracteritiques.push({ 'name':null, 'unity': "", 'value':null });
  };

  $scope.retirerCar= function(i){

    angular.forEach($scope.caracteritiques, function (value, key){
      if(key==i){
          $scope.caracteritiques.splice(key, 1);
        }
     });
  };

  $scope.ajouterCar1= function(){
    $scope.selectedProduct.productCar.push({ 'name':null, 'unity': "", 'value':null });
  };

  $scope.retirerCar1= function(i){
    angular.forEach($scope.selectedModel.productCar, function (value, key) {
      if(key==i){
          $scope.selectedProduct.productCar.splice(key, 1);
        }
     });
  };

  

  $scope.selectedSCategory={"value":{"id":null}};
  $scope.selectedSSCategory={"value":{"id":null}};

  $scope.changeCat= function(product){
    $scope.selectedSCategory={"value":{"id":null}};
   $scope.selectedSSCategory={"value":{"id":null}};
  };

  $scope.changeSCat= function(product){
   $scope.selectedSSCategory={"value":{"id":null}};
  };

  $scope.createProduit=function(){
    var myobject = {'name':$scope.nom,'marque':angular.toJson($scope.selectedMarque),'description':$scope.description,
    'name_category':$scope.selectedCategory.name,'name_scategory':$scope.selectedSCategory.value.name,
    'name_sscategory':$scope.selectedSSCategory.value.name,'product_car':angular.toJson($scope.caracteritiques)
    };
    
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
      url: baseUrl+"product",
      data:Object.toparams(myobject),
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    }).then(function (response) {
        $scope.statut = response.data.statut;
        $scope.isLoading=false;
        if($scope.statut=="200"){ 
          $scope.isNotSucceed=false;  
          $('#createcategorie').modal('hide');

          $http.get(baseUrl+"product/all").then(function (response) {
            $scope.statut= response.data.statut;
             $scope.produits =[];
             $scope.produits =response.data.data;
          }, function () {
              //alert("not ok");
             }).then(function () {
          });
            $('#createProduit').modal('hide');
        } else{
            $scope.isNotSucceed=true;
        }   

        }, function () {
          
            $scope.isLoading=false;
        }).then(function () {

        });
  };

  $scope.selectProduct= function(product){
    $scope.selectedProduct=product;
  };

  $scope.encode= function(val){
   return encodeURI(val);
  }

  $scope.annulerSupprimerProduct= function(){
   $('#deleteProduit').modal('hide');
  };

  $scope.ConfirmSupprimerProduit=function(){

      $scope.isLoading=true;
      var myobject = {'id_product':$scope.selectedProduct.id};
      Object.toparams = function ObjecttoParams(obj) {
        var p = [];
        for (var key in obj) {
          p.push(key + '=' + encodeURIComponent(obj[key]));
        }
          return p.join('&');
      }

      $http({
        method: "POST",
        url: baseUrl+"product/delete",
        data:Object.toparams(myobject),
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      }).then(function (response) {
        $scope.isLoading=false;
        for (var i = 0; i < $scope.produits.length; i++) {
          if($scope.produits[i].id == $scope.selectedProduct.id){
            $scope.produits.splice(i, 1);
          } 
        }
        $('#deleteProduit').modal('hide');
      
      },function () {
          
          alert("not ok");
    }).then(function () {

    });
  };

  $scope.modifyProduit=function(){

    var myobject = {'id_product':$scope.selectedProduct.id,'name':$scope.selectedProduct.name,'marque':angular.toJson($scope.selectedProduct.marque),'description':$scope.selectedProduct.description,
    'name_category':$scope.selectedProduct.idCategory,'name_scategory':$scope.selectedProduct.idScategory,
    'name_sscategory':$scope.selectedProduct.idSScategory,'product_car':angular.toJson($scope.selectedProduct.productCar),'model_car':angular.toJson($scope.caracteritiques)
    };
    
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
      url: baseUrl+"product/modify",
      data:Object.toparams(myobject),
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    }).then(function (response) {
        $scope.statut = response.data.statut;
        $scope.isLoading=false;
        if($scope.statut=="200"){ 
          $scope.isNotSucceed=false;  
          $('#createcategorie').modal('hide');

          $http.get(baseUrl+"product/all").then(function (response) {
            $scope.statut= response.data.statut;
             $scope.produits =[];
             $scope.produits =response.data.data;
          }, function () {
              //alert("not ok");
             }).then(function () {
          });
            $('#modifyProduct').modal('hide');
        } else{
            $scope.isNotSucceed=true;
        }   

        }, function () {
          
            $scope.isLoading=false;
        }).then(function () {

        });
    };

 });


   