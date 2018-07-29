export default {
  data: {
    name: "",
    response: ""
  },
  methods: {
    submitForm() {
      this.axios.post('/samples/post_ajax.json', {
        name: this.name,
      }).then(response => {
        this.response = JSON.stringify(response, null, 2)
      })
    }
  }
}
