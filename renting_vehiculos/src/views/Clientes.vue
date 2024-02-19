<template>
    <div class="clientes">
        <div class="lista">
            <ListadoClientes :clientes="clientes" @verVehiculosAlquilados="verVehiculosAlquilados"></ListadoClientes>
        </div>
        <div class="nuevo">
            <div class="MostrarClientes">
                <MostrarClientes :vehiculosAlquilados="vehiculosAlquilados"></MostrarClientes>
            </div>
            <div class="form">
                <input type="text" placeholder="Nombre" v-model="nombre">
                <input type="text" placeholder="DNI" v-model="dni">
                <button :disabled="clienteSeleccionado" @click="anadirCliente">
                    Añadir
                </button>
                <button :disabled="!clienteSeleccionado" @click="modificarCliente">
                    Modificar
                </button>
                <button :disabled="!clienteSeleccionado" @click="eliminarCliente">
                    Eliminar
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import ListadoClientes from "../components/clientes/ListadoClientes.vue";
import MostrarClientes from "../components/clientes/MostrarClientes.vue";

export default {
    name: "Clientes",
    components: {
        ListadoClientes,
        MostrarClientes,
    },
    data() {
        return {
            marcas: [],
            modelos: [],
            vehiculos: [],
            clientes: [],
            vehiculosAlquilados: [],
            nombre: "",
            dni: "",
            clienteSeleccionado: null,
        };
    },
    methods: {
        getDatos() {
            fetch("http://localhost:3000/marcas")
                .then((response) => response.json())
                .then((data) => {
                    let datos = Array.from(data);
                    datos.forEach((element) => {
                        this.marcas.push(element);
                    });
                });
            fetch("http://localhost:3000/modelos")
                .then((response) => response.json())
                .then((data) => {
                    let datos = Array.from(data);
                    datos.forEach((element) => {
                        this.modelos.push(element);
                    });
                });
            fetch("http://localhost:3000/vehiculos")
                .then((response) => response.json())
                .then((data) => {
                    let datos = Array.from(data);
                    datos.sort((a, b) => (a.precioDia < b.precioDia ? 1 : -1));
                    datos.forEach((element) => {
                        this.vehiculos.push(element);
                    });
                });
            fetch("http://localhost:3000/clientes")
                .then((response) => response.json())
                .then((data) => {
                    let datos = Array.from(data);
                    datos.forEach((element) => {
                        this.clientes.push(element);
                    });
                });
        },
        verVehiculosAlquilados(cliente) {
            this.clienteSeleccionado = cliente;
            this.vehiculosAlquilados = [];
            this.clientes
                .filter(clienteFiltrado => clienteFiltrado.id == cliente.id)
                .map(clienteFiltrado => {
                    clienteFiltrado.alquileres.map(alquiler => {
                        let vehiculosFiltrados = this.vehiculos.find(vehiculo => vehiculo.id == alquiler.vehiculo)
                        let modeloFiltrado = this.modelos.find(modelo => modelo.id == vehiculosFiltrados.idModelo)
                        let marcaFiltrada = this.marcas.find(marca => marca.id == modeloFiltrado.idMarca)
                        this.vehiculosAlquilados.push({
                            id: vehiculosFiltrados.id,
                            marca: marcaFiltrada.nombre,
                            modelo: modeloFiltrado.modelo,
                            precioFinal: vehiculosFiltrados.precioDia * alquiler.numDias
                        })
                    })
                })
                .reduce((acumulador, valor) => acumulador.concat(valor), [])
            this.nombre = cliente.nombre;
            this.dni = cliente.dni;
            return this.vehiculosAlquilados
        },
        anadirCliente() {
            let cliente = {
                nombre: this.nombre,
                dni: this.dni,
                alquileres: [],
            };
            fetch("http://localhost:3000/clientes", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(cliente),
            })
                .then((response) => response.json())
                .then((data) => {
                    this.clientes.push(data);
                    this.limpiarForm();
                });
        },
        modificarCliente() {
            let cliente = {
                nombre: this.nombre,
                dni: this.dni,
                alquileres: this.clienteSeleccionado.alquileres
            };
            let init = {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(cliente),
            };
            fetch(`http://localhost:3000/clientes/${this.clienteSeleccionado.id}`, init)
                .then(response => response.json())
                .then((data) => {
                    this.clientes = this.clientes.map((cliente) => {
                        if (cliente.id == data.id) {
                            cliente = data;
                        }
                        return cliente;
                    });
                    this.limpiarForm()
                })
        },
        eliminarCliente() {
            fetch(`http://localhost:3000/clientes/${this.clienteSeleccionado.id}`, {
                method: "DELETE",
            })
                .then((response) => response.json())
                .then((data) => {
                    //eliminar cliente de la lista
                    this.clientes.splice(this.clientes.findIndex((cliente) => cliente.id == data.id), 1);
                    this.limpiarForm();
                });
        },
        limpiarForm() {
            this.nombre = "";
            this.dni = "";
            this.clienteSeleccionado = null;
            this.vehiculosAlquilados = [];
        }
    },
    created() {
        this.getDatos();
    },
}
</script>

<style scoped>
.clientes {
    display: flex;
    justify-content: space-between;
    background-color: #f5f5f5;
    padding: 20px;
}

.lista {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
}

.nuevo {
    display: flex;
    flex-direction: column;
    width: 50%;
}

.MostrarClientes {
    width: 100%;
    margin-bottom: 20px;
}

form {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}

input {
    padding: 10px;
    margin-bottom: 10px;
    border: none;
    border-bottom: 1px solid #ccc;
    font-size: 16px;
    width: 100%;
}

button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    color: #fff;
    background-color: #007bff;
    font-size: 16px;
    cursor: pointer;
    margin-right: 10px;
}

button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}
</style>