
import * as express from 'express';
import {Application} from "express";
import { getAllAnimalsByCategory } from './get-animals.route';
import {getAllCategories} from "./get-categories.route";

const bodyParser = require('body-parser');

const app: Application = express();

const cors = require('cors');

app.use(cors({origin: true}));

app.use(bodyParser.json());

app.route('/api/categories').get(getAllCategories);
app.route('/api/categories/:categoryId/animals').get(getAllAnimalsByCategory);

const httpServer:any = app.listen(9000, () => {
    console.log("HTTP REST API Server running at http://localhost:" + httpServer.address().port);
});



