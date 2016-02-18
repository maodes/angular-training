( function () {
	'use strict';

	function config ( $stateProvider, $urlRouterProvider ) {
		$urlRouterProvider.otherwise('/');
		$stateProvider.state('main', {
			'url': '/',
			'templateUrl': '/main/main.html',
			'controller': 'MainCtrl',
			'controllerAs': 'vm'
		} );
	}

	angular.module( 'app.routes', [] )
		.config( config );

} )( );
