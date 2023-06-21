const express = require('express'); 
const router = express.Router();
const taskController = require('./controllers/taskController'); 
const taskMiddleware = require('./middlewares/tasksMiddlewares'); 


router.get('/tasks', taskController.getAll); 
router.post('/tasks', taskMiddleware.validadeBody, taskController.createTask); 
router.delete('/tasks/:id', taskController.deleteTask); 
router.put('/tasks/:id', taskController.updateTask); 

module.exports = router; 