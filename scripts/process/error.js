module.exports = ( function ( printMessage , theme , stringAlignRight , _ ) {

	return function error ( message , note , err ) {

		printMessage(	theme.danger( stringAlignRight( 'Error' ) ),
						_.isUndefined( err ) ?
						message :
						{ title : message , message : err  } , note , 1 );

	};

} ) (	require( './../util/printMessage.js' ),
		require( './../util/theme.js' ),
		require( './../util/stringAlignRight.js' ),
		require( 'underscore' ) );