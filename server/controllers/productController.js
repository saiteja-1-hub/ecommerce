const db = require("../config/db");

const getProducts = (req, res, next) => {
    const query = `
        SELECT *
        FROM products
        ORDER BY id DESC
    `;

    db.all(query, [], (err, products) => {
        if (err) {
            return next(err);
        }

        res.json({
            success: true,
            products
        });
    });
};

const getProductById = (req, res, next) => {
    const { id } = req.params;

    const query = `
        SELECT *
        FROM products
        WHERE id = ?
    `;

    db.get(query, [id], (err, product) => {
        if (err) {
            return next(err);
        }

        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            });
        }

        res.json({
            success: true,
            product
        });
    });
};

module.exports = {
    getProducts,
    getProductById
};