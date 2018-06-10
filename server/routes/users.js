const router = require("express-promise-router")();
const passport = require("passport");

const { validateBody, schemas } = require("../helpers/routeHelpers");
const UserController = require("../controllers/users");
const passportConf = require("../passport");

router
  .route("/signup")
  .post(validateBody(schemas.authSchema), UserController.signUp);

router
  .route("/signin")
  .post(
    validateBody(schemas.authSchema),
    passport.authenticate("local", { session: false }),
    UserController.signIn
  );

router
  .route("/oauth/google")
  .post(
    passport.authenticate("googleToken", { session: false }),
    UserController.googleOAuth
  );

router
  .route("/oauth/facebook")
  .post(
    passport.authenticate("facebookToken", { session: false })
    // UserController.facebookOAuth
  );

router
  .route("/secret")
  .get(passport.authenticate("jwt", { session: false }), UserController.secret);

module.exports = router;
