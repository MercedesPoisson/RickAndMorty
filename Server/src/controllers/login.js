const {router} = require("express");
const router = Router();

const login = (req, res) => {
    const { email, password } = req.query;

  const user = users.find((u) => u.email === email && u.password === password);

  if (user) {
    res.status(200).json({ access: true });
  } else {
    res.status(200).json({ access: false });
  }
};

router.get("/", login);

module.exports = login;
