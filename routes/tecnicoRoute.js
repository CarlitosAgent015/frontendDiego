import Router from 'express';
import {getTecnico, postTecnico, putTecnico} from '../controller/tecnicoController.js'

const tecnicoRoute = Router();

tecnicoRoute.get('/', getTecnico)
tecnicoRoute.post('/', postTecnico)
tecnicoRoute.put('/:id', putTecnico)

export default tecnicoRoute