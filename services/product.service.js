//npm i faker@5.5.3 -S
const faker = require('../node_modules/faker');


class ProductsService {

    constructor() {
        this.products = [];
        this.generate();
    }

    generate() {
        const limit = 100;
        for (let index = 0; index < limit; index++) {
            this.products.push({
                //Faker buenisimo para crear data falsa
                id: faker.datatype.uuid(),
                name: faker.commerce.productName(),
                price: parseInt(faker.commerce.price(), 10),
                image: faker.image.imageUrl(),
            });
        }
    }

    create() {

    }
    find() {
        return this.products;
    }
    findOne(id) {
        return this.products.find(item => item.id === id);
    }
    update() {

    }
    delete() {

    }

}

module.exports = ProductsService
