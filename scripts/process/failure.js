module.exports = ( function ( printMessage , theme ) {

	return function failure ( message , note ) {

		printMessage( theme.dangerB( ' Failure ' ) , message , note , 2 , 1 );

	};

} ) (	require( './../util/printMessage.js' ),
		require( './../util/theme.js' ) );