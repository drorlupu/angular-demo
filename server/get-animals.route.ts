

import {Request, Response} from 'express';
import {ANIMALS, filterAnimalsByCategoryId} from "./db-data";



export function getAllAnimalsByCategory(req: Request, res: Response) {

    const params = req.params as any;
    const categoryId = params.categoryId;
    res.status(200).json({payload:filterAnimalsByCategoryId(categoryId)});
}