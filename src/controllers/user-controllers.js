const { registration } = require("../services/user-services.js");

const registrationUser = async (req, res, next) => {
  try {
    const { login, password } = req.body;
    const userData = await registration(login, password);
    res.cookie("refreshToken", userData.refreshToken, {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      httponly: true,
    });
    res.status(200).send(userData);
  } catch (error) {
    res.status(400).send("Failed to registration user");
    console.log(error);
  }
};

module.exports = {
  registrationUser,
};
