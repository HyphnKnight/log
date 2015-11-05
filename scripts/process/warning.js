module.exports = ( function ( printMessage , theme , stringAlignRight , _ ) {

	return function warning ( message , note , err ) {

		printMessage(	theme.warning( stringAlignRight( 'Warning' ) ),
						_.isUndefined( err ) ?
						message :
						{ title : message , message : err  } , note );

	};

} ) (	require( './../util/printMessage.js' ),
		require( './../util/theme.js' ),
		require( './../util/stringAlignRight.js' ),
		require( 'underscore' ) );