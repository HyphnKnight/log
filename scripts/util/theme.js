module.exports = ( function ( chalk ) {

	return {

		positive	: chalk.green,
		positiveB	: chalk.bgGreen.white,

		warning		: chalk.yellow,
		warningI	: chalk.yellow.italic,
		warningB	: chalk.bgYellow.white,

		danger		: chalk.red,
		dangerS		: chalk.red.dim,
		dangerB		: chalk.bgRed.white,

		destPath	: chalk.cyan,
		srcPath		: chalk.cyan.dim,

		packageTask	: chalk.magenta,
		package		: chalk.magenta.underline,
		service		: chalk.bgMagenta.white,

		note		: chalk.gray.italic,
		noteTitle	: chalk.gray.underline

	};

} ) (	require( 'chalk' ) );