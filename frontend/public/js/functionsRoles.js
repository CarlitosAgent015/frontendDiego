const urlRoles = 'http://localhost:3000/rol';
const urlPermisos = 'http://localhost:3000/permiso';

const listRoles = async () => {
    try {
        const response = await fetch(urlRoles, {
            method: 'GET',
            headers: { "Content-type": "application/json; charset=UTF-8" }
        });

        if (!response.ok) {
            throw new Error('Error al obtener roles');
        }

        const data = await response.json();
        const roles = data.rol;

        const content = document.getElementById('content');
        content.innerHTML = '';  // Limpiar contenido

        roles.forEach(rol => {
            const row = document.createElement('tr');

            // Asegurarse de que permisosAsignados es un array
            const permisosAsignados = rol.permisosAsignados || [];
            const permisosNombres = permisosAsignados.map(p => p.nombre || 'Desconocido').join(', ');

            row.innerHTML = `
                <td><a href="editRol.html?id=${rol._id}">Editar</a></td>
                <td>${rol.idRol}</td>
                <td>${rol.nombre}</td>
                <td>${rol.descripcion}</td>
                <td>${rol.estado ? 'Habilitado' : 'Deshabilitado'}</td>
                <td>${permisosNombres}</td>
            `;
            content.appendChild(row);
        });
    } catch (error) {
        console.error('Error al obtener roles:', error);
        alert('Error al obtener roles');
    }
};


// Función para obtener permisos (se usa en crear y editar)
const getPermisos = async () => {
    try {
        const response = await fetch(urlPermisos, { method: 'GET' });
        const data = await response.json();
        return data.permisos;
    } catch (error) {
        console.error('Error al obtener permisos:', error);
    }
};

// Función para cargar permisos en el select
const populatePermisos = (permisos, selectElement, assignedPermisos = []) => {
    selectElement.innerHTML = '';
    permisos.forEach(permiso => {
        const option = document.createElement('option');
        option.value = permiso._id;
        option.textContent = permiso.nombre;

        if (assignedPermisos.includes(permiso._id)) {
            option.selected = true;
        }

        selectElement.appendChild(option);
    });
};

const createRol = async () => {
    const idRol = document.getElementById('idRol').value;
    const nombre = document.getElementById('nombre').value;
    const descripcion = document.getElementById('descripcion').value;
    const estado = document.getElementById('estado').checked;
    const permisosInput = document.getElementById('permisosAsignados').value;

    // Validar y limpiar permisosAsignados
    const permisosArray = permisosInput.split(',').map(id => id.trim()).filter(id => id.match(/^[a-fA-F0-9]{24}$/));

    const rol = {
        idRol,
        nombre,
        descripcion,
        estado,
        permisosAsignados: permisosArray
    };

    try {
        const response = await fetch(urlRoles, {
            method: 'POST',
            headers: { "Content-type": "application/json; charset=UTF-8" },
            body: JSON.stringify(rol)
        });

        if (!response.ok) {
            throw new Error('Error al crear el rol');
        }

        alert('Rol creado exitosamente');
        window.location.href = 'listRol.html';
    } catch (error) {
        console.error('Error al crear el rol:', error);
        alert('Error al crear el rol: ' + error.message);
    }
};

// Función para cargar permisos y asignarlos al crear un rol
const loadCreateRol = async () => {
    try {
        const permisos = await getPermisos();
        const permisosSelect = document.getElementById('permisosAsignados');
        populatePermisos(permisos, permisosSelect);
    } catch (error) {
        console.error('Error al cargar permisos para crear:', error);
    }
};

// Función para cargar datos del rol en la página de edición
const loadRolData = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    try {
        const [rolResponse, permisos] = await Promise.all([
            fetch(`${urlRoles}/${id}`, {
                method: 'GET',
                headers: { "Content-type": "application/json; charset=UTF-8" }
            }),
            getPermisos()  // Obtener todos los permisos disponibles
        ]);

        if (!rolResponse.ok) {
            throw new Error('Error al obtener datos del rol');
        }

        const rolData = await rolResponse.json();
        document.getElementById('idRol').value = rolData.idRol;
        document.getElementById('nombre').value = rolData.nombre;
        document.getElementById('descripcion').value = rolData.descripcion;
        document.getElementById('estado').checked = rolData.estado;

        // Mostrar los ObjectId de los permisos asignados en el campo de texto
        const inputPermisos = document.getElementById('permisosAsignados');
        inputPermisos.value = rolData.permisosAsignados.map(p => p._id).join(',');

        const permisosInput = document.getElementById('permisosAsignados');
        permisosInput.dataset.permisos = JSON.stringify(permisos)
    } catch (error) {
        console.error('Error al cargar datos del rol:', error);
        alert('Error al cargar datos del rol');
    }
};

const updateRol = async () => {
    const id = document.getElementById('idRol').value;

    // Convertir permisos asignados del campo de texto a un array de ObjectId
    const permisosInput = document.getElementById('permisosAsignados');
    const permisosArray = permisosInput.value
        .split(',')
        .map(id => id.trim().replace(/^"|"$/g, '')) // Elimina las comillas dobles
        .filter(id => id.match(/^[a-fA-F0-9]{24}$/)); // Valida que sean ObjectId válidos

    const rol = {
        nombre: document.getElementById('nombre').value,
        descripcion: document.getElementById('descripcion').value,
        estado: document.getElementById('estado').checked,
        permisosAsignados: permisosArray  // Array de ObjectId de permisos
    };

    console.log('ID del rol:', id);
    console.log('Permisos asignados:', permisosArray);
    console.log('Datos del rol:', rol);

    try {
        const response = await fetch(`${urlRoles}/${id}`, {
            method: 'PUT',
            headers: { "Content-type": "application/json; charset=UTF-8" },
            body: JSON.stringify(rol)
        });

        if (!response.ok) {
            throw new Error('Error al actualizar el rol');
        }

        alert('Rol actualizado exitosamente');
        window.location.href = 'listRol.html';  // Redirigir a la lista de roles
    } catch (error) {
        console.error('Error al actualizar el rol:', error);
        alert('Error al actualizar el rol: ' + error.message);
    }
};
