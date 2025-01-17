const router = require('express').Router();
const homepageController = require('../controllers/HomepageController');
const tasksController = require('../controllers/TasksController');

router.get('/', homepageController.index);

router.post('/tasks', tasksController.store);

router.post('/mierda/*', tasksController.mierda);
router.post('/delete/*', tasksController.delete);

module.exports = router;
