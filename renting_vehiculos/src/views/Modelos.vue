<template lang="">
    
    <div>
      <Desplegable :marcas="marcas"  @enviarMarca="marcaSeleccionada = $event"></Desplegable>
      <TablasModelo :modelos="modelos" :vehiculos="vehiculos" :marcas="marcas" :marcaSeleccionada="marcaSeleccionada"></TablasModelo>
    </div>
  </template>
  <script>
  import Desplegable from "../components/modelos/Desplegable.vue";
  import TablasModelo from "../components/modelos/TablasModelo.vue";
  export default {
    name: "Modelos",
    components: {
      Desplegable,
      TablasModelo,
    },
    data() {
      return {
        marcas: [],
        modelos: [],
        vehiculos: [],
        modelosDeMarca: [],
        marcaSeleccionada: null,
        precioExtra: 0,
      };
    },
    methods: {
      getMarcas() {
        fetch("http://localhost:3000/marcas")
          .then((response) => response.json())
          .then((data) => {
            this.marcas = data;
          });
        fetch("http://localhost:3000/modelos")
          .then((response) => response.json())
          .then((data) => {
            this.modelos = data;
          });
        fetch("http://localhost:3000/vehiculos")
          .then((response) => response.json())
          .then((data) => {
            this.vehiculos = data;
          });
      },
  
      actualizarPrecioExtra(modelo, precioExtra) {
        let init = {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: modelo.id,
            idMarca: modelo.idMarca,
            modelo: modelo.nombre,
            extraPorModelo: precioExtra,
          }),
        };
        fetch(`http://localhost:3000/modelos/${modelo.id}`, init)
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
          });
      },
  
      enviarMarca(marca) {
        this.marcaSeleccionada = marca;
      },
    },
    created() {
      this.getMarcas();
    },
  };
  </script>
  <style lang=""></style>
  