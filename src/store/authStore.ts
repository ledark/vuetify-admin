export default {
    namespaced: true,
    state: {
        isAuthenticated: false,       
    },
    actions: {
  
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