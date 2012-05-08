/**
 * Created with JetBrains WebStorm.
 * User: Michael
 * Date: 04.05.12
 * Time: 22:23
 * To change this template use File | Settings | File Templates.
 */
"use strict";
var http = require("http");
var url = require("url");

function start(route, handle) {
function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");

    route(handle, pathname);

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello Worlds");
    response.end();
}

http.createServer(onRequest).listen(8888);
console.log("Server has started.");
}
exports.start = start;