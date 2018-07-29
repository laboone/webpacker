export default {
  data: {
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    ch1_disabled: false,
  },
  methods: {
    checkbox1_clicked: function (event) {
      // `this` inside methods points to the Vue instance
      this.checkbox1 = !this.checkbox1
      this.checkbox2 = false
      this.checkbox3 = false
    },
    checkbox2_clicked: function (event) {
      this.checkbox2 = !this.checkbox2
    },
    checkbox3_clicked: function (event) {
      this.checkbox3 = !this.checkbox3
      this.ch1_disabled = this.checkbox3
    }
  }
}
