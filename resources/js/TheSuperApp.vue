<template>
    <router-view :key="$route.fullPath" />
</template>

<script>
export default {
    components: {
    },
    name: "TheSuperApp",
}
</script>