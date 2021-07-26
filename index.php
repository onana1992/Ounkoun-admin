<!doctype html>
<html ng-app="maayiApp" ng-controller="MainCtrl">
    <head>
        <meta charset="utf-8">
        <title >Ounkoun:admin</title>
        <meta name="description" content="">
        <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta http-equiv="Pragma" content="no-cache" />
        <meta http-equiv="Expires" content="0" />
        <link rel="shortcut icon" href="./images/logo4.gif">
        <meta name="viewport" content="width=device-width">
        <link rel="stylesheet" href="./styles/ext/bootstrap/dist/css/bootstrap.css" />
        <link href="./styles/ext/fontawesome-free-5.3.1-web/css/all.css" rel="stylesheet" type="text/css">
        <link rel="stylesheet" href="styles/ext/rzslider.css" />
        <link rel="stylesheet" href="styles/ext/jquery.webui-popover.css" />
        <link rel="stylesheet" href="//cdn.datatables.net/1.10.15/css/jquery.dataTables.min.css">
        <link rel="stylesheet" href="./styles/admin/admin.css">
    </head>
    <body>

        <!-- <a href="#" class="scrollToTop" shape="text-decoration:none;"" style="color:gray;"/>
            <i style="color:gray;font-size:25px;" class="fa fa-arrow-up"></i> <br/>Haut
        </a> -->

    	<div ng-view>   
        </div>

        <script src="./scripts/ext/jquery.js"></script>
        <script src="./scripts/ext/jquery.dataTables.min.js"></script>
        <script src="./scripts/ext/ui-bootstrap-tpls.js"></script>
        <script src="./scripts/ext/angular-sanitize.js"></script>
        <script src="./scripts/ext/bootstrap.js"></script>
        <script src="scripts/ext/angular.js"></script>
        <script src="./scripts/app.js"></script>
        <script src="./scripts/ext/angular-datatables.min.js"></script>
        <script src="./scripts/ext/angular-animate.js"></script>
        <script src="./scripts/controllers/main.js"></script>
        <script src="./scripts/ext/angular-route.js"></script>
        <script src="./scripts/ext/angular-ui-router.min.js"></script>
        <script src="./scripts/ext/ng-file-upload-shim.min.js"></script>
        <script src="./scripts/ext/ng-file-upload.min.js"></script>
        <script src="./scripts/ext/jquery.webui-popover.js"></script>
        <script src="./scripts/ext/angular-ezplus.js" ></script>
        <script src="./scripts/ext/satellizer.js"></script>
        <script src="./scripts/ext/re-tree.js" ></script>
        

        
        
        
        <script src="./scripts/controllers/admin/adminMarqueCtrl.js"></script>
        <script src="./scripts/controllers/admin/adminCategoryCtrl.js"></script>
        <script src="./scripts/controllers/admin/adminSCategoryCtrl.js"></script>
        <script src="./scripts/controllers/admin/adminSSCategoryCtrl.js"></script>
        <script src="./scripts/controllers/admin/adminProduitCtrl.js"></script>
        <script src="./scripts/controllers/admin/adminModelCtrl.js"></script>
        <script src="./scripts/controllers/admin/adminCommandeCtrl.js"></script>
        <script src="./scripts/controllers/admin/adminCommandeCtrl.js"></script>
        <script src="./scripts/controllers/admin/adminCommandeDetailCtrl.js"></script>
        <script src="./scripts/controllers/admin/adminVendeurCtrl.js"></script>
        <script src="./scripts/controllers/admin/adminBaniereCtrl.js"></script>
        <script src="./scripts/controllers/admin/adminEnchereCtrl.js"></script>
        <script src="./scripts/factory/LSFactory.js"></script>
        <script src="./scripts/factory/authFactory.js"></script>
        <script src="./scripts/factory/panierFactory.js"></script>
        <script src="./scripts/factory/panierBWMFactory.js"></script>
        <script src="./scripts/factory/favorisFactory.js"></script>
        <script src="./scripts/factory/commandFactory.js"></script>
        <script type="text/javascript" src="./scripts/jquery.picZoomer.js"></script>

        </script>
        <script type="text/javascript">
            $(document).ready(function(){
    
    //Check to see if the window is top if not then display button
     $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });
    
    //Click event to scroll to top
    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},400);
        return false;
    });
    
    });

    $(window).scroll(function(){
    if ($(window).scrollTop() >= 40) {
       $('#nav-menu').addClass('fixed-header');
    }
    else {
       $('#nav-menu').removeClass('fixed-header');
    }
    });

    </script> 
        

    </body>