<template>
  <v-container>
    <v-card width="400px" class="mx-auto mt-5">
      <v-card-title>
        <h1 class="display-1">新規登録</h1>
      </v-card-title>
      <v-card-text>
        <v-form ref="form" lazy-validation>
          <v-text-field
            v-model="user.email"
            prepend-icon="mdi-email"
            label="メールアドレス"
          />
          <v-text-field
            v-model="user.password"
            prepend-icon="mdi-lock"
            append-icon="mdi-eye-off"
            label="パスワード"
            :type="showPassword ? 'text' : 'password'"
            @click:append="showPassword = !showPassword"
          />
          <v-text-field
            v-model="user.password_confirmation"
            prepend-icon="mdi-lock"
            append-icon="mdi-eye-off"
            label="パスワード確認"
            :type="showPassword_confirmation ? 'text' : 'password'"
            @click:append="
              showPassword_confirmation = !showPassword_confirmation
            "
          />
          <v-card-actions>
            <v-btn
              color="light-green darken-1"
              dark
              block
              @click="registerUser"
            >
              新規登録
            </v-btn>
          </v-card-actions>
          <v-card-actions>
            <v-btn block to="/users/login">戻る</v-btn>
          </v-card-actions>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'App',
  auth: false,
  data() {
    return {
      user: {
        password: '',
        email: '',
        password_confirmation: '',
      },
      showPassword: false,
      showPassword_confirmation: false,
    }
  },
  methods: {
    registerUser() {
      this.$axios.post('/api/auth', this.user).then(
        () => {
          alert('登録完了しました。')
          window.location.href = '/'
        },
        (error) => {
          alert('登録できません。')
          return error
        }
      )
    },
  },
}
</script>
