const
	exec	= require( './scripts/exec.js' ),
	fs		= require( './scripts/fileSystem.js' ),
	pckg	= require( './scripts/packages.js' ),
	server	= require( './scripts/server.js' ),
	help	= require( './scripts/helper.js' );

module.exports = {

	starting	: exec.starting,
	ending		: exec.ending,
	success		: exec.success,
	warning		: exec.warning,
	failure		: exec.failure,
	error		: exec.error,

	reading		: fs.reading,
	writing		: fs.writing,
	creating	: fs.creating,
	deleting	: fs.deleting,
	existing	: fs.existing,
	copying		: fs.copying,
	processing	: fs.processing,
	watching	: fs.watching,
	changing	: fs.changing,

	installingPackage	: pckg.installingPackage,
	uninstallingPackage	: pckg.uninstallingPackage,
	creatingTask		: pckg.creatingTask,
	runningTask			: pckg.runningTask,

	startingServer	: server.startingServer,
	route			: server.route,
	response		: server.response,

	space	: help.space,
	note	: help.note,

};