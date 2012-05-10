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
        var postData = " ";
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");
        request.setEncoding("utf8");
        request.addListener("data", function (postDataChunk) {
            postData += postDataChunk;
            console.log("Received POST data chunk '" + postDataChunk + "'.");
        });
        request.addListener("end", function () {
            route(handle, pathname, response, postData);
        });
    }

    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
}
exports.start = start;