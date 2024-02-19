<template>
  <FormularioNuevoVehiculo :marcas="marcas" :modelos="modelos" :marcaSeleccionada="marcaSeleccionada"
    :modeloSeleccionado="modeloSeleccionado" />
</template>

<script>
import FormularioNuevoVehiculo from "../components/Formularios/FormularioNuevoVehiculo.vue";

export default {
  name: "NuevoVehiculo",
  components: {
    FormularioNuevoVehiculo
  },
  data() {
    return {
      marcas: [],
      modelos: [],
      vehiculos: [],
      marcaSeleccionada: null,
      modeloSeleccionado: null
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
      fetch("http://localhost:3000/modelos")
        .then((response) => response.json())
        .then((data) => {
          let datos = Array.from(data);
          datos.forEach((element) => {
            this.modelos.push(element);
          });
        });
      fetch("http://localhost:3000/vehiculos")
        .then((response) => response.json())
        .then((data) => {
          let datos = Array.from(data);
          datos.forEach((element) => {
            this.vehiculos.push(element);
          });
        });
    },
  },
  created() {
    this.getDatos();
  },
}
</script>
