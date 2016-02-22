( function () {
	'use strict';

	function ListCtrl ( listFactory ) {
		var self = this;

		self.list = listFactory.getList;

		console.log( self.list );
	}

	angular.module( 'app' )
		.controller( "ListCtrl", ListCtrl );

	ListCtrl.$inject = [ 'listFactory' ];

} )( );
