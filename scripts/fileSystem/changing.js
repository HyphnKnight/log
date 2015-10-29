module.exports = ( function ( printMessage , theme , stringAlignRight , _ ) {

	return function changing ( path , type , tasks , note ) {

		tasks = ( _.isArray( tasks ) ? tasks.join(", ") : tasks )

		printMessage(	theme.warning( stringAlignRight( 'Changing' ) ),
						_.isArray( path ) ?
							{	title : 'The files below have experienced ' + type + ', running ' + theme.packageTask( tasks ) + '.',
								message : _.map( path , function ( value ) { return theme.srcPath( value ); } ) } :
							'The file ' + theme.srcPath( path ) + ' has experienced ' + type + ', running ' + theme.packageTask( tasks ) + '.',
						note );

	};

} ) (	require( './../util/printMessage.js' ),
		require( './../util/theme.js' ),
		require( './../util/stringAlignRight.js' ),
		require( 'underscore' ) );