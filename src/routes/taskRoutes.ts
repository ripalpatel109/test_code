import express from 'express';
import {createTask, 
    getTask, 
    editTask, 
    deleteTask ,
    getAllTask
} from '../controllers/taskController';

const router = express.Router();

router.post('/tasks', createTask);
router.get('/tasks/:id', getTask);
router.get('/tasks', getAllTask);
router.put('/tasks/:id', editTask);
router.delete('/tasks/:id', deleteTask);


export default router;