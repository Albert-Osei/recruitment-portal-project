/* Replace with your SQL commands */
CREATE TABLE "forms" (
    "id" SERIAL PRIMARY KEY,
    "firstname" varchar(100),
    "lastname" varchar(100),
    "email" varchar(100) UNIQUE,
    "date_of_birth" varchar(100),
    "address" varchar(100),
    "university" varchar(100),
    "course_of_study" varchar(100),
    "cgpa" varchar(100),
    "user_image" varchar(100),
    "created_at" timestamptz DEFAULT NOW(),
    "updated_at" timestamptz DEFAULT NOW()
);
