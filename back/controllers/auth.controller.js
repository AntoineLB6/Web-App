const StaffModel = require("../models/staff.model");
const jwt = require("jsonwebtoken");
const { signInErrors } = require("../utils/errors.utils");
const { send } = require("express/lib/response");

const maxAge = 3 * 24 * 60 * 60 * 1000;
const createToken = (id) => {
  return jwt.sign({id}, process.env.TOKEN_SECRET, {
    expiresIn: maxAge
  })
}

module.exports.signUp = async (req, res) => {
  if (req.body.dbData !== "juubi2") return res.status(401).send("Not authorized")
  const { ID, password } = req.body.formData;

  try {
      const staff = await StaffModel.create({ID, password});
      res.status(201).json({ staff: staff._id});
  }
  catch(err){
      res.status(200).send(err);
  }
}

module.exports.signIn = async (req, res) => {
  const { ID, password } = req.body;
  
  try {
    const staff = await StaffModel.login(ID, password);
    const token = createToken(staff._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge });
    res.status(200).json({ staff: staff._id })
  } catch (err) {
    const errors = signInErrors(err);
    res.status(200).json({ errors });
  }
}

module.exports.logout = (req, res) => {
  res.cookie('jwt', '', { maxAge: 1 });
  res.status(200).send("Déconnecté");
}

module.exports.getUser = async (req, res) => {
  if (res.locals.user) res.status(200).json(res.locals.user);
  else res.status(200).send("Non connecté");
}