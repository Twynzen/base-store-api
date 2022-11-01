const faker = require("faker");
const getConnection = require('../libs/postgres');


class UsersService {

    constructor() {
        this.users = [];
        this.generate();
    }

    generate() {
        const limit = 100;
        for (let index = 0; index < limit; index++) {
            this.users.push({
                id: faker.datatype.uuid(),
                name: faker.commerce.productMaterial(),
                product: faker.datatype.number({ max: 100 })
            })

        }
    }
    create() {

    }
    async find() {
        const client = await getConnection();
        const rta = client.query('SELECT * FROM task');
        console.log(rta.rows);
        return rta.rows;
    }
    findOne(id) {
        return this.users.find(item => item.id === id);
    }
    update() {

    }
    delete() {

    }

}
module.exports = UsersService