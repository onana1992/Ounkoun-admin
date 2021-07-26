'use strict';
angular.module('maayiApp',['ngRoute','ngFileUpload','datatables',])
.constant('baseUrl', "https://node16375-ounkoun1.hidora.com/backend/web/app_dev.php/")
.config(function($routeProvider) {

   // $locationProvider.html5Mode({ enabled: true, requireBase: true });
    //$locationProvider.baseHref = "/";
    
    $routeProvider

    .when("/admin", {
         templateUrl: 'views/admin/home.html'
    })

    .when("/admin/marques", {
         templateUrl: 'views/admin/marques.html'
    })

    .when("/admin/categories", {
         templateUrl: 'views/admin/categories.html'
    })

    .when("/admin/categorie/:name", {
         templateUrl: 'views/admin/SCategories.html'
    })

    .when("/admin/categorie/:catname/:scatname", {
         templateUrl: 'views/admin/SSCategory.html'
    })


    .when("/admin/produits", {
         templateUrl: 'views/admin/produits.html'
    })

    .when("/admin/produits/:name", {
         templateUrl: 'views/admin/model.html'
    })

    .when("/admin/utlisateurs", {
         templateUrl: 'views/admin/utilisateurs.html'
    })

    .when("/admin/boutique", {
         templateUrl: 'views/admin/vendeurs.html'
    })

     .when("/admin/commandes", {
         templateUrl: 'views/admin/commandes.html'
    })

    .when("/admin/commande/detail/:reference", {
         templateUrl: 'views/admin/commandeDetail.html'
    })

    .when("/admin/notifications", {
         templateUrl: 'views/admin/notifications.html'
    })

    .when("/admin/bannieres", {
         templateUrl: 'views/admin/banniere.html'
    })

    .when("/admin/encheres", {
         templateUrl: 'views/admin/enchere.html'
    })

    .when("/", {
        templateUrl: "views/admin/home.html"
    })



    .otherwise({
        templateUrl: 'views/admin/home.html'
   });
});

/*
angular.module('maayiApp',['ui.bootstrap','ngRoute','720kb.socialshare','djds4rce.angular-socialshare','ng.deviceDetector','ui.router','rzModule','ngFileUpload','datatables','satellizer','ui.carousel','ngLocalize'])

.constant('baseUrl', "https://node16375-ounkoun1.hidora.com/backend/web/app_dev.php/")
.directive('ngElevateZoom', function() {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      console.log("Linking");

      //Will watch for changes on the attribute
      attrs.$observe('zoomImage',function(){
        linkElevateZoom();
      })
      
      function linkElevateZoom(){
        //Check if its not empty
        if (!attrs.zoomImage) return;
        element.attr('data-zoom-image',attrs.zoomImage);
        $(element).elevateZoom();
      }
      
      linkElevateZoom();

    }
  };
})

.directive('starRating',
    function() {
        return {
            restrict : 'A',
            template : '<ul class="rating">'
                     + '    <li ng-repeat="star in stars" ng-class="star" ng-click="toggle($index)">'
                     + '\u2605'
                     + '</li>'
                     + '</ul>',
            scope : {
                ratingValue : '=',
                max : '=',
                onRatingSelected : '&'
            },
            link : function(scope, elem, attrs) {
                var updateStars = function() {
                    scope.stars = [];
                    for ( var i = 0; i < scope.max; i++) {
                        scope.stars.push({
                            filled : i < scope.ratingValue
                        });
                    }
                };
                
                scope.toggle = function(index) {
                    scope.ratingValue = index + 1;
                    scope.onRatingSelected({
                        rating : index + 1
                    });
                };
                
                scope.$watch('ratingValue',
                    function(oldVal, newVal) {
                        if (newVal) {
                            updateStars();
                        }
                    }
                );
            }
        };
    }
)

.run(['Carousel', (Carousel) => {
  Carousel.setOptions({
    arrows: true,
    autoplay: false,
    autoplaySpeed: 3000,
    cssEase: 'ease',
    dots: false,
    easing: 'linear',
    fade: false,
    infinite: true,
    initialSlide: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
  });
}])


.config(function($stateProvider,$routeProvider, $urlRouterProvider,$locationProvider,$authProvider) {

   // $locationProvider.html5Mode({ enabled: true, requireBase: true });
	  //$locationProvider.baseHref = "/";
    
    $routeProvider

    .when("/admin", {
         templateUrl: './views/admin/home.html'
    })

    .when("/admin/marques", {
         templateUrl: './views/admin/marques.html'
    })

    .when("/admin/categories", {
         templateUrl: './views/admin/categories.html'
    })

    .when("/admin/categorie/:name", {
         templateUrl: './views/admin/SCategories.html'
    })

    .when("/admin/categorie/:catname/:scatname", {
         templateUrl: './views/admin/SSCategory.html'
    })


    .when("/admin/produits", {
         templateUrl: './views/admin/produits.html'
    })

    .when("/admin/produits/:name", {
         templateUrl: './views/admin/model.html'
    })

    .when("/admin/utlisateurs", {
         templateUrl: './views/admin/utilisateurs.html'
    })

    .when("/admin/boutique", {
         templateUrl: './views/admin/vendeurs.html'
    })

     .when("/admin/commandes", {
         templateUrl: './views/admin/commandes.html'
    })

    .when("/admin/commande/detail/:reference", {
         templateUrl: './views/admin/commandeDetail.html'
    })

    .when("/admin/notifications", {
         templateUrl: './views/admin/notifications.html'
    })

    .when("/", {
        templateUrl: "./views/admin/home.html"
    })

    .otherwise({
        templateUrl: './views/admin/home.html'
   });


});
*/