const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const config = require("../config/env/index");
const { runQuery } = require("../config/database.config");
const { findAdminByEmail, addAdmin, getAdminsQuery, getAdminRole, updateProfileQuery, findAdminById } = require("../queries/admin");


const findAdmin = async (email) => {
    const admin= await runQuery(findAdminByEmail, [email]);
    return admin;
};

const getAdmins = async () => {
    const admins = await runQuery(getAdminsQuery);
    return {
        status: "success",
        message: "Admin details fetched successfully",
        code: 200,
        data: admins
    };
};

const loginAdmin = async (body) => {
    const { email, password } = body;
    const admin = await findAdmin(email);
    if (admin.length === 0) {
        throw {
            status: "error",
            message: "Wrong email and password combination",
            code: 404,
            data: null,
        };
    }

    const { password: dbPassword, role_id, name, id } = admin[0];
    const adminPassword = bcrypt.compareSync(password, dbPassword); // true
    if (!adminPassword) {
        throw {
            status: "error",
            message: "Wrong password and email combination",
            code: 400,
            data: null,
        };
    }

    const options = {
        expiresIn: "1d",
    };

    const roles = await runQuery(getAdminRole);
    const adminRole = roles.find((element) => element.id === role_id);
    const token = jwt.sign(
        {
            id,
            email,
            role_id,
            type: adminRole.type,
        },
        config.JWT_SECRET_KEY,
        options
    );
    return {
        status: "success",
        message: "Authentication successful",
        code: 200,
        data: {
            admin: {
                id,
                email,
                role_id,
                name,
                type: adminRole.type,
            },
            token,
        },
    };
};

const createAdmin = async (body) => {
    const { name, email, phonenumber, country, address, password, image_url } = body;

    const admin = await findAdmin(email);
    if (admin.length > 0) {
        throw {
            code: 409,
            message: "Admin already exists",
            data: null,
            status: "error",
        };
    }

    const saltRounds = 12;
    const hash = bcrypt.hashSync(password, saltRounds);

    const roles = await runQuery(getAdminRole);
    const adminRole = roles.find((element) => element.type === "admin");
    const response = await runQuery(addAdmin, [name, email, phonenumber, country, address, hash, image_url, adminRole.id]);

    return {
        code: 201,
        status: "success",
        message: "Admin succesfully created",
        data: response[0],
    };
};

const updateProfile = async(id, body) => {
    const { name, phonenumber, country, address, image_url } = body;

    const profile = await runQuery(findAdminById, [id]);

    if (profile.length === 0) {
        throw{
            status: "error",
            message: "Admin profile not found",
            code: 400,
            data: null
        };
    }
    const response = await runQuery(updateProfileQuery, [name, phonenumber, country, address, image_url, id]);
    return {
        status: "success",
        message: "Sparkles! Admin profile has been edited successfully",
        code: 200,
        data: response[0],
    }
}



module.exports = {
    loginAdmin,
    createAdmin,
    findAdmin,
    updateProfile,
    getAdmins
};