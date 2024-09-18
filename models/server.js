import express, { json } from 'express';
import dbConnect from '../database/config.js';
import permisoRoute from '../routes/permisoRoute.js';
import rolRoute from '../routes/rolRoute.js';
import clienteRoute from '../routes/clienteRoute.js'
import ordenServicio from '../routes/ordenServicioRoute.js';
import servicio from '../routes/servicioRoute.js';
import categoriaServicio from '../routes/categoriaServicioRoute.js';
import tecnico from '../routes/tecnicoRoute.js';
import categoriaTecnico from '../routes/categoriaTecnicoRoute.js'
import pais from '../routes/paisRoute.js';
import departamento from '../routes/departamentoRoute.js';
import ciudad from '../routes/ciudadRoute.js';
import usuario from '../routes/usuarioRoute.js'
import detalle_OST from '../routes/detalle_OSTRoute.js'
import cors from 'cors';

class Server {
    constructor() {
        this.app = express();
        this.listen()
        this.dbConecction()
        this.pathPermiso = '/permiso'
        this.pathRol = '/rol'
        this.pathCliente = '/cliente'
        this.pathOrdenServicio = '/ordenServicio'
        this.pathServicio = '/servicio'
        this.pathCategoriaServicio = '/categoriaServicio'
        this.pathTecnico = '/tecnico'
        this.pathCategoriaTecnico = '/categoriaTecnico'
        this.pathPais = '/pais'
        this.pathDepartamento = '/departamento'
        this.pathCiudad = '/ciudad'
        this.pathUsuario = '/usuario'
        this.pathDetalleOST = '/detalle_OST'
        this.route()
    }

    async dbConecction() {
        await dbConnect()
    }

    route() {
        this.app.use(json());
        this.app.use( cors() );
        this.app.use(this.pathPermiso, permisoRoute)
        this.app.use(this.pathRol, rolRoute)
        this.app.use(this.pathCliente,  clienteRoute)
        this.app.use(this.pathOrdenServicio,  ordenServicio)
        this.app.use(this.pathServicio, servicio)
        this.app.use(this.pathCategoriaServicio, categoriaServicio)
        this.app.use(this.pathTecnico, tecnico)
        this.app.use(this.pathCategoriaTecnico, categoriaTecnico)
        this.app.use(this.pathPais, pais)
        this.app.use(this.pathDepartamento, departamento)
        this.app.use(this.pathCiudad, ciudad)
        this.app.use(this.pathUsuario, usuario)
        this.app.use(this.pathDetalleOST, detalle_OST)
    }

    listen() {
        this.app.listen(process.env.PORT, () => {
            console.log('Server is running');
        })
    }
}

export default Server