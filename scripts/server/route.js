module.exports = ( function ( printMessage , theme , stringAlignRight , _ ) {

	return function route ( method , path ) {

		printMessage(	theme.positive( stringAlignRight( 'New Route' ) ),
						'New ' + method + ' route created for ' + theme.destPath( path ) ),
						note );

	};

} ) (	require( './../util/printMessage.js' ),
		require( './../util/theme.js' ),
		require( './../util/stringAlignRight.js' ),
		require( 'underscore' ) );