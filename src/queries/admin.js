/**
 * find book by id
 * - id
 */
const findAdminById = `
SELECT id, role_id,  name, email, password FROM admins WHERE id=$1
`;

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
SELECT id, type FROM adminrole
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

const updateProfileQuery = `
UPDATE admins SET name=$1, phonenumber=$2, country=$3, address=$4, image_url=$5, created_at=NOW(), updated_at=NOW() WHERE id=$6 RETURNING id, name, phonenumber, country, address, image_url, created_at, updated_at
`;

module.exports = {
    addAdmin,
    findAdminByEmail,
    getAdminRole,
    findAdminById,
    updateProfileQuery,
};