const express = require("express");
const router = express.Router();
const authRoute = require("./auth.route");
const docsRoute = require ("./docs.route");

const defaultRoutes = [
  {
    path: "/auth",
    route: authRoute,
  },
];

const devRoutes = [
  // routes available only in development mode
  {
    path: "/docs",
    route: docsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

const env = "development";

/* istanbul ignore next */
if (env === "development") {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

module.exports = router;