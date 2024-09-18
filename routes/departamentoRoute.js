import Router from 'express'
import {getDepartamento, postDepartamento, putDepartamento} from '../controller/departamento.js'

const departamentoRoute = Router();

departamentoRoute.get('/', getDepartamento)
departamentoRoute.post('/', postDepartamento)
departamentoRoute.put('/:id', putDepartamento)

export default departamentoRoute