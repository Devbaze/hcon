exports.command = 'ssh-key [command]';
exports.desc = 'Manage SSH keys (hih help ssh-key)';
exports.builder = function(yargs) {
    return yargs
        .options({})
        .commandDir('ssh-key');
};
exports.handler = function(argv) {};