import Router from 'express';
import {getUsuario, postUsuario, putUsuario} from '../controller/usuarioController.js';

const usuarioRoute = Router();

usuarioRoute.get('/', getUsuario)
usuarioRoute.post('/', postUsuario)
usuarioRoute.put('/:id', putUsuario)

export  default usuarioRoute