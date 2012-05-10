/**
 * Created with JetBrains WebStorm.
 * User: Michael
 * Date: 04.05.12
 * Time: 22:23
 * To change this template use File | Settings | File Templates.
 */
var http = require("http");
var url = require("url");

function start(route, handle) {
    "use strict";
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");

        route(handle, pathname, response);
    }

    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
}
exports.start = start;