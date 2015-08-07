module.exports = ( function ( printMessage , theme , _ ) {

	return function copying ( sourcePath , destinationPath , note ) {

		printMessage(	theme.positive( 'Copying' ),
						_.isArray( sourcePath ) ?
							{	title : 'Copying the following files to ' + theme.destPath( destinationPath ),
								message : _.map( sourcePath , function ( value ) { return theme.srcPath( value ); } ) } :
							'Copying the file ' + theme.srcPath( sourcePath ) + ' to ' + theme.destPath( destinationPath ),
						note );

	};

} ) (	require( './../util/printMessage.js' ),
		require( './../util/theme.js' ),
		require( 'underscore' ) );