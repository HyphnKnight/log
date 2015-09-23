module.exports = ( function ( _ ) {

	return function space ( num ) {

		num = _.isNumber( num ) ? num : 1;

		_.times( num , function( ) { console.log() })

	};

} ) ( require( 'underscore' ) );