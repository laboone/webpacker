/* eslint no-console: 0 */
// Run this example by adding <%= javascript_pack_tag 'hello_vue' %> (and
// <%= stylesheet_pack_tag 'hello_vue' %> if you have styles in your component)
// to the head of your layout file,
// like app/views/layouts/application.html.erb.
// All it does is render <div>Hello Vue</div> at the bottom of the page.

import TurbolinksAdapter from 'vue-turbolinks';
import Vue from 'vue/dist/vue.esm'

Vue.use(TurbolinksAdapter)

document.addEventListener('turbolinks:load', () => {

  // ここで初期化するなら初期化処理する必要あり

  const app = new Vue({
    el: '#checkboxes_app',
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
  })
})

