( function () {
	'use strict';

	function listFactory () {
		var person = [ {
			'id'        : 1,
			'firstName' : 'faith',
			'lastName'  : 'gomez',
			'count'     : 0
		}, {
			'id'        : 2,
			'firstName' : 'jean',
			'lastName'  : 'veloso',
			'count'     : 0
		}, {
			'id'        : 3,
			'firstName' : 'elyssa',
			'lastName'  : 'rubia',
			'count'     : 0
		} ];

		function getList () {
			return person;
		}

		return {
			'getList': person
		}
	}

	angular.module( 'app' )
		.factory( 'listFactory', listFactory ); // factory
		// .service( 'listFactory', listFactory ); //service

} )( );
