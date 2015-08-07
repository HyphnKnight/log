module.exports = ( function ( ) {

	return function zeroToTwoDigits ( str ) {

		str = new String( str );

		return str.length === 2 ?
			str :
			str.length === 1 ?
				'0' + str :
				str === 0 ?
					'00' :
					str[0] + str[1];

	};

} ) ( );