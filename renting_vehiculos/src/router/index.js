import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/Home.vue"
import NuevaMarca from "../views/NuevaMarca.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
{
    path: "/marcas/crearMarca",
    name: "NuevaMarca",
    component: NuevaMarca,
},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
