"use strict";
var Route;
(function (Route) {
    class Api {
        get(req, res, next) {
            res.json({
                "version": "1.0",
                "status": "success"
            });
        }
    }
    Route.Api = Api;
})(Route || (Route = {}));
module.exports = Route;
//# sourceMappingURL=Api.js.map