import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../home/HomePage.vue';
import RobotBuilder from '../build/RobotBuilder.vue';

const routerHistory = createWebHistory();
export default createRouter({
  history: routerHistory,
  routes: [
    { path: '/', name: 'Home', component: HomePage },
    { path: '/build', name: 'Build', component: RobotBuilder },
  ],
});
