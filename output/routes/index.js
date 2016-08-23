"use strict";
var Route;
(function (Route) {
    class Index {
        index(req, res, next) {
            var nr = require("newrelic");
            nr.incrementMetric("TestMetric", 100);
            nr.recordCustomEvent("index rendered");
            res.render("index");
        }
    }
    Route.Index = Index;
})(Route || (Route = {}));
module.exports = Route;
//# sourceMappingURL=index.js.map