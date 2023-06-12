export default {
  created() {
    if (typeof this.value !== 'undefined') this.model = this.value
  },
  watch: {
    model: {
      deep: true,
      handler() {
        this.$emit('input', this.model)
      },
    },
    value: {
      deep: true,
      handler() {
        this.model = this.value
      },
    },
  },
}
