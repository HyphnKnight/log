module.exports = ( function ( _ ) {

	return function space ( num ) {

		num = _.isNumber( num ) ? num : 1;

		if ( num > 0) {

			for ( var i = 0 ; i < num ; ++i ) {

				console.log();

			}

		}

	};

} ) ( require( 'underscore' ) );