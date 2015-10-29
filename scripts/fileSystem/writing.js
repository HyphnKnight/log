module.exports = ( function ( printMessage , theme , stringAlignRight , _ ) {

	return function writing ( path , buffer , note ) {

		printMessage(	theme.positive( stringAlignRight( 'Writing' ) ),
						{	title : 'Buffer below being written to the path ' + theme.destPath( path ),
							message : theme.note( buffer ) },
						note );

	};

} ) (	require( './../util/printMessage.js' ),
		require( './../util/theme.js' ),
		require( './../util/stringAlignRight.js' ),
		require( 'underscore' ) );