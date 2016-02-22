( function () {
	'use strict';

	function list () {
		return {
			'templateUrl'  : '/list/list-name.html',
			'controller'   : 'ListCtrl',
			'controllerAs' : 'lc'
		}
	}

	angular.module( 'app' )
		.directive( 'list', list );

})( );
