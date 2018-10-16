import Sequelize from 'sequelize';
import configs from './db.json';

const dbHost = configs.mysql.host,
    dbPort = configs.mysql.port,
    dbUsername = configs.mysql.username,
    dbPassword = configs.mysql.password,
    dbName = configs.mysql.dbName;

// mysql 连接配置
const db = {
    sequelize: new Sequelize(dbName, dbUsername, dbPassword, {
        host: dbHost,
        dialect: 'mysql',
        port: dbPort,
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        },
        define: {
            freezeTableName: true,  // 数据库中的表明与程序中的保持一致，否则数据库中的表名会以复数的形式命名
            timestamps: false
        }
    })
};

// user table model
db.User = db.sequelize.import ('../models/user.js');
db.UserInfo = db.sequelize.import ('../models/userInfo.js');

export default db;
