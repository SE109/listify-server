-- CREATE TABLE USER:
CREATE TABLE users (
	mail TEXT NOT NULL PRIMARY KEY,
	password TEXT NOT NULL,
	first_name TEXT NOT NULL,
	last_name TEXT NOT NULL,
	date_of_birth DATE,
	phone_num VARCHAR(10),
	avatar TEXT DEFAULT 'https://media.istockphoto.com/id/1223671392/vector/default-profile-picture-avatar-photo-placeholder-vector-illustration.jpg?s=170667a&w=0&k=20&c=m-F9Doa2ecNYEEjeplkFCmZBlc5tm1pl1F7cBCh9ZzM=',
	refresh_token TEXT DEFAULT '',
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TRIGGER update_db_timestamp BEFORE UPDATE
ON users
FOR EACH ROW
EXECUTE PROCEDURE update_timestamp();

-- CREATE TABLE GROUPTASK:
CREATE TABLE group_task(
	group_task_id SERIAL PRIMARY KEY,
	user_mail TEXT NOT NULL REFERENCES users(mail),
	name VARCHAR(255) NOT NULL,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TRIGGER update_db_timestamp BEFORE UPDATE
ON group_task
FOR EACH ROW
EXECUTE PROCEDURE update_timestamp();

-- CREATE TABLE TASK:
CREATE TABLE task(
	task_id SERIAL PRIMARY KEY,
	user_mail TEXT NOT NULL REFERENCES users(mail),
	title VARCHAR(255) NOT NULL,
	description TEXT,
	from_date DATE,
	to_date DATE,
	is_completed BOOLEAN NOT NULL,
	is_favorited BOOLEAN NOT NULL,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TRIGGER update_db_timestamp BEFORE UPDATE
ON task
FOR EACH ROW
EXECUTE PROCEDURE update_timestamp();

-- CREATE TABLE TASKINCLUDED:
CREATE TABLE task_included(
	group_task_id INTEGER NOT NULL REFERENCES group_task(group_task_id),
	task_id INTEGER NOT NULL REFERENCES task(task_id),
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TRIGGER update_db_timestamp BEFORE UPDATE
ON task_included
FOR EACH ROW
EXECUTE PROCEDURE update_timestamp();

-- CREATE TABLE SUBTASK:
CREATE TABLE sub_task(
	sub_task_id SERIAL PRIMARY KEY,
	task_id INTEGER NOT NULL REFERENCES task(task_id),
	title VARCHAR(255) NOT NULL,
	is_completed BOOLEAN NOT NULL,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TRIGGER update_db_timestamp BEFORE UPDATE
ON sub_task
FOR EACH ROW
EXECUTE PROCEDURE update_timestamp();

-- CREATE TABLE VOICE:
CREATE TABLE voice(
	voice_id SERIAL PRIMARY KEY,
	task_id INTEGER NOT NULL REFERENCES task(task_id),
	name VARCHAR(255) NOT NULL,
	file TEXT NOT NULL,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TRIGGER update_db_timestamp BEFORE UPDATE
ON voice
FOR EACH ROW
EXECUTE PROCEDURE update_timestamp();