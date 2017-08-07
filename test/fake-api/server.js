'use strict';

var responses = [];
try {
	responses = require('./responses');
} catch (e) {
	if (e.code !== 'MODULE_NOT_FOUND') throw e;
	console.log(e);
}
console.log("Loaded " + responses.length + " rules");

var Hapi = require('hapi');

var server = new Hapi.Server();

const plugins = [];
const port = '8080';

server.connection({
	host: '0.0.0.0',
	port: port,
	routes: { cors: true }
});

server.on('response', (request) => {
		console.log(request.info.remoteAddress + ': ' + request.method.toUpperCase() + ' ' + request.url.path + ' --> ' + request.response.statusCode);
});

server.route({
	method: '*',
	path: '/{p*}',
	handler: (request, response) => {
		for (var i = 0; i < responses.length; i++) {
			var r = responses[i];

			if (r.method.toUpperCase() != request.method.toUpperCase()) { continue; }

			if ((r.test instanceof Function && r.test(request)) || new RegExp(r.test).test(request.url.path)) {
				var responseBody = r.response
				if (r.fakeCreate) {
					responseBody = request.payload
					responseBody.id = 12345
				}

				response(responseBody).code(r.code || 200);
				return;
			}
		}

		console.log('No handler for ' + request.url.path);
		response('Not known').code(404);
	}
})

server.start(() => {
		console.log('Hapi server started! Listening at http://0.0.0.0:' + port);
});