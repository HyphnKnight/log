module.exports = ( function ( printMessage , theme , _ ) {

	return function existing ( path , note ) {

		printMessage(	theme.warningB( ' Existing ' ),
						_.isArray( path ) ?
							{	title : 'The following files already exist',
								message : _.map( path , function ( value ) { return theme.destPath( value ); } ) } :
							'The file ' + theme.destPath( path ) + ' already exists.',
						note );

	};

} ) (	require( './../util/printMessage.js' ),
		require( './../util/theme.js' ),
		require( 'underscore' ) );