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
              <router-link to="/marcas/crearMarca">Crear Marca</router-link>
            </li>
            <li>
              <router-link to="/marcas/modelos">Modelos</router-link>
            </li>
            <li>
              <router-link to="/marcas/crearModelo">Crear Modelo</router-link>
            </li>
          </ul>
        </li>
        <li>
          <p>
            <router-link to="/vehiculos">Vehiculos</router-link>
          </p>
          <ul>
            <li>
              <router-link to="/vehiculos/crearvehiculo">Crear Vehículo</router-link>
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
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0;
  font-family: sans-serif;
}

nav {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #f2f2f2;
  width: 200px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #333;
}

nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

nav li {

  margin: 10px 0;
  width: 100%;
  text-align: center;
  position: relative;
}

nav li p {

  display: inline-block;
  margin: 0;
  padding: 10px;
  width: 100%;
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
  width: 100%;
  text-align: center;
}

nav li:hover ul {
  display: block;
}

nav a {
  text-decoration: none;
  color: rgb(255, 0, 0);
  font-size: 18px;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  margin-bottom: 10px;

}

nav a:hover {
  color: rgb(255, 0, 0);
}
</style>
