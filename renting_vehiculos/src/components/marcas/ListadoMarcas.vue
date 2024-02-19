<template lang="">
  <div>
    <h1>Marcas</h1>
    <ul>
      <li v-for="coche in coches" :key="coche.id"  @click="mostrarModelosDeMarca(coche.id)"> {{ coche.nombre }} -- {{ coche.precioAlquiler }}
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
    mostrarModelosDeMarca(idMarca) {
      this.$emit('mostrarModelosDeMarca', idMarca)
    }
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
  align-items: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
  padding: 20px;
  max-width: 600px;
  margin: auto;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
}

li {
  background-color: #f2f2f2;
  padding: 15px 20px;
  border-radius: 8px;
  margin-bottom: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
 
}

li:hover {
  background-color: #e0e0e0;
  transform: translateY(-3px);
}

</style>
