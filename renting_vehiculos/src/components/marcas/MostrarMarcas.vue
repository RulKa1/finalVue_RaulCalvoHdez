<template lang="">
  <div>
    <div class="modelo-lista" v-if="modelosDeMarca.length">
      <h2>Coches de {{ marcaSeleccionada.nombre }}</h2>
      <ul>
        <li v-for="modelo in modelosDeMarca" :key="modelo.id" class="modelo">
          <p>Modelo: {{ modelo.modelo }}</p>
          <p>Precio alquiler X día: {{ modelo.precioMedio }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    marcaSeleccionada: Object, 
    modelosDeMarca: Array,
  }
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




h1 {
  margin-bottom: 30px; 
  text-align: center;
  color: #343a40; 
  font-size: 4rem;
  font-weight: bold; 
  text-transform: uppercase; 
}
</style>