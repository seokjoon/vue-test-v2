import StoreV from '@/views/Data/StoreV'

const storeRoute = [
  {
    component: StoreV,
    name: 'Store',
    path: '/data/store',
    children: [
      {
        component: StoreV,
        name: 'StoreItem',
        path: ':id',
      },
    ],
  },
];

export default storeRoute;