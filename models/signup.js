'use strict';
module.exports = function(sequelize, DataTypes) {
    var signup = sequelize.define('signup', {
        
       username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        passwd: {
            type: DataTypes.TEXT,
            allowNull: true
        },
          re_enterpasswd: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        {
		tableName : 'signup',
		freezeTableName : true,
		timestamps : true,
		underscored : true
	});
         

    signup.sync();
    return signup;
};