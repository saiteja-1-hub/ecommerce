const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const db = require("../config/db");

const register = (req, res, next) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({
            success: false,
            message: "Name, email and password are required"
        });
    }

    const checkQuery = `
        SELECT id
        FROM users
        WHERE email = ?
    `;

    db.get(checkQuery, [email], async (err, user) => {
        if (err) {
            return next(err);
        }

        if (user) {
            return res.status(409).json({
                success: false,
                message: "Email already registered"
            });
        }

        try {
            const hashedPassword = await bcrypt.hash(password, 10);

            const insertQuery = `
                INSERT INTO users (name, email, password)
                VALUES (?, ?, ?)
            `;

            db.run(
                insertQuery,
                [name, email, hashedPassword],
                function (err) {
                    if (err) {
                        return next(err);
                    }

                    res.status(201).json({
                        success: true,
                        message: "Registration successful",
                        user: {
                            id: this.lastID,
                            name,
                            email
                        }
                    });
                }
            );
        } catch (error) {
            next(error);
        }
    });
};

const login = (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            success: false,
            message: "Email and password are required"
        });
    }

    const query = `
        SELECT *
        FROM users
        WHERE email = ?
    `;

    db.get(query, [email], async (err, user) => {
        if (err) {
            return next(err);
        }

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password"
            });
        }

        try {
            const isPasswordCorrect = await bcrypt.compare(
                password,
                user.password
            );

            if (!isPasswordCorrect) {
                return res.status(401).json({
                    success: false,
                    message: "Invalid email or password"
                });
            }

            const token = jwt.sign(
                {
                    id: user.id,
                    email: user.email
                },
                process.env.JWT_SECRET,
                {
                    expiresIn: "1d"
                }
            );

            res.json({
                success: true,
                message: "Login successful",
                token,
                user: {
                    id: user.id,
                    name: user.name,
                    email: user.email
                }
            });
        } catch (error) {
            next(error);
        }
    });
};

module.exports = {
    register,
    login
};