module.exports = ( function ( printMessage , theme , stringAlignRight , _ ) {

	return function runningTask ( task , package , path , note ) {

		printMessage(	theme.positive( stringAlignRight( 'Running Task' ) ),
						_.isArray( task ) ?
							{	title : 'The tasks below are being run on ' + theme.destPath( path ) + ' with ' + theme.package( package ),
								message : _.map( task , function ( value ) { return theme.packageTask( value ); } ) } :
							'The task ' + theme.packageTask( task ) + ' is being run on ' + theme.destPath( path ) + ' with ' + theme.package( package ),
						note );

	};

} ) (	require( './../util/printMessage.js' ),
		require( './../util/theme.js' ),
		require( './../util/stringAlignRight.js' ),
		require( 'underscore' ) );