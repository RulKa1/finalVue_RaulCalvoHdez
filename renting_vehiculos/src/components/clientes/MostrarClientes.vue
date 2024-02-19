<template>
  <div>
    <ul class="listaClientes">
      <li v-for="vehiculo in vehiculosAlquilados">
        {{ vehiculo.marca }} {{ vehiculo.modelo }} {{ vehiculo.precioFinal }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ListaFiltrada",
  props: {
    vehiculosAlquilados: Array,
  },
}
</script>

<style scoped>
.listaClientes {
  list-style: none;
  margin: 0;
  padding: 0;
}

.listaClientes li {
  display: block;
  padding: 10px;
  background-color: #f2f2f2;
  margin-bottom: 5px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
</style>