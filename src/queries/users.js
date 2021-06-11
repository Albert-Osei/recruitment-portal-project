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
SELECT id, type  FROM roles
`;
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
};
