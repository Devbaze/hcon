const yargs = require('yargs');
const hcon = require('./lib/hcon')();

let args = yargs
    .scriptName('hih')
    .commandDir('commands')
    .demandCommand(1, '', 'See \'hih help\' for the list of available commands')
    .showHelpOnFail(true)
    .wrap(null)
    .updateStrings({
        'Positionals:': 'Arguments:',
    });

const usage = yargs.getUsageInstance();

// Override output of Version Command.
usage.showVersion = () => {
    const logger = yargs._getLoggerInstance();
    logger.log('hih version: ' + hcon.version);
};

// Override output of Help Command.
usage.showHelp = (level) => {
    console.log(yargs.get)
    const logger = yargs._getLoggerInstance();
    logger.log(hcon.help());
};

argv = args
    .middleware([
        (argv) => {
            return {
                hcon: hcon
            };
        },
        (argv) => {
            return {
                yargs: yargs
            };
        }
    ])
    .argv;