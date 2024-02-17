<template lang="">
  <div>
    <div class="modelo-lista" v-if="modelosDeMarca.length">
      <h2>Modelos de {{ marcaSeleccionada.nombre }}</h2>
      <ul>
        <li v-for="modelo in modelosDeMarca" :key="modelo.id" class="modelo">
          <p><strong>Modelo:</strong> {{ modelo.modelo }}</p>
          <p><strong>Precio alquiler/día:</strong> {{ modelo.precioMedio }}</p>
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

div{
  display: flex;
  justify-content: center;

}

.tabla {
  margin-top: 30px;
  border: 1px solid black;
  padding: 10px;
  border-radius: 5px;
}

.tabla h2 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.tabla table {
  width: 100%;
  border-collapse: collapse;
}

.tabla th,
.tabla td {
  text-align: left;
  padding: 5px 10px;
  border: 1px solid black;
}

.tabla th {
  background-color: #ccc;
}

.tabla tr:nth-child(even) {
  background-color: #f2f2f2;
}

.tabla tr:hover {
  background-color: #e6e6e6;
  cursor: pointer;
}

</style>
