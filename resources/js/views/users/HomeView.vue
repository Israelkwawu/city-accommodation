<template>
    <div class="container-xxl bg-white p-0">
        <spinner></spinner>
        <navbar></navbar>
        <the-home-header></the-home-header>
        <search></search>
        <category></category>
        <about></about>
        <property-list></property-list>
        <call-to-action></call-to-action>
        <team></team>
        <testimonial></testimonial>
        <the-footer></the-footer>
        <back-to-top></back-to-top>
    </div>
</template>
<script>
import Spinner from '../../components/users/common/Spinner.vue';
import Navbar from '../../components/users/common/Navbar.vue';
import TheHomeHeader from '../../components/users/TheHomeHeader.vue';
import Search from '../../components/users/common/Search.vue';
import Category from '../../components/users/common/Category.vue';
import About from '../../components/users/common/About.vue';
import PropertyList from '../../components/users/common/PropertyList.vue';
import CallToAction from '../../components/users/common/CallToAction.vue';
import Team from '../../components/users/common/Team.vue';
import Testimonial from '../../components/users/common/Testimonial.vue';
import TheFooter from '../../components/users/common/TheFooter.vue';
import BackToTop from '../../components/users/common/BackToTop.vue';

export default {
    name: "HomeView",
    components: {
        Spinner,
        Navbar,
        TheHomeHeader,
        Search,
        Category,
        About,
        PropertyList,
        CallToAction,
        Team,
        Testimonial,
        TheFooter,
        BackToTop
    }
}
</script>