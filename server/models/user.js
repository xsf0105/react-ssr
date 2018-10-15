export default function(sequelize, DataTypes) {
  var User = sequelize.define("user", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING(20),
      allowNull: false,
      validate: {
        is: /^[\\u4e00-\\u9fa5_a-zA-Z0-9-]{3,16}$/
      }
    },
    captcha: DataTypes.STRING(4),
    password: DataTypes.STRING,
    email: {
      type: DataTypes.STRING(32),
      allowNull: false,
      validate: {
        isEmail: true
      }
    }
  });
  User.sync();
  return User;
}
