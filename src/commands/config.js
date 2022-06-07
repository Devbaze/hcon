exports.command = 'config [command]';
exports.desc = 'Manage databases (hih help db)';
exports.builder = function(yargs) {
    return yargs
        .options({})
        .commandDir('config');
};
exports.handler = function(argv) {};