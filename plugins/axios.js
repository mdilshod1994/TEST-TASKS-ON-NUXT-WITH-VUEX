export default function ({ $axios, store }) {
    $axios.onRequest((config) => {
        if (store.getters['auth/GET_TOKEN']) {
            // config.headers.common['Authorization'] = `Bearer ${store.getters['auth/GET_TOKEN']}`
            config.headers.Authorization = 'Bearer ' + store.getters['auth/GET_TOKEN'];
        }
        return config;
    })
}