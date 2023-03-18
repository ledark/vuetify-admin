import {createStore} from 'vuex';

import searchStore from './searchStore'
import authStore from './authStore'

const store = createStore({

    modules: {
        searchStore,
        authStore,
    }

});

export default store;