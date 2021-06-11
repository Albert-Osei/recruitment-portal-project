/* Replace with your SQL commands */
CREATE TABLE "roles" (
  "id" SERIAL PRIMARY KEY,
  "type" varchar(15),
  "created_at" timestamptz DEFAULT NOW(),
  "updated_at" timestamptz DEFAULT NOW()
);

INSERT INTO roles(type) VALUES('admin');