export default function (_this) {
  return {
		getInitial() {
      return _this.$call({
        url: '/management/home/initial',
        method: 'get',
        toast: false
      })
    },
    getHome(loading = true) {
      return _this.$call({
        url: '/management/home',
        method: 'get',
        loading: loading,
      })
    },
  }
}
