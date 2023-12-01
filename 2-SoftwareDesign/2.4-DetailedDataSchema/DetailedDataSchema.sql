CREATE TABLE Users (
    user_id INT PRIMARY KEY,
    email VARCHAR(255) CHECK (email ~ '^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$'),
    name VARCHAR(255),
    surname VARCHAR(255),
    password VARCHAR(255) CHECK (password ~ '^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,32}$')
);
CREATE TABLE SleepMessages (
    sleep_message_id INT PRIMARY KEY,
    user INT,
    sending_time DATETIME,
    message VARCHAR(255),
    FOREIGN KEY (user) REFERENCES Users(user_id)
);

CREATE TABLE Sleep_durations (
    sleep_duration_id INT PRIMARY KEY,
    user INT,
    sleep_start DATETIME,
    sleep_end DATETIME,
    sleep_quality INT,
    FOREIGN KEY (user) REFERENCES Users(user_id)
);

CREATE TABLE Projects (
    project_id INT PRIMARY KEY,
    user INT,
    name  VARCHAR(255),
    description VARCHAR(255),
    FOREIGN KEY (user) REFERENCES Users(user_id)
);

CREATE TABLE Schedules (
    schedule_id INT PRIMARY KEY,
    message INT,
    sending_time DATETIME,
    FOREIGN KEY (message) REFERENCES SleepMessages(sleep_message_id)
);
