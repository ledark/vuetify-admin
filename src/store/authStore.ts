import router from '@/router';

export default {
    namespaced: true,
    state: {
        isAuthenticated: false,
        loginForm: {
            login: '',
            senha: '',
        },
        redirect: '',
        userData: {},
    },
    actions: {
        rememberUser: (context: any, payload: any) => {
            context.commit('loginForm', payload);
        },
        doLogout: (context: any) => {
            context.commit('isAuthenticated', false);
        },
        doLogin: (context: any, payload: any) => {
            context.commit('isAuthenticated', true);
            context.commit('userData', payload);
            if(context.state.redirect !== '') {
                router.push(context.state.redirect);
                context.commit('redirect', '');
            } else {
                router.push('/');
            }
        },
    },
    mutations: {
        loginForm: (state: any, payload: any) => {
            state.loginForm = payload;
        },     
        isAuthenticated: (state: any, payload: any) => {
            state.isAuthenticated = payload;
        },
        redirect: (state: any, path: string) => {
            if (path !== '/login' && path !== '/logout') {
                state.redirect = path;
            }
        },
        userData: (state: any, payload: any) => {
            state.userData = payload;
        },
    },
}