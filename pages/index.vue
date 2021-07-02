<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card>
        <v-card-title class="headline">
          김우석의 블로그에 오신걸 환영합니다.
        </v-card-title>
        <v-card-text>
          <p>
            IT에 관하여 공부한  글들을 올리는 게시판입니다.
          </p>
          <p>
            글 작성은 여러 글을 찾으며 메인이 되는 글을 하나 찾은 뒤 살을 붙여가는 형식으로 작성합니다.  
          <p>
            지적은 어느부분의 어떠한 방식이어도 감사히 받겠습니다.
          <p>
            페이지는 vue, django를 베이스로 nuxt를 사용해 SSR을 구현했습니다.
          </p>
          <div class="text-xs-right">
            <em><small>&mdash; 김우석</small></em>
          </div>
          <hr class="my-3" />
          <a
            href="https://nuxtjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nuxt Documentation
          </a>
          <br />
          <a
            target="_blank"
            rel="noopener noreferrer"
            @click="check"
          >
            실험
          </a>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" nuxt to="/login"> Continue </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  auth: false,
  methods: {
    check () {
      // console.log(this.$auth.user)
      // console.log(this.$store.state.auth.user)
      console.log(this.$auth.loggedIn)
    }
  },
  computed: {
    user () {
      return this.$auth.user
    }
  }
}
</script>
