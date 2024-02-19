<template lang="">
  <div>
    <h1>Nueva Marca</h1>
    <form action="" @submit.prevent="crearMarca">
      <div>
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" v-model="nombre" required/>
        <label for="anoFundacion">Año de fundación:</label>
        <input type="number" id="anoFundacion" v-model="anoFundacion" required />
        <label for="paisOrigen">País de origen:</label>
        <input type="text" id="paisOrigen" v-model="paisOrigen" required />
      </div>
      <div>
        <button type="submit">Guardar</button>
      </div>
    </form>
  </div>


</template>
<script>
export default {
  data() {
    return {
      nombre: "",
      anoFundacion: "",
      paisOrigen: "",
    };
  },
  methods: {
    crearMarca() {
      this.$emit("crearMarca", {
        nombre: this.nombre,
        origen: this.paisOrigen,
        anioFundacion: this.anoFundacion,
      });
    },
  },
};
</script>
<style scoped>

select:invalid {
  border-color: red; 
}
input:valid {
  border-color: black;
}
input:invalid {
  border-color: red;
}
div {
  flex-direction: column;
  display: flex;
  align-items: center;
  max-width: 400px; 
  margin: 0 auto; 
}


h1 {  
  margin-top: 20%;
  font-size: 4rem;
  margin-bottom: 20px;
  color: #333; 
}


form {
  margin-top: 20%;
  display: flex;
  flex-direction: column;
  width: 100%; 
}


label {
  margin-bottom: 10px;
  font-size: 1.2rem;
  color: #555; 
}


input {

  border: 1px solid #ccc;
  margin-bottom: 18px;
  border-radius: 5px;
  width: 100%; 
  box-sizing: border-box;
  padding: 10px; 
}

button {
  background-color: #34495e;; 
  color: #fff; 
  border: none; 
  padding: 14px 24px; 
  text-align: center; 
  font-size: 1.1rem; 
  border-radius: 6px; 
  cursor: pointer;
  transition: background-color 0.3s ease; 
  text-transform: uppercase; 


 
}
button:hover {
  background-color:  #333;
  color: #ffffff; 
}

</style>