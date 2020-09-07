import Vue from 'vue';
import Router from 'vue-router';
import PartInfo from '@/parts/PartInfo.vue';
import BrowsePart from '@/parts/BrowsePart.vue';
import RobotHeads from '@/parts/RobotHeads.vue';
import RobotArms from '@/parts/RobotArms.vue';
import RobotBases from '@/parts/RobotBases.vue';
import RobotTorsos from '@/parts/RobotTorsos.vue';
import SidebarStandard from '@/sidebar/SidebarStandard.vue';
import SidebarBuild from '@/sidebar/SidebarBuild.vue';
import ShoppingCart from '@/cart/ShoppingCart.vue';
import RobotBuilder from '../build/RobotBuilder.vue';
import HomePage from '../home/HomePage.vue';

Vue.use(Router);
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      components: {
        default: HomePage,
        sidebar: SidebarStandard,
      },
    },
    {
      path: '/build',
      name: 'Build',
      components: {
        default: RobotBuilder,
        sidebar: SidebarBuild,
      },
    },
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
      path: '/parts/:partType/:id',
      name: 'Part',
      component: PartInfo,
      props: true,
      beforeEnter(to, from, next) {
        const isValidId = Number.isInteger(Number(to.params.id));
        if (isValidId) {
          next(true);
        }
      },
    },
    {
      path: '/cart',
      name: 'Cart',
      component: ShoppingCart,
    },
  ],
});
