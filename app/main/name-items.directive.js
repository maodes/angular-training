( function () {
	'use strict';

	//@ - string
	//= - object, function, boolean
	//& - function

	function link ( scope ) {

		function increment () {
			scope.name.count++;
		}

		scope.increment = increment;

	}

	function nameItems() {
		return {
			'scope': {
				'name': '=' //string
			},
			'templateUrl' : '/main/name-template.html',
			'link'        : link
		};
	}

	angular.module( 'app' )
		.directive( 'nameItems', nameItems );

} )( );
