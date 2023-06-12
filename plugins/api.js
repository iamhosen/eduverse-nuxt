export default function ({ redirect, app, error, $auth }, inject) {
  // inject methods to vue prototype
  const application = app

  if ($auth.error) {
    application.$toast.error($auth.error.response.data.message)
  }

  // api call method
  const call = (arg) => {
    // arguments
    const method = arg.method || 'get'
    const url = arg.url
    const data = arg.data || {}
    const msg = arg.msg
    const options = arg.options || {}
    const loading = arg.loading
    const raise = arg.raise
    let toast = arg.toast

    const params = {
      Version: Date.now(),
    }

    if (typeof toast !== 'boolean') {
      toast = true
    }

    if (loading) {
      application.store.commit('setLoading', true)
    }

    return new Promise((resolve, reject) => {
      // check connectivity
      application
        .$axios({
          method,
          url,
          data: method !== 'get' ? data : {},
          params: method === 'get' ? { ...params, ...data } : params,
          // headers: options && options.headers ? options.headers : {},
          ...options,
        })
        .then((res) => {
          resolve(res.data.entity || res.data)
          if (msg) application.$toast.success(msg)
        })
        .catch((err) => {
          let message = 'Error while connecting to server'
          let status = 500

          if (err.response) {
            if (err.response.data && err.response.data.errors) {
              err.errors = err.response.data.errors
            }

            if (err.response.data && err.response.data.message) {
              message = err.response.data.message
            } else if (err.response.data && err.response.data.error) {
              message = err.response.data.error
            } else if (err.response.message) {
              message = err.response.message
            }
          }

          if (err.response && err.response.status) {
            status = err.response.status
          }
          // set message and status
          err.text = message
          err.status = status

          // check auth
          if (status === 403) {
            $auth.fetchUser().catch(() => {
              $auth.logout()
            })
          }

          // raise error
          if (raise) {
            error({ statusCode: err.status, message: err.text })
          }

          // toast error
          if (toast) {
            application.$toast.error(err.text)
          }
          reject(err)
        })
        .finally((res) => {
          if (loading) {
            application.store.commit('setLoading', false)
          }
        })
    })
  }

  // inject
  inject('call', call)
}
