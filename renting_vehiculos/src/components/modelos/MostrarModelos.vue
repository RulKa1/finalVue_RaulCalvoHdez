<template>
  <div>
    <table v-if="marcaSeleccionada">
      <thead>
        <tr>
          <th>Modelo</th>
          <th>Precio/día</th>
          <th>Precio extra por modelo</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="modelo in modeloCoche" :key="modelo.id">
          <td>{{ modelo.nombre }}</td>
          <td>{{ calcularPrecioAlquilerPromedio(modelo.id) }}</td>
          <td>
            {{ modelo.extraPorModelo || 0 }}
            <div v-if="!modelo.extraPorModelo && !modeloActualizado[modelo.id]">
              <input type="number" v-model.number="precioExtra" />
              <button @click="() => actualizarPrecioExtra(modelo)">Guardar</button>
            </div>
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
      modeloActualizado: {}, 
    };
  },
  methods: {
    actualizarPrecioExtra(modelo) {
      if (isNaN(this.precioExtra) || this.precioExtra < 0) {
        alert("Por favor, introduce un valor válido para el precio extra.");
        return;
      }

      
      let init = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          idMarca: modelo.idMarca,
          modelo: modelo.nombre,
          extraPorModelo: this.precioExtra,
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
         
          this.modeloActualizado[modelo.id] = true; 
          modelo.extraPorModelo = this.precioExtra; 
          this.precioExtra = 0; 
        })
        .catch(error => {
         
          
        });
    },
    calcularPrecioAlquilerPromedio(idModelo) {
      const vehiculosModelo = this.vehiculos.filter(vehiculo => vehiculo.idModelo === idModelo);
      const sumaPrecios = vehiculosModelo.reduce((sum, vehiculo) => sum + vehiculo.precioDia, 0);
      return sumaPrecios / (vehiculosModelo.length || 1);
    },
  },
  computed: {
    modeloCoche() {
      return this.modelos.filter(modelo => modelo.idMarca === this.marcaSeleccionada.id)
        .map(modelo => ({
          ...modelo,
          nombre: modelo.modelo,
          precioAlquiler: this.calcularPrecioAlquilerPromedio(modelo.id),
          extraPorModelo: modelo.extraPorModelo,
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
