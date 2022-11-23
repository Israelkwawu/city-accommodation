<template>
      <!-- Header Start -->
    <div class="container-fluid header bg-white p-0">
        <div class="row g-0 align-items-center flex-column-reverse flex-md-row">
            <bread-crumb :title="title" :page="page"></bread-crumb>
            <div class="col-md-6 animated fadeIn">
              <banner-image></banner-image>
            </div>
        </div>
    </div>
    <!-- Header End -->
</template>
<script>
import BannerImage from '../BannerImage.vue';
import BreadCrumb from './BreadCrumb.vue';
export default {
    name: "TheHeader",
    props: {
        title: {
            type: String,
            required: true
        },
        page: {
            type: String,
            required: true
        }
    },
    components: {
        BannerImage,
        BreadCrumb
    }
}
</script>