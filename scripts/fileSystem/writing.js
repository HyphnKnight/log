module.exports = ( function ( printMessage , theme , _ ) {

	return function writing ( path , buffer , note ) {

		printMessage(	theme.positive( 'Writing' ),
						{	title : 'Buffer below being written to the path ' + theme.destPath( path ),
							message : theme.note( buffer ) },
						note );

	};

} ) (	require( './../util/printMessage.js' ),
		require( './../util/theme.js' ),
		require( 'underscore' ) );