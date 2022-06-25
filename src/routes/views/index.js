const { Router } = require("express");

const {
  renderHomePage,
  renderLoginPage,
  renderSignupPage,
  renderDashboardPage,
} = require("../../controllers/views");

const router = Router();

router.get("/login", renderLoginPage);
router.get("/signup", renderSignupPage);
router.get("/dashboard", renderDashboardPage);
router.get("/*", renderHomePage);

module.exports = router;
