<template>
    <!-- HEADER MOBILE-->
        <header class="header-mobile d-block d-lg-none">
            <div class="header-mobile__bar">
                <div class="container-fluid">
                    <div class="header-mobile-inner">
                        <a class="logo" href="index.html">
                            <img src="images/icon/logo.png" alt="CoolAdmin" />
                        </a>
                        <button class="hamburger hamburger--slider" type="button">
                            <span class="hamburger-box">
                                <span class="hamburger-inner"></span>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            <nav class="navbar-mobile">
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
                    </ul>
                </div>
            </nav>
        </header>
        <!-- END HEADER MOBILE-->
</template>

<script>
export default {
    name: "TheHeader",
}
</script>