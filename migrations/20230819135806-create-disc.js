"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("disc", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      title: {
        type: Sequelize.STRING(100),
      },
      subtitle: {
        type: Sequelize.STRING(50),
      },
      year: {
        type: Sequelize.INTEGER,
      },
      code: Sequelize.STRING(30),
      price: {
        type: Sequelize.DOUBLE,
      },
      observation: Sequelize.STRING(500),
      lyricsquantity: Sequelize.INTEGER,
      condition: Sequelize.STRING(10),
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("disc");
  },
};
