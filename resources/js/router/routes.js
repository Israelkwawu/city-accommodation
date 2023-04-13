const routes = [
    {
        path: '/',
        component: () => import(/* webpackChunkName: "users" */'../views/users/HomeView.vue'),
        name: 'home',
        meta:{
            middleware:"guest",
            title:`Home`
        }
    },
    {
        path: '/about',
        component: () => import(/* webpackChunkName: "users" */'../views/users/AboutView.vue'),
        name: 'about',
        meta:{
            middleware:"guest",
            title:`About`
        }
    },
    {
        path: '/contact',
        component: () => import(/* webpackChunkName: "users" */'../views/users/ContactView.vue'),
        name: 'contact',
        meta:{
            middleware:"guest",
            title:`Contact`
        }
    },
    {
        path: '/property-agent',
        component: () => import(/* webpackChunkName: "users" */'../views/users/PropertyAgentView.vue'),
        name: 'property_agent',
        meta:{
            middleware:"guest",
            title:`Property Agent`
        }
    },
    {
        path: '/property-list',
        component: () => import(/* webpackChunkName: "users" */'../views/users/PropertyListView.vue'),
        name: 'property_list',
        meta:{
            middleware:"guest",
            title:`Property List`
        }
    },
    {
        path: '/property-type',
        component: () => import(/* webpackChunkName: "users" */'../views/users/PropertyTypeView.vue'),
        name: 'property_type',
        meta:{
            middleware:"guest",
            title:`Property Type`
        }
    },
    {
        path: '/property-list/:id(\\d+)',
        props: true,
        component: () => import(/* webpackChunkName: "users" */'../views/users/PropertyDetailView.vue'),
        name: 'property_list_detail',
        meta:{
            middleware:"guest",
            title:`Property Detail`
        }
    },
    {
        path: '/testimonial',
        component: () => import(/* webpackChunkName: "users" */'../views/users/TestimonialView.vue'),
        name: 'testimonial',
        meta:{
            middleware:"guest",
            title:`Testimonial`
        }
    },
    {
        path: '/search',
        props: true,
        component: () => import(/* webpackChunkName: "users" */'../views/users/SearchView.vue'),
        name: 'search',
        meta:{
            middleware:"guest",
            title:`Search`
        }
    },
    {
        path: '/super',
        redirect: '/super/dashboard'
    },
    {
        path: '/super/dashboard',
        component: () => import(/* webpackChunkName: "super" */'../views/admin/DashboardView.vue'),
        name: 'super.dashboard',
        meta:{
            middleware:"auth",
            title:`Dashboard`
        }
    },
    {
        path: '/super/add-listing',
        component: () => import(/* webpackChunkName: "super" */'../views/admin/AddListingView.vue'),
        name: 'super.add-listing',
        meta:{
            middleware:"auth",
            title:`Add Listing`
        }
    },
    {
        path: '/super/approval',
        component: () => import(/* webpackChunkName: "super" */'../views/admin/ApprovalView.vue'),
        name: 'super.approval',
        meta:{
            middleware:"auth",
            title:`Approval`
        }
    },
    {
        path: '/super/agents',
        component: () => import(/* webpackChunkName: "super" */'../views/admin/AgentsView.vue'),
        name: 'super.agents',
        meta:{
            middleware:"auth",
            title:`Manage Agents`
        }
    },
    {
        path: '/super/property-type',
        component: () => import(/* webpackChunkName: "super" */'../views/admin/PropertyTypeView.vue'),
        name: 'super.property-type',
        meta:{
            middleware:"auth",
            title:`Property Type`
        }
    },
    {
        path: '/-/login',
        component: () => import(/* webpackChunkName: "private" */'../views/admin/LoginView.vue'),
        name: 'private.login',
        meta:{
            middleware:"guest",
            title:`Login`
        }
    },
    {
        path: '/-/register',
        component: () => import(/* webpackChunkName: "private" */'../views/admin/RegisterView.vue'),
        name: 'private.register',
        meta:{
            middleware:"guest",
            title:`Register`
        }
    },
    {
        path: '/-/reset',
        component: () => import(/* webpackChunkName: "private" */'../views/admin/ResetPasswordView.vue'),
        name: 'private.reset',
        meta:{
            middleware:"guest",
            title:`Reset`
        }
    },
    {
        path: '/super/attributes',
        component: () => import(/* webpackChunkName: "super" */'../views/admin/AttributesView.vue'),
        name: 'super.attributes',
        meta:{
            middleware:"auth",
            title:`Property Attribute`
        }
    },
    {
        path: '/super/settings',
        component: () => import(/* webpackChunkName: "super" */'../views/admin/SettingsView.vue'),
        name: 'super.settings',
        meta:{
            middleware:"auth",
            title:`Setting`
        }
    },
    {
        path: '/super/notifications',
        component: () => import(/* webpackChunkName: "super" */'../views/admin/NotificationView.vue'),
        name: 'super.notifications',
        meta:{
            middleware:"auth",
            title:`Notification`
        }
    },
    {
        path: '*',
        component: () => import(/* webpackChunkName: "users" */'../views/users/404View.vue'),
        name: 'not_found',
        meta:{
            middleware:"guest",
            title:`Not Found`
        }
    }
]

export default routes;