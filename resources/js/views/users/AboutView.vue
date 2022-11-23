<template>
    <div class="container-xxl bg-white p-0">
        <spinner></spinner>
        <navbar></navbar>
        <the-header title="About Us" page="About"></the-header>
        <search></search>
        <about></about>
        <call-to-action></call-to-action>
        <team></team>
        <the-footer></the-footer>
        <back-to-top></back-to-top>
    </div>
</template>
<script>
import Spinner from '../../components/users/common/Spinner.vue';
import Navbar from '../../components/users/common/Navbar.vue';
import TheHeader from '../../components/users/common/TheHeader.vue';
import Search from '../../components/users/common/Search.vue';
import About from '../../components/users/common/About.vue';
import CallToAction from '../../components/users/common/CallToAction.vue';
import Team from '../../components/users/common/Team.vue';
import TheFooter from '../../components/users/common/TheFooter.vue';
import BackToTop from '../../components/users/common/BackToTop.vue';
export default {
    name: "AboutView",

    components: {
        Spinner,
        Navbar,
        TheHeader,
        Search,
        About,
        CallToAction,
        Team,
        TheFooter,
        BackToTop
    }
}
</script>