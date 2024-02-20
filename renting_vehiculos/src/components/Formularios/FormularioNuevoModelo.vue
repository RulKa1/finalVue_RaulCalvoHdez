<template lang="">
  <div>
    <h1>Nuevo Modelo</h1>
    <form action="" @submit.prevent="guardarModelo">
      <label for="marca">Elige Marca</label >
      <select  name="" id="" v-model="marcaSelecionada" required>
        <option v-for="marca in marcas" :value="marca.id">
          {{ marca.nombre }}
        </option>
      </select>
      <label for="nombre">Nombre del modelo</label>
      <input type="text" placeholder="Nombre del modelo" v-model="nombre" required/>
      <label for="extra">Extra por modelo</label>
      <input type="number" placeholder="Extra por Modelo" v-model="extra" />
      <button type="submit">Guardar</button>
    </form>
  </div>
</template>
<script>
export default {
  name: "FormNewModelo",
  props: ["marcas"],
  data() {
    return {
      nombre: "",
      extra: "", 
      marcaSelecionada: "",
    };
  },
  methods: {
    guardarModelo() {
      if (!this.extra) {
        this.extra = 0;
      }

      this.$emit("guardarModelo", {
        idMarca: this.marcaSelecionada,
        modelo: this.nombre,
        extraPorModelo: this.extra,
      });
      this.nombre = "";
      this.extra = "";
      this.marcaSelecionada = "";
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
  background-color: #34495e; 
  color: #fff; 
  border: none; 
  padding: 14px ; 
  text-align: center; 
  font-size: 1.1rem; 
  border-radius: 6px; 
  cursor: pointer;

  text-transform: uppercase; 


 
}
button:hover {
  background-color:  #333;
  color: #ffffff; 
}

 </style>
  