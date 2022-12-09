<template>
    <div class="container-xxl bg-white p-0">
        <spinner></spinner>
        <navbar></navbar>
        <the-header title="Property List" page="Property List"></the-header>
        <search></search>
        <property-list></property-list>
        <call-to-action></call-to-action>
        <the-footer></the-footer>
        <back-to-top></back-to-top>
    </div>
</template>
<script>
import Spinner from '../../components/users/common/Spinner.vue';
import Navbar from '../../components/users/common/Navbar.vue';
import TheHeader from '../../components/users/common/TheHeader.vue';
import Search from '../../components/users/common/Search.vue';
import PropertyList from '../../components/users/common/PropertyList.vue';
import CallToAction from '../../components/users/common/CallToAction.vue';
import TheFooter from '../../components/users/common/TheFooter.vue';
import BackToTop from '../../components/users/common/BackToTop.vue';
export default {
    name: "PropertyListView",
 
    components: {
        Spinner,
        Navbar,
        TheHeader,
        Search,
        PropertyList,
        CallToAction,
        TheFooter,
        BackToTop
    },
    
    data() {
        return {
            isLoading: false,
        }
    },

    beforeMount() {
        this.isLoading = true;
    },

    mounted() {
        this.isLoading = false;
    }
}
</script>