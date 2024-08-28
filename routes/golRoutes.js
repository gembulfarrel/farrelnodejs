const express = require('express');
const router = express.Router();

const golController = require('../controller/golController');
router.get('/', golController.getGoals);
router.post('/', golController.postGoals);

router.get('/', (req, res) => {
  res.send('Get all goals');
});

router.post('/', (req, res) => {
  res.send('Create a goal');
});

module.exports = router;
