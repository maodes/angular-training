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

		console.log( config );

	}

	angular.module( 'app' )
		.controller( 'MainCtrl', MainCtrl );

} )();
