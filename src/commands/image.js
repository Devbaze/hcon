exports.command = 'image [command]';
exports.desc = 'Image management commands: registry, save, load (hih help image)';
exports.builder = function(yargs) {
    return yargs
        .options({})
        .commandDir('image');
};
exports.handler = function(argv) {};