( function () {
	'use strict';

	function nav () {
		return {
			'templateUrl'  : '/nav/nav.html',
			'controller'   : 'NavCtrl',
			'controllerAs' : 'vm'
		}
	}

	angular.module( 'app' )
		.directive( 'nav', nav );

} )();
