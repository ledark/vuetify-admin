import {createStore} from 'vuex';

import searchEvent from './searchEvent'
import loginEvent from './loginEvent'

const store = createStore({

    actions: {
        ...searchEvent.actions,
        ...loginEvent.actions,
    },

    state: {
        ...searchEvent.state,
        ...loginEvent.state,
    },

    mutations: {
        ...searchEvent.mutations,
        ...loginEvent.mutations,
    },
    
});

export default store;