<template>
  <v-row justify="center">
    <v-col
      cols="12"
      sm="10"
      md="8"
      lg="6"
    >
      <v-card ref="form">
        <v-card-text>
          <v-text-field
            ref="ID"
            v-model="credentials.username"
            :rules="[() => !!credentials.username || 'ID를 입력해 주세요']"
            :error-messages="errorMessages"
            label="아이디"
            placeholder="Login ID"
            required
          ></v-text-field>
          <v-text-field
            v-model="credentials.password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="비밀번호"
            hint="8 글자 이상"
            counter
            @click:append="show1 = !show1"
          ></v-text-field>
          <v-text-field
          v-model="credentials.passwordConfirmation"
            :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.passwordMatch]"
            :type="show3 ? 'text' : 'password'"
            name="input-10-2"
            label="비밀번호 확인"
            hint="8 글자 이상"
            class="input-group--focused"
            @click:append="show3 = !show3"
          ></v-text-field>
          <v-text-field
            v-model="name"
            :rules="[() => !!name || '이름을 입력해주세요']"
            label="이름"
            placeholder="홍길동"
            required
          ></v-text-field>
        </v-card-text>
        <v-divider class="mt-12"></v-divider>
        <v-card-actions>
          <v-btn 
          text
          to="/"
          >
            Cancel
          </v-btn>
          <v-spacer></v-spacer>
          <v-slide-x-reverse-transition>
            <v-tooltip
              v-if="formHasErrors"
              left
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  icon
                  class="my-0"
                  v-bind="attrs"
                  @click="resetForm"
                  v-on="on"
                >
                  <v-icon>mdi-refresh</v-icon>
                </v-btn>
              </template>
              <span>Refresh form</span>
            </v-tooltip>
          </v-slide-x-reverse-transition>
          <v-btn
            color="primary"
            text
            @click="signin()"
          >
            Signup
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    auth: false,
    
    data () {
      return {
        errorMessages: '',
        name: '',
        state: null,
        zip: null,
        country: null,
        formHasErrors: false,
        show1: false,
        show2: true,
        show3: false,
        show4: false,
        credentials: {
          password: '',
          passwordConfirmation: '',
          username: '',
        },
        rules: {
          required: value => !!value || '비밀번호를 입력해주세요',
          min: v => v.length >= 8 || '8 글자 이상이어야 합니다',
          passwordMatch: pC =>  pC === this.credentials.password || (`비밀번호가 일치하지 않습니다`),
        }
      }
    },

    computed: {
      form () {
        return {
          name: this.name,
          city: this.city,
          state: this.state,
          zip: this.zip,
        }
      },
    },

    watch: {
      name () {
        this.errorMessages = ''
      },
    },

    methods: {
      resetForm () {
        this.errorMessages = []
        this.formHasErrors = false

        Object.keys(this.form).forEach(f => {
          this.$refs[f].reset()
        })
      },
      signin () {
        this.$store.dispatch('signin', this.credentials)
      },
    },
  }
</script>