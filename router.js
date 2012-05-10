/**
 * Created with JetBrains WebStorm.
 * User: Michael
 * Date: 08.05.12
 * Time: 16:41
 * To change this template use File | Settings | File Templates.
 */
function route(handle, pathName, response) {
    "use strict";
    console.log("About to route a request for " + pathName);
    if (typeof handle[pathName] === 'function') {
        handle[pathName]();
    } else {
        console.log("No request handler found for " + pathName);
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.write("404 Not found");
        response.end();
    }
}
exports.route = route;