module.exports = ( function ( printMessage , theme , _ ) {

	return function deleting ( path , note ) {

		printMessage(	theme.danger( 'Deleting' ),
						_.isArray( path ) ?
							{	title : 'Deleting the following files',
								message : _.map( path , function ( value ) { return theme.dangerS( value ); } ) } :
							'Deleting the file ' + theme.dangerS( path ),
						note );

	};

} ) (	require( './../util/printMessage.js' ),
		require( './../util/theme.js' ),
		require( 'underscore' ) );