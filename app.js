var app = angular.module("thrivOnline", ["ui.router"]);


app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state("home", {
      url: "/",
      templateUrl: "./views/home.html",
      controller: "homeController"
    })
    .state("features", {
      url: "/features",
      templateUrl: "./views/features.html",
      controller: "featuresController"
    })
    .state("pricing", {
      url: "/pricing",
      templateUrl: "./views/pricing.html",
      controller: "pricingController"
    })
    .state("hiw", {
      url: "/howitworks",
      templateUrl: "./views/hiw.html",
      controller: "hiwController"
    })
});
