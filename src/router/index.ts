// Composables
import { createRouter, createWebHistory } from 'vue-router'
import store from '../store';

//PathGroups
import common from './common'
import tests from './tests'
import search from './search'
import auth from './auth'

//Mounting
const routes = [
  ...common,
  ...tests,
  ...search,
  ...auth,
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach((to) => {
  if(to.name === 'login') {
    store.dispatch('authStore/doLogout', {}, { root: true });
  }
  if(to.name === 'logout') {    
    store.dispatch('authStore/doLogout', {}, { root: true });
    router.push('/login');
  }
  if(to.meta.requiresAuth) {
    if(!store.state.authStore.isAuthenticated) {
      store.commit('authStore/redirect', to.path);
      router.push('/login');
    }
  }
})

export default router
