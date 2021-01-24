<template>
<div>
    <h1>User Detail</h1>
    <p>{{id}}</p>
</div>

</template>

<script>
export default {
    data() {
        return {
            id: this.$route.params.id
        }
    },
}
</script>

<style>

</style>