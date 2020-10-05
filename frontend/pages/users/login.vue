<template>
  <v-container>
    <v-card width="400px" class="mx-auto mt-5">
      <v-card-title>
        <h1 class="display-1">ログイン</h1>
      </v-card-title>
      <v-card-text>
        <v-form ref="form" lazy-validation>
          <v-text-field
            v-model="email"
            prepend-icon="mdi-email"
            label="メールアドレス"
          />
          <v-text-field
            v-model="password"
            :type="showPassword ? 'text' : 'password'"
            prepend-icon="mdi-lock"
            append-icon="mdi-eye-off"
            label="パスワード"
            @click:append="showPassword = !showPassword"
          />
          <v-card-actions>
            <v-btn
              color="light-green darken-1"
              dark
              block
              @click="loginWithAuthModule"
            >
              ログイン
            </v-btn>
          </v-card-actions>
          <v-card-actions>
            <v-btn
              color="light-blue darken-1"
              dark
              block
              @click="testUserlogin"
            >
              確認用ログイン
            </v-btn>
          </v-card-actions>
          <v-card-actions>
            <v-btn color="darken-1" to="/users/signup" block>登録する</v-btn>
          </v-card-actions>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      password: '',
      email: '',
      showPassword: false,
    }
  },
  methods: {
    // loginメソッドの呼び出し
    async loginWithAuthModule() {
      await this.$auth
        .loginWith('local', {
          // emailとpasswordの情報を送信
          data: {
            email: this.email,
            password: this.password,
          },
        })
        .then(
          (response) => {},
          (error) => {
            alert('ログインできませんでした。')
            return error
          }
        )
    },
    testUserlogin() {
      this.email = 'example@example.com'
      this.password = 'password'
      this.loginWithAuthModule()
    },
  },
}
</script>
