'use strict';

const chalk = require( 'chalk' );

module.exports = {

	positive	: chalk.green,				// Something happened succesfully
	positiveI	: chalk.green.italic,		// Something happened succesfully inside a different type of message
	positiveB	: chalk.green.bold,			// Something AWESOME has happened

	warning		: chalk.yellow,				// Warning text
	warningI	: chalk.yellow.italic,		// warning text inside of a non warning message
	warningB	: chalk.yellow.bold,		// Serious Warning

	danger		: chalk.red,				// For error text
	dangerB		: chalk.red.bold,			// HUGE ISSUE

	destPath	: chalk.cyan,				// The path to a file or dir destination
	srcPath		: chalk.cyan.dim,			// The path to a source file or dir
	delPath		: chalk.red.dim,			// The path to a file marked for removal

	packageTask	: chalk.magenta,			// A specific task or method executed by a module i.e. render of jade.render()
	package		: chalk.magenta.underline,	// A particular module of a service i.e. node-sass, jade , rjs
	service		: chalk.magenta.bold,		// A top level service such as node, npm , bower or system

	note		: chalk.gray.italic,		// Not part of the message but may be useful
	noteTitle	: chalk.gray.underline		// Title of a longer note

};