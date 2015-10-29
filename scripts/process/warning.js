module.exports = ( function ( printMessage , theme , stringAlignRight ) {

	return function warning ( message , note ) {

		printMessage( theme.warning( stringAlignRight( 'Warning' ) ) , message , note );

	};

} ) (	require( './../util/printMessage.js' ),
		require( './../util/theme.js' ),
		require( './../util/stringAlignRight.js' ) );