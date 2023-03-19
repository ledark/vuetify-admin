import {createStore} from 'vuex';
import VuexPersistence from 'vuex-persist'

import searchStore from './searchStore'
import authStore from './authStore'

const store = createStore({

    modules: {
        searchStore,
        authStore,
    },
    plugins: [new VuexPersistence().plugin]

});

export type storeState = typeof store.state

export default store;