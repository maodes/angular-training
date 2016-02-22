( function () {
	'use strict';

	function config ( $stateProvider, $urlRouterProvider ) {
		$urlRouterProvider.otherwise('/');
		$stateProvider.state('main', {
			'url'          : '/',
			'templateUrl'  : '/main/main.html',
			'controller'   : 'MainCtrl',
			'controllerAs' : 'vm'
		} ).state('list' , {
			'url'         : '/list',
			'templateUrl' : '/list/list.html'
		} ).state('manage' , {
			'url'         : '/manage',
			'templateUrl' : '/manage/manage.html'
		} );
	}

	angular.module( 'app.routes', [] )
		.config( config );

} )( );
