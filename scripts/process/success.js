module.exports = ( function ( printMessage , theme , stringAlignRight ) {

	return function success ( message , note ) {

		printMessage( theme.positiveB( stringAlignRight( 'Success' ) ) , message , note , 1 );

	};

} ) (	require( './../util/printMessage.js' ),
		require( './../util/theme.js' ),
		require( './../util/stringAlignRight.js' ) );