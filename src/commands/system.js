exports.command = 'system [command]';
exports.desc = 'Manage Hcon (hih help system)';
exports.builder = function(yargs) {
    return yargs
        .options({})
        .commandDir('system');
};
exports.handler = function(argv) {};