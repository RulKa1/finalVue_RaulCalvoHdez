<template lang="">
  <div>
    <h1>Nueva Marca</h1>
    <form id="miFormulario" action="" @submit.prevent="nuevaMarca">
      <div>
        <label for="nombre">Nombre de la Marca</label>
        <input type="text" id="nombre" v-model="nombre" required />
        <label for="añoFundacion">Año de Fundacion</label>
        <input type="number" id="añoFundacion" v-model="añoFundacion"  required/>
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
      añoFundacion: "",
      paisCreacion: "",
    };
  },
  methods: {
    nuevaMarca() {
      this.$emit("nuevaMarca", {
        nombre: this.nombre,
        pais: this.paisCreacion,
        añoFundacion: this.añoFundacion,
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
  display: flex;
  flex-direction: column;
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
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: #555; 
}


input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 20px;
  width: 100%; 
  box-sizing: border-box; 
}


button {
  background-color: red; 
  color: black;
  border: none;
  padding: 12px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  border-radius: 4px;
  cursor: pointer;

}

button:hover {
  background-color:  #333;
  color: #ffffff; 
}

</style>
