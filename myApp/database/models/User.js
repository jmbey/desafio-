module.exports = function(sequelize, dataTypes) {

    let alias = "User";

    let cols = {
        id:{
            type: dataTypes.INTEGER, 
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            unique: true,
        },
        email:{
            type: dataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password:{
            type: dataTypes.STRING,
            notNull: true,
        },
        admin: {
            type: dataTypes.INTEGER,
        }
        
    };

    let config = {
        tableName: "users",
        timestamps: false,
        underscored: true

    }

    let User = sequelize.define(alias, cols, config);

    return User;

}
