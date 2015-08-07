module.exports = ( function ( printMessage , theme ) {

	return function ending ( process , note ) {

		printMessage( theme.positiveB( ' Ending ' ) , process , note , 3 , 2 );

	};

} ) (	require( './../util/printMessage.js' ),
		require( './../util/theme.js' ) );