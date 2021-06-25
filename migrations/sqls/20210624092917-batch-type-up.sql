/* Replace with your SQL commands */
CREATE TABLE "batch" (
  "id" SERIAL PRIMARY KEY,
  "type" varchar(15),
  "created_at" timestamptz DEFAULT NOW(),
  "updated_at" timestamptz DEFAULT NOW()
);

INSERT INTO batch(type) VALUES('BatchId1');
INSERT INTO batch(type) VALUES('BatchId2');
INSERT INTO batch(type) VALUES('BatchId3');
INSERT INTO batch(type) VALUES('BatchId4');