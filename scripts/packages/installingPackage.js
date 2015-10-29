module.exports = ( function ( printMessage , theme , stringAlignRight , _ ) {

	return function installingPackage ( package , service , note ) {

		printMessage(	theme.positive( stringAlignRight( 'Installing' ) ),
						_.isArray( package ) ?
							{	title : 'The packages below are being installed via ' + theme.service(  ' ' + service + ' '  ),
								message : _.map( package , function ( value ) { return theme.package( value ); } ) } :
							'The package ' + theme.package( package ) + ' is being installed via ' + theme.service(  ' ' + service + ' '  ),
						note );

	};

} ) (	require( './../util/printMessage.js' ),
		require( './../util/theme.js' ),
		require( './../util/stringAlignRight.js' ),
		require( 'underscore' ) );