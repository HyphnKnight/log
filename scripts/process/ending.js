module.exports = ( function ( printMessage , theme , stringAlignRight ) {

	return function ending ( process , note ) {

		printMessage( theme.positiveB( stringAlignRight( 'Ending' ) ) , process , note , 3 , 2 );

	};

} ) (	require( './../util/printMessage.js' ),
		require( './../util/theme.js' ),
		require( './../util/stringAlignRight.js' ) );