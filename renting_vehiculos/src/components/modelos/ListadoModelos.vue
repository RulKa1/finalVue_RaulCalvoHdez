<template lang="">
  <div>
    <h1>Modelos</h1>
    <select name="modelos" id="modelos" v-model="marcaSeleccionada" @change="enviarMarca">
      <option v-for="marca in marcas" :value="marca">
        {{ marca.nombre }}
      </option>
    </select>
  </div>
</template>
<script>
export default {
  name: "Listado",
  props: ["marcas"],
  data() {
    return {
      marcaSeleccionada: null,
    };
  },
  methods: {
    enviarMarca() {
      this.$emit("enviarMarca", this.marcaSeleccionada);
    },
  },
};
</script>
<style scoped>
h1 {
  margin-bottom: 30px; 
  text-align: center;
  color: #343a40; 
  font-weight: bold; 
  text-transform: uppercase; 
}
div {
  display: flex;
  flex-direction: column;
  padding: 20px;
  max-width: 300px;
  margin: auto;
}

select {
  padding: 1rem;
  font-size: 1rem;
  border: none;
  background-color: #ebe1e1;
  border-radius: 0.25rem;
  margin: 0.5rem;
  color: #030303;
}
</style>
