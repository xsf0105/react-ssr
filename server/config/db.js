'use strict';
// load sequelize
import Sequelize from 'sequelize';
// load db.json
import configs from './db.json';

const dbHost = configs.mysql.host,
    dbPort = configs.mysql.port,
    dbUsername = configs.mysql.username,
    dbPassword = configs.mysql.password,
    dbName = configs.mysql.dbName;

// mysql connect option
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
            freezeTableName: true,
            timestamps: false
        }
    })
};
// user table model
db.User = db.sequelize.import ('../models/user.js');
db.UserInfo = db.sequelize.import ('../models/userInfo.js');

export default db;
