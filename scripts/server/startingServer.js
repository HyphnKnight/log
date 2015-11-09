module.exports = ( function ( printMessage , theme , stringAlignRight , _ ) {

	return function startingServer ( address , port , service ) {

		printMessage(	theme.positive( stringAlignRight( 'Server' ) ),
						'Running Server at ' + address + ' on port ' + port + ' using ' + theme.package( service ) );

	};

} ) (	require( './../util/printMessage.js' ),
		require( './../util/theme.js' ),
		require( './../util/stringAlignRight.js' ),
		require( 'underscore' ) );