const ApiError = (status, message, errors = []) => {
  const instance = new Error(message);
  instance.status = status;
  instance.errors = errors;
  return instance;
};

const UnauthorizedError = () => {
  return new ApiError(401, "Пользователь не авторизован");
};

const BadRequest = (message, errors = []) => {
  return new ApiError(400, message, errors);
};

module.exports = {
  ApiError,
  UnauthorizedError,
  BadRequest,
};
// module.exports = class ApiError extends Error {
//   status;
//   errors;
//   constructor(status, message, errors = []) {
//     super(message);
//     this.status = status;
//     this.errors = errors;
//   }

//   static UnauthorizedError() {
//     return new ApiError(401, "Пользователь не авторизован");
//   }

//   static BadRequest(message, errors = []) {
//     return new ApiError(400, message, errors);
//   }
// };
