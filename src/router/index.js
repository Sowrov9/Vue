

import Dashboard from '@/pages/Dashboard.vue';
import NotFound from '@/pages/NotFound.vue';
import { createRouter, createWebHistory } from 'vue-router'
import Customer from '@/pages/Customer.vue';
import Department from '@/pages/department/Department.vue';
import CreateDepartment from '@/pages/department/CreateDepartment.vue';
import UpdateDepartment from '@/pages/department/UpdateDepartment.vue';



const routes = [
  { path: '/', component: Dashboard },
  {path: '/customer', component: Customer },
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