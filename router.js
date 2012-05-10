/**
 * Created with JetBrains WebStorm.
 * User: Michael
 * Date: 08.05.12
 * Time: 16:41
 * To change this template use File | Settings | File Templates.
 */
function route(handle, pathName) {
    "use strict";
    console.log("About to route a request for " + pathName);
    if (typeof handle[pathName] === 'function') {
        return handle[pathName]();
    } else {
        console.log("No request handler found for " + pathName);
        return "404 Not found";
    }
}
exports.route = route;