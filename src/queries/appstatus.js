const addStatusQuery = `
INSERT INTO 
  appstatus(
    status,
    email
  ) 
VALUES ($1,$2) RETURNING id, status, email`;

const getAllStatuses = `
SELECT * FROM appstatus
`;

const findStatusByEmail = `
SELECT status, email FROM appstatus WHERE email=$1
`;


const findStatusById = `
SELECT id, status, email FROM appstatus WHERE id=$1
`;

const updateStatusQuery = `
UPDATE appstatus SET status=$1, email=$2, created_at=NOW(), updated_at=NOW() WHERE id=$3 
RETURNING id, status, email, created_at, updated_at`;

module.exports = {
    addStatusQuery,
    getAllStatuses,
    findStatusByEmail,
    findStatusById,
    updateStatusQuery
}