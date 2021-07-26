'use strict';

/**
 * @ngdoc function
 * @name maayiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the maayiApp
 */
angular.module('maayiApp')
  .controller('MainCtrl', function (/*AuthFactory,baseUrl,deviceDetector,PanierFactory,PanierBWMFactory,FavorisFactory,$scope,$http,$interval,$location,$rootScope,$state,$timeout*/) {

//djds4rce.angular-socialshare
   /*$scope.baseUrl=baseUrl;
   $scope.status=0;
   $scope.products=[];
   $scope.categories=[];
   $scope.slideVisible=false;
   $rootScope.choosedCategory="null";
   $rootScope.extractedMarque="null";
   $rootScope.products="null";
   $rootScope.idSearchCategory="null";
   $rootScope.nomSearchCategory="Electromenager"
   $rootScope.filterOption="filter-by-popularity";
   $rootScope.filterMinPrice="null";
   $rootScope.filterMaxPrice="null";
   $rootScope.filterMarque="null";
   $rootScope.plusGrandPrix=60000;
   $rootScope.plusPetitPrix=2000;
   $scope.filterValue="plus rescent";
   $scope.choosedSCategory=null;
   $scope.choosedSSCategory=null;
   $rootScope.products=null;
   $rootScope.searchText="";
   $rootScope.panierSize=0;
   $rootScope.panierBWMSize=0;
   $rootScope.favoriteSize=0;
   $scope.rubanVisible=false;
   $rootScope.searchCat="null";
   $scope.searchCat1="Toutes les categories";
   $scope.slideVisible= false;
   $scope.marques=[];

   $rootScope.title=" Ounkoun:Votre centre commercial en ligne - Site d'achats groupés"


   $scope.route=$location.path();
   $timeout(function(){
   // $state.go($location.path());

    $location.path($scope.route);
  },5)
   
   
 

  $scope.callback = function(response){
    console.log(response);
    alert('share callback');
  }
   
    var vm = this;
    vm.data = deviceDetector;
    if(vm.data.device=="android"){
      document.location.href="http://www.mondomaine.com";
    };


  // extraction des meilleurs marques
  $http.get(baseUrl+"marque/all").then(function (response) {
  $scope.statut= response.data.statut;
    $scope.marques= response.data.data;
    $scope.slideVisible= true;
    for(var i=0; i< $scope.marques.length; i++){
      $scope.marques[i].url = $scope.baseUrl;

    }

  }, function () {
      //("not ok");
      }).then(function () {
  });


   $scope.taillePanier=function(panier){
     var taille=0;
    for (var i = 0; i < panier.length; i++) {
          taille+= parseInt(panier[i].number)    
    }
    return taille;
  }

  $scope.deconnecter= function(){
      $rootScope.isConnected=false;
      AuthFactory.deleteAuth();
      PanierFactory.deletePanier();
      PanierBWMFactory.deletePanier();
      FavorisFactory.deleteFavoris();
      $rootScope.panierSize=0;
      $rootScope.panierBWMSize=0;
      $rootScope.favoriteSize=0;
      $location.path("/");
  };
  
   //initialisation du nombre d'element dans les favoris
   if(FavorisFactory.getFavoris()!=null){
        $rootScope.favoriteSize=FavorisFactory.getFavoris().length;
   }
   
  // initialisation du nombre d'elements dans le panier
   if(PanierFactory.getPanier()!=null){
      var panier= PanierFactory.getPanier();
      $rootScope.panierSize=  $scope.taillePanier(PanierFactory.getPanier());
   }

   // initialisation du nombre d'elements dans le panier BWM
   if(PanierBWMFactory.getPanier()!=null){
      var panierBWM= PanierBWMFactory.getPanier();
      $rootScope.panierBWMSize=  $scope.taillePanier(PanierBWMFactory.getPanier());
   }
   
   
   // connection a l'entree de l'application
    $rootScope.token=null;
    $rootScope.log_login=null;
    
    if(AuthFactory.getKeepConnected()){
     $rootScope.token= AuthFactory.getToken();
     $rootScope.user= AuthFactory.getUser();
    }
    else{
      $scope.deconnecter();
    }

    if($rootScope.token!= null){
        $rootScope.isConnected=true;
    }
    else{
      $rootScope.isConnected=false;
    }

  
    $scope.launch = function (text,cat) {
      //$scope.filterOption=valeur;
      if(text!=""){
        $location.path("/recherche/"+text+"/1/filter-by-popularity/null/null/null/"+cat);
      }
    };

    $scope.research= function (text) {
      if(text.length>0){
          // extraction des produits et marque
          $http.get(baseUrl+"product/model/search/"+text+"/1/filter-by-popularity/null/null/null/null").then(function (response) {
          $scope.statut= response.data.statut;
          $scope.products=[];
          $scope.products= response.data.data.products;
          $scope.searchCategories= response.data.data.categories;
          $scope.searchMarques= response.data.data.marques;
          $scope.size=response.data.data.size;
          $scope.isLoaded=true; 
          }, function () {
          alert("not ok");
          }).then(function () {
            //alert("fin");
          });
      }else{
         $scope.products=[];
      }
    };


  $scope.stopSearch=function(){
      $timeout(function () {
        $scope.rubanVisible=false;
         $scope.products=[];
      }, 1000);
  }

  $scope.connect = function(activeNav){
    $rootScope.isConnected=true;
  };

  $scope.disconnect = function(activeNav){
     $rootScope.isConnected=false;
  };

  $scope.search = function (searchText) {
      $state.go('recherche');
  };

  $scope.view = function() {
      $state.go('produit');
  };
*/
  

  });
