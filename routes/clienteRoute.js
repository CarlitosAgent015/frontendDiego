import Router from 'express';
import {getCliente, postCliente, putCliente} from '../controller/clienteController.js'

const clienteRoute = Router();

clienteRoute.get('/', getCliente)
clienteRoute.post('/', postCliente)
clienteRoute.put(':id',  putCliente)

export default clienteRoute