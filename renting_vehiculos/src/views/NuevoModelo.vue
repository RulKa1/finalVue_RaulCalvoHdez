<template lang="">
    <div>
      <FormNewModelo
        :marcas="marcas"
        @nuevoModelo="nuevoModelo"
      ></FormNewModelo>
    </div>
  </template>
  <script>
  import FormNewModelo from "../components/Formularios/FormularioNuevoModelo.vue";
  
  export default {
    name: "NuevoModelo",
    components: {
      FormNewModelo,
    },
    data() {
      return {
        marcaSelecionada: "",
        nombre: "",
        extraPorModelo: "",
        marcas: [],
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
  