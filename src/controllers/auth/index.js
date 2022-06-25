const User = require("../../models/User");

const login = async (req, res) => {
  try {
    // get the user data from payload
    const { emailAddress, password } = req.body;

    // get user by email address
    const user = await User.findOne({ where: { emailAddress } });

    if (!user) {
      console.log(
        `[ERROR]: Failed to login | No user with email address of ${emailAddress}`
      );

      return res.status(401).json({ error: "Failed to login" });
    }

    const isAuthorised = await user.checkPassword(password);

    if (isAuthorised) {
      return res.json({ data: "hello" });
    } else {
      return res.status(401).json({ data: "get lost" });
    }

    return res.json({ data: "hello" });
  } catch (error) {
    console.log(`[ERROR]: Failed to login | ${error.message}`);

    return res.status(500).json({ error: "Failed to login" });
  }
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
