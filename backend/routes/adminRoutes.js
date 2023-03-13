const express = require('express');
const { registeradmin, loginadmin, currentadmin } = require('../controllers/admincontroller');
const validateToken = require('../middleware/validateTokenhandler');

const router = express.Router();

router.post('/register', registeradmin)
router.post("/login", loginadmin);
router.get("/current", validateToken, currentadmin);

module.exports = router;