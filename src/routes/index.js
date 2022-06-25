const { Router } = require("express");

const views = require("./views");
const auth = require("./auth");

const router = Router();

router.use("/auth", auth);
router.use("/", views);

module.exports = router;
