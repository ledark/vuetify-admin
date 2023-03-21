// Composables
import { createRouter, createWebHistory } from 'vue-router'
import store from '../store';

//PathGroups
import common from './common'
import tests from './tests'
import search from './search'
import auth from './auth'

//Mounting


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    ...common,
    ...tests,
    ...search,
    ...auth,
  ],
})

router.beforeEach((to) => {

  const storeState : any = store.state;
  
  if(to.name === 'login') {
    store.dispatch('authStore/doLogout', {}, { root: true });
  }
  if(to.name === 'logout') {    
    store.dispatch('authStore/doLogout', {}, { root: true });
    router.push('/login');
  }
  if(to.meta.requiresAuth) {
    if(!store.getters['authStore/hasValidToken']) {
      store.commit('authStore/redirect', to.path);
      router.push('/login');      
    }
    /*
    if(!storeState.authStore.isAuthenticated) {
      store.commit('authStore/redirect', to.path);
      router.push('/login');
    }
    */
  }
  if(to.meta.action && typeof to.meta.action === 'function') {
    to.meta.action();
  }
})

export default router
