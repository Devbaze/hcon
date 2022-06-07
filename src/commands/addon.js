exports.command = 'addon [command]';
exports.desc = 'Addons management commands: install, remove (hih help addon)';
exports.builder = function(yargs) {
    return yargs
        .commandDir('addon');
};
exports.handler = function(argv) {};