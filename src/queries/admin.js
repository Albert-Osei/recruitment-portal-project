/**
 * find admin by email
 * - email
 */
const findAdminByEmail = `
SELECT id, role_id, name, password, email FROM admins WHERE email=$1
`;
/**
 * get admin role
 */
const getAdminRole = `
SELECT id, type  FROM adminrole
`;
/**
 * add admin
 * - name
 * - email
 * - phonenumber
 * - country
 * - address
 * - password
 * - image_url
 * - role_id
 *
 */
const addAdmin = `
INSERT INTO 
  admins(
    name,
    email,
    phonenumber, 
    country,
    address,
    password,
    image_url,
    role_id
  ) 
VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING id, name, email, phonenumber, country, address, image_url, role_id`;

module.exports = {
    addAdmin,
    findAdminByEmail,
    getAdminRole,
};