<template>
  <div>
    <h1>Clientes</h1>
    <ul class="clientes">
      <li v-for="cliente in clientes" :key="cliente.id" @click="verVehiculosAlquilados(cliente)">
        {{ cliente.nombre }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "clientes",
  props: {
    clientes: Array,
  },
  methods: {
    verVehiculosAlquilados(cliente) {
      this.$emit("verVehiculosAlquilados", cliente);
    },
  },
}
</script>

<style scoped>
.clientes {
  list-style: none;
  margin: 0;
  padding: 0;
}

.clientes li {
  display: block;
  padding: 10px;
  background-color: #f2f2f2;
  margin-bottom: 5px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.clientes li:hover {
  background-color: #ddd;
}

</style>