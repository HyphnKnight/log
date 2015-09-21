module.exports = ( function ( _ , theme ) {

	return function indentLogRecursive ( messages , space ) {

		space = _.isString( space ) ?
			space + '    ' :
			'    ';

		if ( _.isString( messages ) || _.isNumber ) {


			if ( messages.length < 80 ) {

				console.log( space + messages );

			} else {

				var string = '';

				_.chain( messages.split( ' ' ) )
					.each( function( value ) {

						string += ' ' + value;

						if ( string.length > 80 ) {

							console.log( space + string );

							string = '';

						}

					} );

			}

		} else if (  _.isArray( messages ) ) {

			_.each( messages, function ( message ) {

				indentLogRecursive( message , space );

			} );

		} else if ( _.isObject( messages ) ) {

			_.chain( messages )
				.pairs()
				.each( function ( dataPair ) {

					if ( _.isString( dataPair[1] ) ) {

						console.log( space + dataPair[0] + ' : ' + dataPair[1] );

					} else {

						console.log( space + dataPair[0] );
						indentLogRecursive( dataPair[1] , space );

					}

				} );

		}

	};

} ) ( require( 'underscore' ) , require( './theme.js' ) );