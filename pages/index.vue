<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">{{title}}</h1>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
        <div>
             <nuxt-link to="/about">Go to About Page</nuxt-link>
             <nuxt-link to="/users">Users list</nuxt-link>
             <nuxt-link to="/photos">Photo</nuxt-link>
      </div>
      <div class="links">
          <button @click="logout">Logout</button>
      </div>
       <nuxt-content :document="post"></nuxt-content>

    </div>

  </div>
</template>

<script>
export default {
    head(){
        return{
            title:'This is index title'
        }
    },
    data() {
        return {
            title:'hello-nuxt-app'
        }
    },
    methods:{
        async logout(e){
            await this.$auth.logout()
            this.$router.push('/login')
        }
    }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
.links a{
    margin:0 0.5rem;
}
</style>
