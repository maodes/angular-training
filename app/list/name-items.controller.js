( function () {
	'use strict';

	function nameItemsCtrl () {
		var self = this;

		self.edit = false;
	}

	angular.module( 'app' )
		.controller( 'nameItemsCtrl', nameItemsCtrl );

} )( );
