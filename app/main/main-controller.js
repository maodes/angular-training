( function () {
	'use strict';

	function MainCtrl ( listFactory ) {
		var self = this;

		self.firstName   = '';
		self.lastName    = '';
		self.listFactory = listFactory;
		self.showText    = false;

		function addNameFn () {
			var name = {
				'firstName' : self.firstName,
				'lastName'  : self.lastName,
				'count'     : 0
			};
			self.listFactory.getList.push( name );
		}

		self.addNameFn = addNameFn;
	}

	angular.module( 'app' )
		.controller( 'MainCtrl', MainCtrl );

	MainCtrl.$inject = [ 'listFactory'];

} )( );
