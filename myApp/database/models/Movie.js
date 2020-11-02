module.exports = function(sequelize, dataTypes) {

    let alias = "Movie";

    let cols = {
        id:{
            type: dataTypes.INTEGER(10).UNSIGNED, 
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        title:{
            type: dataTypes.STRING(500),
            allowNull: false,
        },
        rating:{
            type: dataTypes.DECIMAL(3,1).UNSIGNED,
            allowNull: false,
        },
        awards:{
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false,
        },
        release_date:{
            type: dataTypes.DATE,
            allowNull: false
        },
        length:{
            type: dataTypes.INTEGER(10).UNSIGNED
            
        }
    };

    let config = {
        tableName: "movies",
        timestamps: true,
        underscored: true
           }

    let Movie = sequelize.define(alias, cols, config);

    return Movie;
};