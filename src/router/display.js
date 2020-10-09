import FilterV from '@/views/Display/FilterV'
import DirectiveV from '@/views/Display/DirectiveV'
import SlotV from '@/views/Display/SlotV'

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
  {
    component: SlotV,
    name: 'Slot',
    path: '/display/slot',
  },
];

export default routesDisplay;