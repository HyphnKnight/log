module.exports = ( function ( printMessage , theme , stringAlignRight , _ ) {

	return function route ( method , servedPath , servingPath ) {

		printMessage(	theme.positive( stringAlignRight( 'Route' ) ),
						'Serving ' + theme.srcPath( servingPath ) + ' on the route ' + theme.destPath( servedPath ) );

	};

} ) (	require( './../util/printMessage.js' ),
		require( './../util/theme.js' ),
		require( './../util/stringAlignRight.js' ),
		require( 'underscore' ) );