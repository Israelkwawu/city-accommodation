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
                                    <h2 class="title-1">Attributes & Features</h2>
                                
                                </div>
                            </div>
                        </div>

                        
                        <div class="row m-t-30">
                            <div class="col-md-12">
                                <!-- DATA TABLE -->
                                <div class="table-data__tool">
                                    <div class="table-data__tool-left">
                                    
                                    </div>
                                    <div class="table-data__tool-right">
                                        <button data-toggle="modal" data-target="#viewListing" class="au-btn au-btn-icon au-btn--green au-btn--small">
                                            <i class="zmdi zmdi-plus"></i>add attribute</button>
                                    
                                    </div>
                                </div>
                                
                                <div class="card">
                                    <div class="card-header">
                                        <strong>Attributes & Features </strong>
                                        
                                    </div>
                                    <div class="card-body">
                                        <button v-for="(attribute, index) in getPropertyAttribute" :key="index" type="button" class="btn btn-secondary btn-sm mr-2 mb-2">
                                            <i class="fa fa-lightbulb-o"></i>&nbsp; {{ attribute.name }}</button>
                                    </div>
                                </div>
                                <!-- /# card -->
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
            <div class="modal fade" id="viewListing" tabindex="-1" role="dialog" aria-labelledby="viewListingLabel" aria-hidden="true">
				<div class="modal-dialog modal-lg" role="document">
					<div class="modal-content">
						<div class="modal-header">
							<h5 class="modal-title" id="viewListingLabel">Attribute/Feature</h5>
							<button type="button" class="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div class="modal-body">
							<div class="card">
                                    <div class="card-header">
                                        <strong>Add Attribute Form</strong>
                                    </div>
                                    <div class="card-body card-block">
                                        <div :style="{ display: display }" :class="[ display == 'block' ? alertType:''  ]" class="sufee-alert alert with-close alert-dismissible fade show">
                                
                                            {{ message }}
                                            <button type="button" ref="close" class="close" data-dismiss="alert" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <form @submit.prevent="save" ref="form" class="form-horizontal">
                                        
                                            <div class="row form-group">
                                                <div class="col col-md-3">
                                                    <label for="text-input" class=" form-control-label">Attribute Name</label>
                                                </div>
                                                <div class="col-12 col-md-9">
                                                    <input type="text" id="text-input" v-model="name"  class="form-control">
                                                    <small v-if='$vuelidation.error("name")' class="form-text  text-danger">{{ $vuelidation.error('name') }}</small>
                                                </div>
                                            </div>
                                            <button type="submit" ref="submitBtn" hidden class="btn btn-primary">Submit</button>
                                        </form>
                                    </div>
                                
                                </div>
						</div>
						<div class="modal-footer">
							<button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
							<button type="button" @click="triggerSubmit" :disabled="processing || $vuelidation.errors()" class="btn btn-primary">{{ processing ? "Processing..." : "Submit" }}</button>
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
    name: "AttributesView",
    data() {
        return {
            app_name: process.env.MIX_APP_NAME,
            year: new Date().getFullYear(),
            name: '',
            message: '',
            alertType: '',
            display: 'none',
            processing:false,
        }
    },
    computed: {
        ...mapGetters("super_property_attribute", ["getPropertyAttribute", "getResponse", "getError"]),
    },

    methods: {
        ...mapActions("super_property_attribute", ["getAllPropertyAttribute", "savePropertyAttribute"]),  
        async save() {
            if (this.$vuelidation.valid()) {
                this.processing = true;
                try {
                    await this.savePropertyAttribute({name: this.name});
                    this.alertType = "alert-success";
                    this.message = this.getResponse.data.message;
                    this.display = 'block';

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

    mounted() {
        
        this.getAllPropertyAttribute();
    },

    vuelidation: {
        data: {
            name: {
                required: true,
            },
        },
    },
}
</script>