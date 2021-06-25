/* Replace with your SQL commands */
CREATE TABLE "quiz" (
    "id" SERIAL PRIMARY KEY,
    "question" varchar(100),
    "option_a" varchar(100),
    "option_b" varchar(100),
    "option_c" varchar(100),
    "option_d" varchar(100),
    "answer" varchar(100),
    "file_url" varchar(100),
    "batch_id" INT,
    "created_at" timestamptz DEFAULT NOW(),
    "updated_at" timestamptz DEFAULT NOW()
);
