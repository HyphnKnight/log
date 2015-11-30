'use strict';
module.exports = function stringAlignRight ( str ) {

	console.log( str.length );

	if ( str.length >= 13 ) return str;
	else {
		console.log(str);

		for ( let i = 12 - str.length; i >= 0; i--) str = ' ' + str;

		return str;

	}

};