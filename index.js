/**
 * Created with JetBrains WebStorm.
 * User: Michael
 * Date: 08.05.12
 * Time: 16:06
 * To change this template use File | Settings | File Templates.
 */
var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");
var handle = {};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/show"] = requestHandlers.show;

server.start(router.route, handle);
