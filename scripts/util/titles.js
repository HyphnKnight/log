'use strict';

const
	chalk = require( 'chalk' ),
	stringAlignRight = require( './stringAlignRight.js' );

module.exports = {

	starting	: chalk.green.bold( stringAlignRight( 'Starting' ) ),
	ending		: chalk.green.bold( stringAlignRight( 'Ending' ) ),
	success		: chalk.green.bold( stringAlignRight( 'Success' ) ),
	warning		: chalk.yellow( stringAlignRight( 'Warning' ) ),
	failure		: chalk.red.bold( stringAlignRight( 'Failure' ) ),
	error		: chalk.red( stringAlignRight( 'Error' ) ),

	reading		: chalk.green( stringAlignRight( 'Reading' ) ),
	writing		: chalk.green( stringAlignRight( 'Writing' ) ),
	creating	: chalk.green( stringAlignRight( 'Creating ' ) ),
	deleting	: chalk.yellow( stringAlignRight( 'Deleting' ) ),
	existing	: chalk.yellow( stringAlignRight( 'Existing' ) ),
	copying		: chalk.green( stringAlignRight( 'Copying' ) ),
	processing	: chalk.green( stringAlignRight( 'Processing' ) ),
	watching	: chalk.green( stringAlignRight( 'Watching' ) ),
	changing	: chalk.yellow( stringAlignRight( 'Changing' ) ),

	installingPackage	: chalk.green( stringAlignRight( 'Installing' ) ),
	uninstallingPackage	: chalk.yellow( stringAlignRight( 'Uninstalling' ) ),
	makingTask			: chalk.green( stringAlignRight( 'Making' ) ),
	runningTask			: chalk.green( stringAlignRight( 'Running' ) ),

	startingServer	: chalk.green.bold( stringAlignRight( 'Starting' ) ),
	route			: chalk.green( stringAlignRight( 'Route' ) ),
	response		: chalk.green( stringAlignRight( 'Response' ) )

};