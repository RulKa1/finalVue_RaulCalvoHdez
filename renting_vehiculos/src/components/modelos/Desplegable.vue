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
  name: "Desplegable",
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
div {
  display: flex;
  justify-content: center;
  align-items: center;
}

select {
  padding: 0.5rem;
  font-size: 1rem;
  border: none;
  background-color: #f2f2f2;
  border-radius: 0.25rem;
  margin: 0.5rem;
  color: #333;
}
</style>
