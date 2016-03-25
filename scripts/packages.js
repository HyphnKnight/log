'use strict';

const
	_				     = require( 'lodash' ),
	printMessage = require( './util/printMessage.js' ),
	titles			 = require( './util/titles.js' ),
  relativePath = require( './util/relativePath.js' ),
	theme			   = require( './util/theme.js' );


function installingPackage ( pckg , service , note ) {

	printMessage(	titles.installingPackage,
					_.isArray( pckg ) ?
						{	title : `The packages below are being installed via ${theme.service(  ' ' + service + ' '  )}`,
							message : _.map( pckg , value => { return theme.package( value ); } ) } :
						`The pckg ${theme.package( pckg )} is being installed via ${theme.service(  ' ' + service + ' '  )}`,
					note );

};

function uninstallingPackage ( pckg , service , note ) {

	printMessage(	titles.uninstallingPackage,
					_.isArray( pckg ) ?
						{	title : `The packages below are being uninstalled from ${theme.service(  ' ' + service + ' '  )}`,
							message : _.map( pckg , value => { return theme.package( value ); } ) } :
						`The package ${theme.package( pckg )} is being uninstalled from ${theme.service( ' ' + service + ' ' )}`,
					note );

};

function makingTask ( task , pckg , note ) {

	printMessage(	titles.makingTask,
					_.isArray( task ) ?
						{	title : `The tasks below are being made for ${theme.package( pckg )}`,
							message : _.map( task , value => { return theme.packageTask( value ); } ) } :
						`The task ${theme.packageTask( task )} is being made for ${theme.package( pckg )}`,
					note );

};

function runningTask ( task , pckg , path , note ) {

	path = _.isUndefined( path ) ?
		'' : ` on ${theme.destPath( relativePath( path ) )}`;

	printMessage(	titles.runningTask,
					_.isArray( task ) ?
						{	title : `The tasks below are being run with ${theme.package( pckg )}${path}`,
							message : _.map( task , value => { return theme.packageTask( value ); } ) } :
						`The task ${theme.packageTask( task )} is being run with ${theme.package( pckg )}${path}`,
					note );

};

module.exports = { installingPackage , uninstallingPackage , makingTask , runningTask };