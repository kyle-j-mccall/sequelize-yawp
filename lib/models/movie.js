'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    static associate(models) {
      Movie.hasMany(models.Genre, {
        foreignKey: 'genre_id',
      });
    }
  }
  Movie.init(
    {
      title: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING,
      },
      image: {
        type: DataTypes.STRING,
        validate: {
          isUrl: {
            msg: 'Image must be a valid url',
          },
        },
      },
      releaseYear: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: 'Movie',
    }
  );
  return Movie;
};
