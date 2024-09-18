import Router from 'express';
import {getDetalle_OST, postDetalle_OST, putDetalle_OST} from '../controller/detalle_OSTController.js';

const detalle_OSTRoute = Router();

detalle_OSTRoute.get('/', getDetalle_OST)
detalle_OSTRoute.post('/', postDetalle_OST)
detalle_OSTRoute.put('/:id', putDetalle_OST)

export default detalle_OSTRoute;