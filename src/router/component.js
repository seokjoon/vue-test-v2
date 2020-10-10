import ComputedV from '@/views/Component/ComputedV'
import EventV from '@/views/Component/EventV'
import DataV from '@/views/Component/DataV'
import HookV from '@/views/Component/HookV'
import MethodV from '@/views/Component/MethodV'
import RouteV from '@/views/Component/RouteV'
import WatchV from '@/views/Component/WatchV'

const routesComponent = [
  {
    component: ComputedV,
    name: 'Computed',
    path: '/component/computed',
  },
  {
    component: DataV,
    name: 'Data',
    path: '/component/data',
  },
  {
    component: EventV,
    name: 'Event',
    path: '/component/event',
  },
  {
    component: HookV,
    name: 'Hook',
    path: '/component/hook',
  },
  {
    component: MethodV,
    name: 'Method',
    path: '/component/method',
  },
  {
    beforeEnter: (to, from, next) => { //console.log(to, from);
      next();
    },
    component: RouteV,
    name: 'Route',
    path: '/component/route',
  },
  {
    component: WatchV,
    name: 'Watch',
    path: '/component/watch',
    children: [
      {
        component: WatchV,
        path: 'foo',
      },
    ],
  },
];

export default routesComponent;