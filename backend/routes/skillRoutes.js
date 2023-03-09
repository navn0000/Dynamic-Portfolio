const express = require('express');
const router = express.Router();
const { getSkills, createSkills, updateSkills, findoneSkills, deleteSkills } = require('../controllers/skillcontroller')

router.route('/').get(getSkills).post(createSkills)
router.route('/:id').get(findoneSkills).put(updateSkills).delete(deleteSkills)


 
module.exports = router