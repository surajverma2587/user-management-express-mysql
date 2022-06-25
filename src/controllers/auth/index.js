const User = require("../../models/User");

const login = (req, res) => {
  return res.send("login");
};

const signup = async (req, res) => {
  try {
    // get the user data from payload
    const {
      firstName,
      lastName,
      username,
      emailAddress,
      password,
      dateOfBirth,
      profileImageUrl,
    } = req.body;

    // check if user exists
    const user = await User.findOne({ where: { emailAddress } });

    if (user) {
      console.log(
        `[ERROR]: Failed to create user | Email address of ${emailAddress} already exists`
      );

      return res.status(400).json({ error: "Failed to create user" });
    }

    // create user
    const data = await User.create({
      firstName,
      lastName,
      username,
      emailAddress,
      password,
      dateOfBirth,
      profileImageUrl,
    });

    return res.json({ data });
  } catch (error) {
    console.log(`[ERROR]: Failed to create user | ${error.message}`);

    return res.status(500).json({ error: "Failed to create user" });
  }
};

module.exports = {
  login,
  signup,
};
