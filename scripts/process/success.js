module.exports = ( function ( printMessage , theme ) {

	return function success ( message , note ) {

		printMessage( theme.positiveB( ' Success ' ) , message , note , 1 );

	};

} ) (	require( './../util/printMessage.js' ),
		require( './../util/theme.js' ) );