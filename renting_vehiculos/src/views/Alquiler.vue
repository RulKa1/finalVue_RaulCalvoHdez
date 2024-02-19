<template>
  <div>
    <ListadoVehiculos :marcas="marcas" :modelos="modelos" :vehiculos="vehiculos"
      @enviarMarca="marcaSeleccionada = $event" @enviarModelo="modeloSelecionado = $event" />
    <button :disabled="!marcaSeleccionada || !modeloSelecionado" @click="mostrarDesplegable">
      Alquilar
    </button>

    <div class="form" v-show="mostrarForm">
      <FormularioNuevoAlquiler :marcaSeleccionada="marcaSeleccionada" :modeloSelecionado="modeloSelecionado"
        :vehiculos="vehiculosDeModelo" :clientes="clientes" :registros="registros"
        @enviarCliente="clienteSeleccionado = $event" @enviarVehiculo="vehiculoSeleccionado = $event"
        @enviarNumDias="numDias = $event" @mostrarRegistro="mostrarRegistro" />
    </div>
    <div class="mostrarLista" v-show="mostrarLista">
      <MostrarAlquiler :registros="registros" />
    </div>
  </div>
</template>

<script>
import ListadoVehiculos from "../components/vehiculos/ListadoVehiculos";
import FormularioNuevoAlquiler from "../components/Formularios/FormularioNuevoAlquiler";
import MostrarAlquiler from "../components/Alquileres/MostrarAlquiler";

export default {
  name: "Alquiler",
  components: {
    ListadoVehiculos,
    FormularioNuevoAlquiler,
    MostrarAlquiler,
  },
  data() {
    return {
      marcas: [],
      modelos: [],
      vehiculos: [],
      clientes: [],
      registros: [],
      marcaSeleccionada: null,
      modeloSelecionado: null,
      vehiculoSeleccionado: null,
      clienteSeleccionado: null,
      mostrarForm: false,
      mostrarLista: false,
      numDias: 1,
      fecha: "",
    };
  },
  methods: {
    getDatos() {
      fetch("http://localhost:3000/marcas")
        .then((response) => response.json())
        .then((data) => {
          this.marcas = data;
        });

      fetch("http://localhost:3000/modelos")
        .then((response) => response.json())
        .then((data) => {
          this.modelos = data;
        });

      fetch("http://localhost:3000/vehiculos")
        .then((response) => response.json())
        .then((data) => {
          this.vehiculos = data;
        });

      fetch("http://localhost:3000/clientes")
        .then((response) => response.json())
        .then((data) => {
          this.clientes = data;
        });
    },
    mostrarDesplegable() {
      this.mostrarForm = true;
    },

    mostrarRegistro() {
      this.mostrarLista = true;
      this.datosRegistro();
    },

    datosRegistro() {
      this.registros.push({
        marca: this.marcaSeleccionada.nombre,
        modelo: this.modeloSelecionado.modelo,
        nombre: this.clienteSeleccionado.nombre,
        dni: this.clienteSeleccionado.dni,
        precioTotal: this.vehiculoSeleccionado.precioDia * this.numDias,
      })
    },
    enviarMarca(marca) {
      this.marcaSeleccionada = marca;
    },

    enviarModelo(modelo) {
      this.modeloSeleccionado = modelo;
    },

    enviarVehiculo(vehiculo) {
      this.vehiculoSeleccionado = vehiculo;
    },

    enviarCliente(cliente) {
      this.clienteSeleccionado = cliente;
    },

    enviarNumDias(numDias) {
      this.numDias = numDias;
    },
  },
  created() {
    this.getDatos();
  },
  computed: {
    modelosDeMarca() {
      if (this.marcaSeleccionada) {
        return this.modelos.filter(
          (modelo) => modelo.idMarca == this.marcaSeleccionada.id
        );
      }
    },
    vehiculosDeModelo() {
      let vehiculosDeModelo = [];
      if (this.modeloSelecionado) {
        this.vehiculos.forEach((vehiculo) => {
          if (vehiculo.idModelo == this.modeloSelecionado.id) {
            vehiculosDeModelo.push({
              id: vehiculo.id,
              modelo: this.modeloSelecionado.modelo,
              precioDia: vehiculo.precioDia,
            });
          }
        });
      }
      return vehiculosDeModelo;
    }
  },
};
</script>

<style scoped>
button {
  display: block;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.mostrarLista {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
