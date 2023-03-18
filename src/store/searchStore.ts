export default {
    namespaced: true,
    state: {
        search: localStorage.getItem('search') || '',
        results: [],
    },
    actions: {
        search: (context: any, payload: any) => {
            localStorage.setItem('search', payload);
            context.commit('search', payload);
            //state.search = payload;
        },      
        results: (state: any, payload: any) => {
            state.results = payload;
        }, 
    },
    mutations: {
        search: (state: any, payload: any) => {
            state.search = payload;
        },    
        results: (state: any, payload: any) => {
            state.results = payload;
        },    
    },
}    
