import Router from 'express';
import {getCategoriaServicio, postCategoriaServicio, putCategoriaServicio} from '../controller/categoriaServicioController.js'

const categoriaServicioRoute = Router();

categoriaServicioRoute.get('/',  getCategoriaServicio);
categoriaServicioRoute.post('/', postCategoriaServicio);
categoriaServicioRoute.put('/:id', putCategoriaServicio);

export default categoriaServicioRoute