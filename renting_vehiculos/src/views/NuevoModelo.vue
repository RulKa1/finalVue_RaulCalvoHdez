<template lang="">
    <div>
      <FormularioNuevoModelo :marcas="marcas" @nuevoModelo="nuevoModelo"></FormularioNuevoModelo>
    </div>
  </template>
  <script>
  import FormularioNuevoModelo from "../components/Formularios/FormularioNuevoModelo.vue";
  
  export default {
    name: "NuevoModelo",
    components: {
      FormularioNuevoModelo,
    },
    data() {
      return {
        marcas: [],
        marcaSelecionada: "",
        nombre: "",
        extraPorModelo: ""
    
      };
    },
    methods: {
      getMarcas() {
        fetch("http://localhost:3000/marcas")
          .then((res) => res.json())
          .then((res) => {
            this.marcas = res;
          });
      },
      async nuevoModelo(modelo) {
        let init = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(modelo),
        };
        await fetch("http://localhost:3000/modelos", init);
      },
    },
    created() {
      this.getMarcas();
    },
  };
  </script>
  <style lang=""></style>
  