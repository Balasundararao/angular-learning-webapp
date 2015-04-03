(function() {
    'use strict';
    angular.module('myApp', [
      'myApp.dashBoard',
      'ngRoute',
      'ngResource',        
      'ngCookies',
  	 'ngSanitize'
    ]).constant('version', 'v0.1.0').  constant('UTILS', {
    	findOne: function (array, cb) {
      	var results = [];
      	array.forEach(function (item) {
        	if (cb(item)) { results.push(item); }
      	});
      	if (results.length === 0) { return; }
      	if (results.length === 1) { return results[0]; }
      	throw "too many results";
    	}
  	}).config(function ($locationProvider, $routeProvider) {
        $locationProvider.html5Mode(false);
        $routeProvider.when('/',           {templateUrl: 'client-apps/dashboard/dashboard-index.tpl.html'})
        $routeProvider.when('/http-basics', {templateUrl: 'client-apps/dashboard/dashboard-index.tpl.html'})
        $routeProvider.when('/html-fundamentals', {templateUrl: 'client-apps/dashboard/dashboard-index.tpl.html'})
        $routeProvider.when('/html-structure-semantics', {templateUrl: 'client-apps/dashboard/dashboard-index.tpl.html'})
        $routeProvider.when('/html-forms', {templateUrl: 'client-apps/dashboard/dashboard-index.tpl.html'})
        $routeProvider.when('/html-audio-video', {templateUrl: 'client-apps/dashboard/dashboard-index.tpl.html'})
        $routeProvider.when('/html-create-email', {templateUrl: 'client-apps/dashboard/dashboard-index.tpl.html'})
        $routeProvider.when('/css-fundamentals', {templateUrl: 'client-apps/dashboard/dashboard-index.tpl.html'})
        $routeProvider.when('/css-typography', {templateUrl: 'client-apps/dashboard/dashboard-index.tpl.html'})
        $routeProvider.when('/css-boxmodel', {templateUrl: 'client-apps/dashboard/dashboard-index.tpl.html'})
        $routeProvider.when('/css-layouts', {templateUrl: 'client-apps/dashboard/dashboard-index.tpl.html'})
        $routeProvider.when('/css-responsivewebdesign', {templateUrl: 'client-apps/dashboard/dashboard-index.tpl.html'})
        $routeProvider.when('/tools-bower-basics', {templateUrl: 'client-apps/dashboard/dashboard-index.tpl.html'})
        $routeProvider.when('/tools-github-basics', {templateUrl: 'client-apps/dashboard/dashboard-index.tpl.html'})
        $routeProvider.when('/tools-grunt-basics', {templateUrl: 'client-apps/dashboard/dashboard-index.tpl.html'})
        $routeProvider.when('/tools-gulp-basics', {templateUrl: 'client-apps/dashboard/dashboard-index.tpl.html'})
        $routeProvider.when('/tools-npm-basics', {templateUrl: 'client-apps/dashboard/dashboard-index.tpl.html'})
        $routeProvider.when('/tools-yeoman-basics', {templateUrl: 'client-apps/dashboard/dashboard-index.tpl.html'})
        .otherwise({redirectTo: '/'});
    });
})();

