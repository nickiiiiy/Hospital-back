function UserDto(model) {
  this.id = model._id;
  this.login = model.login;
}

module.exports = UserDto;
