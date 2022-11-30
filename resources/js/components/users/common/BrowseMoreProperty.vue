<template>
    <a class="btn btn-primary py-3 px-5" :href="href">Browse More Property</a>
</template>
<script>
export default {
    name: "BrowseMoreProperty",

    props: {
        href: {
            type: String,
            required: true
        }
    }
}
</script>