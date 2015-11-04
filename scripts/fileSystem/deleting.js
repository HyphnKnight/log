module.exports = ( function ( printMessage , theme , stringAlignRight , _ ) {

	return function deleting ( path , note ) {

		printMessage(	theme.danger( stringAlignRight( 'Deleting' ) ),
						_.isArray( path ) ?
							{	title : 'Deleting the following files/directories ',
								message : _.map( path , function ( value ) { return theme.dangerS( value ); } ) } :
							'Deleting the file/directory ' + theme.dangerS( path ),
						note );

	};

} ) (	require( './../util/printMessage.js' ),
		require( './../util/theme.js' ),
		require( './../util/stringAlignRight.js' ),
		require( 'underscore' ) );
