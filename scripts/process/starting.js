module.exports = ( function ( printMessage , theme ) {

	return function starting ( process , note ) {

		printMessage( theme.positiveB( ' Starting ' ) , process , note , 3 , 2 );

	};

} ) (	require( './../util/printMessage.js' ),
		require( './../util/theme.js' ) );