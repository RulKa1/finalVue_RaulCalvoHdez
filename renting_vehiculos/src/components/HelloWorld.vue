<template>
  <div class="home">
    <img src="../assets/logotipo-empresa-alquiler-coches_647963-155.avif"/>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
}
</script>

<style scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f2f2f2;
}

.home img {
  max-width: 50%;
  max-height: 50%;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

</style>
