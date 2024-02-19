import {createRouter, createWebHistory} from "vue-router";
import Home from "../views/Home.vue";
import Marcas from "../views/Marcas.vue";
import NuevaMarca from "../views/NuevaMarca.vue";
import Modelos from "../views/Modelos.vue";
import NuevoModelo from "../views/NuevoModelo.vue";
import Vehiculos from "../views/Vehiculos.vue";
import NuevoVehiculo from "../views/NuevoVehiculo.vue";
import Alquiler from "@/views/Alquiler.vue";
import Clientes from "@/views/Clientes.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/marcas",
        name: "marcas",
        component: Marcas,
    },
    {
        path: "/marcas/crearMarca",
        name: "NuevaMarca",
        component: NuevaMarca,
    },
    {
        path: "/marcas/modelos",
        name: "modelos",
        component: Modelos,
    },
    {
        path: "/marcas/crearModelo",
        name: "NuevoModelo",
        component: NuevoModelo,
    },
    {
        path: "/vehiculos",
        name: "vehiculos",
        component: Vehiculos,
    },
    {
        path: "/vehiculos/crearVehiculo",
        name: "NuevoVehiculo",
        component: NuevoVehiculo,
    },
    {
        path: "/alquiler",
        name: "alquiler",
        component: Alquiler,
    },
    {
        path: "/clientes",
        name: "clientes",
        component: Clientes,
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
