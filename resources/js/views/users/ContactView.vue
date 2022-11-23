<template>
    <div class="container-xxl bg-white p-0">
        <spinner></spinner>
        <navbar></navbar>
        <the-header title="Contact Us" page="Contact"></the-header>
        <search></search>
        <contact></contact>
        <the-footer></the-footer>
        <back-to-top></back-to-top>
    </div>
</template>
<script>
import Spinner from '../../components/users/common/Spinner.vue';
import Navbar from '../../components/users/common/Navbar.vue';
import TheHeader from '../../components/users/common/TheHeader.vue';
import Search from '../../components/users/common/Search.vue';
import Contact from '../../components/users/Contact.vue';
import TheFooter from '../../components/users/common/TheFooter.vue';
import BackToTop from '../../components/users/common/BackToTop.vue';
export default {
    name: "ContactView",
 
    components: {
        Spinner,
        Navbar,
        TheHeader,
        Search,
        Contact,
        TheFooter,
        BackToTop
    }
}
</script>