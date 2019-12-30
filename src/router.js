import shoplist1 from './views/a.vue';
import shoplist from './views/b.vue';

export default [
  {
    path: '/shop/list1',
    name: 'shopList1',
    component: shoplist1,
  },
  {
    path: '/shop/list',
    name: 'shopList',
    component: shoplist,
  },
];
