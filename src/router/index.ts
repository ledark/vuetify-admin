// Composables
import { createRouter, createWebHistory } from 'vue-router'
import store from '../store';
import {storeState} from '../store';
import {validateToken} from '@/http/index';

//Reinitializing store
/*
import VuexPersistence from 'vuex-persist'
import searchStore from '../store/searchStore'
import authStore from '../store/authStore'
*/

//PathGroups
import common from './common'
import tests from './tests'
import search from './search'
import auth from './auth'
import front from './front'

//Mounting
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    ...front,
    ...common,
    ...tests,
    ...search,
    ...auth,
  ],
})

async function hasValidated (token:string){ return await validateToken(token)}

router.beforeEach(async (to) => {

  if(to.name === 'login') {
    store.dispatch('authStore/doLogout', {}, { root: true });
  }
  if(to.name === 'logout') {    
    store.dispatch('authStore/doLogout', {}, { root: true });
    router.push('/login');
  }

  if(to.meta.requiresAuth) {

    let myStore: any = store.state as storeState;

    let hasValidToken = await hasValidated(myStore.authStore.userData);
    console.log('hasValidToken', hasValidToken);    
    
    if(!hasValidToken) {
      store.commit('authStore/redirect', to.path);
      router.push('/login');      
    }
  }
  if(to.meta.action && typeof to.meta.action === 'function') {
    to.meta.action();
  }
})

export default router