import Vue from 'vue'

//mixin
import mixin from './mixin'
if (!Vue.__utils__) {
  Vue.__utils__ = true
  Vue.mixin({
    mixins: [mixin],
  })
}

//flickity
import Flickity from 'vue-flickity'
Vue.component('VueFlickity', Flickity)

//datepicker
import VuePersianDatetimePicker from 'vue-persian-datetime-picker'
Vue.use(VuePersianDatetimePicker, {
  name: 'date-picker',
  props: {
    color: '#FFD449',
    autoSubmit: true,
  },
})

//treeselect
import Treeselect from '@riophae/vue-treeselect'
import '@riophae/vue-treeselect/dist/vue-treeselect.css'
Vue.component('treeselect', Treeselect)

Vue.use(require('vue-jalali-moment'))
