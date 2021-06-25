const getBatchId = `
SELECT id, type  FROM batch
`;

const addQuizQuery = `
INSERT INTO 
  quiz(
    question, 
    option_a,
    option_b,
    option_c,
    option_d, 
    answer,
    file_url,
    batch_id
  ) 
VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING id, question, option_a, option_b, option_c, option_d, answer, file_url, batch_id`;

const findQuizById = `
SELECT id, question, option_a, option_b, option_c, option_d, answer, file_url  FROM quiz WHERE id=$1
`;

const updateQuizQuery = `
UPDATE quiz SET question=$1, option_a=$2, option_b=$3, option_c=$4, option_d=$5, answer=$6, file_url=$7, created_at=NOW(), updated_at=NOW() WHERE id=$8 
RETURNING id, question, option_a, option_b, option_c, option_d, answer, file_url, created_at, updated_at`;


module.exports = {
  getBatchId,
  addQuizQuery,
  updateQuizQuery,
  findQuizById
};