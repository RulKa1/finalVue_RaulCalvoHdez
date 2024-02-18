import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/Home.vue"
import NuevaMarca from "../views/NuevaMarca.vue";
import NuevoModelo from "../views/NuevoModelo.vue";
import Marcas from "../views/Marcas.vue";
import Modelos from "../views/Modelos.vue";


const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
{
    path: "/marcas/nuevaMarca",
    name: "NuevaMarca",
    component: NuevaMarca,
},
{
  path: "/marcas/nuevoModelo",
  name: "NuevoModelo",
  component: NuevoModelo,
},
{
    path: "/marcas",
    name: "marcas",
    component: Marcas,
}, 
{
  path: "/marcas/modelos",
  name: "modelos",
  component: Modelos,
}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
