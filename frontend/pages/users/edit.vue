<template>
  <v-app>
    <v-container>
      <v-card width="400px" class="mx-auto mt-5">
        <v-card-title>
          <h1 class="display-1">メールアドレス変更</h1>
        </v-card-title>
        <v-card-text>
          <v-form ref="form" lazy-validation>
            <v-text-field
              v-model="user.email"
              prepend-icon="mdi-email"
              label="新しいメールアドレス"
            />
            <v-text-field
              v-model="user.password"
              prepend-icon="mdi-lock"
              append-icon="mdi-eye-off"
              label="パスワード"
            />
            <v-card-actions>
              <v-btn
                color="light-green darken-1"
                class="white--text"
                @click="editEmail"
              >
                保存する
              </v-btn>
            </v-card-actions>
          </v-form>
        </v-card-text>
      </v-card>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      user: {
        password: '',
        email: '',
      },
    }
  },
  methods: {
    editEmail() {
      this.$axios.put('api/auth', this.user).then((response) => {
        window.location.href = '/'
      })
    },
  },
}
</script>
