const addFormQuery = `
INSERT INTO 
  forms(
    firstname, 
    lastname, 
    email,
    date_of_birth,
    address,
    university,
    course_of_study,
    cgpa,
    user_image
  ) 
VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING id, firstname, lastname, email, date_of_birth, address, university, course_of_study, cgpa, user_image`;

const findFormByEmail = `
SELECT firstname, lastname, email, date_of_birth, address, university, course_of_study, cgpa FROM forms WHERE email=$1
`;


const findFormById = `
SELECT id, firstname, lastname, email, date_of_birth, address, university, course_of_study, cgpa  FROM forms WHERE id=$1
`;

const updateFormQuery = `
UPDATE forms SET firstname=$1, lastname=$2, email=$3, date_of_birth=$4, address=$5, university=$6, course_of_study=$7, cgpa=$8, created_at=NOW(), updated_at=NOW() WHERE id=$9 
RETURNING id, firstname, lastname, email, date_of_birth, address, university, course_of_study, cgpa, created_at, updated_at`;


module.exports = {
    addFormQuery,
    updateFormQuery,
    findFormByEmail,
    findFormById
};
