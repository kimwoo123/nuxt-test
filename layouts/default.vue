<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >

      <v-list>
        <!-- <v-list-item>
          <v-list-title>
            {{ loggedInUser }}
          </v-list-title>
        </v-list-item> -->
        <v-list-item
          :to="items.to"
          @click="check"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ items.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="items.title" />
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          v-if="isAuthenticated"
          :to="loginItems.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ loginItems.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="loginItems.title" />
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          v-else
          @click="logout()"
          exact
        >
          <v-list-item-action>
            <v-icon>{{ logoutItems.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="logoutItems.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <!-- <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn> -->
      <!-- <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>mdi-application</v-icon>
      </v-btn> -->
      <!-- <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>mdi-minus</v-icon>
      </v-btn> -->
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <!-- <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn> -->
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <!-- <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>

    </v-navigation-drawer> -->
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  middleware: ['auth'],
  auth: false,
  data() {
    return {
      // isLoggedin: this.$auth.getToken('accessToken') || '',
      clipped: true,
      drawer: false,
      fixed: false,
      items: 
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
      loginItems:
        {
          icon: 'mdi-key',
          title: 'Login',
          to: '/signin',
        },
      logoutItems:
        {
          icon: 'mdi-key',
          title: 'Logout',
          to: '/'
        },
        // {
        //   icon: 'mdi-dialpad',
        //   title: 'Articles',
        //   to: '/Articles'
        // }
      miniVariant: false,
      rightDrawer: false,
      title: '김우석의 블로그',
    }
  },
  methods: {
    async logout() {
      await this.$auth.logout()
      this.$router.push('/') 
    },
    check () {
      console.log(this.$auth.loggedIn)
    }
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser'])
  }
}
</script>
