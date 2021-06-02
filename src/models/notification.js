'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Notification extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
    static async search(query) {

      const limit = query.limit ? parseInt(query.limit) : 20;
      const offset = query.offset ? parseInt(query.limit) : 0

      let where = {}

      if (query.name) where.name = {
        [Op.like]: `%${query.name}%` //filtrando pelo nome

      }


      const entities = await Notification.findAndCountAll({
        where: {
          state: {
            [Op.like]: 1
          }
        },
        limit: limit,
        offset: offset
      })

      return {
        entities: entities.rows,
        meta: {
          count: entities.count,
          limit: limit,
          offset: offset
        }
      };
    }

    static async getId(id) {
      return await Account.findByPk(id, {

      })
    }
  };
  Notification.init({
    ticket: DataTypes.INTEGER,
    code: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Notification',
  });
  return Notification;
};