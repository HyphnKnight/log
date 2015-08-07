module.exports = ( function ( _ , theme , indentLogRecursive ) {

	return function note ( note ) {

		var arg = _.toArray( arguments );

		if ( arg.length === 1 ) {

			if ( arg[0].length > 80 ) {

				console.log( theme.note( 'Note : ' ) );

				var string = '';

				_.chain( arg[0].split( ' ' ) )
					.each( function( value ) {

						string += ' ' + value;

						if ( string.length > 80 ) {

							console.log( theme.note( '    ' + string ) );

							string = '';

						}

					} );

			} else {

				console.log( theme.note( 'Note : ' + arg[0] ) );

			}

		} else if ( arg.length > 1) {

			console.log( theme.note( 'Note :' ) );

			_.each( arg , function ( note ) {

				console.log( '    ' + theme.note( note ) );

			} );

		}

	};

} ) (	require( 'underscore' ),
		require( './../util/theme.js'),
		require( './../util/indentLogRecursive.js') );