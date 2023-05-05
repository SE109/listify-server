import {
  Table,
  Column,
  Model,
  CreatedAt,
  UpdatedAt,
  DataType,
  ForeignKey,
} from 'sequelize-typescript';
import { Task, GroupTask } from '../models';

@Table({ modelName: 'TaskIncluded', tableName: 'task_included' })
class TaskIncluded extends Model {
  // Columns
  @ForeignKey(() => Task)
  @Column({ type: DataType.INTEGER, primaryKey: true, field: 'task_id' })
  taskId!: string;

  @ForeignKey(() => GroupTask)
  @Column({ type: DataType.INTEGER, primaryKey: true, field: 'group_task_id' })
  groupTaskId!: number;

  @CreatedAt
  @Column({ type: DataType.DATE, field: 'created_at' })
  createdAt!: Date;

  @UpdatedAt
  @Column({ type: DataType.DATE, field: 'updated_at' })
  updatedAt!: Date;
}

export default TaskIncluded;
