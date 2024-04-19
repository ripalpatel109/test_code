import { Request, Response } from 'express';
import Task from '../models/task';
import {v4 as uuidv4} from 'uuid';


export const createTask = async (req: Request, res: Response) =>{
    try{
        const id = uuidv4();
        const { account_id, schedule_id, start_time, duration, type } = req.body;
        const n = {
            _id:id,
            account_id, schedule_id, start_time, duration, type 
        }
        const newTask = Task.create(n)
        if(!newTask){
            res.status(404).json({error:'Task not created'})
        }else{
            res.status(201).json(newTask);
        }
    }catch(error){
        res.status(500).json({ message: 'Internal Server Error' });
    }
    
};

export const getAllTask = async (req: Request, res: Response) =>{
    try {
        const tasks = await Task.findAll();
        res.json(tasks);
      } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
      }
};

export const getTask = async (req: Request, res: Response) =>{
    try {
        const taskId = req.params.id;
        const tasks = await Task.findOne( {where: { id: taskId }});
        if(tasks){
            res.json(tasks);
        }else{
            res.status(404).json({error:'Task not found'})
        }
      } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
      }
};

export const editTask = async (req: Request, res: Response) =>{
    try{
        const taskId = req.params.id;
        const { account_id, schedule_id, start_time, duration, type } = req.body;
        const tasks = await Task.update(req.body, {
            where: { id: taskId },
        }); 
        if(!tasks){
            res.status(404).json({error:'Task not updated'})
        }else{
            res.status(201).json(tasks);
            }
    }catch{
        res.status(500).json({ message: 'Internal Server Error' });

    }
   
};

export const deleteTask = async (req: Request, res: Response) =>{
    try {
       const task =  await Task.destroy({
          where: { id: req.params.id },
        });
        res.status(204).json({task:task, message: 'Task deleted successfully' });
      } catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
      }
};