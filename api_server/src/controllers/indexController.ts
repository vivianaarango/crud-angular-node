import { Request, Response } from 'express';
import db from '../database';

class IndexController {

    public index (req: Request, res: Response) {
        res.json({ text: 'wenaaa'})
    }
}

export const indexController = new IndexController();

