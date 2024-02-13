<template lang="">
    <div>
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
        <input type="number" placeholder="€" v-model="extraPorModelo" required step="0.01" />
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
   font-size: 2rem;
   margin-bottom: 20px;
   color: #333; 
 }
 
 
 form {
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
  