'use strict';
module.exports = function stringAlignRight ( string ) {

	if ( string.length >= 13 ) return string;
	else {

		for ( let i = 12 - string.length; i >= 0; i--) string = ' ' + string;

		return string;

	}

};