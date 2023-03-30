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
                                    <h2 class="title-1">Settings</h2>
                                   
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
                                        <button  data-toggle="modal" data-target="#addListing" class="au-btn au-btn-icon au-btn--green au-btn--small">
                                            <i class="zmdi zmdi-upload"></i>upload profile</button>
                                    </div>
                                </div>
                                <div class="table-responsive table-responsive-data2">
                                
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
   <!-- modal small -->
			<!--<div class="modal fade" id="upload" tabindex="-1" role="dialog" aria-labelledby="uploadLabel" aria-hidden="true">
				<div class="modal-dialog modal-md" role="document">
					<div class="modal-content">
						<div class="modal-header">
							<h5 class="modal-title" id="uploadLabel">Upload Image</h5>
							<button type="button" class="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div class="modal-body">
                            <div :style="{ display: displayUpload }" :class="[ displayUpload == 'block' ? alertType:''  ]" class="sufee-alert alert with-close alert-dismissible fade show">
                                
                                {{ message }}
                                <button type="button" ref="close" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
							<form @submit.prevent="upload" class="form-horizontal">
                            
                                <div class="row">
                                    <div class="col-md-3"></div>
                                    <div class="col-md-9"><small class="form-text  text-danger">Image should be less or equal to 10MB</small><br></div>
                                </div>
                                <div class="row form-group">
                                    <div class="col col-md-3">
                                        <label for="file-input" class=" form-control-label">Select Image</label>
                                    </div>
                                    <div class="col-12 col-md-9">
                                        <input type="file" ref="file" accept="image/*" @change="selectFile" name="file-input" class="form-control-file">
                                        <small v-if="wrongImage" class="form-text  text-danger">Wrong image format</small>
                                    </div>
                                </div>
                                <button ref="uploadBtn" hidden type="submit">Upload</button>
                            </form>
						</div>
						<div class="modal-footer">
							<button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
							<button @click="triggerUpload" type="button" :disabled="processing" class="btn btn-primary">{{ processing ? "Processing..." : "Upload" }}</button>
						</div>
					</div>
				</div>
			</div>
			 end modal small -->
    
    </div>
</template>
<script>
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
    name: "PropertyTypeView",
    data() {
        return {
            app_name: process.env.MIX_APP_NAME,
            year: new Date().getFullYear(),
        }
    }
}
</script>