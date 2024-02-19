<template>
  <div>
    <h2>Alquileres</h2>

    <table>
      <thead>
        <tr>
          <th>Marca</th>
          <th>Modelo</th>
          <th>Nombre</th>
          <th>DNI</th>
          <th>Precio Total</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="registro in registros" :key="registro.id">
          <td>{{ registro.marca }}</td>
          <td>{{ registro.modelo }}</td>
          <td>{{ registro.nombre }}</td>
          <td>{{ registro.dni }}</td>
          <td>{{ registro.precioTotal }}€</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "TablaAlquiler",
  props: {
    registros: Array,
  },
}
</script>

<style scoped>
div {
  width: 50%;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

thead {
  background-color: #ddd;
}

th,
td {
  padding: 10px;
  text-align: left;
}

th {
  font-weight: bold;
}

tbody tr:nth-child(even) {
  background-color: #f2f2f2;
}

tbody tr:hover {
  background-color: #ddd;
}
</style>