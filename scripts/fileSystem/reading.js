module.exports = ( function ( printMessage , theme , stringAlignRight , _ ) {

	return function reading ( path , note ) {

		printMessage(	theme.positive( stringAlignRight( 'Reading' ) ),
						_.isArray( path ) ?
							{	title : 'Reading from the following files',
								message : _.map( path , function ( value ) { return theme.destPath( value ); } ) } :
							'Reading from the file ' + theme.destPath( path ),
						note );

	};

} ) (	require( './../util/printMessage.js' ),
		require( './../util/theme.js' ),
		require( './../util/stringAlignRight.js' ),
		require( 'underscore' ) );