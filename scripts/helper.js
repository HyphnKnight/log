'use strict';

const
	_ = require( 'underscore' ),
	theme = require( './util/theme.js' ),
	indentLogRecursive = require( './util/indentLogRecursive.js' );

function space ( num ) {

	num = _.isNumber( num ) ? num : 1;

	_.times( num , function( ) { console.log() })

};

function note ( note ) {

	let arg = _.toArray( arguments );

	if ( arg.length === 1 ) {

		if ( arg[0].length > 80 ) {

			console.log( theme.note( 'Note : ' ) );

			let string = '';

			_.chain( arg[0].split( ' ' ) )
				.each( value => {

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

		_.each( arg , note => { console.log( '    ' + theme.note( note ) ); } );

	}

};

module.exports = { space , note };