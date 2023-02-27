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
        path: '*',
        component: () => import(/* webpackChunkName: "users" */'../views/users/404View.vue'),
        name: 'not_found'
    }
]

export default routes;