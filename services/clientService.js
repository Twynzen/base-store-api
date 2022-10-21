//npm i faker@5.5.3 -S
const faker = require('faker');

class ClientsService {

    constructor() {
        this.clients = [];
        this.generate();
    }

    generate() {
        const limit = 100;
        for (let index = 0; index < limit; index++) {
            this.clients.push({
                //Faker buenisimo para crear data falsa
                id: faker.datatype.uuid(),
                name: faker.name.firstName(),
                lastName: faker.name.lastName(),
                isBlock: faker.datatype.boolean(),
            });
        }
    }
    create() {
        //spread operation para hacer merge de ambos objetos
        const newClient = {
            id: faker.datatype.uuid(),
            ...data
        }
        this.clients.push(newClient);
        return newClient;

    }
    find() {
        return this.clients;
    }
    findOne(id) {
        return this.clients.find(item => item.id === id);
    }
    update() {

    }
    delete() {

    }

}

module.exports = ClientsService
