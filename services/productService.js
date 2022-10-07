//npm i faker@5.5.3 -S
const faker = require('faker');


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

    create(data) {
        //spread operation para hacer merge de ambos objetos
        const newProduct = {
            id: faker.datatype.uuid(),
            ...data
        }
        this.products.push(newProduct);
        return newProduct;

    }
    find() {
        return this.products;
    }
    findOne(id) {
        return this.products.find(item => item.id === id);
    }
    update(id, changes) {
        const index = this.products.findIndex(item => item.id === id);
        if (index === -1) {
            throw new Error('product not found');
        }
        const product = this.products[index];
        //con los puntitos persistimos información
        this.products[index] = {
            ...product,
            ...changes
        }
        return this.products[index];
    }
    delete(id) {
        const index = this.products.findIndex(item => item.id === id);
        if (index === 1) {
            throw new Error('product not found');
        }
        this.products.splice(index, 1);
        return { id };

    }

}

module.exports = ProductsService
