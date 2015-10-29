module.exports = ( function ( chalk ) {

	return {

		positive	: chalk.green,
		positiveB	: chalk.green.bold,

		warning		: chalk.yellow,
		warningI	: chalk.yellow.italic,
		warningB	: chalk.yellow.bold,

		danger		: chalk.red,
		dangerS		: chalk.red.dim,
		dangerB		: chalk.red.bold,

		destPath	: chalk.cyan,
		srcPath		: chalk.cyan.dim,

		packageTask	: chalk.magenta,
		package		: chalk.magenta.underline,
		service		: chalk.magenta.bold,

		note		: chalk.gray.italic,
		noteTitle	: chalk.gray.underline

	};

} ) (	require( 'chalk' ) );