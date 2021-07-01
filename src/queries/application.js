const addApplicationQuery = `
INSERT INTO 
  applications(
    link, 
    closure_date,
    batch_id,
    instructions,
    file_path
  ) 
VALUES ($1,$2,$3,$4,$5) RETURNING id, link, closure_date, batch_id, instructions, file_path`;

const getAllApplications = `
SELECT * FROM applications
`;

const findApplicationById = `
SELECT id, link, closure_date, batch_id, instructions FROM applications WHERE id=$1
`;

module.exports = {
    addApplicationQuery,
    getAllApplications,
    findApplicationById
}