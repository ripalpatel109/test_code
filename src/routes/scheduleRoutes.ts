import express from 'express';
import {createSchedule, 
    getSchedule, 
    editSchedule, 
    deleteSchedule ,
    getAllSchedule, } from '../controllers/scheduleController';

const router = express.Router();

router.post('/schedules', createSchedule);
router.get('/schedules/:id', getSchedule);
router.get('/schedules', getAllSchedule);
router.put('/schedules/:id', editSchedule);
router.delete('/schedules/:id', deleteSchedule);


export default router;