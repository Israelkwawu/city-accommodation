<template>
    <div class="col-md-6 p-5 mt-lg-5">
        <h1 class="display-5 animated fadeIn mb-4">{{ title }}</h1> 
        <nav aria-label="breadcrumb animated fadeIn">
            <ol class="breadcrumb text-uppercase">
                <li class="breadcrumb-item"><a href="/">Home</a></li>
                <li class="breadcrumb-item"><a href="#">Pages</a></li>
                <li class="breadcrumb-item text-body active" aria-current="page">{{ page }}</li>
            </ol>
        </nav>
    </div>
</template>
<script>
export default {
    name: "BreadCrumb",
    props: {
        title: {
            type: String,
            required: true
        },
        page: {
            type: String,
            required: true
        }
    }
}
</script>