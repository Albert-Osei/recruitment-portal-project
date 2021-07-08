/* Replace with your SQL commands */
CREATE TABLE "appstatus" (
    "id" SERIAL PRIMARY KEY,
    "status" varchar(100),
    "email" varchar(100),
    "created_at" timestamptz DEFAULT NOW(),
    "updated_at" timestamptz DEFAULT NOW()
);
