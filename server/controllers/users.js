const JWT = require("jsonwebtoken");
const User = require("../models/users");
const { JWT_SECRET } = require("../configuration/index");

const signToken = user => {
  return JWT.sign(
    {
      iss: "Lsh",
      sub: user.id,
      iat: new Date().getTime(), // current time
      exp: new Date().setDate(new Date().getDate() + 1) // current time + 1 day ahead
    },
    JWT_SECRET
  );
};

module.exports = {
  signUp: async (req, res, next) => {
    // Email & Password
    const { email, password } = req.value.body;

    // Check if there is a user with the same email
    const foundUser = await User.findOne({ "local.email": email });
    if (foundUser) {
      return res.status(403).json({ error: "Email is already in use" });
    }

    // Create a new user
    const newUser = new User({
      method: "local",
      local: {
        email,
        password
      }
    });
    await newUser.save();

    // Generate the token
    const token = signToken(newUser);

    // Response with token
    res.status(200).json({ token });
  },

  signIn: async (req, res, next) => {
    // Generate token
    const token = signToken(req.user);
    res.status(200).json({ token });
  },

  googleOAuth: async (req, res, next) => {
    // Generate token
    const token = signToken(req.user);
    res.status(200).json({ token });
  },

  facebookOAuth: async (req, res, next) =>{
    // Generate token
    const token = signToken(req.user)
    res.status(200).json({token})
  },

  secret: async (req, res, next) => {
    res.status(200).json({ secret: "resource" });
  }
};
