<template>
  <div>
    <nav>
      <ul>
        <li>
          <router-link to="/">Inicio</router-link>
        </li>
        <li>
          <p>
            <router-link to="/marcas">Marcas</router-link>
          </p>
          <ul>
            <li>
              <router-link to="/marcas/crearMarca">Nueva Marca</router-link>
            </li>
            <li>
              <router-link to="/marcas/modelos">Modelos</router-link>
            </li>
            <li>
              <router-link to="/marcas/crearModelo">Nuevo Modelo</router-link>
            </li>
          </ul>
        </li>
        <li>
          <p>
            <router-link to="/vehiculos">Vehiculos</router-link>
          </p>
          <ul>
            <li>
              <router-link to="/vehiculos/crearvehiculo">Nuevo Vehículo</router-link>
            </li>
            <li>
              <router-link to="/alquiler">Alquiler</router-link>
            </li>
          </ul>
        </li>
        <li>
          <RouterLink to="/clientes">Clientes</RouterLink>
        </li>
      </ul>
    </nav>
    <router-view/>
  </div>
</template>

<style scoped>
#app {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

nav {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #34495e; 
  width: 200px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.2); 
}

nav ul {
  list-style: none;
  padding: 0;
  margin: 20px 0; 
}

nav li {
  margin: 15px 0; 
  width: 100%;
  text-align: center;
  position: relative;
}

nav li p {
  display: inline-block;
  margin: 0;
  padding: 15px; 
  width: 100%;
  box-sizing: border-box;
  cursor: pointer;
  transition: background-color 0.3s ease; 
  color: #ecf0f1; 
}

nav li:hover p {
  background-color: #16a085; 
}

nav li ul {
  display: none;
  position: absolute;
  top: 0;
  left: 100%;
  width: 200px;
  background-color: #2c3e50; 
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); 
}

nav li ul li {
  width: 100%;
  text-align: center;
}

nav li:hover ul {
  display: block; 
}

nav a {
  text-decoration: none;
  color: #ecf0f1; 
  font-size: 16px;
  font-weight: normal;
  transition: color 0.3s ease; 
}

nav a:hover {
  color: #1abc9c; 
}


</style>
