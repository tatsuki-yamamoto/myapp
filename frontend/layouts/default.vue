<template>
  <v-app>
    <!-- ログイン中は非表示 -->
    <MyHeader v-if="$store.$auth.loggedIn" />
    <v-main>
      <nuxt />
    </v-main>
    <MyFooter />
  </v-app>
</template>

<script>
import MyHeader from '@/components/my-header.vue'
import MyFooter from '@/components/my-footer.vue'

export default {
  components: {
    MyHeader,
    MyFooter,
  },
}
</script>

<style>
@media only screen and (min-width: 800px) {
  .container {
    max-width: 800px;
  }
}
</style>
