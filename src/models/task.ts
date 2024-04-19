// models/Task.ts
import { Model, DataTypes } from 'sequelize';
import sequelize from '../database';

class Task extends Model {
  public id!: string;
  public account_id!: number;
  public schedule_id!: string;
  public start_time!: Date;
  public duration!: number;
  public type!: 'break' | 'work';
}

Task.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    account_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    schedule_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    start_time: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM('break', 'work'),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'task',
  }
);

export default Task;