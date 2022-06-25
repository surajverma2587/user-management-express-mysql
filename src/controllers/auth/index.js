const login = (req, res) => {
  return res.send("login");
};

const signup = (req, res) => {
  return res.send("signup");
};

module.exports = {
  login,
  signup,
};
