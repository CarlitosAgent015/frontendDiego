import Router from 'express';
import { getRoles, getRolUnic, postRole, putRol} from '../controller/rolController.js';

const rolRoute = Router();

rolRoute.get('/',  getRoles)
rolRoute.get('/:id', getRolUnic)
rolRoute.post('/', postRole)
rolRoute.put('/:id', putRol)

export default  rolRoute