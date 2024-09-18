import Router from 'express';
import {getCiudad, postCiudad, putCiudad} from '../controller/ciudad.js'

const ciudadRoute = Router();

ciudadRoute.get('/',  getCiudad);
ciudadRoute.post('/', postCiudad);
ciudadRoute.put('/:id', putCiudad);

export default ciudadRoute