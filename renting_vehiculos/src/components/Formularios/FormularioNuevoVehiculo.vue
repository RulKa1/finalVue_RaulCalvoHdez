<template lang="">
  <div>
    <h1>Nuevo vehiculo</h1>
    <form action="" @submit.prevent="anadirNewVehiculo">
      <div v-if="marcaSeleccionada">
        <input type="text" :value="marcaSeleccionada.nombre" disabled  />
      </div>
      <div v-if="modeloSeleccionado">
        <input type="text" :value="modeloSeleccionado.modelo" disabled />
      </div>
      <div v-if="!marcaSeleccionada">
      <label for="marca">Elige la marca</label>
        <select name="" id="" v-model="nuevaMarcaSeleccionada">
          <option v-for="marca in marcas" :value="marca" :key="marca.id" required>
          {{marca.nombre }}
          </option>
        </select>
      </div>
      <div v-if="!modeloSeleccionado">
      <label for="modelo">Elige el modelo</label>
        <select name="" id="" :disabled="!nuevaMarcaSeleccionada" v-model="nuevoModeloSeleccionado">
          <option v-for="modelo in nuevoModelosMarca" :value="modelo" :key="modelo.id" required>
            {{modelo.modelo }}
          </option>
        </select>
      </div>
      <label for="precio">Precio por dia</label>
      <input type="number" v-model="precioDia" required />
      <label for="puertas">¿Numero de  puertas quiere?</label>
      <input type="number" v-model="puertas"  required/>
      <label for="silla">¿Necesita silla infantil?</label>
      <input type="checkbox" v-model="sillaInfantil"  />
      <button>Guardar</button>
    </form>
  </div>
</template>
<script>
export default {
  name: "FormularioNuevoVehiculo",
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
      let modelos = this.modeloSeleccionado || this.nuevoModeloSeleccionado;

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
        .then(() => {
          this.resetearFormulario(); 
        });
    },
    resetearFormulario() {
      this.nuevaMarcaSeleccionada = null;
      this.nuevoModeloSeleccionado = null;
      this.precioDia = 0;
      this.puertas = 0;
      this.sillaInfantil = false;
    },
  },
  computed: {
    nuevoModelosMarca() {
      if (this.nuevaMarcaSeleccionada) {
        return this.modelos.filter(modelo => modelo.idMarca == this.nuevaMarcaSeleccionada.id);
      }
      return [];
    },
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

form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 80%;
  max-width: 500px;
}

select, input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  font-size: 16px;
  width: 100%;
  outline: none;
}

select {
  border-color: #34495e;
  box-shadow: 0 0 8px 34495e(30,144,255,0.5);
}

button {
  padding: 10px;
  background-color: #34495e;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

}


</style>
