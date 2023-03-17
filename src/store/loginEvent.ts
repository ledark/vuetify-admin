export default {
    namespaced: true,
    state: {
        isAuthenticated: false,       
    },
    actions: {
        search: (context: any, payload: any) => {
            console.log('search event', context, payload);
            localStorage.setItem('search', payload);
            context.commit('search', payload);
            //state.search = payload;
        },        
    },
    mutations: {
        doLogin: (state: any) => {
            state.isAuthenticated = true;
        },
        doLogout: (state: any) => {
            state.isAuthenticated = false;
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            localStorage.removeItem('pwd');
        },
    },
}