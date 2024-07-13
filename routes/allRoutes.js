const express = require("express");
const router = express.Router();
const { body, validationResult, check } = require("express-validator");
const user = require("../user.json");
// const controller = require("../controllers/allControllers");

router.use(express.json());

router.get("/", (req, res) => {
  res.send("ok-200");
});
router.get("/user", (req, res) => {
  res.json(user);
});
router.get("/products", (req, res) => {
  console.log(req.query);
  let result = "not query received";
  if (req.query.date || req.query.price) {
    result = "query successful received";
  }
  res.send(result);
});
router.get("/user/:id", (req, res) => {
  let result = user.find((item) => item.id == req.params.id);
  if (!result) {
    return res.status(404).json(["user not found"]);
  }
  res.json(result);
});
router.post(
  "/user",
  [
    body("email", "the email format incorect").isEmail(),
    body("email", "email not found").notEmpty(),
    body("first_name", "first name not found").notEmpty(),
    body("last_name", "last_name not found").notEmpty(),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      res.status(200).json({ message: "ok" });
    } else {
      res.status(400).json(errors.errors[0].msg);
    }
  }
);
router.put("/user/:id", (req, res) => {
  let result = user.find((item) => item.id == req.params.id);
  if (!result) {
    return res.status(404).json(["user not found"]);
  }
  const updateData = user.map((item, index) => {
    if (item.id == req.params.id) {
      return { ...item, ...req.body };
    }
    return item;
  });
  res.json({ updateData });
});
router.delete("/user/:id", (req, res) => {
  let result = user.find((item) => item.id == req.params.id);
  if (!result) {
    return res.status(404).json(["user not found"]);
  }
  const index = user.indexOf(result);
  user.splice(index, 1);
  res.json({ user });
});

module.exports = router;
