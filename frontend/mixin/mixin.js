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
      this.$axios
        .get(`/api/users/current`, {
          headers: {
            'access-token': localStorage.getItem('access-token'),
            uid: localStorage.getItem('uid'),
            client: localStorage.getItem('client'),
          },
        })
        .then((response) => {
          if (response.data !== null) {
            this.currentUser = response.data
          } else {
            this.currentUser.id = -1
          }
        })
    },
  },
}
