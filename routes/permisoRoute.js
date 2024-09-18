import Router from 'express';
import { getPermisos, getIdPermisos,postPermisos, putPermisos } from '../controller/permisoController.js';


const permisoRoute = Router()

permisoRoute.get('/', getPermisos);
permisoRoute.get('/:id', getIdPermisos)
permisoRoute.post('/', postPermisos);
permisoRoute.put('/:id', putPermisos);

export default permisoRoute