const router = require("express").Router();
const authController = require("../controllers/auth.controller");
const ficheController = require("../controllers/fiche.controller");

router.post("/login", authController.signIn);
router.get("/getuser", authController.getUser);
router.get("/getallfiche", ficheController.getAllFiche);
router.post("/getcategoryfiche", ficheController.getCategoryFiche);
router.post("/getfiche", ficheController.getFiche);

module.exports = router;