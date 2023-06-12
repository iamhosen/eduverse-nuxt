export const state = () => ({
  isLoading: false,
  planDialog: false,
  hasUpdate: false,
})
export const mutations = {
  setLoading(state, loading) {
    state.isLoading = loading
  },
  setPlanDialog(state, value) {
    state.planDialog = value
  },
	setUpdate(state, value) {
    state.hasUpdate = value
  },
}
