<template>
         <div  class="page-wrapper">
        <the-mobile-header></the-mobile-header>
        <the-side-bar></the-side-bar>
        <!-- PAGE CONTAINER-->
        <div class="page-container">
            <!-- HEADER DESKTOP-->
            <the-desktop-header></the-desktop-header>
            <!-- HEADER DESKTOP-->

            <!-- MAIN CONTENT-->
            <div class="main-content">
                <div class="section__content section__content--p30">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="overview-wrap">
                                    <h2 class="title-1">Listings</h2>
                                
                                </div>
                            </div>
                        </div>

                        
                        <div class="row m-t-30">
                            <div class="col-md-12">
                                <!-- DATA TABLE -->
                                <div class="table-data__tool">
                                    <div class="table-data__tool-left">
                                        <div class="rs-select2--light rs-select2--md">
                                            <select class="js-select2" name="property">
                                                <option selected="selected">All Properties</option>
                                                <option value="">Option 1</option>
                                                <option value="">Option 2</option>
                                            </select>
                                            <div class="dropDownSelect2"></div>
                                        </div>
                                        <div class="rs-select2--light rs-select2--sm">
                                            <select class="js-select2" name="time">
                                                <option selected="selected">Today</option>
                                                <option value="">3 Days</option>
                                                <option value="">1 Week</option>
                                            </select>
                                            <div class="dropDownSelect2"></div>
                                        </div>
                                        <button class="au-btn-filter">
                                            <i class="zmdi zmdi-filter-list"></i>filters</button>
                                    </div>
                                    <div class="table-data__tool-right">
                                        <button  data-toggle="modal" data-target="#addListing" class="au-btn au-btn-icon au-btn--green au-btn--small">
                                            <i class="zmdi zmdi-plus"></i>add listing</button>
                                    
                                    </div>
                                </div>
                                <div class="table-responsive table-responsive-data2">
                                    <table class="table table-data2">
                                        <thead>
                                            <tr>
                                                <th>
                                                    <label class="au-checkbox">
                                                        <input type="checkbox">
                                                        <span class="au-checkmark"></span>
                                                    </label>
                                                </th>
                                                <th>listing name</th>
                                                <th>property type</th>
                                                <th>country</th>
                                                <th>status</th>
                                                <th>price</th>
                                                <th>active</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="tr-shadow" v-for="(property , index) in getPropertyList.data" :key="index">
                                                <td>
                                                    <label class="au-checkbox">
                                                        <input type="checkbox">
                                                        <span class="au-checkmark"></span>
                                                    </label>
                                                </td>
                                                <td>{{ property.name }}</td>
                                                <td>
                                                    {{ property.property_type }}
                                                </td>
                                                <td>
                                                    {{ property.country }}
                                                </td>
                                                <td>
                                                    {{ property.status }}
                                                </td>
                                                <td>
                                                    {{ property.currency_symbol }}{{ property.price }}
                                                </td>
                                                <td>
                                                    <span :class="property.active?'status--process':'status--denied'">{{ !!property.active }}</span>
                                                </td>
                                                <td>
                                                    <div class="table-data-feature">
                                                        <button class="item"  data-toggle="modal" data-target="#viewListing"  data-placement="top" title="View">
                                                            <i class="zmdi zmdi-eye"></i>
                                                        </button>
                                                        <button class="item"  data-toggle="modal" data-target="#mediumModal" data-placement="top" title="Edit">
                                                            <i class="zmdi zmdi-edit"></i>
                                                        </button>
                                                        <button class="item"  data-toggle="modal" data-target="#mediumModal" data-placement="top" title="Upload">
                                                            <i class="zmdi zmdi-upload"></i>
                                                        </button>
                                                        <button class="item"  data-toggle="modal" data-target="#mediumModal" data-placement="top" title="Delete">
                                                            <i class="zmdi zmdi-delete"></i>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr class="spacer"></tr>
                                        </tbody>
                                    </table>
                                </div>
                                <!-- END DATA TABLE -->
                            </div>
                        </div>
                
                        <div class="row">
                            <div class="col-md-12">
                                <div class="copyright">
                                    <p>Copyright © {{ year }} {{ app_name }}. All rights reserved.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- END MAIN CONTENT-->
            <!-- END PAGE CONTAINER-->
        </div>

        
			<!-- modal medium -->
			<div class="modal fade" id="addListing" tabindex="-1" role="dialog" aria-labelledby="addListingLabel" aria-hidden="true">
				<div class="modal-dialog modal-lg" role="document">
					<div class="modal-content">
						<div class="modal-header">
							<h5 class="modal-title" id="addListingLabel">Add Listing</h5>
							<button type="button" class="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div class="modal-body">
                            <div class="card">
                                    <div class="card-header">
                                        <strong>Add Listing Form</strong>
                                    </div>
                                    <div class="card-body card-block">
                                        <div :style="{ display: display }" :class="[ display == 'block' ? alertType:''  ]" class="sufee-alert alert with-close alert-dismissible fade show">
                                            
                                            {{ message }}
                                            <button type="button" ref="close" class="close" data-dismiss="alert" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <form @submit.prevent="save" class="form-horizontal">
                                        
                                            <div class="row form-group">
                                                <div class="col col-md-3">
                                                    <label for="text-input" class=" form-control-label">Property Name</label>
                                                </div>
                                                <div class="col-12 col-md-9">
                                                    <input type="text" id="text-input" v-model="name" class="form-control">
                                                    <small v-if='$vuelidation.error("name")' class="form-text  text-danger">{{ $vuelidation.error('name') }}</small>
                                                </div>
                                            </div>
                                            
                                            <div class="row form-group">
                                                <div class="col col-md-3">
                                                    <label for="select" class=" form-control-label">Property Type</label>
                                                </div>
                                                <div class="col-12 col-md-9">
                                                    <select v-model="property_type" class="form-control">
                                                        <option selected hidden disabled value="0">Please select</option>
                                                        <option v-for="(property_type, index) in getPropertyTypes" :key="index" :value="property_type.category">{{ ucfirst(property_type.category) }}</option>
                                                    </select>
                                                    <small v-if='$vuelidation.error("property_type")' class="form-text  text-danger">{{ $vuelidation.error('property_type') }}</small>
                                                </div>
                                            </div>
                                            
                                            <div class="row form-group">
                                                <div class="col col-md-3">
                                                    <label for="select" class=" form-control-label">Sub Property Type</label>
                                                </div>
                                                <div class="col-12 col-md-9">
                                                    <select v-model="sub_property_type" class="form-control">
                                                        <option selected hidden disabled>Please select</option>
                                                        <optgroup  v-for="(property_type, index) in getPropertyTypes" :key="index" :label="ucfirst(property_type.category)">
                                                            <option v-for="(sub_property_type, ind) in strToObject(property_type.subcategories)" :key="ind" :value="sub_property_type" >{{ ucfirst(sub_property_type) }}</option>
                                                        </optgroup>
                                                    </select>
                                                    <small v-if='$vuelidation.error("sub_property_type")' class="form-text  text-danger">{{ $vuelidation.error('sub_property_type') }}</small>
                                                </div>
                                            </div>
                                            <div class="row form-group">
                                                <div class="col col-md-3">
                                                    <label class=" form-control-label">Property Status</label>
                                                </div>
                                                <div class="col col-md-9">
                                                    <div class="form-check-inline form-check">
                                                        <label for="inline-radio1" class="form-check-label ">
                                                            <input type="radio" id="inline-radio1" v-model="status" value="buy" class="form-check-input"> Buy &nbsp;
                                                        </label>
                                                        <label for="inline-radio2" class="form-check-label ">
                                                            <input type="radio" id="inline-radio2" v-model="status" value="sell" class="form-check-input"> Sell &nbsp;
                                                        </label>
                                                        <label for="inline-radio3" class="form-check-label ">
                                                            <input type="radio" id="inline-radio3" v-model="status" value="rent" class="form-check-input"> Rent &nbsp;
                                                        </label>
                                                    </div>
                                                    <small v-if='$vuelidation.error("status")' class="form-text  text-danger">{{ $vuelidation.error('status') }}</small>
                                                </div>
                                            </div>
                                            <div class="row form-group">
                                                <div class="col col-md-3">
                                                    <label for="text-input" class=" form-control-label">Property Price</label>
                                                </div>
                                                <div class="col-12 col-md-9">
                                                    <input type="number" v-model="price" class="form-control">
                                                    <small v-if='$vuelidation.error("price")' class="form-text  text-danger">{{ $vuelidation.error('price') }}</small>
                                                </div>
                                            </div>
                                            
                                            <div class="row form-group">
                                                <div class="col col-md-3">
                                                    <label for="select" class=" form-control-label">Country</label>
                                                </div>
                                                <div class="col-12 col-md-9">
                                                    <select @change="extractState($event.target.value)" v-model="country" class="form-control">
                                                        <option selected hidden disabled>Please select</option>
                                                        <option v-for="(country, index) in getCountries" :key="index" :value="country.country">{{ country.country }}</option>
                                                    </select>
                                                    <small v-if='$vuelidation.error("country")' class="form-text  text-danger">{{ $vuelidation.error('country') }}</small>
                                                </div>
                                            </div>

                                            <div class="row form-group">
                                                <div class="col col-md-3">
                                                    <label for="select" class=" form-control-label">State/Region</label>
                                                </div>
                                                <div class="col-12 col-md-9">
                                                    <select  @change="extractCity($event.target.value)" v-model="state" class="form-control">
                                                        <option selected hidden disabled>Please select</option>
                                                        <option v-for="(state, index) in states" :key="index" :value="state.name">{{ ucfirst(state.name) }}</option>
                                                    </select>
                                                    <small v-if='$vuelidation.error("state")' class="form-text  text-danger">{{ $vuelidation.error('state') }}</small>
                                                </div>
                                            </div>

                                            <div class="row form-group">
                                                <div class="col col-md-3">
                                                    <label for="select" class=" form-control-label">City</label>
                                                </div>
                                                <div class="col-12 col-md-9">
                                                    <select v-model="city" class="form-control">
                                                        <option selected hidden disabled>Please select</option>
                                                        <option v-for="(city, index) in cities" :key="index" :value="city.name">{{ ucfirst(city.name) }}</option>
                                                    </select>
                                                    <small v-if='$vuelidation.error("city")' class="form-text  text-danger">{{ $vuelidation.error('city') }}</small>
                                                </div>
                                            </div>
                                            <div class="row form-group">
                                                <div class="col col-md-3">
                                                    <label for="text-input" class=" form-control-label">Property Address</label>
                                                </div>
                                                <div class="col-12 col-md-9">
                                                    <input type="text" id="text-input" v-model="address" class="form-control">
                                                    <small v-if='$vuelidation.error("address")' class="form-text  text-danger">{{ $vuelidation.error('address') }}</small>
                                                </div>
                                            </div>
                                            <div class="row form-group">
                                                <div class="col col-md-3">
                                                    <label for="multiple-select" class=" form-control-label">Attributes/Features</label>
                                                </div>
                                                <div class="col col-md-9">
                                                    <select v-model="attributes" id="multiple-select" multiple class="form-control">
                                                        <option v-for="(attribute, index) in getPropertyAttribute" :key="index" :value="attribute.name">{{ attribute.name }}</option>
                                                    </select>
                                                    <small v-if='$vuelidation.error("attributes")' class="form-text  text-danger">{{ $vuelidation.error('attributes') }}</small>
                                                </div>
                                            </div>
                                            <div class="row form-group">
                                                <div class="col col-md-3">
                                                    <label for="textarea-input" class=" form-control-label">Property Description</label>
                                                </div>
                                                <div class="col-12 col-md-9">
                                                    <textarea v-model="description" id="textarea-input" rows="4" class="form-control"></textarea>
                                                    <small v-if='$vuelidation.error("description")' class="form-text  text-danger">{{ $vuelidation.error('description') }}</small>
                                                </div>
                                            </div>
                                            <button type="submit" ref="submitBtn" hidden class="btn btn-primary">Submit</button>
                                    
                                        </form>
                                    </div>
                                </div>
						</div>
						<div class="modal-footer">
							<button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
							<button type="button"  @click="triggerSubmit" :disabled="processing || $vuelidation.errors()" class="btn btn-primary">{{ processing ? "Processing..." : "Submit" }}</button>
						</div>
					</div>
				</div>
			</div>
			<!-- end modal medium -->

            <!-- modal medium -->
			<div class="modal fade" id="viewListing" tabindex="-1" role="dialog" aria-labelledby="viewListingLabel" aria-hidden="true">
				<div class="modal-dialog modal-lg" role="document">
					<div class="modal-content">
						<div class="modal-header">
							<h5 class="modal-title" id="viewListingLabel">View Listing</h5>
							<button type="button" class="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div class="modal-body">
							<p>
								There are three species of zebras: the plains zebra, the mountain zebra and the Grévy's zebra. The plains zebra and the mountain
								zebra belong to the subgenus Hippotigris, but Grévy's zebra is the sole species of subgenus Dolichohippus. The latter
								resembles an ass, to which it is closely related, while the former two are more horse-like. All three belong to the
								genus Equus, along with other living equids.
							</p>
						</div>
						<div class="modal-footer">
							<button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
							<button type="button" class="btn btn-primary">Confirm</button>
						</div>
					</div>
				</div>
			</div>
			<!-- end modal medium -->

    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import TheMobileHeader from '../../components/admin/common/TheMobileHeader.vue';
import TheDesktopHeader from '../../components/admin/common/TheDesktopHeader.vue';
import TheSideBar from '../../components/admin/common/TheSideBar.vue';
import TheFooter from '../../components/admin/common/TheFooter.vue';
export default {
    components: {
        TheMobileHeader,
        TheDesktopHeader,
        TheSideBar,
        TheFooter,
    },
    name: "AddListingView",
    data() {
        return {
            app_name: process.env.MIX_APP_NAME,
            year: new Date().getFullYear(),
            name: "",
            property_type: "",
            sub_property_type: "",
            status: "",
            currency: "",
            currency_symbol: "",
            price: 0.00,
            address: "",
            country: "",
            state: "",
            city: "",
            attributes: [],
            description:"",
            states: [],
            cities: [],
            message: '',
            alertType: '',
            display: 'none',
            processing:false,
        }
    },
    computed: {
        ...mapGetters("country", ["getCountries", "getError"]),
        ...mapGetters("property_type", ["getPropertyTypes", "getError"]),
        ...mapGetters("super_property_attribute", ["getPropertyAttribute", "getError"]),
        ...mapGetters("super_property_list", ["getPropertyList", "getResponse", "getError"]),
    },
    methods: {
        ...mapActions("country", ["getAllCountries"]),
        ...mapActions("property_type", ["getAllPropertyTypes"]),  
        ...mapActions("super_property_attribute", ["getAllPropertyAttribute"]),
        ...mapActions("super_property_list", ["getAllPropertyList",  "savePropertyList"]),
        ucfirst(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        },
        strToObject(string) {
            return JSON.parse(string);
        },
        extractState(country) {
            let selectedCountry = this.getCountries.find(countryObj => countryObj.country == country);
            this.currency = selectedCountry.currency_name;
            this.currency_symbol = selectedCountry.currency_symbol;
            this.states = [ ...this.strToObject(selectedCountry.states_cities) ];
            this.selectedCountry = selectedCountry.country;
        },
        extractCity(state) {
            let selectedState = this.states.find(stateObj => stateObj.name == state);
            this.cities = [ ...selectedState.cities ];
            this.state = selectedState.name;
        },
        getSelectedCity(city) {
            this.city = city;
        },
        extractSubPropertyType(property_type) {
            let selectedProperty = this.getPropertyTypes.find(properTypeObj => properTypeObj.category == property_type);
            this.subPropertyTypes = [ ...this.strToObject(selectedProperty.subcategories) ];
            this.selectedProperty = selectedProperty.category;
        },
        async save() {
            if (this.$vuelidation.valid()) {
                this.processing = true;
                try {
                    await this.savePropertyList({
                        name: this.name,
                        property_type: this.property_type,
                        sub_property_type: this.sub_property_type,
                        status: this.status,
                        currency: this.currency,
                        currency_symbol: this.currency_symbol,
                        price: Number(this.price).toFixed(2),
                        address: this.address,
                        country: this.country,
                        state: this.state,
                        city: this.city,
                        attributes: JSON.stringify(this.attributes),
                        description:this.description,
                        active: false,
                    });
                    this.alertType = "alert-success";
                    this.message = this.getResponse.data.message;
                    this.display = 'block';

                    this.name = '';
                    this.property_type = '';
                    this.sub_property_type = '';
                    this.status = '';
                    this.currency = '';
                    this.currency_symbol = '';
                    this.price = '';
                    this.address = '';
                    this.country = '';
                    this.state = '';
                    this.city = '';
                    this.attributes = [];
                    this.description = '';
                        

                } catch ({ response }) {
                    this.alertType = "alert-danger";
                    this.message = response;
                    this.display = 'block';
                } finally {
                    this.processing = false;
                }
                
            }
        },

        triggerSubmit() {
            this.$refs.submitBtn.click();
        }
    
    },
    created() {
    
    },
    mounted() {
        this.getAllCountries();
        this.getAllPropertyTypes();
        this.getAllPropertyAttribute();
        this.getAllPropertyList();
    },
    vuelidation: {
        data: {
            name: {
                required: true,
            },
            property_type: {
                required: true,
            },
            sub_property_type: {
                required: true,
            },
            status: {
                required: true,
            },
            currency: {
                required: true,
            },
            currency_symbol: {
                required: true,
            },
            price: {
                required: true,
                // decimal: true,
            },
            address: {
                required: true,
            },
            country: {
                required: true,
            },
            state: {
                required: true,
            },
            city: {
                required: true,
            },
            attributes: {
                required: true,
            },
            description:{
                required: true,
            },
        },
    },
}
</script>