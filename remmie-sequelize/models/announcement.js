module.exports = (sequelize,DataTypes) => {
  const announcement = sequelize.define("announcement",{
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    hotel_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    start_time: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    end_time: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    date_updated: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    date_deleted: {
      type: DataTypes.DATE,
    },
  },
  {
    tableName: 'announcements',
    timestamps: true,
    createdAt: 'date_created',
    updatedAt: 'date_updated',
    deletedAt: 'date_deleted',
    paranoid: true,
  });
  return announcement;
}





// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class announcement extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   };
//   announcement.init({
//     id: DataTypes.BIGINT,
//     hotel_id: DataTypes.BIGINT,
//     title: DataTypes.STRING,
//     start_time: DataTypes.DATE,
//     end_time: DataTypes.DATE,
//     image: DataTypes.STRING,
//     description: DataTypes.TEXT
//   }, {
//     sequelize,
//     modelName: 'announcement',
//   });
//   return announcement;
// };