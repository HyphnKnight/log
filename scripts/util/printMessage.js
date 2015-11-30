'use strict';

const
	_					= require( 'underscore' ),
	chalk				= require( 'chalk' ),
	zeroToTwoDigits		= require( './zeroToTwoDigits.js' ),
	indentLogRecursive	= require( './indentLogRecursive.js' ),
	stringAlignRight	= require( './stringAlignRight.js' ),
	noteParser			= require( './noteParser.js' ),
	space				= require( './../helper.js' ).space;

function printMessage ( keyword , message , note , beforeSpace , afterSpace ) {

	const
		date = new Date (),
		timeStamp = '[' + chalk.gray( zeroToTwoDigits( date.getHours() ) + ':' + zeroToTwoDigits( date.getMinutes() ) + ':' + zeroToTwoDigits( date.getSeconds() ) ) + ']';

	if ( _.isString( message ) || _.isNumber( message ) ) {

		space( _.isNumber( beforeSpace ) ? beforeSpace : 0 );

		console.log( `${timeStamp} ${keyword} : ${message}` + noteParser( note ) );

		space( _.isNumber( afterSpace ) ? afterSpace : _.isNumber( beforeSpace ) ? beforeSpace : 0 );

	} else {


		space( _.isNumber( beforeSpace ) ? beforeSpace : 0 );

		console.log( `${timeStamp} ${keyword} : ${message.title}` + noteParser( note ) );

		indentLogRecursive( message.message )

		space( _.isNumber( afterSpace ) ? afterSpace : _.isNumber( beforeSpace ) ? beforeSpace : 0 );

	}

};

module.exports = printMessage;