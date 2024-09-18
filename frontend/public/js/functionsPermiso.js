const url = 'http://localhost:3000/permiso'

const listPermiso = async () => {
    const content = document.getElementById('content')
    let response = ''
    fetch(url, {
        method: 'GET',
        mode: 'cors',
        headers: {"Content-type":  "application/json; charset=UTF-8"}
    })
    .then((resp) => resp.json())
    .then(function(data) {
        let list = data.permisos
        list.map(function(permiso) {
            response += `<tr><td>${permiso.idPermiso}</td>` +
            `<td>${permiso.nombre}</td>`+
            `<td>${permiso.descripcion}</td>`+
            `<td>${permiso.estado}</td>`+
            `<td><a href=editPermiso.html?id=${permiso._id}>Edit</a></td></tr>`
        })
        content.innerHTML = response
    })
}

const createPermiso = async () => {
    const permiso = {
        idPermiso: document.getElementById('idPermiso').value,  // Campo personalizado
        nombre: document.getElementById('nombre').value,
        descripcion: document.getElementById('descripcion').value,
        estado: document.getElementById('estado').checked,  // Verifica si es checkbox o radio
    };

    // Verifica si los valores están presentes
    if (!permiso.idPermiso || !permiso.nombre || !permiso.descripcion) {
        alert("Todos los campos son obligatorios");
        return;
    }

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { "Content-type": "application/json; charset=UTF-8" },
            body: JSON.stringify(permiso)
        });

        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message || 'Error al crear el permiso');
        }

        alert('Permiso creado con éxito');
    } catch (error) {
        console.error('Error al crear el permiso:', error.message);
        alert('Error al crear el permiso: ' + error.message);
    }
};

const editPermiso = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    let id = urlParams.get('id');  // Obtenemos el _id

    try {
        const response = await fetch(`http://localhost:3000/permiso/${id}`, {
            method: 'GET',
            mode: 'cors',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        document.getElementById('idPermiso').value = data.idPermiso || '';  // Si lo tienes
        document.getElementById('nombre').value = data.nombre;
        document.getElementById('descripcion').value = data.descripcion;
        document.getElementById('estado').checked = data.estado;
    } catch (error) {
        console.error('Error al obtener el permiso:', error);
        alert('Error al obtener el permiso');
    }
};


const updatePermiso = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    let id = urlParams.get('id');  // Obtenemos el _id desde la URL

    const permiso = {
        idPermiso: document.getElementById('idPermiso').value,  // Si lo mantienes
        nombre: document.getElementById('nombre').value,
        descripcion: document.getElementById('descripcion').value,
        estado: document.getElementById('estado').checked
    };

    try {
        const response = await fetch(`http://localhost:3000/permiso/${id}`, {
            method: 'PUT',
            mode: 'cors',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(permiso)
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        alert('Permiso actualizado exitosamente');
    } catch (error) {
        console.error('Error al actualizar el permiso:', error);
        alert('Error al actualizar el permiso');
    }
};
