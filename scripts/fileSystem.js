'use strict';

const
  printMessage = require( './util/printMessage.js' ),
  theme        = require( './util/theme.js' ),
  titles       = require( './util/titles.js' ),
  relativePath = require( './util/relativePath.js' ),
  _            = require( 'lodash' );

function reading ( path , note ) {

	printMessage(	titles.reading,
					_.isArray( path ) ?
						{	title : 'Reading from the following files',
							message : _.map( path , value => { return theme.destPath( value ); } ) } :
						`Reading from the file ${theme.destPath( path )}`,
					note );

};

function writing ( path , note ) {

		printMessage( titles.writing , `A buffer is being written to ${theme.destPath( path )}`, note );

};

function creating ( path , note ) {

	printMessage(	titles.creating,
					_.isArray( path ) ?
						{	title : 'Creating the following files/directories ',
							message : _.map( path , value => { return theme.destPath( value ); } ) } :
						`Creating the file/directory ${theme.destPath( path )}`,
					note );

};

function deleting ( path , note ) {

	printMessage(	titles.deleting,
					_.isArray( path ) ?
						{	title : 'Deleting the following files/directories ',
							message : _.map( path , value => { return theme.delPath( value ); } ) } :
						`Deleting the file/directory ${theme.delPath( path )}`,
					note );

};

function existing ( path , note ) {

	printMessage(	titles.existing,
					_.isArray( path ) ?
						{	title : 'The following files already exist',
							message : _.map( path , value => { return theme.destPath( value ); } ) } :
						`The file ${theme.destPath( path )} already exists.`,
					note );

};

function copying ( sourcePath , destinationPath , note ) {

	printMessage(	titles.copying,
					_.isArray( sourcePath ) ?
						{	title : `Copying the following files to ${theme.destPath( destinationPath )}`,
							message : _.map( sourcePath , value => { return theme.srcPath( value ); } ) } :
						`Copying the file ${theme.srcPath( sourcePath )} to ${theme.destPath( destinationPath )}`,
					note );

};

function processing ( sourcePath , task , note ) {

	printMessage(	titles.processing,
					_.isArray( sourcePath ) ?
						{	title : `Processing following files with ${theme.packageTask( task )}`,
							message : _.map( sourcePath , function ( value ) { return theme.srcPath( value ); } ) } :
						`Processing ${theme.srcPath( sourcePath )} with ${theme.packageTask( task )}`,
					note );

};

function watching ( path , tasks , pckg , note ) {

	tasks = _.isUndefined( tasks ) ?
		'' :
		_.isArray( tasks ) ?
			theme.packageTask( tasks.join(', ') ) :
			theme.packageTask( tasks );

	printMessage(	titles.watching,
					_.isArray( path ) ?
						{	title : `The files below are being watch. If changed will run ${tasks} with ${theme.package( pckg )}.`,
							message : _.map( path , value => { return theme.srcPath( value ); } ) } :
						`When ${theme.srcPath( path )} changes will run ${tasks} with ${theme.package( pckg )}.`,
					note );

};

function changing ( path , type , tasks , note ) {

	tasks = _.isUndefined( tasks ) ?
		'' :
		_.isArray( tasks ) ?
			', running ' + theme.packageTask( tasks.join(', ') ) :
			`, running ${theme.packageTask( tasks )}`;

	printMessage(	titles.changing,
					_.isArray( path ) ?
						{	title : `The files below have experienced ${theme.warning( type )}${tasks}.`,
							message : _.map( path , function ( value ) { return theme.srcPath( value ); } ) } :
						`The file ${theme.srcPath( path )} has experienced ${theme.warning( type )}${tasks}.`,
					note );

};

module.exports = {
	reading,
	writing,
	creating,
	deleting,
	existing,
	copying,
	processing,
	watching,
	changing
};