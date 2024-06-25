const createHttpError = require("http-errors");
const db = require("../models");
const { create } = require("../models/role.model");
const User = db.user;
const Role = db.role;

async function checkExistUser(req, res, next) {
  try {
    //kiểm soát trước khi đưa xung model
    if (!req.body.email || !req.body.password || !req.body.name) {
      throw createHttpError.BadRequest("Missing email, password or name");
    }
    if (await User.findOne({ email: req.body.email })) {
      throw createHttpError.BadRequest(`${req.body.email} is already registered`);
    }
    next();
  } catch (error) {
    next(error);
  }
}

async function checkExistRole(req, res, next) {
  try {
    if (req.body.role) {
      const role = await Role.findOne({ name: req.body.role }).exec();
      if (!role) {
        throw createHttpError.BadRequest("Role not found");
      }
    }
    next();
  } catch (error) {
    next(error);
  }
}

module.exports = {
  checkExistUser,
  checkExistRole,
};
