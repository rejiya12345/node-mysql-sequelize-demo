var winston = require( 'winston' );
var fs = require( 'fs' );
var config = require(__dirname + '/../config/config');
var env = config.env;
var baseDir = __dirname + "/../";
var logDir = 'logs'; // Or read from a configuration
var logger;

winston.setLevels( winston.config.npm.levels );
winston.addColors( winston.config.npm.colors );

if ( !fs.existsSync( logDir ) ) {
	// Create the directory if it does not exist
	fs.mkdirSync( logDir );
}
logger = new( winston.Logger )( {
	transports: [
		new winston.transports.Console( {
			level: 'warn', // Only write logs of warn level or higher
			colorize: true
		} ),
		new winston.transports.File( {
			level: env === 'development' ? 'debug' : 'info',
			filename: baseDir+logDir + '/mylogs.log',
			maxsize: 1024 * 1024 * 10 // 10MB
		} )
    ],
	exceptionHandlers: [
		new winston.transports.File( {
			filename: baseDir+logDir + '/myExceptlogs.log',
			humanReadableUnhandledException: true,
         	json: false,
            colorize: true
		} )
    ]
} );

module.exports = logger;


// Use this singleton instance of logger like:
// logger = require( 'Logger.js' );
// logger.debug( 'your debug statement' );
// logger.warn( 'your warning' );