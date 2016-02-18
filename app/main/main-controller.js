( function () {
	'use strict';

	function MainCtrl ( ) {
		var self = this;

		self.name    = 'faith';
		self.nameArr = [ 'faith', 'gomez' ];
		self.addName = '';

		function addNameFn () {
			self.nameArr.push( self.addName );
		}

		self.addNameFn = addNameFn;
	}

	angular.module( 'app' )
		.controller( 'MainCtrl', MainCtrl );

} )();
