'use strict';

const
	chalk = require( 'chalk' ),
	stringAlignRight = require( './stringAlignRight.js' );

module.exports = {

	// Something happened succesfully
	positive ( string ) { return chalk.green( string ); },

	// Something happened succesfully inside a different type of message
	positiveI ( string ) { return chalk.green.italic( string ); },

	// Something AWESOME has happened
	positiveB ( string ) { return chalk.green.bold( string ); },

	// Warning text
	warning ( string ) { return chalk.yellow( string ); },

	// Warning text inside of a non warning message
	warningI ( string ) { return chalk.yellow.italic( string ); },

	// Serious Warning
	warningB ( string ) { return chalk.yellow.bold( string ); },

	// For error text
	danger ( string ) { return chalk.red( string ); },

	// HUGE ISSUE
	dangerB ( string ) { return chalk.red.bold( string ); },

	// The path to a file or dir destination
	destPath ( string ) { return chalk.cyan( string ); },

	// The path to a source file or dir
	srcPath ( string ) { return chalk.cyan.dim( string ); },

	// The path to a file marked for removal
	delPath ( string ) { return chalk.red.dim( string ); },

	// A specific task or method executed by a module i.e. render of jade.render()
	packageTask ( string ) { return chalk.magenta( string ); },

	// A particular module of a service i.e. node-sass, jade , rjs
	package ( string ) { return chalk.magenta.underline( string ); },

	// A top level service such as node, npm , bower or system
	service ( string ) { return chalk.magenta.bold( string ); },

	// Not part of the message but may be useful
	note ( string ) { return chalk.gray.italic( string ); },

	// Title of a longer note
	noteTitle ( string ) { return chalk.gray.underline( string ); }

};