/**
 * Created with JetBrains WebStorm.
 * User: Michael
 * Date: 08.05.12
 * Time: 16:41
 * To change this template use File | Settings | File Templates.
 */
function route(handle, pathname) {
    console.log("About to route a request for " +  pathname);
    if (typeof handle[pathname] === 'function') {
        handle[pathname]();
    } else {
        console.log("No request handler found for " + pathname);
    }
}
exports.route = route;