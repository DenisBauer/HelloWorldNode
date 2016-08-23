/// <reference path="../_all.d.ts" />
"use strict";

import * as express from "express";
//import "../../node_modules/newrelic";

module Route {

  export class Index {

    public index(req: express.Request, res: express.Response, next: express.NextFunction) {
      var nr = require("newrelic");
      nr.incrementMetric("TestMetric");
      nr.recordCustomEvent("index rendered");
 //render page
      res.render("index");
    }
  }
}

export = Route;
