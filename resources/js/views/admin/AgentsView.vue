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
                                    <h2 class="title-1">Manage Agents</h2>
                                </div>
                            </div>
                        </div>
                        
                        <div class="row m-t-30">
                            <div class="col-md-12">
                                <!-- DATA TABLE -->
                        
                                <div class="table-data__tool">
                                    <div class="table-data__tool-left">
                                        <div class="rs-select2--light rs-select2--md">
                                        
                                        </div>
                                    </div>
                                    <div class="table-data__tool-right">
                                    
                                    
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
                                                <th>name</th>
                                                <th>email</th>
                                                <th>phone</th>
                                                <th>role</th>
                                                <th>status</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="tr-shadow"  v-for="(agent , index) in getAgents.data" :key="index">
                                                <td>
                                                    <label class="au-checkbox">
                                                        <input type="checkbox">
                                                        <span class="au-checkmark"></span>
                                                    </label>
                                                </td>
                                                <td>{{ ucfirst(agent.name) }}</td>
                                                <td>
                                                    <span class="block-email">{{ agent.email }}</span>
                                                </td>
                                                <td>
                                                    <span class="block-email">{{ agent.phone }}</span>
                                                </td>
                                                <td class="desc">{{ agent.role ? ucfirst(agent.role): '' }}</td>
                                                <td>
                                                    <span  :class="agent.approved?'status--process':'status--denied'">{{ agent.approved?'Approved': 'Not Approved' }}</span>
                                                </td>
                                                <td>
                                                    <div v-if="agent.role != 'admin'" class="table-data-feature">
                                                    
                                                        <button class="item" v-if="role == 'admin' || role == 'manager'" @click="getPropertyId(agent.id)"  data-target="#settingModal" data-toggle="modal" data-placement="top" title="Role">
                                                            <i class="zmdi zmdi-settings"></i>
                                                        </button>
                                                        <button class="item" @click="getPropertyId(agent.id)"  data-target="#viewAgent" data-toggle="modal" data-placement="top" title="View">
                                                            <i class="zmdi zmdi-eye"></i>
                                                        </button>
                                                        <button class="item" v-if="role == 'admin' || role == 'manager'" @click="getPropertyId(agent.id)" data-target="#deleteModal" data-toggle="modal" data-placement="top" title="Delete">
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
                                <br><br>
                                <nav v-if="Object.keys(paginate).length != 0" aria-label="Page navigation example">
                                    <ul class="pagination justify-content-center">
                                        <li  :class="{'disabled':paginate.prev.url==null }" class="page-item">
                                            <a class="page-link" @click="getAllAgents(paginationPath(paginate.prev.url))" href="#" tabindex="-1" aria-disabled="true">{{ paginate.prev.label }}</a>
                                        </li>
                                        <li v-for="(link , index) in paginate.inner" :key="index" :class="{'active': link.active}" :aria-current="link.active?'page':''" class="page-item"><a class="page-link" @click="getAllAgents(paginationPath(link.url))" href="#">{{ link.label }}</a></li>
                                        <li  :class="{'disabled':paginate.next.url==null }" class="page-item">
                                            <a class="page-link"  @click="getAllAgents(paginationPath(paginate.next.url))" href="#">{{ paginate.next.label }}</a>
                                        </li>
                                    </ul>
                                </nav>
                                <br><br>
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

            <!-- modal static -->
			<div class="modal fade" id="deleteModal" tabindex="-1" role="dialog" aria-labelledby="deleteModalLabel" aria-hidden="true" data-backdrop="static">
				<div class="modal-dialog modal-sm" role="document">
					<div class="modal-content">
						<div class="modal-header">
							<h5 class="modal-title" id="deleteModalLabel">Delete Agent</h5>
							<button type="button" class="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div class="modal-body">
                            <div :style="{ display: displayDelete }" :class="[ displayDelete == 'block' ? alertType:''  ]" class="sufee-alert alert with-close alert-dismissible fade show">
                                
                                {{ message }}
                                <button type="button" ref="close" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
							Are you sure you want to delete this agent?
						</div>
						<div class="modal-footer">
							<button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
							<button type="button" @click="deleteAdmin" class="btn btn-danger" :disabled="processing">{{ processing ? "Processing..." : "Delete" }}</button>
						</div>
					</div>
				</div>
			</div>
			<!-- end modal static -->

            <!-- modal static -->
			<div class="modal fade" id="settingModal" tabindex="-1" role="dialog" aria-labelledby="settingModalLabel" aria-hidden="true" data-backdrop="static">
				<div class="modal-dialog modal-sm" role="document">
					<div class="modal-content">
						<div class="modal-header">
							<h5 class="modal-title" id="settingModalLabel">Permission Settings</h5>
							<button type="button" class="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div class="modal-body">
                            <div :style="{ display: displaySetting }" :class="[ displaySetting == 'block' ? alertType:''  ]" class="sufee-alert alert with-close alert-dismissible fade show">
                                
                                {{ message }}
                                <button type="button" ref="close" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <form action="" method="post" class="form-horizontal">
                                        
                                            <div class="row form-group">
                                                <div class="col col-md-3">
                                                    <label for="selectSm" class=" form-control-label">Role</label>
                                                </div>
                                                <div class="col-12 col-md-9">
                                                    <select name="selectSm" id="SelectLm" @change="updateRole($event, adminID)" v-model="setRole" class="form-control-sm form-control">
                                                        <option  hidden disabled selected>Please select</option>
                                                        <option v-if="role == 'admin'" value="admin">Admin</option>
                                                        <option value="manager">Manager</option>
                                                        <option value="agent">Agent</option>
                                                    </select>
                                                </div>
                                            </div>
                                        
                                            <div class="row form-group">
                                                <div class="col col-md-3">
                                                    <label class=" form-control-label">Approve</label>
                                                </div>
                                                <div class="col col-md-9">
                                                    <div class="form-check-inline form-check">
                                                        <label for="inline-checkbox1" class="form-check-label ">
                                                            <input type="checkbox" id="inline-checkbox1" @change="updateApproved($event, adminID)" v-model="approved" name="inline-checkbox1" value="option1" class="form-check-input">
                                                        </label>
                                                    
                                                    </div>
                                                </div>
                                            </div>
                                
                                        </form>
						</div>
						<div class="modal-footer">
							<button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
						</div>
					</div>
				</div>
			</div>
			<!-- end modal static -->

            <!-- modal medium -->
			<div class="modal fade" id="viewAgent" tabindex="-1" role="dialog" aria-labelledby="viewAgentLabel" aria-hidden="true">
				<div class="modal-dialog modal-lg" role="document">
					<div class="modal-content">
						<div class="modal-header">
							<h5 class="modal-title" id="viewAgentLabel">View Agent</h5>
							<button type="button" class="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div class="modal-body">
                            <div v-if="loading" class="progress mb-3">
                                <div class="progress-bar bg-success progress-bar-striped progress-bar-animated" role="progressbar" style="width: 100%" aria-valuenow="100"
                                    aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <form v-else action="javascript:void(0)" class="form-horizontal">
                                <div class="row">
                                    <div class="col-md-12">
                                        <img :src="image" alt="gallery">
                                    </div>
                                </div>
                            </form>
						</div>
						<div class="modal-footer">
							<button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
						</div>
					</div>
				</div>
			</div>
			<!-- end modal medium -->

    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
import store from '../../store/index';
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
    name: "AgentsView",
    data() {
        return {
            app_name: process.env.MIX_APP_NAME,
            year: new Date().getFullYear(),
            adminID: 0,
            approved:'',
            setRole: '',
            processing: false,
            message: '',
            loading: false,
            image: '',
            alertType: '',
            displayDelete: 'none',
            displaySetting: 'none',
        }
    },
    computed:{
        ...mapGetters("super_agent", ["getAgents", "getAgent", "getResponse", "getError"]),
        paginate() {
            let links = this.getAgents.links   ?? [];
            let length = links.length;
            if (length == 0) {
                return {};
            }
            return {
                prev: links[0],
                next: links[length-1],
                inner:links.splice(1,length-2)
            };
        },
        
        getPath(){
            let path = '/agent?page=1';
            let url = this.getAgents.path ?? path;
        
            let index = url.lastIndexOf('/');
            path = url.slice(index+1);
            return path;
        },
        role() {
            return store.getters['authentication/user'].role;
        },
    },
    methods: {
        
        ...mapActions("super_agent", ["getAllAgents", "getOneAgent", "updateAgent", "deleteAgent"]),
        ucfirst(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        },
        async deleteAdmin() {
            this.processing = true;
            try {
                await this.deleteAgent(this.adminID);
                this.alertType = "alert-success";
                this.message = this.getResponse.data.message;
                this.displayDelete = 'block';
            } catch ({ response }) {
                this.alertType = "alert-danger";
                this.message = response;
                this.displayDelete = 'block';
            } finally {
                this.processing = false;
                let t = setTimeout(()=>{this.displayDelete ='none'},500);

                t = setTimeout(()=>{window.location.reload()},3000);
            }
            
        },

        async updateApproved(event, id) {
            let value = event.target.checked;

            try {
                await this.updateAgent({
                        id: id, 
                        request: {
                                approved: value,
                            }
                        }
                    );
                this.alertType = "alert-success";
                this.message = this.getResponse.data.message;
                this.displaySetting = 'block';
            } catch ({ response }) {
                this.alertType = "alert-danger";
                this.message = response;
                this.displaySetting = 'block';
            }finally {
                    let t = setTimeout(()=>{this.displaySetting ='none'},500);
                    t = setTimeout(()=>{window.location.reload()},3000);
            }
        
        },

        async updateRole(event, id) {
            let value = event.target.value;

            try {
                await this.updateAgent({
                        id: id, 
                        request: {
                                role: value,
                            }
                        }
                    );
                    this.alertType = "alert-success";
                    this.message = this.getResponse.data.message;
                    this.displaySetting = 'block';
                
            } catch ({ response }) {
                this.alertType = "alert-danger";
                this.message = response;
                this.displaySetting = 'block';
            } finally {
                    let t = setTimeout(()=>{this.displaySetting ='none'},500);
                    t = setTimeout(()=>{window.location.reload()},3000);
            }
        
        },
        getPropertyId(id) {
            this.adminID = id;
        },

    },

    mounted() {
        this.getAllAgents('agent?page=1');
    }
}
</script>