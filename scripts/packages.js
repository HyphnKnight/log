'use strict';

const
	_ = require( 'underscore' ),
	printMessage = require( './util/printMessage.js' ),
	theme = require( './util/theme.js' );


function installingPackage ( pckg , service , note ) {

	printMessage(	theme.positive( 'Installing' ),
					_.isArray( pckg ) ?
						{	title : `The packages below are being installed via ${theme.service(  ' ' + service + ' '  )}`,
							message : _.map( pckg , value => { return theme.package( value ); } ) } :
						`The pckg ${theme.package( pckg )} is being installed via ${theme.service(  ' ' + service + ' '  )}`,
					note );

};

function uninstallingPackage ( pckg , service , note ) {

	printMessage(	theme.positive( 'Uninstalling' ),
					_.isArray( pckg ) ?
						{	title : `The packages below are being uninstalled from ${theme.service(  ' ' + service + ' '  )}`,
							message : _.map( pckg , value => { return theme.package( value ); } ) } :
						`The pckg ${theme.package( pckg )} is being uninstalled from ${theme.service( ' ' + service + ' ' )}`,
					note );

};

function creatingTask ( task , pckg , note ) {

	printMessage(	theme.positive( 'Creating Task' ),
					_.isArray( task ) ?
						{	title : `The tasks below are being created for ${theme.package( pckg )}`,
							message : _.map( task , value => { return theme.packageTask( value ); } ) } :
						`The task ${theme.packageTask( task )} is being created for ${theme.package( pckg )}`,
					note );

};

function runningTask ( task , pckg , path , note ) {

	printMessage(	theme.positive( 'Running Task' ),
					_.isArray( task ) ?
						{	title : `The tasks below are being run on ${theme.destPath( path )} with ${theme.package( pckg )}`,
							message : _.map( task , value => { return theme.packageTask( value ); } ) } :
						`The task ${theme.packageTask( task )} is being run on ${theme.destPath( path )} with ${theme.package( pckg )}`,
					note );

};

module.exports = { installingPackage , uninstallingPackage , creatingTask , runningTask };