import FilterV from '@/views/Display/FilterV'
import DirectiveV from '@/views/Display/DirectiveV'
import SlotV from '@/views/Display/SlotV'
import StyleV from '@/views/Display/StyleV'

const displayRoute = [
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
  {
    component: StyleV,
    name: 'Style',
    path: '/display/style',
  },
];

export default displayRoute;