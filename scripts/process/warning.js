module.exports = ( function ( printMessage , theme ) {

	return function warning ( message , note ) {

		printMessage( theme.warning( 'Warning' ) , message , note );

	};

} ) (	require( './../util/printMessage.js' ),
		require( './../util/theme.js' ) );