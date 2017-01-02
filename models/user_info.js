'use strict';
module.exports = function(sequelize, DataTypes) {
	var user_info = sequelize.define('user_info', {
		id : {
			type : DataTypes.BIGINT,
			allowNull : false,
			primaryKey : true,
			autoIncrement : true
		},
		user_login_id : {
			type : DataTypes.BIGINT,
			allowNull : true,
			unique : true
		},
		email : {
			type : DataTypes.STRING,
			allowNull : false,
			unique : true
		},
		fname : {
			type : DataTypes.STRING,
			allowNull : true
		},
		mname : {
			type : DataTypes.STRING,
			allowNull : true
		},
		lname : {
			type : DataTypes.STRING,
			allowNull : true
		},
		gender : {
			type : DataTypes.STRING,
			allowNull : true
		},
		mode_of_holding : {
			type : DataTypes.INTEGER(4),
			allowNull : true
		},
		investor_category : {
			type : DataTypes.INTEGER(4),
			allowNull : true
		},
		residential_status : {
			type : DataTypes.INTEGER(4),
			allowNull : true
		},
		dob : {
			type : DataTypes.DATE,
			allowNull : true
		},
		pan : {
			type : DataTypes.STRING,
			allowNull : true
		},
		pekrn : {
			type : DataTypes.STRING,
			allowNull : true
		},
		aadhaar : {
			type : DataTypes.INTEGER(11),
			allowNull : true
		},
		doc_name : {
			type : DataTypes.TEXT,
			allowNull : true
		},
		address_details : {
			type : DataTypes.TEXT,
			allowNull : true
		},
		address_city : {
			type : DataTypes.STRING,
			allowNull : true
		},
		address_pincode : {
			type : DataTypes.STRING,
			allowNull : true
		},
		address_country : {
			type : DataTypes.STRING,
			allowNull : true
		},
		contact_details : {
			type : DataTypes.TEXT,
			allowNull : true
		},
		notes : {
			type : DataTypes.TEXT,
			allowNull : true
		},
		onboarding_state : {
			type : DataTypes.INTEGER(4),
			allowNull : true
		},
		copied_from_guest : {
			type : DataTypes.BOOLEAN,
			allowNull : true
		},
		guestID : {
			type : DataTypes.STRING,
			allowNull : true
		},
		is_doc_check_complete : {
			type : DataTypes.STRING,
			allowNull : true
		}
	}, {
		tableName : 'user_infos',
		freezeTableName : true,
		timestamps : true,
		underscored : true
	});
	user_info.sync();
	return user_info;
};
