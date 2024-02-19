<template lang="">
  <div>
    <form action="" @submit.prevent="anadirNewVehiculo">
      <div v-if="marcaSeleccionada">
        <input type="text" :value="marcaSeleccionada.nombre" disabled />
      </div>
      <div v-if="modeloSeleccionado">
        <input type="text" :value="modeloSeleccionado.modelo" disabled />
      </div>
      <div v-if="!marcaSeleccionada">
      <label for="marca">Elige la marca</label>
        <select name="" id="" v-model="nuevaMarcaSeleccionada">
          <option v-for="marca in marcas" :value="marca" :key="marca.id">
          {{marca.nombre }}
          </option>
        </select>
      </div>
      <div v-if="!modeloSeleccionado">
      <label for="modelo">Elige el modelo</label>
        <select name="" id="" :disabled="!nuevaMarcaSeleccionada" v-model="nuevoModeloSeleccionado">
          <option
            v-for="modelo in nuevoModelosMarca"
            :value="modelo"
            :key="modelo.id"
          >
            {{modelo.modelo }}
          </option>
        </select>
      </div>
      <label for="precio">Precio por dia</label>
      <input type="number" v-model="precioDia" />
      <label for="puertas">Cuantas puertas quiere?</label>
      <input type="number" v-model="puertas" />
      <label for="silla">¿Necesita silla infantil?</label>
      <input type="checkbox" v-model="sillaInfantil" />
      <button>Guardar</button>
    </form>
  </div>
</template>
<script>
export default {
  name: "FormNewVehiculo",
  props: {
    marcas: Array,
    modelos: Array,
    marcaSeleccionada: Object,
    modeloSeleccionado: Object,
  },
  data() {
    return {
      nuevaMarcaSeleccionada: null,
      nuevoModeloSeleccionado: null,
      precioDia: 0,
      puertas: 0,
      sillaInfantil: false,
    };
  },
  methods: {
    anadirNewVehiculo() {
      let modelos = null;
      if (this.modeloSeleccionado) {
        modelos = this.modeloSeleccionado;
      } else {
        modelos = this.nuevoModeloSeleccionado;
      }

      let vehiculo = {
        idModelo: modelos.id,
        precioDia: this.precioDia,
        puertas: this.puertas,
        sillaInfantil: this.sillaInfantil,
      };
      let init = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(vehiculo),
      };
      fetch("http://localhost:3000/vehiculos", init)
          .then((response) => response.json())
    },
  },
  computed: {
    nuevoModelosMarca() {
      let modelos = [];
      if (this.nuevaMarcaSeleccionada) {
        this.modelos.forEach((modelo) => {
          if (modelo.idMarca == this.nuevaMarcaSeleccionada.id) {
            modelos.push(modelo);
          }
        });
      }
      return modelos;
    },
  },
};
</script>
<style scoped>
div{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
form {
  display: flex;
  flex-direction: column;
  gap: 1rem;

}

select {
  padding: 0.5rem;
  border: none;
  border-radius: 0.25rem;
  box-shadow: 0 0 0 2px lightgray;
  font-size: 1rem;
  width: 100%;
}

input[type="number"],
input[type="checkbox"] {
  padding: 0.5rem;
  border: none;
  border-radius: 0.25rem;
  box-shadow: 0 0 0 2px lightgray;
  font-size: 1rem;
}

button {
  padding: 0.5rem;
  background-color: dodgerblue;
  color: white;
  border: none;
  border-radius: 0.25rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}

button:hover {
  background-color: deepskyblue;
}
</style>
