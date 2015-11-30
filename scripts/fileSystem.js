'use strict';

const
	printMessage	= require( './util/printMessage.js' ),
	theme			= require( './util/theme.js' ),
	_				= require( 'underscore' );

function reading ( path , note ) {

	printMessage(	theme.positive( 'Reading' ),
					_.isArray( path ) ?
						{	title : 'Reading from the following files',
							message : _.map( path , value => { return theme.destPath( value ); } ) } :
						`Reading from the file ${theme.destPath( path )}`,
					note );

};

function writing ( path , note ) {

		printMessage( theme.positive( 'Writing' ) , `A buffer is being written to ${theme.destPath( path )}`, note );

};

function creating ( path , note ) {

	printMessage(	theme.positive( 'Creating' ),
					_.isArray( path ) ?
						{	title : 'Creating the following files/directories ',
							message : _.map( path , value => { return theme.destPath( value ); } ) } :
						`Creating the file/directory ${theme.destPath( path )}`,
					note );

};

function deleting ( path , note ) {

	printMessage(	theme.danger( 'Deleting' ),
					_.isArray( path ) ?
						{	title : 'Deleting the following files/directories ',
							message : _.map( path , value => { return theme.delPath( value ); } ) } :
						`Deleting the file/directory ${theme.delPath( path )}`,
					note );

};

function existing ( path , note ) {

	printMessage(	theme.warningB( 'Existing' ),
					_.isArray( path ) ?
						{	title : 'The following files already exist',
							message : _.map( path , value => { return theme.destPath( value ); } ) } :
						`The file ${theme.destPath( path )} already exists.`,
					note );

};

function copying ( sourcePath , destinationPath , note ) {

	printMessage(	theme.positive( 'Copying' ),
					_.isArray( sourcePath ) ?
						{	title : `Copying the following files to ${theme.destPath( destinationPath )}`,
							message : _.map( sourcePath , value => { return theme.srcPath( value ); } ) } :
						`Copying the file ${theme.srcPath( sourcePath )} to ${theme.destPath( destinationPath )}`,
					note );

};

function processing ( sourcePath , destinationPath , task , note ) {

	printMessage(	theme.positive( 'Processing' ),
					_.isArray( sourcePath ) ?
						{	title : `Processing following files with ${theme.packageTask( task )} and moving the results to ${theme.destPath( destinationPath )}`,
							message : _.map( sourcePath , function ( value ) { return theme.srcPath( value ); } ) } :
						`Processing ${theme.srcPath( sourcePath )} with ${theme.packageTask( task )} and moving the result to ${theme.destPath( destinationPath )}`,
					note );

};

function watching ( path , tasks , pckg , note ) {

	tasks = ( _.isArray( tasks ) ? tasks.join(", ") : tasks )

	printMessage(	theme.positive( 'Watching' ),
					_.isArray( path ) ?
						{	title : `The files below are being watch. If changed will run ${theme.packageTask( tasks )} with ${theme.package( pckg )}.`,
							message : _.map( path , value => { return theme.srcPath( value ); } ) } :
						`When ${theme.srcPath( path )} changes will run ${theme.packageTask( tasks )} with ${theme.package( pckg )}.`,
					note );

};

function changing ( path , type , tasks , note ) {

	tasks = ( _.isArray( tasks ) ? tasks.join(", ") : tasks )

	printMessage(	theme.warning( 'Changing' ),
					_.isArray( path ) ?
						{	title : `The files below have experienced ${type}, running ${theme.packageTask( tasks )}.`,
							message : _.map( path , function ( value ) { return theme.srcPath( value ); } ) } :
						`The file ${theme.srcPath( path )} has experienced type, running ${theme.packageTask( tasks )}.`,
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