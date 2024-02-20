<template>
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
          <td v-if="modelo.extraPorModelo > 0">
            {{ modelo.extraPorModelo }}
          </td>
          <td v-else>
            <input type="number" v-model.number="precioExtra" />
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
      // Validación básica del input
      if (isNaN(precioExtra) || precioExtra < 0) {
        alert("Por favor, introduce un valor válido para el precio extra.");
        return;
      }

      let init = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          idMarca: modelo.idMarca, // Incluir idMarca
          modelo: modelo.nombre, // Incluir el nombre del modelo
          extraPorModelo: precioExtra, // Nuevo valor para extraPorModelo
        }),
      };
      
      fetch(`http://localhost:3000/modelos/${modelo.id}`, init)
        .then(response => {
          if (!response.ok) {
            throw new Error("Error al actualizar el precio extra");
          }
          return response.json();
        })
        .then(data => {
          console.log("Precio extra actualizado con éxito", data);
          alert("Precio extra actualizado con éxito.");
          // Aquí podrías también actualizar el estado local o la UI si es necesario
        })
        .catch(error => {
          console.error("Error al actualizar el precio extra:", error);
          alert("Error al actualizar el precio extra. Por favor, inténtalo de nuevo.");
        });
    },

    marcaPrecioMedio(idModelo) {
      let modelosMarca = this.modelos.filter((modelo) => modelo.id == idModelo);
      let vehiculosModelo = this.vehiculos.filter((vehiculo) =>
        modelosMarca.some((modelo) => modelo.id == vehiculo.idModelo)
      );
      let preciosAlquiler = vehiculosModelo.map((vehiculo) => vehiculo.precioDia);
      let sumaPrecios = preciosAlquiler.reduce((a, b) => a + b, 0) / (preciosAlquiler.length || 1);
      return sumaPrecios;
    },
  },
  computed: {
    modeloCoche() {
      return this.modelos.filter((modelo) => modelo.idMarca == this.marcaSeleccionada.id)
        .map((modelo) => ({
          ...modelo,
          nombre: modelo.modelo, // Corregido para mantener consistencia con el uso de 'nombre'
          precioAlquiler: this.marcaPrecioMedio(modelo.id),
        }));
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

th,
td {
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
