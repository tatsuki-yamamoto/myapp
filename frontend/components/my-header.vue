<template>
  <div>
    <!-- サイドバー -->
    <v-navigation-drawer
      v-model="drawer"
      fixed
      clipped
      app
      disable-resize-watcher
    >
      <v-list dense three-line>
        <v-list-item v-for="item in items" :key="item.to" nuxt :to="item.to">
          <v-list-item-content>
            <v-list-item-title>{{ item.label }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- ヘッダー -->
    <v-app-bar class="header" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-layout justify-center fill-height>
        <v-toolbar-items class="hidden-xs-only">
          <v-btn v-for="item in items" :key="item.to" :to="item.to" text nuxt>
            {{ item.label }}
          </v-btn>
        </v-toolbar-items>
      </v-layout>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'MyHeader',
  data: () => ({
    items: [
      {
        to: '/',
        label: 'Top',
      },
      {
        to: '/users/edit',
        label: 'メールアドレス変更',
      },
      {
        to: '/users/account',
        label: 'ログアウト',
      },
    ],
    drawer: false,
  }),
}
</script>
