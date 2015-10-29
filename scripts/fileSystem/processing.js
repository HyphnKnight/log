module.exports = ( function ( printMessage , theme , stringAlignRight , _ ) {

	return function processing ( sourcePath , destinationPath , task , note ) {

		printMessage(	theme.positive( stringAlignRight( 'Processing' ) ),
						_.isArray( sourcePath ) ?
							{	title : 'Processing following files with ' + theme.packageTask( task ) + ' and moving the results to ' + theme.destPath( destinationPath ),
								message : _.map( sourcePath , function ( value ) { return theme.srcPath( value ); } ) } :
							'Processing ' + theme.srcPath( sourcePath ) + ' with ' + theme.packageTask( task ) + ' and moving the result to ' + theme.destPath( destinationPath ),
						note );

	};

} ) (	require( './../util/printMessage.js' ),
		require( './../util/theme.js' ),
		require( './../util/stringAlignRight.js' ),
		require( 'underscore' ) );