<template>
<div>
    <h1>User Slug Detail</h1>
    <p>Slog :{{id}}</p>
    <nuxt-link to="/users">Back</nuxt-link>
</div>

</template>

<script>
export default {
    data() {
        return {
            id: this.$route.params.slug
        }
    },
}
</script>

<style>

</style>