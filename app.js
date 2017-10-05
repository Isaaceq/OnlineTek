var app = angular.module("thrivOnline", ['ui.router'])

app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('app', {
    abstract: true,
    url: '',
    templateUrl: './views/app-container.html',
    controller: 'appController'
    })
    .state("home", {
      url: "/",
      templateUrl: "./views/home.html",
      controller: "homeController",
      metaTags: {
      title: "",
      description: ""
    }
    })
    .state("app.features", {
      url: "/features",
      templateUrl: "./views/features.html",
      controller: "featuresController",
      metaTags: {
      title: "",
      description: ""
    }

    })
    .state("app.pricing", {
      url: "/pricing",
      templateUrl: "./views/pricing.html",
      controller: "pricingController",
      metaTags: {
      title: "",
      description: ""
    }

    })
    .state("app.hiw", {
      url: "/howitworks",
      templateUrl: "./views/hiw.html",
      controller: "hiwController",
      metaTags: {
      title: "",
      description: ""
    }
    })
});
