import Vue from 'vue';
import Router from 'vue-router';
import PartInfo from '@/parts/PartInfo.vue';
import BrowsePart from '@/parts/BrowsePart.vue';
import HomePage from '../home/HomePage.vue';
import RobotBuilder from '../build/RobotBuilder.vue';
import RobotHeads from '@/parts/RobotHeads';

Vue.use(Router);
export default new Router({
  routes: [
    { path: '/', name: 'Home', component: HomePage },
    { path: '/build', name: 'Build', component: RobotBuilder },
    {
      path: '/parts/browse',
      name: 'BrowseParts',
      component: BrowsePart,
      children: [
        {
          name: 'BrowseHead',
          path: 'heads',
          component: RobotHeads,
        }
      ],
    },
    {
      path: '/parts/:partTySpe/:id', name: 'Part', component: PartInfo, props: true,
    },
  ],
});
