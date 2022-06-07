const _ = require('lodash');
const osenv = require('osenv');

const HOME = osenv.home();

const defaults = {}
defaults['HCON_VERSION'] = 'master';
defaults['REQUIREMENTS_DOCKER'] = '18.06.1-ce';
defaults['REQUIREMENTS_DOCKER_COMPOSE'] = '1.23.1';
defaults['REQUIREMENTS_DOCKER_MACHINE'] = '0.15.0';
defaults['REQUIREMENTS_VBOX'] = '5.2.20'; //Remember to update the download URLs below
defaults['REQUIREMENTS_WINPTY'] = '0.4.3';
defaults['REQUIREMENTS_WINPTY_CYGWIN'] = '2.8.0';

defaults['URL_VBOX_MAC'] = "http://download.virtualbox.org/virtualbox/5.2.20/VirtualBox-5.2.20-125813-OSX.dmg";
defaults['URL_VBOX_WIN'] = "http://download.virtualbox.org/virtualbox/5.2.20/VirtualBox-5.2.20-125813-Win.exe";

defaults['FIN_PATH'] = "/usr/local/bin/hih";
defaults['FIN_PATH_UPDATED'] = "/usr/local/bin/hih.updated";
defaults['FIN_AUTOCOMPLETE_PATH'] = "/usr/local/bin/hih-bash-autocomplete";
defaults['CONFIG_DIR'] = HOME + '/.hcon';
defaults['CONFIG_ENV'] = defaults['CONFIG_DIR'] + '/hcon.env';
defaults['CONFIG_ALIASES'] = defaults['CONFIG_DIR'] + "/alias";
defaults['CONFIG_LAST_CHECK'] = defaults['CONFIG_DIR'] + "/.last_check";
defaults['CONFIG_LAST_PING'] = defaults['CONFIG_DIR'] + "/.last_ping";
defaults['CONFIG_MACHINES'] = defaults['CONFIG_DIR'] + "/machines";
defaults['CONFIG_MACHINES_ENV'] = defaults['CONFIG_MACHINES'] + "/.env";
defaults['CONFIG_MACHINES_ACTIVE'] = defaults['CONFIG_MACHINES'] + "/.active";

defaults['CONFIG_BIN_DIR'] = defaults['CONFIG_DIR'] + "/bin";
defaults['CONFIG_DOWNLOADS_DIR'] = defaults['CONFIG_BIN_DIR'] + "/downloads";
defaults['DOCKER_BIN'] = defaults['CONFIG_BIN_DIR'] + "/docker";
defaults['DOCKER_COMPOSE_BIN'] = defaults['CONFIG_BIN_DIR'] + "/docker-compose";
defaults['DOCKER_COMPOSE_BIN_NIX'] = "/usr/local/bin/docker-compose";
defaults['DOCKER_MACHINE_BIN'] = defaults['CONFIG_BIN_DIR'] + "/docker-machine";
defaults['DOCKER_MACHINE_BIN_NIX'] = "/usr/local/bin/docker-machine";
defaults['WINPTY_BIN'] = defaults['CONFIG_BIN_DIR'] + "/winpty";

//vboxmanage="VBoxManage";
//is_windows && vboxmanage="/cygdrive/c/Program Files/Oracle/VirtualBox/VBoxManage.exe";

// Stacks folder
defaults['CONFIG_STACKS_DIR'] = defaults['CONFIG_DIR'] + "/stacks";

// Custom certs folder for vhost-proxy (overridable)
defaults['CONFIG_CERTS'] = defaults['CONFIG_DIR'] + '/certs';

// Where custom commands live (relative path)
defaults['HCON_COMMANDS_PATH'] = ".hcon/commands";

// Where addons live (relative path)
defaults['HCON_ADDONS_PATH'] = ".hcon/addons";

// Hcon environment
defaults['HCON_ENVIRONMENT'] = "local";


defaults['HCON_IP'] = "192.168.64.100";
defaults['HCON_HOST_IP'] = "192.168.64.1";
defaults['HCON_SUBNET'] = "192.168.64.1/24";

// For environments, where access to external DNS servers is blocked, HCON_DNS_UPSTREAM should be set to the LAN DNS server
defaults['HCON_DEFAULT_DNS'] = "8.8.8.8";
// For visibility on this variable
defaults['HCON_DNS_UPSTREAM'] = "";
defaults['HCON_DNS_DOMAIN'] = "hcon";
// Allow disabling the DNS resolver configuration (in case there are issues with it). Set to "true" to activate.
defaults['HCON_NO_DNS_RESOLVER'] = "";
// Set to "true" to enable logging DNS queries in hcon-dns. View logs via "hih docker logs hcon-dns"
defaults['HCON_DNS_DEBUG'] = "";

// Declaring possible vhost-proxy settings overrides
defaults['HCON_VHOST_PROXY_IP'] = "";
defaults['HCON_VHOST_PROXY_PORT_HTTP'] = "";
defaults['HCON_VHOST_PROXY_PORT_HTTPS'] = "";
defaults['HCON_VHOST_PROXY_ACCESS_LOG'] = "";
defaults['HCON_VHOST_PROXY_STATS_LOG='] = "";
defaults['HCON_VHOST_PROXY_DEBUG_LOG'] = "";
defaults['HCON_VHOST_PROXY_DEFAULT_CERT'] = "";
defaults['PROJECT_INACTIVITY_TIMEOUT'] = "";
defaults['PROJECT_DANGLING_TIMEOUT'] = "";
defaults['PROJECTS_ROOT'] = "";

defaults['DEFAULT_MACHINE_NAME'] = 'hcon';
defaults['DEFAULT_MACHINE_PROVIDER'] = 'virtualbox';
defaults['DEFAULT_MACHINE_VBOX_RAM'] = '2048'; //mb
defaults['DEFAULT_MACHINE_VBOX_HDD'] = '50000'; //mb

// Stats
// hih sends a minimal ping with OS and hih version number
defaults['HCON_STATS_TID'] = 'UA-93724315-1';
defaults['HCON_STATS_URL'] = 'http://www.google-analytics.com/collect';
defaults['HCON_STATS_OPTOUT'] = '0';

// Override PATH to use our utilities
defaults['PATH'] = defaults['CONFIG_BIN_DIR'] + ":" + osenv.path();

// Set global variable in case native Docker app is used/not-used
defaults['DOCKER_NATIVE'] = "0";

//---------------------------- URL references --------------------------------
defaults['GITHUB_API'] = "https://api.github.com";
defaults['URL_REPO'] = "https://raw.githubusercontent.com/hcon/hcon";
defaults['URL_REPO_UI'] = "https://github.com/hcon/hcon";
defaults['URL_REPO_DRUPAL7'] = "https://github.com/hcon/drupal7.git";
defaults['URL_REPO_DRUPAL8'] = "https://github.com/hcon/drupal8.git";
defaults['URL_REPO_DRUPAL8COMPOSER'] = "https://github.com/hcon/boilerplate-drupal8-composer.git";
defaults['URL_REPO_WORDPRESS'] = "https://github.com/hcon/wordpress.git";
defaults['URL_REPO_MAGENTO'] = "https://github.com/hcon/magento.git";
defaults['URL_REPO_GRAV'] = "https://github.com/hcon/example-grav.git";
defaults['URL_REPO_GATSBY'] = "https://github.com/hcon/example-gatsby.git";
defaults['URL_REPO_LARAVEL'] = "https://github.com/hcon/example-laravel.git";
defaults['URL_REPO_HUGO'] = "https://github.com/hcon/example-hugo.git";
defaults['URL_REPO_SYMFONY_SKELETON'] = "https://github.com/hcon/example-symfony-skeleton.git";
defaults['URL_REPO_SYMFONY_WEBAPP'] = "https://github.com/hcon/example-symfony-webapp.git";
defaults['URL_REPO_BACKDROP'] = "https://github.com/hcon/example-backdrop.git";
defaults['URL_ADDONS_HOSTING'] = "https://raw.githubusercontent.com";
defaults['URL_ADDONS_REPO'] = defaults['URL_ADDONS_HOSTING'] + "/hcon/addons";
defaults['STACKS_OVERRIDES_IDE'] = "overrides-ide.yml";
defaults['STACKS_OVERRIDES_OSXFS'] = "overrides-osxfs.yml";
defaults['STACKS_SERVICES'] = "services.yml";
defaults['STACKS_STACK_ACQUIA'] = "stack-acquia.yml";
defaults['STACKS_STACK_DEFAULT'] = "stack-default.yml";
defaults['STACKS_STACK_DEFAULT_NODB'] = "stack-default-nodb.yml";
defaults['STACKS_STACK_NODE'] = "stack-node.yml";
defaults['STACKS_VOLUMES_BIND'] = "volumes-bind.yml";
defaults['STACKS_VOLUMES_NFS'] = "volumes-nfs.yml";
defaults['STACKS_VOLUMES_NONE'] = "volumes-none.yml";
defaults['STACKS_VOLUMES_UNISON'] = "volumes-unison.yml";

defaults['URL_DOCKER_MAC'] = "https://download.docker.com/mac/static/stable/x86_64/docker-" + defaults['REQUIREMENTS_DOCKER'] + ".tgz";
defaults['URL_DOCKER_NIX'] = "https://get.docker.com/";
// Until there is an official standalone docker.exe binary available, use the one pulled from Docker for Windows
// See https://github.com/docker/for-win/issues/1460#issuecomment-390045959
//URL_DOCKER_WIN="https://download.docker.com/win/static/stable/x86_64/docker-${REQUIREMENTS_DOCKER}.zip"
defaults['URL_DOCKER_WIN'] = "https://github.com/hcon/hcon/releases/download/v1.11.0/docker-" + defaults['REQUIREMENTS_DOCKER'] + ".zip";
defaults['URL_DOCKER_COMPOSE_MAC'] = "https://github.com/docker/compose/releases/download/" + defaults['REQUIREMENTS_DOCKER_COMPOSE'] + "/docker-compose-Darwin-x86_64";
defaults['URL_DOCKER_COMPOSE_NIX'] = "https://github.com/docker/compose/releases/download/" + defaults['REQUIREMENTS_DOCKER_COMPOSE'] + "/docker-compose-Linux-x86_64";
defaults['URL_DOCKER_COMPOSE_WIN'] = "https://github.com/docker/compose/releases/download/" + defaults['REQUIREMENTS_DOCKER_COMPOSE'] + "/docker-compose-Windows-x86_64.exe";
defaults['URL_DOCKER_MACHINE_MAC'] = "https://github.com/docker/machine/releases/download/v" + defaults['REQUIREMENTS_DOCKER_MACHINE'] + "/docker-machine-Darwin-x86_64";
defaults['URL_DOCKER_MACHINE_NIX'] = "https://github.com/docker/machine/releases/download/v" + defaults['REQUIREMENTS_DOCKER_MACHINE'] + "/docker-machine-Linux-x86_64";
defaults['URL_DOCKER_MACHINE_WIN'] = "https://github.com/docker/machine/releases/download/v" + defaults['REQUIREMENTS_DOCKER_MACHINE'] + "/docker-machine-Windows-x86_64.exe";
defaults['URL_BOOT2DOCKER'] = "https://github.com/boot2docker/boot2docker/releases/download/v" + defaults['REQUIREMENTS_DOCKER'] + "/boot2docker.iso";

defaults['URL_WINPTY'] = "https://github.com/rprichard/winpty/releases/download/" + defaults['REQUIREMENTS_WINPTY'] + "/winpty-" + defaults['REQUIREMENTS_WINPTY'] + "-cygwin-" + defaults['REQUIREMENTS_WINPTY_CYGWIN'] + "-ia32.tar.gz";

module.exports = _.defaults(process.env, defaults);