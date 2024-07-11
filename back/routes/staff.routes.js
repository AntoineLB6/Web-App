const router = require('express').Router();
const authController = require("../controllers/auth.controller");
const ficheController = require("../controllers/fiche.controller");

router.get("/logout", authController.logout);
router.post("/update", ficheController.updateFiche);
router.post("/create", ficheController.createFiche);
router.post("/register", authController.signUp);

module.exports = router;