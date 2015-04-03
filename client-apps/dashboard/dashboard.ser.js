(function() {
    'use strict';
angular
    .module('myApp.dashBoard')
    .service('dashBoardList', dashBoardList);

    function dashBoardList($resource) {
	    return $resource('source_data/nav_tabs.json', {}, {
            query: {method:'GET', params:{sandbox:'sanbbox'}, isArray:false}
        });
    } // end service smokeTestList..
})();
