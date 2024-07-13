const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  let token = req.cookies.auth_t;
  if (!token) {
    token = req.headers.auth_t;
  }
  if (!token) {
    res.status(401).json({ msg: "لطفا به حساب کاربری خود وارد شوید..." });
  } else {
    try {
      const verified = jwt.verify(token, process.env.TOKEN_SECRET);
      req.user = verified;
      next();
    } catch (err) {
      console.log(err);
      res.status(200).json({ msg: "لطفا به حساب کاربری خود وارد شوید...", router: "login" });
    }
  }
};