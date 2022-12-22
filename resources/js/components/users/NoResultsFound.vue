<template>
    <!-- Property List Start -->
    <div class="container-xxl py-5">
        <div class="container">
            <div class="row g-0 gx-5 align-items-end">
                <div class="col-lg-6">
                    <div class="text-start mx-auto mb-5 wow slideInLeft" data-wow-delay="0.1s">
                        <h1 class="mb-3">Ooops! No results found.</h1>
                        <p>Sorry, we could not find any results for: <strong>{{ search_term }}</strong></p>
                    </div>
                    <div class="text-start mx-auto mb-5 wow slideInLeft" data-wow-delay="0.1s">
                        <p><strong>Search Tips</strong></p>
                        <ul>
                            <li>Double-check the spelling</li>
                            <li>Change your search query</li>
                            <li>Be less specific</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Property List End -->

</template>
<script>
export default {
    name: "NoResultsFound",

    props: ['search_term'],
}
</script>