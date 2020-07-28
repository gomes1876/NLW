import express, { request, response } from 'express';
import PointsController from './controllers/pointsController'
import ItemsController from './controllers/itemsController'

const routes = express.Router();
const pointsController = new PointsController();
const itensController = new ItemsController();

routes.get('/items', itensController.index)

routes.post('/points', pointsController.create);
routes.get('/points/:id', pointsController.show);


export default routes;