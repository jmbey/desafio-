module.exports = function(sequelize, dataTypes) {

    let alias = "Serie";

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
        release_date:{
            type: dataTypes.DATE,
            allowNull: false
        },
        end_date: {
            type: dataTypes.DATE,
            allowNull: false
        }
    };

    let config = {
        tableName: "series",
        timestamps: true,
        underscored: true
           }

    let Serie = sequelize.define(alias, cols, config);

    return Serie;
};