module.exports = ( function ( printMessage , theme , _ ) {

	return function creatingTask ( task , package , note ) {

		printMessage(	theme.positive( 'Creating Task' ),
						_.isArray( task ) ?
							{	title : 'The tasks below are being created for ' + theme.package( package ),
								message : _.map( task , function ( value ) { return theme.packageTask( value ); } ) } :
							'The task ' + theme.packageTask( task ) + ' is being created for ' + theme.package( package ),
						note );

	};

} ) (	require( './../util/printMessage.js' ),
		require( './../util/theme.js' ),
		require( 'underscore' ) );