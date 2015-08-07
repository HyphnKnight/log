module.exports = ( function ( log ){

	var
		paths = {
			a : 'lorem/ipsum/dolor/sit/amet.js',
			b : 'pellentesque/magna/egestas/urna.js',
			array : [
				'quisque/maximus/purus/mauris/condimentum.js',
				'donec/porta/dolor/ac/lacus.js',
				'nullam/pulvinar/lacus/eu/dolor.js',
				'aliquam/erat/volutpat/Aliquam/libero.js'
			]
		},
		folders = {
			a : 'lacinia/id/odio/venenatis',
			b : 'at/auctor/justo'
		},
		notes = {
			a : 'Nullam velit nulla, lacinia id odio venenatis, condimentum congue ante.',
			b : 'Maecenas tortor nibh, sollicitudin at lorem volutpat, lobortis fermentum enim.',
			c : 'Curabitur nec laoreet elit, at auctor justo. Aliquam erat volutpat.'
		},
		message = {
			a : 'Maecenas volutpat rhoncus massa, at fringilla dolor pretium quis. Proin.',
			b : 'Vivamus eget augue pellentesque, tempus nisl eget, auctor dolor. In.',
			c : 'Donec suscipit ex non lectus feugiat blandit. Donec viverra viverra.'
		},
		task = {
			a : 'taskMaecenas',
			b : 'taskVivamus',
			array : [
				'taskSuscipit',
				'taskRhoncus',
				'taskLectus'
			]
		},
		taskRunner = 'someRunner',
		package = {
			a : 'pckgMaecenas',
			b : 'pckgVivamus',
			array : [
				'pckgSuscipit',
				'pckgRhoncus',
				'pckgLectus'
			]
		},
		service = 'someService',
		buffer = 'Aliquam mollis facilisis dui vitae lacinia. Sed iaculis nec turpis nec sodales. Maecenas pharetra consequat dapibus. Nunc varius urna vitae magna tincidunt placerat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In dignissim iaculis odio vitae auctor. Fusce tellus lectus, tincidunt et tincidunt id, rhoncus eu mi. Quisque quis feugiat felis. In tellus odio, congue at erat quis, lacinia tempus neque. Cras sed tortor dolor. Aenean pretium eu nibh ac auctor. Morbi laoreet lacinia faucibus. Sed tristique vulputate enim a iaculis. Pellentesque justo odio, faucibus blandit massa et, accumsan porttitor ex. Donec facilisis ultricies metus a commodo.',
		errorMsgs = {
			a : 'Something has gone wrong.',
			b : 'Something else has gone wrong.',
			c : 'Something terrible has gone wrong.'
		},
		errorReturnObj = {
			type : 'pellentesque',
			reason : 'Nullam porttitor, diam a viverra blandit, enim dolor ornare nisi.',
			path : paths.a
		},
		errorReturnString = 'Mauris placerat pharetra tortor id consectetur. Aenean non fermentum lorem.';

	console.log( '---------------------------------------------' );

	log.starting( 'Testing the log node module.' )

	console.log( '---------------------------------------------' );

	log.success( message.a );

	console.log( '-' );

	log.success( message.b , notes.a );

	console.log( '---------------------------------------------' );

	log.warning( message.b );

	console.log( '-' );

	log.warning( message.a , notes.b );

	console.log( '---------------------------------------------' );

	log.error( message.b );

	console.log( '-' );

	log.error( message.a , notes.b );

	console.log( '-' );

	log.error( message.b , notes.a , errorReturnString );

	console.log( '-' );

	log.error( message.a , notes.b , errorReturnObj );

	console.log( '---------------------------------------------' );

	log.failure( message.a );

	console.log( '-' );

	log.failure( message.b , notes.a );

	console.log( '---------------------------------------------' );

	log.creating( paths.a );
	log.creating( paths.b , notes.a );
	log.creating( paths.array );
	log.creating( paths.array , notes.a );

	console.log( '---------------------------------------------' );

	log.copying( paths.a , paths.b );
	log.copying( paths.b , paths.a , notes.a );
	log.copying( paths.array , paths.b );
	log.copying( paths.array , paths.a , notes.a );

	console.log( '---------------------------------------------' );

	log.deleting( paths.a );
	log.deleting( paths.b , notes.a );
	log.deleting( paths.array );
	log.deleting( paths.array , notes.a );

	console.log( '---------------------------------------------' );

	log.existing( paths.a );
	log.existing( paths.b , notes.a );
	log.existing( paths.array );
	log.existing( paths.array , notes.a );

	console.log( '---------------------------------------------' );

	log.processing( paths.a , folders.b , task.a );
	log.processing( paths.b , folders.a , task.b , notes.a );
	log.processing( paths.array , folders.b , task.a );
	log.processing( paths.array , folders.a , task.b , notes.a );

	console.log( '---------------------------------------------' );

	log.changing( paths.a , task.a );
	log.changing( paths.b , task.b , notes.a );
	log.changing( paths.array , task.a );
	log.changing( paths.array , task.b , notes.a );
	log.changing( paths.a , task.array );
	log.changing( paths.b , task.array , notes.a );
	log.changing( paths.array , task.array );
	log.changing( paths.array , task.array , notes.a );

	console.log( '---------------------------------------------' );

	log.writing( paths.a , buffer );
	log.writing( paths.b , buffer , notes.a );

	console.log( '---------------------------------------------' );

	log.watching( paths.a , task.a , package.a );
	log.watching( paths.b , task.b , package.b , notes.a );
	log.watching( paths.array , task.a , package.a );
	log.watching( paths.array , task.b , package.b , notes.a );
	log.watching( paths.a , task.array , package.a );
	log.watching( paths.b , task.array , package.b , notes.a );
	log.watching( paths.array , task.array , package.a );
	log.watching( paths.array , task.array , package.b , notes.a );

	console.log( '---------------------------------------------' );

	log.installingPackage( package.a , service );
	log.installingPackage( package.b , service , notes.a );
	log.installingPackage( package.array , service );
	log.installingPackage( package.array , service , notes.a );

	console.log( '---------------------------------------------' );

	log.uninstallingPackage( package.a , service );
	log.uninstallingPackage( package.b , service , notes.a );
	log.uninstallingPackage( package.array , service );
	log.uninstallingPackage( package.array , service , notes.a );

	console.log( '---------------------------------------------' );

	log.creatingTask( task.a , package.a );
	log.creatingTask( task.b , package.b , notes.a );
	log.creatingTask( task.array , package.a );
	log.creatingTask( task.array , package.b , notes.a );

	console.log( '---------------------------------------------' );

	log.runningTask( task.a , package.a );
	log.runningTask( task.b , package.b , notes.a );
	log.runningTask( task.array , package.a );
	log.runningTask( task.array , package.b , notes.a );


	console.log( '---------------------------------------------' );

	console.log('-');

	log.space(1);

	console.log('^1-');

	log.space(2);

	console.log('^2-');

	log.space(3);

	console.log('^3-');

	log.space(4);

	console.log('^4-');

	console.log( '---------------------------------------------' );

	log.note( notes.a );
	console.log( '-----' );
	log.note( notes.b , notes.a );
	console.log( '-----' );
	log.note( notes.b , notes.a , notes.b , notes.a );
	console.log( '-----' );
	log.note( buffer );

	console.log( '---------------------------------------------' );

	log.ending( 'Finished testing the log node module.' )

	console.log( '---------------------------------------------' );

})( require( './index.js' ) );