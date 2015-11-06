var
	processPath	= './scripts/process/',
	fsPath		= './scripts/fileSystem/',
	packagePath	= './scripts/packages/',
	serverPath	= './scripts/server/',
	helperPath	= './scripts/helper/'

module.exports = ( function (	success,
								warning,
								error,
								failure,
								starting,
								ending,

								creating,
								copying,
								deleting,
								existing,
								processing,
								changing,
								writing,
								reading,
								watching,

								installingPackage,
								uninstallingPackage,
								creatingTask,
								runningTask,

								response,
								route,
								startingServer,

								space,
								note ) {

	return {

		//Process
		success : success,
		warning : warning,
		error : error,
		failure : failure,
		starting : starting,
		ending : ending,

		//File System
		creating : creating,
		copying : copying,
		deleting : deleting,
		existing : existing,
		processing : processing,
		changing : changing,
		writing : writing,
		watching : watching,


		//Package Handling
		installingPackage : installingPackage,
		uninstallingPackage : uninstallingPackage,
		creatingTask : creatingTask,
		runningTask : runningTask,


		//Server
		response : response,
		route : route,
		startingServer : startingServer,

		//Utility
		space : space,
		note : note

	};

} )(	require( processPath + 'success.js' ),
		require( processPath + 'warning.js' ),
		require( processPath + 'error.js' ),
		require( processPath + 'failure.js' ),
		require( processPath + 'starting.js' ),
		require( processPath + 'ending.js' ),

		require( fsPath + 'creating.js' ),
		require( fsPath + 'copying.js' ),
		require( fsPath + 'deleting.js' ),
		require( fsPath + 'existing.js' ),
		require( fsPath + 'processing.js' ),
		require( fsPath + 'changing.js' ),
		require( fsPath + 'writing.js' ),
		require( fsPath + 'reading.js' ),
		require( fsPath + 'watching.js' ),

		require( packagePath + 'installingPackage.js' ),
		require( packagePath + 'uninstallingPackage.js' ),
		require( packagePath + 'creatingTask.js' ),
		require( packagePath + 'runningTask.js' ),

		require( serverPath + 'response.js' ),
		require( serverPath + 'route.js' ),
		require( serverPath + 'startingServer.js' ),

		require( helperPath + 'space.js' ),
		require( helperPath + 'note.js' ) );
