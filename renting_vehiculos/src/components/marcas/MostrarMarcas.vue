<template lang="">
  <div>
    <div class="lista-modelos" v-if="modelosDeMarca.length">
      <h2>Modelos de {{ marcaSeleccionada.nombre }}</h2>
      <ul>
        <li v-for="modelo in modelosDeMarca" :key="modelo.id">
          <div class="modelo-info">
            <span class="modelo-nombre">{{ modelo.modelo }}</span>
            <span class="modelo-precio">{{ modelo.precioMedio }}€  al día</span>
          </div>
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
h2{
  margin-left: 35%
  
}
div {
  display: flex;
  justify-content: center;
  width: 100%;
}

.lista-modelos ul {
  list-style-type: none;
  padding: 0;
  margin: 0 auto;
  max-width: 600px;   margin-left: 5%

}

.lista-modelos li {
  background-color: white; 
  color: #34495e; 
  margin-bottom: 8px; 
  padding: 15px; 
  border: 1px solid #34495e; 
  display: flex;
  align-items: center;
 
}



.modelo-info {
  display: flex;
  align-items: center;
}

.modelo-nombre {
  margin-right: 20px; 
  font-weight: 600; 

}

.modelo-precio {
  color: #34495e; 
  font-weight: 600; 
 
}


</style>
