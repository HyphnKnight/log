'use strict';

const
	printMessage	= require( './util/printMessage.js' ),
	theme			= require( './util/theme.js' ),
	_				= require( 'underscore' );

function startingServer ( address , port , service ) {

	printMessage(	theme.positive( 'Server' ),
					'Running Server at ' + address + ' on port ' + port + ' using ' + theme.package( service ) );

};

function route ( method , servedPath , servingPath ) {

	printMessage(	theme.positive( 'Route' ),
					`Serving ${theme.srcPath( servingPath )} on the route ${theme.destPath( servedPath )}` );

};

function response ( method , path , responseDesc ) {

	printMessage(	theme.positive( 'Response' ),
					_.isUndefined( responseDesc ) ?
						`Server responded to ${theme.packageTask( method )} request at ${theme.destPath( path )}` :
						{ title : message , message : responseDesc  } );

};

module.exports = { startingServer , route , response };