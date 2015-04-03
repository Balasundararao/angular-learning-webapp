(function() {
    'use strict';
    angular
        .module('myApp.dashBoard')
        .controller('DashboardController', DashboardController);
	
    function DashboardController($routeParams,dashBoardList) {
    	/* jshint validthis: true */
    	var db = this;
    	db.setTheme = setTheme;
    	function setTheme(theme) {
        	db.theme = theme;
	    }
        db.tabs = dashBoardList.get({sandbox: $routeParams.sandbox}, function(tabs) {});
    }   // end function 
})();