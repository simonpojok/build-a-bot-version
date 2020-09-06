import Vue from 'vue';
import Router from 'vue-router';
import PartInfo from '@/parts/PartInfo.vue';
import BrowsePart from '@/parts/BrowsePart.vue';
import HomePage from '../home/HomePage.vue';
import RobotBuilder from '../build/RobotBuilder.vue';
import RobotHeads from '@/parts/RobotHeads';
import RobotArms from '@/parts/RobotArms';
import RobotBases from '@/parts/RobotBases';
import RobotTorsos from '@/parts/RobotTorsos';

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
          name: 'BrowseHeads',
          path: 'heads',
          component: RobotHeads,
        },
        {
          name: 'BrowseArms',
          path: 'arms',
          component: RobotArms,
        },
        {
          name: 'BrowseBases',
          path: 'bases',
          component: RobotBases,
        },
        {
          name: 'BrowseTorsos',
          path: 'torsos',
          component: RobotTorsos,
        },
      ],
    },
    {
      path: '/parts/:partTySpe/:id', name: 'Part', component: PartInfo, props: true,
    },
  ],
});
