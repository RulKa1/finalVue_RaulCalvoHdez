<template lang="">
    <div>
      <ListadoDeMarcas :marcas="marcas" @mostrarMarcas="mostrarMarcas"/>
    </div>
  </template>
  <script>
import ListadoDeMarcas from "../components/marcas/ListadoDeMarcas.vue";
  export default {
  name: "Marcas",
  components: {
    ListadoDeMarcas
  }
};
</script>
<style>
</style>
  