import Vue from 'vue'

export default {
  data() {
    return {}
  },
  filters: {
    currency(number) {
      return (number | 0).toLocaleString('en-us')
    },

    momentTimeago(date) {
      const timeNow = new Date().getTime()
      date = new Date(date)
      const dateNow = date.getTime()
      const dif = (timeNow - dateNow) / (1000 * 60 * 60 * 24)
      if (dif > 1) {
        return Vue.moment(date).format('jMMM jDD')
      } else {
        return Vue.moment(date).fromNow()
      }
    },

    momentDateTime(date) {
      return Vue.moment(date).format('hh:mm - jYYYY/jMM/jDD')
    },

    momentDate(date) {
      return Vue.moment(date).format('jYYYY/jMM/jDD')
    },

    momentTime(date) {
      const time = Vue.moment
        .duration(Vue.moment(date).diff(new Date()))
        .locale('fa')
        .humanize()

      return time
    },
  },


  computed: {
    user() {
      return this.$auth.user.user
    },
    isAdmin() {
      return this.$auth.loggedIn && this.$auth.user.user.is_admin
    },
  },


  methods: {
    currency(number , unit = '') {
      if (isNaN(number)) return number
      number = Number(number)
      return number.toLocaleString('en-US') + unit
    },

    getFormData(data, method) {
      const form = new FormData()
      for (const key in data) {
        if (data[key] === null || data[key] === undefined) {
          delete data[key]
        } else form.append(key, data[key])
      }
      if (method) form.append('_method', method)
      return form
    },

    momentTime(date) {
      const time = Vue.moment(date).fromNow(true)
      return Number(time.split(' ')[0])
    },
  },
}
