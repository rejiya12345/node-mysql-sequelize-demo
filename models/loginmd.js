'use strict';
module.exports = function(sequelize, DataTypes) {
    var loginmd = sequelize.define('loginmd', {
        
       username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        passwd: {
            type: DataTypes.TEXT,
            allowNull: true
        },{
		tableName : 'user_infos',
		freezeTableName : true,
		timestamps : true,
		underscored : true
	});
         

    loginmd.sync();
    return loginmd;
};