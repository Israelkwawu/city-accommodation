<template>
        <!-- MENU SIDEBAR-->
        <aside class="menu-sidebar d-none d-lg-block">
            <div class="logo title-2">
                <a href="/super/dashboard">
                    {{ app_name }}
                </a>
            </div>
            <div class="menu-sidebar__content js-scrollbar1">
                <nav class="navbar-sidebar">
                    <ul class="list-unstyled navbar__list">
                        <li :class="{ active: activePage == 'super.dashboard' }">
                            <a class="js-arrow" href="/super/dashboard">
                                <i class="fas fa-tachometer-alt"></i>Dashboard</a>
                        </li>
                        <li :class="{ active: activePage == 'super.add-listing' }">
                            <a href="/super/add-listing">
                                <i class="fas fa-plus"></i>Add Listing</a>
                        </li>
                        <li :class="{ active: activePage == 'super.agents' }">
                            <a href="/super/agents">
                                <i class="fas fa-users"></i>Manage Agents</a>
                        </li>
                        <li :class="{ active: activePage == 'super.approval' }">
                            <a href="/super/approval">
                                <i class="fas fa-check"></i>Pending Approval</a>
                        </li>
                        <li :class="{ active: activePage == 'super.property-type' }">
                            <a href="/super/property-type">
                                <i class="far fa-check-square"></i>Property Types</a>
                        </li>
                        <li :class="{ active: activePage == 'super.attributes' }">
                            <a href="/super/attributes">
                                <i class="fa fa-info-circle"></i>Property Features</a>
                        </li>
                        <li :class="{ active: activePage == 'super.settings' }">
                            <a href="/super/settings">
                                <i class="fa fa-gear"></i>Settings</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
        <!-- END MENU SIDEBAR-->
</template>
<script>
export default {
    name: "TheSideBar",
    data() {
        return {
            app_name: process.env.MIX_APP_NAME,
        }
    },
    computed: {
        activePage() {
            return this.$route.name;
        }
    }
}
</script>