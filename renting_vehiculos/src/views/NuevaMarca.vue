<template lang="">
  <div>
    <FormularioNuevaMarca @crearMarca="crearMarca" />
  </div>
</template>
<script>
import FormularioNuevaMarca from "../components/Formularios/FormularioNuevaMarca.vue";
export default {
  name: "NuevaMarca",
  components: {
    FormularioNuevaMarca,
  },
  methods: {
    crearMarca(marca) {
      let init = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(marca),
      };
      fetch("http://localhost:3000/marcas", init)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        });
    },
  },
};
</script>

