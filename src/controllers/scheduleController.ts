import { Request, Response } from 'express';
import {v4 as uuidv4} from 'uuid';
import Schedule from '../models/schedule';


export const createSchedule = async (req: Request, res: Response) =>{
    try{
        const id = uuidv4();
        const { account_id, agent_id, start_time, end_time } = req.body;
        const n = {
            _id:id,
            account_id, agent_id, start_time, end_time
        }
        const newSchedule = Schedule.create(n)
        if(!newSchedule){
            res.status(404).json({error:'Schedule not created'})
        }else{
            res.status(201).json(newSchedule);
        }
    }catch(error){
        res.status(500).json({ message: 'Internal Server Error' });
    }
    
};

export const getSchedule = async (req: Request, res: Response) =>{
    try {
        const ScheduleId = req.params.id;
        const Schedules = await Schedule.findOne(  {where: { id: ScheduleId }});
        if(Schedules){
            res.json(Schedules);
        }else{
            res.status(404).json({error:'Schedule not found'})
        }
      } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
      }
};

export const getAllSchedule = async (req: Request, res: Response) =>{
    try {
        const Schedules = await Schedule.findAll();
        res.json(Schedules);
      } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
      }
};

export const editSchedule = async (req: Request, res: Response) =>{
    try{
        const ScheduleId = req.params.id;
        const { account_id, agent_id, start_time, end_time } = req.body;
        const Schedules = await Schedule.update(req.body, {
            where: { id: ScheduleId },
        }); 
        if(!Schedules){
            res.status(404).json({error:'Schedule not updated'})
        }else{
            res.status(201).json(Schedules);
            }
    }catch{
        res.status(500).json({ message: 'Internal Server Error' });

    }
};

export const deleteSchedule = async (req: Request, res: Response) =>{
    try {
        const schedule =  await Schedule.destroy({
           where: { id: req.params.id },
         });
         res.status(204).json({Schedule:schedule, message: 'Schedule deleted successfully' });
       } catch (error) {
         res.status(500).json({ message: 'Something went wrong' });
       }
};