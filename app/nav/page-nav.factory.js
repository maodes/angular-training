( function () {
	'use strict';

	function pageNav () {

		var nav = [ {
			'state'   : '/home',
			'navName' : 'HOME'
		}, {
			'state'   : '/list',
			'navName' : 'LIST'
		}, {
			'state'   : '/manage',
			'navName' : 'MANAGE'
		} ];

		function getNav () {
			return nav;
		}

		return {
			'getNav' : getNav
		}
	}

	angular.module( 'app' )
		.factory( 'pageNav', pageNav );

} )( );
