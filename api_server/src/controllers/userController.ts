import { Request, Response } from 'express';
import db from '../database';

class UserController {

    public async list (req: Request, res: Response) {
        await db.query('SELECT * FROM user', function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    public async create (req: Request, res: Response) {
        await db.query('INSERT INTO user SET ?', [req.body], function(err, result, fields) {
            if (err) throw err;
            res.json({message: 'User saved success'});
        });console.log(req.body);
        
    }

    public async delete (req: Request, res: Response) {
        const id = req.params.id;
        await db.query('DELETE FROM user WHERE id = ?', [id], function(err, result, fields) {
            if (err) throw err;
            res.json({ message: 'Delete success'});
        });
    }

    public async update (req: Request, res: Response) {
        const id = req.params.id;
        await db.query('UPDATE user SET ? WHERE id = ?', [req.body, id], function(err, result, fields) {
            if (err) throw err;
            res.json({ message: 'Update success'});
        });
    }

    public async search (req: Request, res: Response) {
        const id = req.params.id;
        await db.query('SELECT * FROM user WHERE id = ?', [id], function(err, result, fields) {
            if (err) throw err;
            if (result.length > 0) {
                return res.json(result[0]);
            } else {
                return res.status(404).json({ message: 'Not found'});
            }
        });
    }
}

export const userController = new UserController();

