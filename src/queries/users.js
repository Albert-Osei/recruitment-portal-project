/**
 * find user by email
 * - email
 */
const findUserByEmail = `
SELECT id, role_id, firstname, lastname, password, email FROM users WHERE email=$1
`;
/**
 * get all roles
 */
const getAllRoles = `
SELECT id, type FROM roles
`;

const getAllUsersQuery = `
SELECT * FROM users
`;

const getAllScores = `
SELECT * FROM scores
`;

const findUserById = `
SELECT id, role_id, firstname, lastname, email, phonenumber, password FROM users WHERE id=$1
`
const scores = `
INSERT INTO
  scores(
    firstname,
    lastname,
    score
  )
VALUES ($1,$2,$3) RETURNING id, firstname, lastname, score, created_at`;

/**
 * add user
 * - firstName
 * - lastName
 * - email
 * - phonenumber
 * - password
 * - confirm_password
 * - role_id
 *
 */
const addUser = `
INSERT INTO 
  users(
    firstname,
    lastname,
    email, 
    phonenumber,
    password,
    confirm_password,
    role_id
  ) 
VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING id, firstname, lastname, email, role_id`;

module.exports = {
    addUser,
    findUserByEmail,
    getAllRoles,
    getAllUsersQuery,
    findUserById,
    scores,
    getAllScores,
};
