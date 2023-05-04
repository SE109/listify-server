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

@Table({ modelName: 'Voice', tableName: 'voice' })
class Voice extends Model {
  // Associations
  @BelongsTo(() => Task)
  task!: Task;

  // Columns
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true, field: 'voice_id' })
  id!: number;

  @ForeignKey(() => Task)
  @Column({ type: DataType.INTEGER, field: 'task_id' })
  taskId!: string;

  @Column({ type: DataType.STRING, field: 'name' })
  name!: string;

  @Column({ type: DataType.STRING, field: 'file' })
  file!: string;

  @CreatedAt
  @Column({ type: DataType.DATE, field: 'created_at' })
  createdAt?: Date;

  @UpdatedAt
  @Column({ type: DataType.DATE, field: 'updated_at' })
  updatedAt?: Date;
}

export default Voice;
