module.exports = ( function ( ) {
	'use strict';

	return function stringAlignRight ( str ) {

		if ( str.length >= 15 ) {

			return str;

		} else {

			for ( let i = 12 - str.length; i >= 0; i--) {

				str = ' ' + str;

			}

			return str;

		}

	};

} ) ( );