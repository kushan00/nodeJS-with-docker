const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const { getUsers ,createUser , updateUser , deleteUser , getOneUser} = require("../controllers/userController.js");


router.post("/create-user",
	[
		check("email", "Please include a valid email").isEmail(),
	],
	createUser);
router.get("/all-users",getUsers);
router.get("/:id",getOneUser);
router.put("/update-user/:id",updateUser);
router.delete("/delete-user/:id",deleteUser);

module.exports = router;
