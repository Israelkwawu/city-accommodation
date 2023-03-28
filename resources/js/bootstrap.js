window._ = require('lodash');

try {
    require('bootstrap');
} catch (e) {}

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

window.axios.defaults.withCredentials = true;

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

import Echo from 'laravel-echo';
import store from './store/index';

window.Pusher = require('pusher-js');

window.Echo = new Echo({
    broadcaster: 'pusher',
    key: process.env.MIX_ABLY_PUBLIC_KEY,
    wsHost: 'realtime-pusher.ably.io',
    wsPort: 443,
    disableStats: true,
    encrypted: true,
    cluster: 'eu',
    // authEndpoint: 'api/broadcasting/auth',
    auth: {
        headers: {
            Accept: 'application/json',
            Authorization: 'Bearer '+store.getters['authentication/getAuthToken'],
            // 'X-CSRF-Token': "CSRF_TOKEN"
        }
    },
});

const admin_id = store.getters['authentication/user'].id;
window.Echo.private('App.Models.Admin.' + admin_id)
.notification((notification) => {
    console.log(notification);
});