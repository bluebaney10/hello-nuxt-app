<template>
<div>
  <h1>Photo Detail</h1>
  <img class="image" :src="photo.download_url" alt="Photo detail">
  <p>Author : {{ photo.author}}</p>
  <p>Info : {{ photo.url}}</p>
  <nuxt-link to="/photos">Back</nuxt-link>
</div>

</template>

<script>
export default {
    async asyncData({$axios,params}){
        const photo = await $axios.$get(`https://picsum.photos/id/${params.id}/info`)

        console.log('photo',photo)
        return {photo}
    }
}
</script>

<style scoped>
.image{
    width:300px;
}
</style>