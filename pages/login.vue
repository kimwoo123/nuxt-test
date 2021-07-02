<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-4 is-offset-4">
          <h2 class="title has-text-centered">Welcome back!</h2>


          <form method="post" @submit.prevent="login">

            <div class="field">
              <label class="label">login ID</label>

              <div class="control">
                <input
                  type="text"
                  class="input"
                  name="username"
                  v-model="credentials.username"
                >
              </div>
            </div>

            <div class="field">
              <label class="label">Password</label>

              <div class="control">
                <input
                  type="password"
                  class="input"
                  name="password"
                  v-model="credentials.password"
                >
              </div>
            </div>

            <div class="control">
              <button type="submit" class="button is-fullwidth">Log In</button>
            </div>
          </form>

          <div class="has-text-centered" style="margin-top: 20px">
            <p>
              Don't have an account? <nuxt-link to="/signin">Register</nuxt-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  data() {
    return {
      credentials: {
        username: '',
        password: '',
      },
      error: null,
    };
  },

  methods: {
    async login() {
      try {
        let resp = await this.$auth.loginWith('local', {
          data: this.credentials
        });
      //   if(process.browser){
      //     localStorage.setItem('accessToken', response.data.access)
      //   }
      //   window.$nuxt.$cookies.set('accessToken', response.data.access, {
      //   path: '/',
      //   maxAge: 60 * 60 * 24 * 7
      // })
        // const token = this.$auth.setToken('local', 'Bearer ' + resp.data.access)
        // this.$axios.setHeader('Authorization', 'Bearer ' + resp.data.access)
        // this.$auth.ctx.app.$axios.setHeader('Authorization', 'Bearer ' + resp.data.access)
        console.log(this.credentials)
        this.$store.dispatch('login', this.credentials)
        this.$router.push('/');
      } catch (e) {
        this.error = e
        console.log(e)
      }
    },
  },
};
</script>

