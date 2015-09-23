module.exports = ( function ( printMessage , theme , _ ) {

	return function reading ( path , note ) {

		printMessage(	theme.positive( 'Reading' ),
						_.isArray( path ) ?
							{	title : 'Reading from the following files',
								message : _.map( path , function ( value ) { return theme.destPath( value ); } ) } :
							'Reading from the file ' + theme.destPath( path ),
						note );

	};

} ) (	require( './../util/printMessage.js' ),
		require( './../util/theme.js' ),
		require( 'underscore' ) );