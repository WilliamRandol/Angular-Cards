var server=require('node-http-server');

console.log(server);

var config=server.configTemplate();
config.contentType.svg  = 'image/svg+xml';
config.port             = 80;
config.verbose          = true;

server.deploy(config);