const routes = [
    {
        path: '/',
        component: () => import(/* webpackChunkName: "users" */'../views/users/HomeView.vue'),
        name: 'home'
    },
    {
        path: '/about',
        component: () => import(/* webpackChunkName: "users" */'../views/users/AboutView.vue'),
        name: 'about'
    },
    {
        path: '/contact',
        component: () => import(/* webpackChunkName: "users" */'../views/users/ContactView.vue'),
        name: 'contact'
    },
    {
        path: '/property-agent',
        component: () => import(/* webpackChunkName: "users" */'../views/users/PropertyAgentView.vue'),
        name: 'property_agent'
    },
    {
        path: '/property-list',
        component: () => import(/* webpackChunkName: "users" */'../views/users/PropertyListView.vue'),
        name: 'property_list'
    },
    {
        path: '/property-type',
        component: () => import(/* webpackChunkName: "users" */'../views/users/PropertyTypeView.vue'),
        name: 'property_type'
    },
    {
        path: '/testimonial',
        component: () => import(/* webpackChunkName: "users" */'../views/users/TestimonialView.vue'),
        name: 'testimonial'
    },
    {
        path: '/search',
        props: true,
        component: () => import(/* webpackChunkName: "users" */'../views/users/SearchView.vue'),
        name: 'search'
    },
    {
        path: '/super',
        redirect: '/super/dashboard'
    },
    {
        path: '/super/dashboard',
        component: () => import(/* webpackChunkName: "super" */'../views/admin/DashboardView.vue'),
        name: 'super.dashboard'
    },
    {
        path: '/super/add-listing',
        component: () => import(/* webpackChunkName: "super" */'../views/admin/AddListingView.vue'),
        name: 'super.add-listing'
    },
    {
        path: '/super/agents',
        component: () => import(/* webpackChunkName: "super" */'../views/admin/AgentsView.vue'),
        name: 'super.agents'
    },
    {
        path: '/super/property-type',
        component: () => import(/* webpackChunkName: "super" */'../views/admin/PropertyTypeView.vue'),
        name: 'super.property-type'
    },
    {
        path: '/-/login',
        component: () => import(/* webpackChunkName: "private" */'../views/admin/LoginView.vue'),
        name: 'private.login'
    },
    {
        path: '/-/register',
        component: () => import(/* webpackChunkName: "private" */'../views/admin/RegisterView.vue'),
        name: 'private.register'
    },
    {
        path: '/-/reset',
        component: () => import(/* webpackChunkName: "private" */'../views/admin/ResetPasswordView.vue'),
        name: 'private.reset'
    },
    {
        path: '/super/attributes',
        component: () => import(/* webpackChunkName: "super" */'../views/admin/AttributesView.vue'),
        name: 'super.attributes'
    },
    {
        path: '/super/settings',
        component: () => import(/* webpackChunkName: "super" */'../views/admin/SettingsView.vue'),
        name: 'super.settings'
    },
    {
        path: '*',
        component: () => import(/* webpackChunkName: "users" */'../views/users/404View.vue'),
        name: 'not_found'
    }
]

export default routes;