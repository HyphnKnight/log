module.exports = (function ( path, _ ){
  return filePath => {
    if ( _.isArray(filePath) ){
      return _.map( filePath, aFilePath => path.relative( process.cwd(), aFilePath ) );
    } else {
      return path.relative( process.cwd(), filePath );
    }
  };
})( require('path'), require('lodash') );