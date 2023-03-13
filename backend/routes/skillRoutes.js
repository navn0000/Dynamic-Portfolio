const express = require('express');
const router = express.Router();
const { getSkills, createSkills, updateSkills, findoneSkills, deleteSkills } = require('../controllers/skillcontroller');
const validateToken = require('../middleware/validateTokenhandler');
// to validate all the routes use this otherwise not use this method
// router.use(validateToken) 

router.route('/').get(getSkills).post(createSkills)
router.route('/:id').get(findoneSkills).put(updateSkills).delete(deleteSkills)


 
module.exports = router