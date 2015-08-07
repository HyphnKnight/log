module.exports = ( function ( printMessage , theme , _ ) {

	return function error ( message , note , err ) {

		printMessage(	theme.danger( 'Error' ),
						_.isUndefined( err ) ?
						message :
						{ title : message , message : err  } , note , 1 );

	};

} ) (	require( './../util/printMessage.js' ),
		require( './../util/theme.js' ),
		require( 'underscore' ) );