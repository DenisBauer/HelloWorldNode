/// <reference path="_all.d.ts" />

"use strict";

import * as bodyParser from "body-parser";
import * as express from "express";
import * as path from "path";
//import * as newrelic from "../node_modules/newrelic";

import * as indexRoute from "./routes/index";
import * as apiRoute from "./routes/api";

/**
 * The server.
 *
 * @class Server
 */
class Server {

  public app: express.Application;

  /**
   * Bootstrap the application.
   *
   * @class Server
   * @method bootstrap
   * @static
   * @return {ng.auto.IInjectorService} Returns the newly created injector for this app.
   */
  public static bootstrap(): Server {
    return new Server();
  }

  /**
   * Constructor.
   *
   * @class Server
   * @constructor
   */
  constructor() {
    //create expressjs application
    this.app = express();

    //configure application
    this.config();

    this.routes();
  }

  private config() {
    var nr = require("newrelic");
    //var nr = new newrelic.API();
    nr.recordMetric("TestMetric", 0);

    //configure jade
    this.app.set("views", path.join(__dirname, "../views"));
    this.app.set("view engine", "jade");

    //mount logger
    //this.app.use(logger("dev"));

    //mount json form parser
    this.app.use(bodyParser.json());

    //mount query string parser
    this.app.use(bodyParser.urlencoded({ extended: true }));

    //add static paths
    this.app.use(express.static(path.join(__dirname, "public")));
    this.app.use(express.static(path.join(__dirname, "bower_components")));

    // catch 404 and forward to error handler
    this.app.use(function(err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
      var error = new Error("Not Found");
      err.status = 404;
      next(err);
    });
}

  /**
   * Configure routes
   *
   * @class Server
   * @method routes
   * @return void
   */
  private routes() {
    //get router
    let router: express.Router;
    router = express.Router();

    //create routes
    var index: indexRoute.Index = new indexRoute.Index();
    var api: apiRoute.Api = new apiRoute.Api();

    //home page
    router.get("/", index.index.bind(index.index));
    router.get("/api", api.get.bind(api.get));

    //use router middleware
    this.app.use(router);
  }
}

var server = Server.bootstrap();
export = server.app;