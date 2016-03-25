'use strict';

const
	_ = require( 'lodash' ),
	theme = require( './theme.js' );

function indentLogRecursive ( messages , space ) {

	space = _.isString( space ) ? space + '    ' : '                        ';

	if ( _.isString( messages ) || _.isNumber( messages ) ) {


		messages = '' + messages;

		if ( messages.length < 80 ) {

			console.log( `${space}${messages}` );

		} else {

			let string = '';

			_.chain( messages.split( ' ' ) )
				.each( value => {

					string += ' ' + value;

					if ( string.length > 80 ) {

						console.log( space + string );

						string = '';

					}

				} );

		}

	} else if (  _.isArray( messages ) ) {

		_.each( messages, message => { indentLogRecursive( message , space ); } );

	} else if ( _.isObject( messages ) ) {

		_.chain( messages )
			.pairs()
			.each( dataPair => {

				if ( _.isString( dataPair[1] ) || _.isNumber( dataPair[1] ) ) {

					console.log( `${space}${dataPair[0]} : ${dataPair[1]}` );

				} else {

					console.log( `${space}${dataPair[0]}` );

					indentLogRecursive( dataPair[1] , space );

				}

			} );

	}

};

module.exports = indentLogRecursive;