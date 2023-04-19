<template>
    <div class="container-xxl bg-white p-0">
        <spinner v-if="isLoading"></spinner>
        <navbar></navbar>
        <the-header title="Search Result" page="Search"></the-header>
        <search @request="onRequest"></search>
        <no-results-found v-if="isNoResultsFound" :search_term="search_term"></no-results-found>
        <div class="container">
            <div class="row g-4">
                <div v-for="(result ,index) in results" :key="index" class="col-lg-4 col-md-6 wow fadeInUp" :data-wow-delay="(index%3) == 0 ?'0.1s':(index%3) == 1 ?'0.3s':(index%3) == 2?'0.5s':''">
                    <div class="property-item rounded overflow-hidden">
                        <div class="position-relative overflow-hidden">
                            <a  @click.prevent="redirect(result.id)"><img class="img-fluid" :src="getFirstImage( result.gallery )" :alt="result.name"></a>
                            <div class="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For {{ ucfirst( result.status ) }}</div>
                            <div class="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">{{ ucfirst( result.sub_property_type ) }}</div>
                        </div>
                        <div class="p-4 pb-0">
                            <h5 class="text-primary mb-3">{{ result.currency_symbol }} {{ formatMoney( result.price ) }}</h5>
                            <a class="d-block h5 mb-2"  @click.prevent="redirect(result.id)">{{ result.name }}</a>
                            <p><i class="fa fa-map-marker-alt text-primary me-2"></i>{{ result.address }}</p>
                        </div>
                        <div class="d-flex border-top">
                            <small class="flex-fill text-center border-end py-2"><i class="fa fa-ruler-combined text-primary me-2"></i>1000 Sqft</small>
                            <small class="flex-fill text-center border-end py-2"><i class="fa fa-bed text-primary me-2"></i>3 Bed</small>
                            <small class="flex-fill text-center py-2"><i class="fa fa-bath text-primary me-2"></i>2 Bath</small>
                        </div>
                    </div>
                </div>
                <div class="col-12 text-center wow fadeInUp" data-wow-delay="0.1s">
                    <a v-if="getNextCursor" class="btn btn-primary py-3 px-5" @click="browseMoreSearchResults()" href="javascript:void(0)">Browse More Property</a>
                    <span v-else class="text-primary py-5 px-5">--END--</span>
                </div>
            </div>
        </div>
    
        <the-footer></the-footer>
        <back-to-top></back-to-top>
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
import ListingBuilder from '../../services/ListingBuilder';
import Spinner from '../../components/users/common/Spinner.vue';
import Navbar from '../../components/users/common/Navbar.vue';
import TheHeader from '../../components/users/common/TheHeader.vue';
import Search from '../../components/users/common/Search.vue';
import TheFooter from '../../components/users/common/TheFooter.vue';
import BackToTop from '../../components/users/common/BackToTop.vue';
import NoResultsFound from '../../components/users/NoResultsFound.vue';
export default {
    name: "SearchView",

    props: [
        "name",
        "property_type",
        "sub_property_type",
        "status",
        "price",
        "country",
        "state",
        "city",
        "created_at"
    ],

    components: {
        Spinner,
        Navbar,
        TheHeader,
        Search,
        TheFooter,
        BackToTop,
        NoResultsFound
    },

    data() {
        return {
            isLoading: false,
            results: [],
            request: {},
            isRequest: false,
            isNoResultsFound: false,
            search_term: '',
        }
    },

    computed: {
        ...mapGetters("search", ["getSearchResults", "getNextPageUrl", "getNextCursor", "getError"]),
    },

    watch: {
        getSearchResults(newlyFetchedSearchResults) {
            this.results.push(...newlyFetchedSearchResults);
        }
    },

    methods: {
        ...mapActions("search", ["search"]),  

        async browseMoreSearchResults() {
            const BuildRequest = new ListingBuilder(this.request);

            BuildRequest.hasName()
            .hasCity()
            .hasCountry()
            .hasCreatedAt()
            .hasPrice()
            .hasPropertyType()
            .hasState()
            .hasStatus()
            .hasSubPropertyType();

            let input = BuildRequest.build();
            let payload = {
                next_cursor: this.getNextCursor,
                request: input
            };
            this.isLoading = true;
            await this.search(payload);
            this.isLoading = false;
        },
        formatMoney(num) {
            return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },
        getFirstImage(gallery) {
            return JSON.parse(gallery)[0];
        },
        ucfirst(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        },
        onRequest(payload) {
            this.isRequest = true;
            this.request = { ...payload };
            this.onPageSearch(this.request);
        },
        async onPageSearch(request) {
            const BuildRequest = new ListingBuilder(request);

            BuildRequest.hasName()
            .hasCity()
            .hasCountry()
            .hasCreatedAt()
            .hasPrice()
            .hasPropertyType()
            .hasState()
            .hasStatus()
            .hasSubPropertyType();

            let input = BuildRequest.build();
            let payload = {
                next_cursor: null,
                request: input
            };

            this.search_term = input.name;
            this.isLoading = true;
            await this.search(payload);
            this.results = [ ...this.getSearchResults ];
            this.isLoading = false;
            if (this.results.length == 0) {
                this.isNoResultsFound = true;
            }else{
                this.isNoResultsFound = false;
            }
        },

        async outPageSearch() {
            if (!this.isRequest) {
                this.request = { ...this.$props };  
            }
            
            const BuildRequest = new ListingBuilder(this.request);

            BuildRequest.hasName()
            .hasCity()
            .hasCountry()
            .hasCreatedAt()
            .hasPrice()
            .hasPropertyType()
            .hasState()
            .hasStatus()
            .hasSubPropertyType();

            let input = BuildRequest.build();
            let payload = {
                next_cursor: null,
                request: input
            };
            await this.search(payload);
            this.results = [ ...this.getSearchResults ];
        },

        redirect(param) {
            this.$router.push({
                name:'property_list_detail',
                params: { id: param }
            })
        }
    },
    async mounted() {
        this.isLoading = true;
        await this.outPageSearch();
        this.isLoading = false;
        this.isNoResultsFound = false;
        if (this.results.length == 0) {
            this.isNoResultsFound = true;
            this.search_term = this.name;
        }else{
            this.isNoResultsFound = false;
        }
    }
}
</script>