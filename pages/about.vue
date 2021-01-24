<template>
   <div>
  <h1>About Page</h1>
  <nuxt-link to="/">Go to Home</nuxt-link>
   </div>

</template>

<script>
export default {
    middleware:['auth'],
    layout: 'admin',
}
</script>
