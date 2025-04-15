

import Dashboard from '@/pages/Dashboard.vue';
import NotFound from '@/pages/NotFound.vue';
import { createRouter, createWebHistory } from 'vue-router';
import Department from '@/pages/department/Department.vue';
import CreateDepartment from '@/pages/department/CreateDepartment.vue';
import UpdateDepartment from '@/pages/department/UpdateDepartment.vue';
import Customer from '@/pages/customer/customer.vue';
import CreateCustomer from '@/pages/customer/CreateCustomer.vue';
import UpdateCustomer from '@/pages/customer/UpdateCustomer.vue';



const routes = [
  { path: '/', component: Dashboard },
  {path: '/customer', component: Customer },
  {path: '/customer/create', component: CreateCustomer },
  {path: '/customer/edit/:id', component: UpdateCustomer },
  {path: '/department', component: Department },
  {path: '/department/create', component: CreateDepartment },
  {path: '/department/edit/:id', component: UpdateDepartment },

  { path: '/:pathMatch(.*)*', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;