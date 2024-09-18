import Router from 'express';
import {getCategoriaTecnico, postCategoriaTecnico, putCategoriaTecnico} from '../controller/categoriaTecnicoController.js'

const categoriaTecnicoRoute = Router();

categoriaTecnicoRoute.get('/',getCategoriaTecnico)
categoriaTecnicoRoute.post('/',postCategoriaTecnico)
categoriaTecnicoRoute.put('/:id',putCategoriaTecnico)

export default categoriaTecnicoRoute;