// Ionic Starter App

var db = null;
// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','ui.router','starter.controllers', 'ngCordova'])

.run(function ($ionicPlatform, $cordovaSQLite) {
	$ionicPlatform.ready(function () {
		if (window.cordova && window.cordova.plugins.Keyboard) {
			// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
			// for form inputs)
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

			// Don't remove this line unless you know what you are doing. It stops the viewport
			// from snapping when text inputs are focused. Ionic handles this internally for
			// a much nicer keyboard experience.
			cordova.plugins.Keyboard.disableScroll(true);
		}
		if (window.StatusBar) {
			StatusBar.styleDefault();
		}
        
//        
//        db = $cordovaSQLite.openDB("my.db");
//        $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS people (id integer primary key, firstname text, lastname text)");
	});
})
.config(function ($stateProvider, $urlRouterProvider) {
    
	$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: 'template/home.html',
			controller: 'AppCntrl'
		})

	// setup an abstract state for the tabs directive
	.state('hospital', {
		url: '/hospital',
		cache: false,
		//		 abstract: true,
		templateUrl: 'template/hospital_login.html',
		controller: 'hospitalCtrl'
	})

	// Each tab has its own nav history stack:
	.state('donor', {
			url: '/donor',
			cache: false,
			//		 abstract: true,
			templateUrl: 'template/donor_login.html',
			controller: 'donorCtrl'
		})
		// Each tab has its own nav history stack:
		.state('whyToDonate', {
			url: '/whyToDonate',
			cache: false,
			//		 abstract: true,
			templateUrl: 'template/why_to_donate.html',
			controller: 'whyToDonateCtrl'
		})
        .state('hospital_home', {
            url: '/hospital_home', 
            cache: false, 
            templateUrl: 'template/hospital_home.html',
            controller: 'hospitalHomeCtrl'
        })
        .state('donor_signup', {
            url: '/donor_signup', 
            cache: false, 
            templateUrl: 'template/signUp.html',
            controller: 'donorsignupCtrl'
        })
		// if none of the above states are matched, use this as the fallback
	$urlRouterProvider.otherwise('/home');

});