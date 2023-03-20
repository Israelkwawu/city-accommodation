<template>
    <div class="container-xxl bg-white p-0">
        <spinner v-if="isLoading"></spinner>
        <navbar></navbar>
        <the-header title="Property Type" page="Property Type"></the-header>
        <search></search>
        <category></category>
        <the-footer></the-footer>
        <back-to-top></back-to-top>
    </div>
</template>
<script>
import Spinner from '../../components/users/common/Spinner.vue';
import Navbar from '../../components/users/common/Navbar.vue';
import TheHeader from '../../components/users/common/TheHeader.vue';
import Search from '../../components/users/common/Search.vue';
import Category from '../../components/users/common/Category.vue';
import TheFooter from '../../components/users/common/TheFooter.vue';
import BackToTop from '../../components/users/common/BackToTop.vue';
export default {
    name: "PropertyTypeView",
 
    components: {
        Spinner,
        Navbar,
        TheHeader,
        Search,
        Category,
        TheFooter,
        BackToTop
    },
    
    data() {
        return {
            isLoading: false,
            title: process.env.MIX_APP_NAME,
            description: process.env.MIX_APP_DESCRIPTION,
        }
    },

    methods:{
        ucfirst(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        },
    },

    beforeMount() {
        this.isLoading = true;
    },

    mounted() {
        this.isLoading = false;
    },
    head: {
        // creates a title tag in header.
        title() {
            return {
                inner: this.title,
                separator: '-',
                complement: this.ucfirst(this.$route.name),
            }
        },
        meta() {
            return [
            // creates a meta description tag in header.
                { 'http-equiv': 'X-UA-Compatible', content: 'ie=edge' },
                { name: 'title', content: this.title +' - '+ this.ucfirst(this.$route.name)},
                { name: 'description', content: this.description, id: 'desc' },
                { name: 'robots', content: 'index,follow' },
                //Open Graph/Facebook
                
                { property: 'og:type', content: 'website' },
                { property: 'og:title', content: this.title +' - '+ this.ucfirst(this.$route.name) },
                { property: 'og:url', content: '' },
                { property: 'og:description', content: this.description },
                { property: 'og:image', content: require('../../../../public/img/property-6.jpg') },

                //twitter
                { property: 'twitter:card', content: 'summary_large_image' },
                { property: 'twitter:title', content: this.title +' - '+ this.ucfirst(this.$route.name) },
                { property: 'twitter:url', content: '' },
                { property: 'twitter:description', content: this.description },
                { property: 'twitter:image', content: require('../../../../public/img/property-6.jpg') },

                // Google+, LinkedIn, Pinterest, Slack
                
                { itemprop: 'name', content: this.title +' - '+ this.ucfirst(this.$route.name) },
                { itemprop: 'url', content: '' },
                { itemprop: 'description', content: this.description },
                { itemprop: 'image', content: require('../../../../public/img/property-6.jpg') },
                
            ];
        },
        // style: [
        //     { type: 'text/css', inner: 'body { background-color: #000; color: #fff}' }
        // ],
        link: [
            { rel: 'icon', href: require("../../../../public/img/icon-deal.png"), sizes: '16x16', type: 'image/png' },
            { rel: 'stylesheet', href: require("../../../../public/lib/animate/animate.css").default },
            { rel: 'stylesheet', href: require("../../../../public/lib/owlcarousel/assets/owl.carousel.min.css") },
            { rel: 'stylesheet', href: require("../../../../public/css/bootstrap.min.css") },
            { rel: 'stylesheet', href: require("../../../../public/css/style.css") },
        ],
        // script: [
        //     { type: 'text/javascript', src: 'cdn/to/script.js', async: true, body: true}, // Insert in body
        // ],
    }
}
</script>