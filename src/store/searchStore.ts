export default {
    namespaced: true,
    state: {
        search: '',
        results: [],
    },
    actions: {
        search: (context: any, payload: any) => {
            context.commit('search', payload);
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
