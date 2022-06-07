const _ = require('lodash');

exports.command = 'new [key-name]';
exports.desc = 'Generate a new SSH key pair';
exports.handler = async function(argv) {
    const hcon = argv.hcon;

    let keyName = argv['key-name'];

    if (_.isEmpty(keyName)) {
        let response = await hcon.input.prompt("Enter name for a new SSH key (e.g. myserver_id_rsa):");
        keyName = response.question;
    }

    if (_.isEmpty(keyName)) {
        hcon.messages.errorExit('key-name not provided.');
    }

    argv.hcon.sshAgent.generate(keyName);
};