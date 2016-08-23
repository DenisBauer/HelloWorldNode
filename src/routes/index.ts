/// <reference path="../_all.d.ts" />
"use strict";

import * as express from "express";
//import "../../node_modules/newrelic";

module Route {

  export class Index {

    public index(req: express.Request, res: express.Response, next: express.NextFunction) {
      var nr = require("newrelic");
      nr.incrementMetric("TestMetric", 100);
      nr.recordCustomEvent("viewRendered", { "view": "index" });
 //render page
      res.render("index");
    }
  }
}

export = Route;
