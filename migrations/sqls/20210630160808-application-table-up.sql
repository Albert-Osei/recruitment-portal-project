/* Replace with your SQL commands */
CREATE TABLE "applications" (
    "id" SERIAL PRIMARY KEY,
    "link" varchar(255),
    "closure_date" varchar(255),
    "batch_id" varchar(255),
    "instructions" varchar(255),
    "file_path" varchar(255),
    "created_at" timestamptz DEFAULT NOW(),
    "updated_at" timestamptz DEFAULT NOW()
);