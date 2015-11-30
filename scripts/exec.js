'use strict';

const
	printMessage	= require( './util/printMessage.js' ),
	theme			= require( './util/theme.js' ),
	_				= require( 'underscore' );

function starting ( process , note ) {

	printMessage( theme.positiveB( 'Starting' ) , process , note , 1 , 0 );

};

function ending ( process , note ) {

	printMessage( theme.positiveB( 'Ending' ) , process , note , 0 , 1 );

};

function success ( message , note , info ) {

	printMessage(	theme.positiveB( 'Success' ),
					_.isUndefined( info ) ?
					message :
					{ title : message , message : info  } , note );

};

function warning ( message , note , err ) {

	printMessage(	theme.warning( 'Warning' ),
					_.isUndefined( err ) ?
					message :
					{ title : message , message : err  } , note );

};

function failure ( message , note ) {

	printMessage( theme.dangerB( 'Failure' ) , message , note , 0 , 1 );

};

function error ( message , note , err ) {

	let error = {};

	if ( !_.isUndefined( err ) ) {

		if ( err.name ) error.type = err.name;
		if ( err.message ) error.message = err.message;
		if ( err.fileName ) error.fileName = err.fileName;
		if ( err.lineNumber ) error.lineNumber = err.lineNumber;
		if ( err.columnNumber ) error.columnNumber = err.columnNumber;

	} else error = err;

	printMessage(	theme.danger( 'Error' ),
					_.isUndefined( err ) ? message : { title : message , message : error  },
					note );

};


module.exports = {
	starting,
	ending,
	success,
	warning,
	failure,
	error
};