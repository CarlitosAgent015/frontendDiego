import Router from 'express';
import {getServicio, postServicio, putServicio} from '../controller/servicioController.js';

const servicioRoute = Router();

servicioRoute.get('/',  getServicio);
servicioRoute.post('/', postServicio);
servicioRoute.put('/:id', putServicio);

export default  servicioRoute;