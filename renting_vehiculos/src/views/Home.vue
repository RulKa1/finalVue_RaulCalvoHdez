<template>
  <div class="home">
  
    <img src="../assets/images2.jpg"/>
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
  flex-direction: column; 
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #fffdfd;
  text-align: center; 
}



.home img {
  width: 70%; 
  margin-left: 8%;
  


}
</style>
