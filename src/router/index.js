import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import CategoriaView from '../views/CategoriaView.vue';
import EditorasView from '../views/EditorasView.vue';
import AutoresView from '../views/AutoresView.vue';
import LivrosView from '../views/LivrosView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/categorias',
      name: 'categorias',
      component: CategoriaView,
    },
    {
      path: '/editoras',
      name: 'editoras',
      component: EditorasView,
    },
    {
      path: '/autores',
      name: 'autores',
      component: AutoresView,
    },
    {
      path: '/livros',
      name: 'livros',
      component: LivrosView,
    },
  ],
});

export default router;
