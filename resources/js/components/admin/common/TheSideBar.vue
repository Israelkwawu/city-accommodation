<template>
        <!-- MENU SIDEBAR-->
        <aside class="menu-sidebar d-none d-lg-block">
            <div class="logo">
                <a href="/super/dashboard">
                    <img src="images/icon/logo.png" alt="Cool Admin" />
                </a>
            </div>
            <div class="menu-sidebar__content js-scrollbar1">
                <nav class="navbar-sidebar">
                    <ul class="list-unstyled navbar__list">
                        <li class="active">
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
                    </ul>
                </nav>
            </div>
        </aside>
        <!-- END MENU SIDEBAR-->
</template>
<script>
export default {
    name: "TheSideBar",
}
</script>