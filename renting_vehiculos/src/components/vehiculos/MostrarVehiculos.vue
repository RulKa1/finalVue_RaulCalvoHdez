<template lang="">
  <div>
    <table>
      <thead>
        <tr>
          <th>Modelo</th>
          <th>Precio</th>
          <th>Cliente</th>
        </tr>
      </thead>

      <tbody>
        <tr v-show="modeloSeleccionado && marcaSeleccionada" v-for="vehiculo in vehiculoDeModelos" :key="vehiculo.id">
          <td>
            {{ vehiculo.modelo }}
          </td>
          <td>
            {{ vehiculo.precio }}
          </td>
          <td v-if="vehiculo.cliente != ''">
            {{ vehiculo.cliente }}
          </td>
          <td v-else>No alquilado</td>
        </tr>

        <tr v-show="marcaSeleccionada && !modeloSeleccionado" v-for="vehiculo in vehiculoDeModelos":key="vehiculo.id">
          <td>
            {{ vehiculo.modelo }}
          </td>
          <td>
            {{ vehiculo.precio }}
          </td>
          <td v-if="vehiculo.cliente != ''">
            {{ vehiculo.cliente }}
          </td>
          <td v-else>No alquilado</td>
        </tr>

        <tr v-show="!modeloSeleccionado && !marcaSeleccionada" v-for="vehiculo in vehiculoDeModelos" :key="vehiculo.id">
          <td>
            {{ vehiculo.modelo }}
          </td>
          <td>
            {{ vehiculo.precio }}
          </td>
          <td v-if="vehiculo.cliente != ''">
            {{ vehiculo.cliente }}
          </td>
          <td v-else>No alquilado</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "TablaVehiculos",
  props: {
    marcas: Array,
    modelos: Array,
    vehiculos: Array,
  },
  data() {
    return {
      marcaSeleccionada: null,
      modeloSeleccionado: null,
    };
  },
  methods: {
    enviarMarca() {
      this.$emit("enviarMarca", this.marcaSeleccionada);
    },

    enviarModelo() {
      this.$emit("enviarModelo", this.modeloSeleccionado);
    },
  },
  computed: {
    vehiculoDeModelos() {
      if (this.modeloSeleccionado) {
        return this.vehiculos.filter(
          (vehiculo) => vehiculo.idModelo === this.modeloSeleccionado.id
        );
      } else {
        return this.vehiculos;
      }
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

table {
  border-collapse: collapse;
  width: 50%;
  margin: 20px 0;
}

th,
td {
  text-align: left;
  padding: 12px;
  border: 1px solid #ddd;
}

th {
  background-color: #f2f2f2;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

tr:hover {
  background-color: #ddd;
}

td:last-child {
  font-weight: bold;
  color: #666;
}
</style>
