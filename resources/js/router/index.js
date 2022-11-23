import VueRouter from 'vue-router';
import routes from './routes';

const router = new VueRouter({
    mode: 'history',
    base: process.env.APP_URL,
    routes, 
});

export default router;