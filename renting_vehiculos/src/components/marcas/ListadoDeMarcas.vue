<template lang="">
  <div>
    <h1>Marcas</h1>
    <ul>
        <li v-for="coche in coches" :key="coche.id"  @click="mostrarModelos(coche.id)">        
          {{ coche.nombre }} <br><hr>Precio de Alquiler: {{ coche.precioAlquiler }}</li>
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
  border-radius: 15px;
  margin-bottom: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  
}


li:hover {
  background-color: aliceblue; 
  transform: translateY(-3px); 
  box-shadow: 0 6px 10px rgba(0, 0, 0, 1); 
}


h1 {
  margin-bottom: 30px; 
  text-align: center;
  color: #343a40; 
  font-size: 4rem;
  font-weight: bold; 
  text-transform: uppercase; 
}

</style>
