// Load Services
const loadServices = () => {
  const services = require.context('~/services', true, /\.js$/i)
  const moduleServices = {}
  services.keys().forEach((el) => {
    const key = el.split('/')[1].split('.')[0]
    moduleServices[key] = services(el).default
  })
  return moduleServices
}

export default function ({ app }, inject) {
  // dynamic service generation
  const Services = loadServices()
  for (const key in Services) {
    const initMethod = Services[key]
    inject(key + 'Service', initMethod(app))
  }
}
