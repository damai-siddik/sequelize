'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Add seed commands here.
    await queryInterface.bulkInsert('Animals',
    [
      {name: 'kambing', age: 7, farmId: null, healthStatus: 'sehat', createdAt: new Date(), updatedAt: new Date()},
      {name: 'ayam', age: 7, farmId: null, healthStatus: 'sehat', createdAt: new Date(), updatedAt: new Date()},
      {name: 'domba', age: 7, farmId: null, healthStatus: 'sehat', createdAt: new Date(), updatedAt: new Date()},
    ],
    {});

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
