//npm i faker@5.5.3 -S
const faker = require('faker');
//npm i @hapi/boom
const boom = require('@hapi/boom');


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
                isBlock: faker.datatype.boolean(),
            });
        }
    }

    async create(data) {
        //spread operation para hacer merge de ambos objetos
        const newProduct = {
            id: faker.datatype.uuid(),
            ...data
        }
        this.products.push(newProduct);
        return newProduct;

    }
    find() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.products)
            }, 5000)
        })
        return this.products;
    }
    async findOne(id) {
        // const name = this.getTotal();
        // return this.products.find(item => item.id === id);
        const product = this.products.find(item => item.id === id);
        if (!product) {
            throw boom.notFound('Product not found');
        }
        if (product.isBlock) {
            throw boom.conflict('Product not found');
        }
        return product
    }
    async update(id, changes) {
        const index = this.products.findIndex(item => item.id === id);
        if (index === -1) {
            throw boom.notFound('Producto not found');
        }
        const product = this.products[index];
        //con los puntitos persistimos información
        this.products[index] = {
            ...product,
            ...changes
        }
        return this.products[index];
    }
    async delete(id) {
        const index = this.products.findIndex(item => item.id === id);
        if (index === 1) {
            throw boom.notFound('Producto not found');
        }
        this.products.splice(index, 1);
        return { id };

    }

}

module.exports = ProductsService