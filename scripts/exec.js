'use strict';

const
	printMessage	= require( './util/printMessage.js' ),
	theme			= require( './util/theme.js' ),
	titles			= require( './util/titles.js' ),
	_				= require( 'underscore' );

function starting ( process , note ) {

	printMessage( titles.starting , process , note , 1 , 0 );

};

function ending ( process , note ) {

	printMessage( titles.ending , process , note , 0 , 1 );

};

function success ( message , note , info ) {

	printMessage(	titles.success,
					_.isUndefined( info ) ?
					message :
					{ title : message , message : info  } , note );

};

function warning ( message , note , err ) {

	if ( _.isUndefined( err ) && !_.isString(note) ) err = note;

	printMessage(	titles.warning,
					_.isUndefined( err ) ?
					message :
					{ title : message , message : err  } , note );

};

function failure ( message , note ) {

	printMessage( titles.failure , message , note , 0 , 1 );

};

function error ( message , note , err ) {

	if ( _.isUndefined( err ) && !_.isString(note) ) err = note;

	let error = {};

	if ( _.isObject( err ) &&
		(	_.isString( err.name ) ||
			_.isString( err.message ) ||
			_.isString( err.fileName ) ) ) {
		if ( err.name ) error.type = err.name;
		if ( err.message ) error.message = err.message;
		if ( err.fileName ) error.fileName = err.fileName;
		if ( err.lineNumber ) error.lineNumber = err.lineNumber;
		if ( err.columnNumber ) error.columnNumber = err.columnNumber;

	}

	printMessage(	titles.error,
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