import {
  Table,
  Column,
  Model,
  CreatedAt,
  UpdatedAt,
  DataType,
  ForeignKey,
} from 'sequelize-typescript';
import { Task, TaskList } from '../models';

@Table({ modelName: 'TaskIncluded', tableName: 'task_included' })
class TaskIncluded extends Model {
  // Columns
  @ForeignKey(() => Task)
  @Column({ type: DataType.INTEGER, primaryKey: true, field: 'task_id' })
  taskId!: string;

  @ForeignKey(() => TaskList)
  @Column({ type: DataType.INTEGER, primaryKey: true, field: 'task_list_id' })
  taskListId!: string;

  @CreatedAt
  @Column({ type: DataType.DATE, field: 'created_at' })
  createdAt!: Date;

  @UpdatedAt
  @Column({ type: DataType.DATE, field: 'updated_at' })
  updatedAt!: Date;
}

export default TaskIncluded;
