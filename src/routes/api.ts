/// <reference path="../_all.d.ts" />
"use strict";

import * as express from "express";

module Route {

  export class Api {

    public get(req: express.Request, res: express.Response, next: express.NextFunction) {
      res.json(
            {
                "version": "1.2",
                "status": "success"
            });
    }
  }
}

export = Route;
