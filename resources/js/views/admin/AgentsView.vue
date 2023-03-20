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
                                                <td class="desc">{{ ucfirst(agent.role) }}</td>
                                                <td>
                                                    <span  :class="agent.approved?'status--process':'status--denied'">{{ agent.approved?'Approved': 'Not Approved' }}</span>
                                                </td>
                                                <td>
                                                    <div class="table-data-feature">
                                                        <button class="item" data-toggle="tooltip" data-placement="top" title="View">
                                                            <i class="zmdi zmdi-eye"></i>
                                                        </button>
                                                        <button class="item" data-toggle="tooltip" data-placement="top" title="Delete">
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
    name: "AgentsView",
    data() {
        return {
            app_name: process.env.MIX_APP_NAME,
            year: new Date().getFullYear(),
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
    },
    methods: {
        
        ...mapActions("super_agent", ["getAllAgents", "getOneAgent", "deleteAgent"]),
        ucfirst(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        },
    },

    mounted() {
        this.getAllAgents('agent?page=1');
    }
}
</script>