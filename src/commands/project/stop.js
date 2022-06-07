exports.command = 'stop [service]';
exports.desc = 'Stop all or specified project services (alias: hih stop)';
exports.builder = function(yargs) {
    return yargs
        .options({
            'all': {
                'alias': 'a',
                'description': 'Stop all services on all Hcon projects',
                'type': 'boolean',
            },
        });
};
exports.handler = function(argv) {};