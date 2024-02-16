<template lang="">
    <div>
      <h1>Nuevo Modelo</h1>
      <form action="" @submit.prevent="nuevoModelo">
        <label for="marca">Elige Marca</label>
        <select name="" id="select" v-model="nombreMarca" required>
          <option v-for="marca in marcas" :value="marca.id">
          {{ marca.nombre }}
          </option>
        </select>
        <label for="nombre">Nombre del modelo</label>
        <input type="text" placeholder="Introduce el Nombre del Modelo " v-model="nombre"required />
        <label for="extraPorModelo">Extra a pagar por el modelo</label>
        <input type="number" placeholder="€" v-model="extraPorModelo"  step="0.01" />
        <button type="submit">Guardar Modelo</button>
      </form>
    </div>
  </template>
  <script>
  export default {
    name: "FormularioNuevoModelo",
    props: ["marcas"],
    data() {
      return {
        nombre: "",
        extraPorModelo: "",
        nombreMarca: "",
      };
    },
    methods: {
      nuevoModelo() {
        
        if (!this.extraPorModelo.trim()) {
          this.extraPorModelo = 0;
        }
    
        this.$emit("nuevoModelo", {
          idMarca: this.nombreMarca,
          modelo: this.nombre,
          extraPorModelo: this.extraPorModelo,
        });
        
     
        this.nombre = "";
        this.extraPorModelo = "";
        this.nombreMarca = "";
      },
    },
  };
</script>

 <style scoped>

select{
  height: 35px;
}
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
  