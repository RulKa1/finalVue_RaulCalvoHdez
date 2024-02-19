<template>
  <div>
    <ListadoVehiculos :marcas="marcas" :modelos="modelos" :vehiculos="vehiculos" @enviarMarca="marcaSeleccionada = $event"
      @enviarModelo="modeloSeleccionado = $event" />

    <MostrarVehiculos :marcas="marcas" :modelos="modelos" :vehiculos="vehiculoDeModelos"
      :marcaSeleccionada="marcaSeleccionada" :modeloSeleccionado="modeloSeleccionado" />

    <button @click="FormularioNuevoVehiculo">Nuevo Vehiculo</button>

    <div v-if="nuevoVehiculo">
      <FormularioNuevoVehiculo :marcas="marcas" :modelos="modelos" :marcaSeleccionada="marcaSeleccionada"
        :modeloSeleccionado="modeloSeleccionado" @anadirNewVehiculo="anadirNewVehiculo" />
    </div>
  </div>
</template>

<script>
import ListadoVehiculos from "../components/vehiculos/ListadoVehiculos.vue";
import MostrarVehiculos from "../components/vehiculos/MostrarVehiculos.vue";
import FormularioNuevoVehiculo from "../components/Formularios/FormularioNuevoVehiculo.vue";

export default {
  name: "Vehiculos",
  components: {
    ListadoVehiculos,
    MostrarVehiculos,
    FormularioNuevoVehiculo,
  },
  data() {
    return {
      marcas: [],
      vehiculos: [],
      modelos: [],
      clientes: [],
      marcaSeleccionada: null,
      modeloSeleccionado: null,
      nuevoVehiculo: false,
      precioDia: 0,
      puertas: 0,
      sillaInfantil: false,
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
    FormularioNuevoVehiculo() {
      this.nuevoVehiculo = true;
    },

    anadirNewVehiculo() {
      let init = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          idModelo: this.modeloSeleccionado.id,
          precioDia: this.precioDia,
          puertas: this.puertas,
          sillaInfantil: this.sillaInfantil,
        }),
      };

      fetch("http://localhost:3000/vehiculos", init)
        .then((response) => response.json())
        .then((data) => {
          this.vehiculos.push(data);
        });

      this.nuevoVehiculo = false;
    },

    enviarMarca(marca) {
      this.marcaSeleccionada = marca;
    },

    enviarModelo(modelo) {
      this.modeloSeleccionado = modelo;
    },
  },
  created() {
    this.getDatos();
  },
  computed: {
    modelosDeMarca() {
      let modelosDeMarca = [];
      if (this.marcaSeleccionada) {
        this.modelos.forEach((modelo) => {
          if (modelo.idMarca == this.marcaSeleccionada.id) {
            modelosDeMarca.push(modelo);
          }
        });
      }
      return modelosDeMarca;
    },

    vehiculoDeModelos() {
      let vehiculosDeModelos = [];
      let alquileres = this.clientes.reduce((acumulador, cliente) => {
        return acumulador.concat(cliente.alquileres);
      }, []);
      if (this.modeloSeleccionado) {
        this.vehiculos.forEach((vehiculo) => {
          if (vehiculo.idModelo == this.modeloSeleccionado.id) {
            let nombreModelo = this.modelos.find(modelo => modelo.id == vehiculo.idModelo).modelo;
            let alquiler = alquileres.find(alquiler => alquiler.vehiculo == vehiculo.id);
            let nombreCliente = alquiler ? this.clientes.find(cliente => cliente.alquileres.includes(alquiler)).nombre : "";
            vehiculosDeModelos.push({
              id: vehiculo.id,
              modelo: nombreModelo,
              precio: vehiculo.precioDia,
              cliente: nombreCliente,
            });
          }
        });
      } else if (this.marcaSeleccionada) {
        this.vehiculos.forEach((vehiculo) => {
          let nombreModelo = this.modelos.find(modelo => modelo.id == vehiculo.idModelo).modelo;
          let alquiler = alquileres.find(alquiler => alquiler.vehiculo == vehiculo.id);
          let nombreCliente = alquiler ? this.clientes.find(cliente => cliente.alquileres.includes(alquiler)).nombre : "";
          if (this.modelos.find(modelo => modelo.id == vehiculo.idModelo).idMarca == this.marcaSeleccionada.id) {
            vehiculosDeModelos.push({
              id: vehiculo.id,
              modelo: nombreModelo,
              precio: vehiculo.precioDia,
              cliente: nombreCliente,
            });
          }
        });
      } else {
        this.vehiculos.forEach((vehiculo) => {
          let nombreModelo = this.modelos.find(modelo => modelo.id == vehiculo.idModelo).modelo;
          let alquiler = alquileres.find(alquiler => alquiler.vehiculo == vehiculo.id);
          let nombreCliente = alquiler ? this.clientes.find(cliente => cliente.alquileres.includes(alquiler)).nombre : "";
          vehiculosDeModelos.push({
            id: vehiculo.id,
            modelo: nombreModelo,
            precio: vehiculo.precioDia,
            cliente: nombreCliente,
          });
        });
      }
      return vehiculosDeModelos;
    }
    ,
  },
};
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

button {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 12px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1.2rem;
  border-radius: 4px;
  cursor: pointer;
  margin: 40px 2px;
}

button:hover {
  background-color: #45a049;
}
</style>
