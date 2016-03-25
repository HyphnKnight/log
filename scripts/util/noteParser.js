'use strict';

const
	_ = require( 'lodash' ),
	theme = require( './theme.js' );

function noteParser ( note ) {

	if ( _.isString( note ) && note.length > 0 ) {

		return theme.note( ' : ' + note );

	} else {

		return '';

	}

};

module.exports = noteParser;