<template lang="">
  <div>
    <table v-if="marcaSeleccionada">
      <thead>
        <tr>
          <th>Modelo</th>
          <th>Precio/dia</th>
          <th>Precio extra por modelo</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="modelo in modeloCoche" :key="modelo.id">
          <td>{{ modelo.nombre }}</td>
          <td>{{ modelo.precioAlquiler }}</td>
          <td
            v-if="
              modelo.extraPorModelo > 0 &&
              modelo.extraPorModelo != null &&
              modelo.extraPorModelo != undefined
            "
          >
            {{ modelo.extraPorModelo }}
          </td>
          <td v-else>
            <input type="number" v-model="precioExtra" />
            <button @click="actualizarPrecioExtra(modelo, precioExtra)">
              Guardar
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "TablasModelo",
  props: ["modelos", "vehiculos", "marcas", "marcaSeleccionada"],
  data() {
    return {
      precioExtra: 0,
    };
  },
  methods: {
    actualizarPrecioExtra(modelo, precioExtra) {
      let init = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          modelo: modelo.nombre,
          idMarca: modelo.idMarca,
          extraPorModelo: precioExtra,
        }),
      };
      fetch(`http://localhost:3000/modelos/${modelo.id}`, init)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        });
    },

    marcaPrecioMedio(idModelo) {
      let modelosMarca = this.modelos.filter((modelo) => modelo.id == idModelo);
      let vehiculosModelo = this.vehiculos.filter((vehiculo) =>
        modelosMarca.some((modelo) => modelo.id == vehiculo.idModelo)
      );
      let preciosAlquiler = vehiculosModelo.map(
        (vehiculo) => vehiculo.precioDia
      );
      let sumaPrecios =
        preciosAlquiler.reduce((a, b) => a + b, 0) / (preciosAlquiler.length || 1);
      return sumaPrecios;
    },
  },
  computed: {
    modeloCoche() {
      let marcasConPrecioMedio = this.modelos.map((modelo) => {
        return {
          id: modelo.id,
          idMarca: modelo.idMarca,
          nombre: modelo.modelo,
          precioAlquiler: this.marcaPrecioMedio(modelo.id),
          extraPorModelo: modelo.extraPorModelo,
        };
      });
      return marcasConPrecioMedio.filter(
        (modelo) => modelo.idMarca == this.marcaSeleccionada.id
      );
    },
  },
};
</script>
<style scoped>
table {
  margin: 0 auto;
  border-collapse: collapse;
  width: 100%;
  max-width: 800px;
  text-align: left;
}

th, td {
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: #f2f2f2;
  color: #444;
  font-weight: bold;
}

tr:hover {
  background-color: #f5f5f5;
}

input[type="number"] {
  width: 80px;
  padding: 8px 12px;
  margin-right: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 16px;
  text-align: center;
}

button {
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 8px 12px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 4px;
}

button:hover {
  background-color: #3e8e41;
}
</style>
