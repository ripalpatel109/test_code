import { Model, DataTypes } from 'sequelize';
import sequelize from '../database';

class Schedule extends Model {
  public id!: string;
  public account_id!: number;
  public agent_id!: number;
  public start_time!: Date;
  public end_time!: Date;
}

Schedule.init(
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
    agent_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    start_time: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    end_time: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'schedule',
  }
);

export default Schedule;