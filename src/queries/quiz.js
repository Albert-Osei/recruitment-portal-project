const addQuizQuery = `
INSERT INTO 
  quizes(
    question, 
    alternatives, 
    file_url
  ) 
VALUES ($1,$2,$3,$4,$5,$6) RETURNING id, question, alternatives, file_url`;


const findQuizById = `
SELECT id, question, alternatives, file_url  FROM quizes WHERE id=$1
`;

const updateQuizQuery = `
UPDATE quizes SET question=$1, alternatives=$2, file_url=$6, created_at=NOW(), updated_at=NOW() WHERE id=$9 
RETURNING id, question, alternatives[optionA, optionB, optionC, optionD], file_url, created_at, updated_at`;


module.exports = {
    addQuizQuery,
    updateQuizQuery,
    findQuizById
};