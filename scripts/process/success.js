module.exports = ( function ( printMessage , theme , stringAlignRight , _ ) {

	return function success ( message , note , info ) {

		printMessage(	theme.positiveB( stringAlignRight( 'Success' ) ),
						_.isUndefined( info ) ?
						message :
						{ title : message , message : info  } , note );

	};

} ) (	require( './../util/printMessage.js' ),
		require( './../util/theme.js' ),
		require( './../util/stringAlignRight.js' ),
		require( 'underscore' ) );