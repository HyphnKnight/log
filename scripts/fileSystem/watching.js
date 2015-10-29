module.exports = ( function ( printMessage , theme , stringAlignRight , _ ) {

	return function watching ( path , tasks , package , note ) {

		tasks = ( _.isArray( tasks ) ? tasks.join(", ") : tasks )

		printMessage(	theme.positive( stringAlignRight( 'Watching' ) ),
						_.isArray( path ) ?
							{	title : 'The files below are being watch. If changed will run ' + theme.packageTask( tasks ) + ' with ' + theme.package( package ) + '.',
								message : _.map( path , function ( value ) { return theme.srcPath( value ); } ) } :
							'When ' + theme.srcPath( path ) + ' changes will run ' + theme.packageTask( tasks ) + ' with ' + theme.package( package ) + '.',
						note );

	};

} ) (	require( './../util/printMessage.js' ),
		require( './../util/theme.js' ),
		require( './../util/stringAlignRight.js' ),
		require( 'underscore' ) );