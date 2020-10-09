import FilterV from '@/views/Display/FilterV'
import DirectiveV from '@/views/Display/DirectiveV'

const routesDisplay = [
  {
    component: DirectiveV,
    name: 'Directive',
    path: '/display/directive',
  },
  {
    component: FilterV,
    name: 'Filter',
    path: '/display/filter',
  },
];

export default routesDisplay;