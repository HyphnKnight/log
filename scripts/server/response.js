module.exports = ( function ( printMessage , theme , stringAlignRight , _ ) {

	return function response ( method , path , responseDesc ) {

		var message = 'Server responded to ' + theme.packageTask( method ) + ' request at ' + theme.destPath( path )

		printMessage(	theme.positive( stringAlignRight( 'Response' ) ),
						_.isUndefined( responseDesc ) ?
							message :
							{ title : message , message : responseDesc  } );

	};

} ) (	require( './../util/printMessage.js' ),
		require( './../util/theme.js' ),
		require( './../util/stringAlignRight.js' ),
		require( 'underscore' ) );