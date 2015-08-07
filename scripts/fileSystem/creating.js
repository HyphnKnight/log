module.exports = ( function ( printMessage , theme , _ ) {

	return function creating ( path , note ) {

		printMessage(	theme.positive( 'Creating' ),
						_.isArray( path ) ?
							{	title : 'Creating the following files/directories ',
								message : _.map( path , function ( value ) { return theme.destPath( value ); } ) } :
							'Creating the file/directory ' + theme.destPath( path ),
						note );

	};

} ) (	require( './../util/printMessage.js' ),
		require( './../util/theme.js' ),
		require( 'underscore' ) );