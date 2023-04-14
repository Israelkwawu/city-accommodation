<template>
    <div class="container-xxl bg-white p-0">
        <spinner v-if="isLoading"></spinner>
        <navbar></navbar>
        <the-header title="Property Detail" page="Property Detail"></the-header>
        <search></search>
        <div class="container-xxl py-2 px-5">
            <div class="container">
                <a class="back" @click="$router.go(-1)">Go Back</a>
                <div class="row g-0 gx-5 align-items-end mt-2">
                    <div class="col-lg-12">
                        <div class="text-start mx-auto mb-5 wow slideInLeft" data-wow-delay="0.1s">
                            <h1 class="mb-2">{{ getOnePropertyList.name }}</h1>
                            <p>{{ getOnePropertyList.address }}, {{ getOnePropertyList.city }}, {{ getOnePropertyList.state }}</p>
                            <p>{{ getOnePropertyList.country }}.</p>
                            <small class="text-muted">Listed {{ getOnePropertyList.created_at }}.</small>
                        </div>
                    </div>
                </div>

                <div class="bg-light rounded p-3">
                    <div class="bg-white rounded p-4" style="border: 1px dashed rgba(0, 185, 142, .3)">
                        <div class="row g-5 align-items-start">
                            <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                        
                                <div class="vueGallery">
                                    <div class="activePhoto" :style="'background-image: url('+photos[activePhoto]+');'">
                                        <button type="button" aria-label="Previous Photo" class="previous" @click="previousPhoto()">
                                            <i class="fas fa-chevron-circle-left"></i>
                                        </button>
                                        <button type="button" aria-label="Next Photo" class="next" @click="nextPhoto()">
                                            <i class="fas fa-chevron-circle-right"></i>
                                        </button>
                                    </div>
                                    <div class="thumbnails">
                                        <div
                                            v-for="(photo, index) in photos"
                                            :src="photo"
                                            :key="index"
                                            @click="activePhoto = index"
                                            :class="{'active': activePhoto == index}" :style="'background-image: url('+photo+')'">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                                <div class="mb-3">
                                    <h5 v-if="getOnePropertyList.status == 'rent'">For Rent</h5>
                                    <h5 v-else>For Sale</h5>
                                    <small class="text-muted">Listed {{ getOnePropertyList.created_at }}.</small>
                                    
                                </div>
                                <div class="bg-light rounded mb-3 py-2" style="border: 1px dashed rgba(0, 185, 142, .3)">
                                    <h3 class="">{{ getOnePropertyList.currency_symbol }} {{ getOnePropertyList.price }}</h3>
                                    <small v-if="getOnePropertyList.status == 'rent'">PER MONTH</small>
                                    <p>Property Type: {{ ucfirst(getOnePropertyList.property_type) }}</p>
                                    <p>Property Sub Type: {{ ucfirst(getOnePropertyList.sub_property_type) }}</p>
                                </div>
                                <div class="mb-3">
                                    <h2 class="mb-3">Description</h2>
                                    <p>{{ getOnePropertyList.description }}</p>
                                </div>
                                <a href="tel:+233248132216" class="btn btn-primary py-3 px-4 me-2"><i class="fa fa-phone-alt me-2"></i>Make A Call</a>
                                <a href="" class="btn btn-dark py-3 px-4"><i class="fa fa-calendar-alt me-2"></i>Get Appoinment</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row g-5 align-items-center">
            
                    <div class="col-lg-12 wow fadeIn" data-wow-delay="0.5s">
                        <h2 class="my-4">Property Features and Facilities</h2>
                    
                        <p 
                            v-for="(attribute, index) in strToObject(getOnePropertyList.attributes)"
                            :key="index"
                        ><i class="fa fa-check text-primary me-3"></i>{{ attribute }}</p>
                    </div>
                </div>
            </div>
            <!--<property-list></property-list>-->
        </div>
        <the-footer></the-footer>
        <back-to-top></back-to-top>
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
import Spinner from '../../components/users/common/Spinner.vue';
import Navbar from '../../components/users/common/Navbar.vue';
import TheHeader from '../../components/users/common/TheHeader.vue';
import Search from '../../components/users/common/Search.vue';
import Contact from '../../components/users/Contact.vue';
import PropertyList from '../../components/users/common/PropertyList.vue';
import TheFooter from '../../components/users/common/TheFooter.vue';
import BackToTop from '../../components/users/common/BackToTop.vue';
export default {
    name: "PropertyDetailView",

    props: {
        id: {
            // type: Number,
            required: true,
        }
    },

    components: {
        Spinner,
        Navbar,
        TheHeader,
        Search,
        Contact,
        TheFooter,
        BackToTop,
        PropertyList,
    },
    data() {
        return {
            isLoading: false,
            title: process.env.MIX_APP_NAME,
            description: process.env.MIX_APP_DESCRIPTION,
            activePhoto: 0,
        }
    },

    computed: {
        ...mapGetters("property_list_detail", ["getOnePropertyList", "getError"]),
        photos() {
            return this.strToObject(this.getOnePropertyList.gallery)
        }
    },


    methods:{
        ...mapActions("property_list_detail", ["getPropertyListDetail"]), 
        ucfirst(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        },
        strToObject(string) {
            return JSON.parse(string);
        },
        nextPhoto () {
            this.activePhoto = ( this.activePhoto+1 < this.photos.length ? this.activePhoto+1 : 0 )
        },
        previousPhoto () {
            this.activePhoto = ( this.activePhoto-1 >= 0 ? this.activePhoto-1 : this.photos.length-1 )
        },
    },

    async beforeMount() {
        this.isLoading = true;
    },

    mounted() {
        this.isLoading = false;
        this.getPropertyListDetail(this.id);

        this.activePhoto = 0
        document.addEventListener("keydown", (event) => {
            if (event.which == 37)
                this.previousPhoto()
            if (event.which == 39)
                this.nextPhoto()
        })
        
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
            { rel: 'stylesheet', href: require("../../../../public/lib/animate/animate.css") },
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
<style scoped>
 .back:hover {
    cursor: pointer;
 }
  
.vueGallery .activePhoto {
    width: 100%;
    margin-bottom: 5px;
    padding-bottom: 65%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border: 2px solid #fff;
    position: relative;
}
.vueGallery .activePhoto button {
    border: none;
    background-color: transparent;
    font-size: 32px;
    color: #fff;
    opacity: 0.5;
    position: absolute;
    outline: none;
    height: 100%;
}
.vueGallery .activePhoto button:hover {
    opacity: 1;
}
.vueGallery .activePhoto button.previous {
    padding: 0 1em 0 0.7em;
    left: 0;
    background: -moz-linear-gradient(left, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%);
    background: -webkit-linear-gradient(left, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%);
    background: linear-gradient(to right, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr="#80000000", endColorstr="#00000000",GradientType=1 );
}
.vueGallery .activePhoto button.next {
    padding: 0 0.7em 0 1em;
    right: 0;
    background: -moz-linear-gradient(left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%);
    background: -webkit-linear-gradient(left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%);
    background: linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr="#00000000", endColorstr="#80000000",GradientType=1 );
}
.vueGallery .thumbnails {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    grid-gap: 5px;
}
.vueGallery .thumbnails div {
    width: 100%;
    border: 2px solid #fff;
    outline: 2px solid #fff;
    cursor: pointer;
    padding-bottom: 65%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 1;
}
.vueGallery .thumbnails div:hover {
    opacity: 0.6;
}
.vueGallery .thumbnails div.active {
    outline-color: #5c4084;
    opacity: 1;
}
</style>
