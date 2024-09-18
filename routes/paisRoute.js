import Router from 'express';
import { getPais, postPais, putPais} from '../controller/paisController.js'

const paisRoute = Router();

paisRoute.get('/', getPais)
paisRoute.post('/', postPais)
paisRoute.put('/:id', putPais)

export default  paisRoute