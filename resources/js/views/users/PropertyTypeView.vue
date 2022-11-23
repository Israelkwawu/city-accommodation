<template>
    <div class="container-xxl bg-white p-0">
        <spinner></spinner>
        <navbar></navbar>
        <the-header title="Property Type" page="Property Type"></the-header>
        <search></search>
        <category></category>
        <the-footer></the-footer>
        <back-to-top></back-to-top>
    </div>
</template>
<script>
import Spinner from '../../components/users/common/Spinner.vue';
import Navbar from '../../components/users/common/Navbar.vue';
import TheHeader from '../../components/users/common/TheHeader.vue';
import Search from '../../components/users/common/Search.vue';
import Category from '../../components/users/common/Category.vue';
import TheFooter from '../../components/users/common/TheFooter.vue';
import BackToTop from '../../components/users/common/BackToTop.vue';
export default {
    name: "PropertyTypeView",
 
    components: {
        Spinner,
        Navbar,
        TheHeader,
        Search,
        Category,
        TheFooter,
        BackToTop
    }
}
</script>