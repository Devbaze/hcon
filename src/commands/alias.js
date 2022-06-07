exports.command = 'alias [command]';
exports.desc = 'Manage aliases that allow hih @alias execution (hih help alias)';
exports.builder = function(yargs) {
    return yargs
        .commandDir('alias');
};
exports.handler = function(argv) {};