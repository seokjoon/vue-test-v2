import ComponentV from '@/views/Component/ComponentV'
import ComputedV from '@/views/Component/ComputedV'
import DataV from '@/views/Component/DataV'
import DirectiveV from '@/views/Component/DirectiveV'
import FilterV from '@/views/Component/FilterV'
import HookV from '@/views/Component/HookV'
import MethodV from '@/views/Component/MethodV'
import RouteV from '@/views/Component/RouteV'

const routesComponent = [
  {
    component: ComponentV,
    name: 'Component',
    path: '/component/component',
  },
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
    component: DirectiveV,
    name: 'Directive',
    path: '/component/directive',
  },
  {
    component: FilterV,
    name: 'Filter',
    path: '/component/filter',
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
];

export default routesComponent;