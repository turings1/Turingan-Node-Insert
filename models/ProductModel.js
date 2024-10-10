const db = require('../config/db');

const prod = {
    create: (data, callback) => {
        const query = "INSERT INTO products (name, description, price, quantity) VALUES (?,?,?,?)";
        db.query(query, [data.name, data.description, data.price, data.quantity], callback);
    }
};

module.exports = prod;
