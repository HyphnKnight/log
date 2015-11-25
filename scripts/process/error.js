module.exports = ( function ( printMessage , theme , stringAlignRight , _ ) {

	return function error ( message , note , err ) {

		var error = {};

		if ( !_.isUndefined( err ) ) {

			if ( err.name ) error.type = err.name;
			if ( err.message ) error.message = err.message;
			if ( err.fileName ) error.fileName = err.fileName;
			if ( err.lineNumber ) error.lineNumber = err.lineNumber;
			if ( err.columnNumber ) error.columnNumber = err.columnNumber;

		} else {
			error = err;
		}

		printMessage(	theme.danger( stringAlignRight( 'Error' ) ),
						_.isUndefined( err ) ?
						message :
						{ title : message , message : error  } , note );

	};

} ) (	require( './../util/printMessage.js' ),
		require( './../util/theme.js' ),
		require( './../util/stringAlignRight.js' ),
		require( 'underscore' ) );
