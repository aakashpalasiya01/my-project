import store from 'redux/store';

const authInterceptor = (config) => {
    const state = store.getState();
    if (state.auth.token) {
        config.headers.common['Authorization'] = `Token ${state.auth.token}`;
    }
    return config;
}

export default authInterceptor;