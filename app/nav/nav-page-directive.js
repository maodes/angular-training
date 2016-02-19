( function () {
	'use strict';

	function navList () {
		return {
			'templateUrl'  : '/nav/nav.html',
			'controller'   : 'NavCtrl',
			'controllerAs' : 'nc'
		}
	}

	angular.module( 'app' )
		.directive( 'navList', navList );

} )();
