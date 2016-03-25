module.exports = (function ( path ){
  return path => path.relative( process.cwd(), path );
})(require('path'));