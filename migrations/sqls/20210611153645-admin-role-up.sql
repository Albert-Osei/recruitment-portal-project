/* Replace with your SQL commands */
CREATE TABLE "adminrole" (
  "id" SERIAL PRIMARY KEY,
  "type" varchar(15),
  "created_at" timestamptz DEFAULT NOW(),
  "updated_at" timestamptz DEFAULT NOW()
);

INSERT INTO adminrole(type) VALUES('admin');
INSERT INTO adminrole(type) VALUES('user');
