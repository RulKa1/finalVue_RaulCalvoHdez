<template lang="">
  <div>
    <h1>Marcas</h1>
    <ul>
      <li
      v-for="coche in coches"
      :key="coche.id"
      @click="mostrarModelos(coche.id)">
      {{ coche.nombre }} -- {{ coche.precioAlquiler }}
      </li>
    </ul>
  </div>


</template>
<script>
export default {
  props: {
    coches: Array,
  },
  methods: {
    mostrarModelos(idMarca) {
      this.$emit('mostrarModelos', idMarca)
    }
  },
};
</script>
<style scoped>

div {
  display: flex;
  flex-direction: column;
  align-items: center;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  background-color: #f2f2f2;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}

li:hover {
  background-color: #e0e0e0;
}

h1 {
  margin-bottom: 20px;
  text-align: center;
}
</style>
