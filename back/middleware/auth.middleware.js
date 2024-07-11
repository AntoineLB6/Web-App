const jwt = require("jsonwebtoken");
const StaffModel = require("../models/staff.model");

module.exports.checkUser = (req, res, next) => {
    const token = req.cookies.jwt;
    if (token) {
        jwt.verify(token, process.env.TOKEN_SECRET, async (err, decodedToken) => {
            if (err) {
                res.locals.user = null;
                res.cookie("jwt", "", { maxAge: 1 });
                next();
            } else {
                let user = await StaffModel.findById(decodedToken.id);
                res.locals.user = user;
                next();
            }
        })
    } else {
        res.locals.user = null;
        next();
    }
};

module.exports.requireUser = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
      jwt.verify(token, process.env.TOKEN_SECRET, async (err, decodedToken) => {
          if (err) {
              res.locals.user = null;
              res.cookie("jwt", "", { maxAge: 1 });
              return res.status(401).send("Echec : Vous n'êtes pas connecté");
          } else {
              let user = await StaffModel.findById(decodedToken.id);
              res.locals.user = user;
              next();
          }
      })
  } else {
      res.locals.user = null;
      return res.status(401).send("Echec : Vous n'êtes pas connecté");
  }
  };
  