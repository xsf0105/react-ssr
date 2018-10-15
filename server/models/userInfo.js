export default function(sequelize, DataTypes) {
    var UserInfo = sequelize.define('UserInfo', {
        // id: {
        //     type: DataTypes.INTEGER,
        //     primaryKey: true,
        //     allowNull: false,
        //     autoIncrement: true
        // },
        phoneNum:{
            type:  DataTypes.STRING(11),
            allowNull: false,
            validate: {
              is:/^[\\u4e00-\\u9fa5_a-zA-Z0-9-]{3,16}$/
            }
        }
    });
    UserInfo.sync();
    return UserInfo;
}
