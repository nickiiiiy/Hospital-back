const User = require("../models/user.js");
const bcrypt = require("bcrypt");
const { generateTokens, saveToken } = require("./token-service.js");
const UserDto = require("../dtos/user-dto.js");

const registration = async (login, password) => {
  const candidate = await User.findOne({ login });
  if (candidate) {
    throw new Error(`Пользватель с данным логином: ${login} уже существует`);
  }
  const hashPassword = await bcrypt.hash(password, 3);
  const user = await User.create({ login, password: hashPassword });

  const userDto = new UserDto(user);
  const tokens = generateTokens({ ...userDto });

  await saveToken(userDto.id, tokens.refreshToken);
  return {
    ...tokens,
    user: userDto,
  };
};

module.exports = {
  registration,
};
