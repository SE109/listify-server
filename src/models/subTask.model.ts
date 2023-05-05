import {
  Table,
  Column,
  Model,
  CreatedAt,
  UpdatedAt,
  DataType,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import { Task } from '../models';

@Table({ modelName: 'SubTask', tableName: 'sub_task' })
class SubTask extends Model {
  // Associations
  @BelongsTo(() => Task)
  task!: Task;

  // Columns
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true, field: 'sub_task_id' })
  id!: number;

  @ForeignKey(() => Task)
  @Column({ type: DataType.INTEGER, field: 'task_id' })
  taskId!: number;

  @Column({ type: DataType.STRING, field: 'title' })
  title!: string;

  @Column({ type: DataType.BOOLEAN, field: 'is_completed' })
  isCompleted!: boolean;

  @CreatedAt
  @Column({ type: DataType.DATE, field: 'created_at' })
  createdAt?: Date;

  @UpdatedAt
  @Column({ type: DataType.DATE, field: 'updated_at' })
  updatedAt?: Date;
}

export default SubTask;
