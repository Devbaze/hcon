const chalk = require('chalk');

module.exports = () => {

    const hcon = {};
    hcon.version = '1.80.1';
    hcon.loadGlobalConfiguration = function() {

    };

    hcon.env = require('./env');
    hcon.docker = require('./docker')(hcon.env);
    hcon.sshAgent = require('./ssh-agent')(hcon.docker);
    hcon.messages = require('./messages')(hcon.env);
    hcon.input = require('./input')(hcon.env);

    hcon.help = () => {
        let help = chalk `Hcon control cli utility v${hcon.version}

Usage: hih <command>

{green Management Commands:}
  {yellow db <command>}             	Manage databases ({yellow hih help db})
  {yellow project <command>}        	Manage project(s) ({yellow hih help project})
  {yellow ssh-key <command>}        	Manage SSH keys ({yellow hih help ssh-key})
  {yellow system <command>}         	Manage Hcon ({yellow hih help system})
  {yellow vm <command>}             	Manage Hcon VM ({yellow hih help vm})

{green Commands:}
  bash [service]           	Open shell into service's container. Defaults to {yellow cli}
  logs [service]           	Show service logs (e.g., Apache logs, MySQL logs) and Unison logs ({yellow hih help logs})
  exec <command|file>      	Execute a command or a script in {yellow cli}
  config [command]         	Show or change configuration ({yellow hih help config})
  run-cli (rc) <command>   	Run a command in a standalone cli container in the current directory ({yellow hih help run-cli})

  drush [command]          	Drush command (requires Drupal)
  drupal [command]         	Drupal Console command (requires Drupal 8)
  platform [command]       	Platform.sh's CLI (requires hcon/cli 2.3+)
  terminus [command]       	Pantheon's Terminus (requires hcon/cli 2.1+)
  wp [command]             	WordPress CLI command (requires WordPress)
  composer [command]       	Run Composer commands
  docker [command]         	Run Docker commands directly
  docker-compose [command] 	Run docker-compose commands directly

  init                     	Initialize a project (override it with your own automation {yellow hih help init})
  addon <command>          	Addons management commands: install, remove ({yellow hih help addon})
  alias                    	Manage aliases that allow hih @alias execution ({yellow hih help alias})
  cleanup [--hard]         	Remove unused Docker images and projects ({yellow saves disk space})
  share                    	Create temporary public url for current project using ngrok
  exec-url <url>           	Download script from URL and run it on host (URL should be public)
  image <command>          	Image management commands: registry, save, load ({yellow hih help image})
  hosts <command>          	Hosts file commands: add, remove, list ({yellow hih help hosts})
  vhosts                   	List all virtual *.hcon hosts registered in Hcon proxy
  sysinfo                  	Show system information
  diagnose                 	Show diagnostic information for troubleshooting and bug reporting
  version (--version, v, -v)	Print hih version. [v, -v] prints short version
  {yellow update}                   	{yellow Update Hcon}`;

        help += chalk `
  
  {green Addons:}
  `;

        help += chalk `
  
  {green Custom commands:}
  `;

        return help;
    };

    return hcon;
};