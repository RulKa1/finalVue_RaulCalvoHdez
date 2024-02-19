<template lang="">
  <div>
    <select
      name="marcas"
      id="marcas"
      v-model="marcaSeleccionada"
      @change="enviarMarca"
    >
      <option v-for="marca in marcas" :value="marca" :key="marca.id">
        {{ marca.nombre }}
       </option>
     </select>

     <select
       name="modelos"
       id="modelos"
       v-model="modeloSeleccionado"
       :disabled="!marcaSeleccionada"
       @change="enviarModelo"
     >
       <option v-for="modelo in modelosDeMarca" :value="modelo" :key="modelo.id">
         {{ modelo.modelo }}
       </option>
     </select>
   </div>

</template>
<script>
export default {
  name: "ListadoVehiculos",
  props: {
    marcas: Array,
    modelos: Array,
    vehiculos: Array,
  },
  data() {
    return {
      marcaSeleccionada: null,
      modeloSeleccionado: null,
    };
  },
  methods: {
    enviarMarca() {
      this.$emit("enviarMarca", this.marcaSeleccionada);
    },

    enviarModelo() {
      this.$emit("enviarModelo", this.modeloSeleccionado);
    },
  },
  computed: {
    modelosDeMarca() {
      if (this.marcaSeleccionada) {
        return this.modelos.filter(
            (modelo) => modelo.idMarca == this.marcaSeleccionada.id
        );
      } else {
        return [];
      }
    },
  },
};
</script>
<style scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20vh;
  font-family: Arial, sans-serif;
}

select {
  padding: 10px;
  margin: 0 10px;
  font-size: 1.2rem;
  border: 2px solid #ccc;
  border-radius: 4px;
  outline: none;
}

select:disabled {
  color: #bbb;
  border-color: #bbb;
  background-color: #eee;
  cursor: not-allowed;
}

option {
  font-size: 1.2rem;
}
</style>
