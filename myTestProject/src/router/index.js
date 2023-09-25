import { createRouter, createWebHistory } from 'vue-router';
import chatView from '@/views/chatView.vue';
import homeView from '@/views/homeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: homeView,
    },
    {
      path: '/chat',
      name: 'chat',
      component: chatView,
    },
  ]
})

export default router
