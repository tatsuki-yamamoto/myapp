<template>
  <v-footer class="pa-3">
    <v-spacer />
    <div>&copy; {{ YearOfIssue }} {{ author }}</div>
  </v-footer>
</template>

<script>
export default {
  name: 'MyFooter',
  data: () => ({
    YearOfIssue: '2020',
    author: 'yama_tatsuki',
  }),
}
</script>
