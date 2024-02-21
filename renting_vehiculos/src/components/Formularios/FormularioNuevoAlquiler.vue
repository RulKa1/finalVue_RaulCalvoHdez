<template>
  <form action="" @submit.prevent="alquilar(clienteSeleccionado)">
    <label for="vehiculo">Vehículo:</label>
    <select v-model="vehiculoSeleccionado" @change="enviarVehiculo" required>
      <option
          v-for="vehiculo in vehiculos"
          :key="vehiculo.id"
          :value="vehiculo"
      >
        {{ vehiculo.modelo }}
        {{ vehiculo.precioDia }}€
      </option>
    </select>
    <label for="cliente">Cliente:</label>
    <select v-model="clienteSeleccionado" @change="enviarCliente" required>
      <option v-for="cliente in clientes" :key="cliente.id" :value="cliente">
        {{ cliente.nombre }}
      </option>
    </select>
    <label for="numDias">Número de días:</label>
    <input type="number" v-model="numDias" required/>
    <label for="fecha">Fecha:</label>
    <input type="date" v-model="fecha" required/>
    <button type="submit"  @click="enviarNumDias">Alquilar</button>
  </form>
</template>

<script>
export default {
  name: "FormularioNuevoAlquiler",
  props: {
    marcaSeleccionada: Object,
    modeloSelecionado: Object,
    vehiculos: Array,
    clientes: Array,
    registros: Array,
  },
  data() {
    return {
      vehiculoSeleccionado: null,
      clienteSeleccionado: null,
      numDias: 1,
      fecha: "",
    };
  },
  methods: {
    enviarVehiculo() {
      this.$emit("enviarVehiculo", this.vehiculoSeleccionado);
    },
    enviarCliente() {
      this.$emit("enviarCliente", this.clienteSeleccionado);
    },
    enviarNumDias() {
      this.$emit("enviarNumDias", this.numDias);
    },
    alquilar(cliente) {
      let alquiler = {
        vehiculo: this.vehiculoSeleccionado.id,
        numDias: this.numDias,
        fechaInic: this.fecha,
      };

      fetch(`http://localhost:3000/clientes/${cliente.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...cliente,
          alquileres: [...cliente.alquileres, alquiler],
        }),
      })
      .then((response) => response.json())
      .then(() => {
        this.resetearFormulario(); 
        this.$emit("mostrarRegistro"); 
      });
    },
    resetearFormulario() {
      this.vehiculoSeleccionado = null;
      this.clienteSeleccionado = null;
      this.numDias = 1;
      this.fecha = "";
    },
  },
  created() {
    this.$emit('getDatos'); 
  },
}

</script>

<style scoped>

h1 {
  font-size: 2rem;
  margin-bottom: 20px;
}

form {
  display: flex;
  flex-direction: column
}

label {
  font-size: 1.2rem;
  margin-bottom: 10px;
}

input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 20px;
}

button[type="submit"] {
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
}

button[type="submit"]:hover {
  background-color: #45a049;
}
</style>