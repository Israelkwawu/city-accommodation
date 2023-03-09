import VueRouter from 'vue-router';
import routes from './routes';
import store from '../store/index';

const router = new VueRouter({
    mode: 'history',
    base: process.env.APP_URL,
    routes, 
});

router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title} - ${process.env.MIX_APP_NAME}`
    if(to.meta.middleware=="guest"){
        if(store.state.authentication.authenticated){
            next({name:"super.dashboard"})
        }
        next()
    }else{
        if(store.state.authentication.authenticated){
            next()
        }else{
            next({name:"private.login"})
        }
    }
})

export default router;