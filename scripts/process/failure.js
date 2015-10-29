module.exports = ( function ( printMessage , theme , stringAlignRight ) {

	return function failure ( message , note ) {

		printMessage( theme.dangerB( stringAlignRight( 'Failure' ) ) , message , note , 2 , 1 );

	};

} ) (	require( './../util/printMessage.js' ),
		require( './../util/theme.js' ),
		require( './../util/stringAlignRight.js' ) );