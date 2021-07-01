/* Replace with your SQL commands */
CREATE TABLE "quiz" (
    "id" SERIAL PRIMARY KEY,
    "question" varchar(255),
    "option_a" varchar(255),
    "option_b" varchar(255),
    "option_c" varchar(255),
    "option_d" varchar(255),
    "answer" varchar(255),
    "file" varchar(255),
    "batch_id" INT,
    "created_at" timestamptz DEFAULT NOW(),
    "updated_at" timestamptz DEFAULT NOW()
);
