const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
const { successHandler, errorHandler } = require("../utils/ResponseHandle");

exports.register = async (req, res) => {
  try {

  } catch (error) {
    debugger;
    console.log("___error___", error);
    return errorHandler(res, error);
  }
}