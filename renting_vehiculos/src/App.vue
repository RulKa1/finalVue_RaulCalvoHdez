<template>
  <div>
    <nav>
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <p>
            <router-link to="/marcas">Marcas</router-link>
          </p>
          <ul>
            <li>
              <router-link to="/marcas/nuevaMarca">Nueva Marca</router-link>
            </li>
            <li>
              <router-link to="/marcas/modelos">Modelos</router-link>
            </li>
            <li>
              <router-link to="/marcas/nuevoModelo">Nuevo Modelo</router-link>
            </li>
          </ul>
        </li>
        <li>
          <p>
            <router-link to="/vehiculos">Vehiculos</router-link>
          </p>
          <ul>
            <li>
              <router-link to="/vehiculos/nuevoVehiculo">Nuevo Vehículo</router-link>
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
    <router-view />
  </div>
</template>

<style scoped>
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

}

nav {
  background-color: #333;
  width: 200px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
}

nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

nav li {
  margin: 10px ;
  text-align: center;
  position: relative;
}

nav li p {
  margin: 0;
  padding: 10px;
  box-sizing: border-box;
  cursor: pointer;
}

nav li ul {
  background-color: #333; 
  display: none;
  position: absolute;
  top: 0;
  left: 100%;
  width: 200px;
}

nav li ul li {
  text-align: center;
}

nav li:hover ul {
  display: block;
}

nav a {
  text-decoration: none;
  color: #ff0000; 
  font-size: 18px;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
}

nav a:hover {
  color: #eee7e7;
}

</style>
