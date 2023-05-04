import {
  Table,
  Column,
  Model,
  CreatedAt,
  UpdatedAt,
  DataType,
  BelongsTo,
  ForeignKey,
  BelongsToMany,
} from 'sequelize-typescript';
import { Task, TaskIncluded, User } from '.';

@Table({ modelName: 'GroupTask', tableName: 'group_task' })
class GroupTask extends Model {
  // Associations
  @BelongsTo(() => User)
  user!: User;

  @BelongsToMany(() => Task, () => TaskIncluded)
  task!: Task;

  // Columns
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true, field: 'group_task_id' })
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

export default GroupTask;
