export default {
    namespaced: true,
    state: {
        search: localStorage.getItem('search') || '',        
    },
    actions: {
        search: (state: any, payload: any) => {
            state.search = payload;
        },
    },
    mutations: {
        search: (state: any, payload: any) => {
            state.search = payload;
        },    
    },
}    
