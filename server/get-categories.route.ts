

import {Request, Response} from 'express';
import {CATEGORIES} from "./db-data";



export function getAllCategories(req: Request, res: Response) {

    res.status(200).json({payload:Object.values(CATEGORIES)});
}