'use strict';
const bcrypt = require('bcrypt')
const crypto = require('crypto')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('usuario', [
            { id: crypto.randomUUID(), email: 'gvera@uv.mx', passwordhash: await bcrypt.hash('patito', 10), nombre: 'Guillermo Vera', rol: 'Administrador', createdAt: new Date(), updatedAt: new Date() },
            { id: crypto.randomUUID(), email: 'patito@uv.mx', passwordhash: await bcrypt.hash('patito', 10), nombre: 'Usuario patito', rol: 'Usuario', createdAt: new Date(), updatedAt: new Date() }
        ]);
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('usuario', null, {});
    }
};
