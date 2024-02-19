<template lang="">
  <div>
    <ListadoMarcas :coches="coches" @mostrarModelosDeMarca="mostrarModelosDeMarca"/>
    <MostrarMarcas :marcaSeleccionada="marcaSeleccionada" :modelosDeMarca="modelosDeMarca"/>
  </div>
</template>
<script>
import ListadoMarcas from "../components/marcas/ListadoMarcas.vue";
import MostrarMarcas from "../components/marcas/MostrarMarcas.vue";

export default {
  name: "Marcas",
  components: {
    ListadoMarcas,
    MostrarMarcas,
  },
  data() {
    return {
      marcas: [],
      vehiculos: [],
      modelos: [],
      modelosDeMarca: [],
      marcaSeleccionada: null,
    };
  },

  methods: {
    getDatos() {
      fetch("http://localhost:3000/marcas")
        .then((response) => response.json())
        .then((data) => {
          let datos = Array.from(data);
          datos.forEach((element) => {
            this.marcas.push(element);
          });
        });
      fetch("http://localhost:3000/vehiculos")
        .then((response) => response.json())
        .then((data) => {
          let datos = Array.from(data);
          datos.sort((a, b) => (a.precioDia < b.precioDia ? 1 : -1));
          datos.forEach((element) => {
            this.vehiculos.push(element);
          });
        });
      fetch("http://localhost:3000/modelos")
        .then((response) => response.json())
        .then((data) => {
          let datos = Array.from(data);
          datos.forEach((element) => {
            this.modelos.push(element);
          });
        });
    },

    marcaPrecioMedio(idMarca) {
      let modelosMarca = this.modelos.filter(
        (modelo) => modelo.idMarca == idMarca
      );
      let vehiculosModelo = this.vehiculos.filter((vehiculo) =>
        modelosMarca.some((modelo) => modelo.id == vehiculo.idModelo)
      );
      let preciosAlquiler = vehiculosModelo.map(
        (vehiculo) => vehiculo.precioDia
      );
      let sumaPrecios =
        preciosAlquiler.reduce((a, b) => a + b, 0) /
        (preciosAlquiler.length || 1);
      return sumaPrecios;
    },

    mostrarModelosDeMarca(idMarca) {
      this.marcaSeleccionada = this.marcas.find((marca) => marca.id == idMarca);
      let modelosDeMarca = this.modelos.filter(
        (modelo) => modelo.idMarca == idMarca
      );
      this.modelosDeMarca = modelosDeMarca.map((modelo) => {
        let vehiculosDeModelo = this.vehiculos.filter(
          (vehiculo) => vehiculo.idModelo == modelo.id
        );
        let precioMedio =
          vehiculosDeModelo.length > 0
            ? vehiculosDeModelo.reduce((a, b) => a + b.precioDia, 0) /
            vehiculosDeModelo.length
            : 0;
        return {
          id: modelo.id,
          modelo: modelo.modelo,
          precioMedio: precioMedio,
        };
      });
    },
  },

  created() {
    this.getDatos();
  },

  computed: {
    coches() {
      let marcasConPrecio = this.marcas.map((marca) => {
        return {
          id: marca.id,
          nombre: marca.nombre,
          precioAlquiler: this.marcaPrecioMedio(marca.id),
        };
      });
      return marcasConPrecio.sort((a, b) =>
        a.precioAlquiler < b.precioAlquiler ? 1 : -1
      );
    },
  },
};
</script>

