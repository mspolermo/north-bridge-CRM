import db from '../db.js';

class UserController {
    async login(req, res) {
        const { username, password } = req.body;
        const users = await db.query(
            `
                SELECT * FROM users 
                INNER JOIN userRoles ON users.role = userRoles.id
                WHERE username = $1 AND password = $2
            `, [username, password]
        );
        if (users.rows[0]) {
            res.json(users.rows[0]);
        } else {
            res.status(401).json({ authorized: false, error: 'Invalid username or password' });
        }
    }
    async createUser(req, res) {
        const { username, password } = req.body;
        const newPerson = await db.query(
            `
                INSERT INTO users (username, password, role) values ($1, $2, 2) RETURNING *
            `, [username, password]
        );
        res.json(newPerson.rows[0]);
    }
    async getUsers(req, res) {
        const users = await db.query(
            `SELECT * FROM users`
        );
        res.json(users.rows);
    }
    async getOneUser(req, res) {
        const id = req.params.id;
        const user = await db.query('SELECT * FROM users WHERE id = $1', [id]);
        res.json(user.rows[0]);
    }
    async updateUser(req, res) {
        const { id, username, password } = req.body;
        const user = await db.query(
            `
                UPDATE users SET username = $1, password = $2
                WHERE id = $3 RETURNING * 
            `, [username, password, id]
        );
        res.json(user.rows[0]);
    }
    async deleteUser(req, res) {
        const id = req.params.id;
        const user = await db.query('DELETE FROM users WHERE id = $1', [id]);
        res.json(user.rows[0]);
    }
}

export default new UserController();