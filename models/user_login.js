'use strict';
module.exports = function(sequelize, DataTypes) {
    var user_login = sequelize.define('user_login', {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        fname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        mname: {
            type: DataTypes.STRING,
            allowNull: true
        },
        lname: {
            type: DataTypes.STRING,
            allowNull: true
        },
        passwd: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        salt: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        pic: {
            type: DataTypes.STRING,
            allowNull: true
        },
        state: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        failed_attempts: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        provider: {
            type: DataTypes.STRING,
            allowNull: true
        },
        act_link: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        last_login_at: {
            type: DataTypes.DATE,
            allowNull: true
        },
        last_ip_address: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        organization_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        affiliate: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }, {
        tableName: 'user_logins',
        freezeTableName: true,
        timestamps: true,
        underscored: true
    });

    user_login.sync();
    return user_login;
};