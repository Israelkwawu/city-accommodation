<template>
    <!-- HEADER MOBILE-->
        <header class="header-mobile d-block d-lg-none">
            <div class="header-mobile__bar">
                <div class="container-fluid">
                    <div class="header-mobile-inner">
                        <a class="logo title-2" href="/super/dashboard">
                            {{ app_name }}
                        </a>
                        <button @click="toggleHambugerMenu = !toggleHambugerMenu" class="hamburger hamburger--slider" type="button">
                            <span class="hamburger-box">
                                <span class="hamburger-inner"></span>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            <nav class="navbar-mobile" :class="{'active' : toggleHambugerMenu}">
                <div class="container-fluid">
                    <ul class="navbar-mobile__list list-unstyled">
                        <li class="">
                            <a class="js-arrow" href="/super/dashboard">
                                <i class="fas fa-tachometer-alt"></i>Dashboard</a>
                        </li>
                        <li>
                            <a href="/super/add-listing">
                                <i class="fas fa-plus"></i>Add Listing</a>
                        </li>
                        <li>
                            <a href="/super/agents">
                                <i class="fas fa-users"></i>Manage Agents</a>
                        </li>
                        <li>
                            <a href="/super/property-type">
                                <i class="far fa-check-square"></i>Property Types</a>
                        </li>
                        <li>
                            <a href="/super/attributes">
                                <i class="fa fa-info-circle"></i>Property Features</a>
                        </li>
                        <li>
                            <a href="/super/settings">
                                <i class="fa fa-gear"></i>Settings</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
        <!-- END HEADER MOBILE-->
</template>

<script>
export default {
    name: "TheMobileHeader",
    data() {
        return {
            app_name: process.env.MIX_APP_NAME,
            toggleHambugerMenu: false,
        }
    }
}
</script>
<style scoped>
.active {
    display: block;
}
</style>