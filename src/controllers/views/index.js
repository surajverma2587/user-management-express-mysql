const path = require("path");

const renderHomePage = (req, res) => {
  return res.sendFile(path.join(__dirname, "../../../public/index.html"));
};

const renderLoginPage = (req, res) => {
  return res.sendFile(path.join(__dirname, "../../../public/login.html"));
};

const renderSignupPage = (req, res) => {
  return res.sendFile(path.join(__dirname, "../../../public/signup.html"));
};

const renderDashboardPage = (req, res) => {
  return res.sendFile(path.join(__dirname, "../../../public/dashboard.html"));
};

module.exports = {
  renderHomePage,
  renderLoginPage,
  renderSignupPage,
  renderDashboardPage,
};
