'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    //  Add seed commands here.
    //Users >> nama table di pgadmin
    await queryInterface.bulkInsert('Users',
    [
      { firstName: 'bayu', lastName: 'firmansyah', email: 'bayu_tampan@gmail.com', createdAt: new Date(), updatedAt: new Date() },
      { firstName: 'azka', lastName: 'firmansyah', email: 'azka_tampan@gmail.com', createdAt: new Date(), updatedAt: new Date() },
      { firstName: 'ilham', lastName: 'firmansyah', email: 'ilham_tampan@gmail.com', createdAt: new Date(), updatedAt: new Date() },
      { firstName: 'jessica', lastName: 'firmansyah', email: 'jessica_tampan@gmail.com', createdAt: new Date(), updatedAt: new Date() },
      { firstName: 'damai', lastName: 'firmansyah', email: 'bayu_tampan@gmail.com', createdAt: new Date(), updatedAt: new Date() },
      { firstName: 'febi', lastName: 'firmansyah', email: 'febi_tampan@gmail.com', createdAt: new Date(), updatedAt: new Date() },
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
