<template>
            <!-- Search Start -->
    <div class="container-fluid bg-primary mb-5 wow fadeIn" data-wow-delay="0.1s" style="padding: 35px;">
        <div class="container">
            <div class="row g-2">
                <div class="col-md-9">
                    <div class="row g-2">
                        <div class="col-md-4">
                            <input type="text" class="form-control border-0 py-3" placeholder="Search Keyword">
                        </div>
                        <div class="col-md-4">
                            <select class="form-select border-0 py-3">
                                <option hidden disabled selected>Property Type</option>
                                <option v-for="(property_type, index) in getPropertyTypes" :key="index" :value="property_type.category">{{ ucfirst(property_type.category) }}</option>
                            </select>
                        </div>
                        <div class="col-md-4">
                            <select class="form-select border-0 py-3">
                                <option hidden disabled selected>Country</option>
                                <option v-for="(country, index) in getCountries" :key="index" :value="country.country">{{ country.country }}</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="col-md-1 d-none d-sm-block">
                    <button class="btn btn-dark border-0 w-100 py-3"><i class="fa fa-cog"></i></button>
                </div>
                <div class="col-md-2 d-none d-sm-block">
                    <button class="btn btn-dark border-0 w-100 py-3">Search</button>
                </div>
            </div>
        </div>
        <div class="container my-2">
            <div class="row g-2">
                <div class="col-md-12">
                    <div class="row g-2">
                        <div class="col-md-3">
                            <select class="form-select border-0 py-3">
                                <option hidden disabled selected>Status</option>
                                <option v-for="(property_type, index) in getPropertyTypes" :key="index" :value="property_type.category">{{ ucfirst(property_type.category) }}</option>
                            </select>
                        </div>
                        <div class="col-md-3">
                            <select class="form-select border-0 py-3">
                                <option hidden disabled selected>Property Sub Type</option>
                                <option v-for="(property_type, index) in getPropertyTypes" :key="index" :value="property_type.category">{{ ucfirst(property_type.category) }}</option>
                            </select>
                        </div>
                        <div class="col-md-3">
                            <select class="form-select border-0 py-3">
                                <option hidden disabled selected>State</option>
                                <option v-for="(country, index) in getCountries" :key="index" :value="country.country">{{ country.country }}</option>
                            </select>
                        </div>
                        <div class="col-md-3">
                            <select class="form-select border-0 py-3">
                                <option hidden disabled selected>City</option>
                                <option v-for="(country, index) in getCountries" :key="index" :value="country.country">{{ country.country }}</option>
                            </select>
                        </div>
                        <div class="col-md-6" style="height: 55px">
                            <vue-range-slider v-model="value" tooltip-dir="bottom" :process-style="processStyle" :enable-cross="enableCross" :tooltip-style="tooltipStyle"  :bg-style="bgStyle" :min="min" :max="max" :formatter="formatter"></vue-range-slider>
                        </div>
                        <div class="col-md-3" >
                            <Datepicker id="date-picker" class="d-block pa-0" style="--v-calendar-datepicker-icon-color: #26c49f; --v-calendar-active-bg-color: #26c49f;  --v-calendar-input-text-color: #212529; width: 100%;" v-model="dateRange" :show-picker-inital="true" placeholder="Property Listing Date Interval" :showClearButton="showClearButton" :range="range" :circle="circle" :lang="lang" />
                        </div>
                        <div class="col-md-1 d-sm-none d-block">
                            <button class="btn btn-dark border-0 w-100 py-3"><i class="fa fa-cog"></i></button>
                        </div>
                        <div class="col-md-2  d-sm-none d-block">
                            <button class="btn btn-dark border-0 w-100 py-3">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Search End -->
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
import 'vue-range-component/dist/vue-range-slider.css';
import VueRangeSlider from 'vue-range-component';
import 'vue-datepicker-ui/lib/vuedatepickerui.css';
import VueDatepickerUi from 'vue-datepicker-ui';
export default {
    name: "Search",
    components: {
        VueRangeSlider,
        Datepicker: VueDatepickerUi
    },
    data() {
        return {
            value: [0, 10000000],
            dateRange: '',
            range: true,
            circle: true,
            showClearButton: true,
            lang: "en",
        }
    },
    computed: {
        ...mapGetters("country", ["getCountries", "getError"]),
        ...mapGetters("property_type", ["getPropertyTypes", "getError"]),
    },
    methods: {
        ...mapActions("country", ["getAllCountries"]),
        ...mapActions("property_type", ["getAllPropertyTypes"]),  
        ucfirst(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        },
    },
    created() {
        this.min = 0;
        this.max = 100000000;
        this.formatter = value => `GHc${value}`;
        this.bgStyle = {
            backgroundColor: '#f8fafc',
        };
        this.tooltipStyle = {
            backgroundColor: '#0E2E50',
            borderColor: '#0E2E50'
        };
        this.enableCross = false;
        this.processStyle = {
          backgroundColor: '#0E2E50'
        }
    },
    mounted() {
        this.getAllCountries();
        this.getAllPropertyTypes();
    }
}
</script>
<style scoped>
#date-picker >>> .input-field input {
    width: 100%;
    color: #212529;
    background-color: #f8fafc;
    border-radius: 0.25rem;
    height: 55px;
}
#date-picker >>> .input-field input::placeholder {
    color: #212529;
}

li.active {
    /* ... */
}
</style>