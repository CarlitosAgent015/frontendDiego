import Router from 'express';
import {getOrdenServicio, postOrdenServicio, putOrdenServicio} from '../controller/ordenServicioController.js';

const ordenServicio = Router();

ordenServicio.get('/', getOrdenServicio)
ordenServicio.post('/', postOrdenServicio)
ordenServicio.put('/:id', putOrdenServicio)

export default  ordenServicio