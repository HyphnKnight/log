module.exports = ( function ( _ , theme ) {

	return function noteParser ( note ) {

		if ( _.isString( note ) && note.length > 0 ) {

			return theme.note( ' : ' + note );

		} else {

			return '';

		}

	};

} ) (	require( 'underscore' ),
		require( './theme.js' ) );