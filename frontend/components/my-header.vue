<template>
  <header id="header">
    <!-- サイドバー -->
    <v-navigation-drawer v-model="drawer" app>
      <v-list nav>
        <v-list-item
          v-for="item in function_items"
          :key="item.to"
          nuxt
          :to="item.to"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-title>{{ item.label }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- ヘッダー -->
    <v-app-bar app>
      <!-- サイドバー開閉ボタン -->
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

      <!-- タイトル -->
      <v-toolbar-title>{{ title }}</v-toolbar-title>

      <v-spacer />

      <v-menu bottom left>
        <!-- 設定メニュー開閉 -->
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon size="30" color="#90A4AE" dark>mdi-account-circle</v-icon>
          </v-btn>
        </template>

        <!-- 設定メニュー -->
        <v-card>
          <v-container>
            <v-list>
              <v-list-item>
                <v-list-item-avatar size="60">
                  <v-icon size="60" color="#90A4AE" dark>
                    mdi-account-circle
                  </v-icon>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title>名無し</v-list-item-title>
                  <v-list-item-subtitle>
                    {{ currentUser.email }}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>

            <v-divider />

            <v-list>
              <v-list-item
                v-for="item in setting_items"
                :key="item.to"
                nuxt
                :to="item.to"
              >
                <v-list-item-action>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-action>
                <v-list-item-title>{{ item.label }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-container>
        </v-card>
      </v-menu>
    </v-app-bar>
  </header>
</template>

<script>
import { currentUser } from '../mixin/mixin'
export default {
  mixins: [currentUser],
  data: () => ({
    title: 'MyApp',
    function_items: [
      {
        to: '/',
        label: 'Home',
        icon: 'mdi-home',
      },
    ],
    setting_items: [
      {
        to: '/users/edit',
        label: 'アカウント設定',
        icon: 'mdi-account-cog',
      },
      {
        to: '/users/account',
        label: 'ログアウト',
        icon: 'mdi-logout-variant',
      },
    ],
    drawer: false,
  }),
}
</script>
