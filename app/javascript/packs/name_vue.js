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
  const app = new Vue({
    el: '#name_app',
    data: {
      name: ""
    }
  })
})

document.addEventListener('turbolinks:load', () => {
  const app = new Vue({
    el: '#name_lazy_app',
    data: {
      name: ""
    }
  })
})

document.addEventListener('turbolinks:load', () => {
  const app = new Vue({
    el: '#toggle_app',
    data: {
      active: false
    }
  })
})

document.addEventListener('turbolinks:load', () => {
  const app = new Vue({
    el: '#toggle_panel_app',
    data: {
      show: true
    }
  })
})

document.addEventListener('turbolinks:load', () => {
  const app = new Vue({
    el: '#toggle_with_v_show',
    data: {
      tacos: ''
    }
  })
})


document.addEventListener('turbolinks:load', () => {
  const app = new Vue({
    el: '#form_app',
    data() {
      return {
        name: '',
        email: '',
        caps: '',
        response: '',
        activeClass: 'active'
      }
    },
    methods: {
      submitForm() {
        axios.post('//jsonplaceholder.typicode.com/posts', {
          name: this.name,
          email: this.email,
          caps: this.caps
        }).then(response => {
          this.response = JSON.stringify(response, null, 2)
        })
      }
    }
  })
})
