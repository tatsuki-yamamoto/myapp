export const currentUser = {
  data() {
    return {
      currentUser: {
        id: -1,
        name: '',
        email: '',
        image: '',
      },
    }
  },
  created() {
    this.setCurrentUser()
  },
  methods: {
    setCurrentUser() {
      this.$axios.get(`/api/users/current`).then((response) => {
        if (response.data !== null) {
          this.currentUser = response.data
        } else {
          this.currentUser.id = -1
        }
      })
    },
  },
}
