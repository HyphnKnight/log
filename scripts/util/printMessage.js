module.exports = ( function ( _ , chalk , zeroToTwoDigits , indentLogRecursive , noteParser , space ) {

	return function printMessage ( keyword , message , note , beforeSpace , afterSpace ) {

		var
			date = new Date(),
			timeStamp = '[' + chalk.gray( zeroToTwoDigits( date.getHours() ) + ':' + zeroToTwoDigits( date.getMinutes() ) + ':' + zeroToTwoDigits( date.getSeconds() ) ) + ']';

		if ( _.isString( message ) ) {

			space( _.isNumber( beforeSpace ) ?
				beforeSpace :
				0 );

			console.log( timeStamp + ' ' + keyword + ' : ' + message + noteParser( note ) );

			space( _.isNumber( afterSpace ) ?
				afterSpace :
				_.isNumber( beforeSpace ) ?
					beforeSpace :
					0  );

		} else {


			space( _.isNumber( beforeSpace ) ?
				beforeSpace :
				0 );

			console.log ( timeStamp + ' ' + keyword + ' : ' + message.title + noteParser( note ) );

			indentLogRecursive( message.message )

			space( _.isNumber( afterSpace ) ?
				afterSpace :
				_.isNumber( beforeSpace ) ?
					beforeSpace :
					0  );

		}

	};

} ) (	require( 'underscore' ),
		require( 'chalk' ),
		require( './zeroToTwoDigits.js' ),
		require( './indentLogRecursive.js' ),
		require( './noteParser.js' ),
		require( './../helper/space.js' ) );