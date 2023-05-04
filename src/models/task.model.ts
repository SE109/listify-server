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
import { User } from '../models';

@Table({ modelName: 'Task', tableName: 'task' })
class Task extends Model {
  // Associations
  @BelongsTo(() => User)
  user!: User;

  // Columns
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true, field: 'task_id' })
  id!: number;

  @ForeignKey(() => User)
  @Column({ type: DataType.STRING, field: 'user_mail' })
  userMail!: string;

  @Column({ type: DataType.STRING, field: 'title' })
  title!: string;

  @Column({ type: DataType.TEXT, field: 'description' })
  description!: string;

  @Column({ type: DataType.DATE, field: 'from_date' })
  fromDate!: Date;

  @Column({ type: DataType.DATE, field: 'to_date' })
  toDate!: Date;

  @Column({ type: DataType.BOOLEAN, field: 'is_completed' })
  isCompleted!: boolean;

  @Column({ type: DataType.BOOLEAN, field: 'is_favorited' })
  isFavorited!: boolean;

  @CreatedAt
  @Column({ type: DataType.DATE, field: 'created_at' })
  createdAt?: Date;

  @UpdatedAt
  @Column({ type: DataType.DATE, field: 'updated_at' })
  updatedAt?: Date;
}

export default Task;
