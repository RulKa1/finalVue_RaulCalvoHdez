<template lang="">
  <div>
    <h1>Nueva Marca</h1>
    <form id="miFormulario" action="" @submit.prevent="nuevaMarca">
      <div>
        <label for="nombre">Nombre de la Marca</label>
        <input type="text" id="nombre" v-model="nombre" required />
        <label for="anioFundacion">Año de Fundacion</label>
        <input type="number" id="anioFundacion" v-model="anioFundacion"  required/>
        <label for="paisCreacion">Creado En </label>
        <input type="text" id="paisCreacion" v-model="paisCreacion" required/>
      </div>
      <div>
        <button type="submit">Guardar Marca</button>
      </div>
    </form>
  </div>


</template>
<script>
export default {
  data() {
    return {
      nombre: "",
      anioFundacion: "",
      origen: "",
    };
  },
  methods: {
    nuevaMarca() {
      this.$emit("nuevaMarca", {
        nombre: this.nombre,
        origen: this.paisCreacion,
        anioFundacion: this.anioFundacion,
      });
      document.getElementById("miFormulario").reset();

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
  background-color: red; 
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
