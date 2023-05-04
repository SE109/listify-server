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

@Table({ modelName: 'TaskList', tableName: 'task_list' })
class TaskList extends Model {
  // Associations
  @BelongsTo(() => User)
  user!: User;

  // Columns
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true, field: 'task_list_id' })
  id!: number;

  @ForeignKey(() => User)
  @Column({ type: DataType.STRING, field: 'user_mail' })
  userMail!: string;

  @Column({ type: DataType.STRING, field: 'name' })
  name!: string;

  @CreatedAt
  @Column({ type: DataType.DATE, field: 'created_at' })
  createdAt?: Date;

  @UpdatedAt
  @Column({ type: DataType.DATE, field: 'updated_at' })
  updatedAt?: Date;
}

export default TaskList;
