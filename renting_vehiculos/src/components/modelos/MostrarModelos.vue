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
  margin: 20px auto;
  border-collapse: collapse;
  width: 100%;
  max-width: 800px;
  text-align: left;
}

th, td {
  padding: 12px 15px;
  border-bottom: 1px solid #dee2e6;
}

th {
  background-color: #e9ecef;
  color: #343a40;
  font-weight: 600;
}

tr:nth-child(even) {
  background-color: #f8f9fa;
}

tr:hover {
  background-color: #f1f3f5;
}



button {
  background-color: #34495e;
  border: none;
  color: white;
  padding: 10px 15px;
  text-align: center;
  font-size: 16px;
  margin: 5px;
  cursor: pointer;
  border-radius: 4px;

}

button:hover {
  background-color: #34495e;
}

</style>
