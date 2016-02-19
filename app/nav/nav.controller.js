( function () {
	'use strict';

	function NavCtrl ( pageNav ) {
		var self = this;

		self.nav = pageNav.getNav();

		console.log(self.nav);
	}

	angular.module( 'app' )
		.controller( 'NavCtrl', NavCtrl);

	NavCtrl.$inject = [ 'pageNav' ];

} )( );
