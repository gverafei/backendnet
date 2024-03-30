'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('categoriapelicula', [
            { categoriaid: 1, peliculaid: 6, createdAt: new Date(), updatedAt: new Date() },
            { categoriaid: 2, peliculaid: 6, createdAt: new Date(), updatedAt: new Date() },
            { categoriaid: 2, peliculaid: 8, createdAt: new Date(), updatedAt: new Date() },
            { categoriaid: 3, peliculaid: 1, createdAt: new Date(), updatedAt: new Date() },
            { categoriaid: 3, peliculaid: 2, createdAt: new Date(), updatedAt: new Date() },
            { categoriaid: 3, peliculaid: 8, createdAt: new Date(), updatedAt: new Date() },
            { categoriaid: 4, peliculaid: 8, createdAt: new Date(), updatedAt: new Date() },
            { categoriaid: 5, peliculaid: 6, createdAt: new Date(), updatedAt: new Date() },
            { categoriaid: 5, peliculaid: 8, createdAt: new Date(), updatedAt: new Date() },
            { categoriaid: 6, peliculaid: 8, createdAt: new Date(), updatedAt: new Date() },
            { categoriaid: 6, peliculaid: 15, createdAt: new Date(), updatedAt: new Date() },
            { categoriaid: 7, peliculaid: 8, createdAt: new Date(), updatedAt: new Date() },
            { categoriaid: 8, peliculaid: 1, createdAt: new Date(), updatedAt: new Date() },
            { categoriaid: 8, peliculaid: 2, createdAt: new Date(), updatedAt: new Date() },
            { categoriaid: 9, peliculaid: 1, createdAt: new Date(), updatedAt: new Date() },
            { categoriaid: 9, peliculaid: 2, createdAt: new Date(), updatedAt: new Date() },
            { categoriaid: 9, peliculaid: 10, createdAt: new Date(), updatedAt: new Date() },
            { categoriaid: 10, peliculaid: 1, createdAt: new Date(), updatedAt: new Date() },
            { categoriaid: 10, peliculaid: 4, createdAt: new Date(), updatedAt: new Date() },
            { categoriaid: 11, peliculaid: 1, createdAt: new Date(), updatedAt: new Date() },
            { categoriaid: 11, peliculaid: 2, createdAt: new Date(), updatedAt: new Date() },
            { categoriaid: 11, peliculaid: 4, createdAt: new Date(), updatedAt: new Date() },
            { categoriaid: 12, peliculaid: 1, createdAt: new Date(), updatedAt: new Date() },
            { categoriaid: 12, peliculaid: 2, createdAt: new Date(), updatedAt: new Date() },
            { categoriaid: 12, peliculaid: 8, createdAt: new Date(), updatedAt: new Date() },
            { categoriaid: 13, peliculaid: 1, createdAt: new Date(), updatedAt: new Date() },
            { categoriaid: 13, peliculaid: 2, createdAt: new Date(), updatedAt: new Date() },
            { categoriaid: 13, peliculaid: 4, createdAt: new Date(), updatedAt: new Date() },
            { categoriaid: 14, peliculaid: 2, createdAt: new Date(), updatedAt: new Date() },
            { categoriaid: 14, peliculaid: 4, createdAt: new Date(), updatedAt: new Date() },
            { categoriaid: 14, peliculaid: 5, createdAt: new Date(), updatedAt: new Date() },
            { categoriaid: 15, peliculaid: 2, createdAt: new Date(), updatedAt: new Date() },
            { categoriaid: 15, peliculaid: 5, createdAt: new Date(), updatedAt: new Date() },
            { categoriaid: 15, peliculaid: 10, createdAt: new Date(), updatedAt: new Date() }
        ]);
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('categoriapelicula', null, {});
    }
};
